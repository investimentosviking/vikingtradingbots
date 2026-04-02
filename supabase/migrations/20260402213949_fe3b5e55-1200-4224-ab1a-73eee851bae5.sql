CREATE TYPE public.client_status AS ENUM ('lead', 'trial', 'active', 'inactive', 'expired');

CREATE TABLE public.clients (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT,
  whatsapp TEXT,
  origin TEXT,
  robot TEXT,
  plan TEXT,
  expiry_date DATE,
  status client_status NOT NULL DEFAULT 'lead',
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.clients ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow all read access to clients" ON public.clients FOR SELECT USING (true);
CREATE POLICY "Allow all insert access to clients" ON public.clients FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow all update access to clients" ON public.clients FOR UPDATE USING (true);
CREATE POLICY "Allow all delete access to clients" ON public.clients FOR DELETE USING (true);

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_clients_updated_at
  BEFORE UPDATE ON public.clients
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();