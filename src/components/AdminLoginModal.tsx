import { useState } from 'react';
import { X, Lock } from 'lucide-react';

interface AdminLoginModalProps {
  onClose: () => void;
  onSuccess: () => void;
}

const AdminLoginModal = ({ onClose, onSuccess }: AdminLoginModalProps) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (password === 'Viking123*') {
      onSuccess();
    } else {
      setError(true);
    }
  };

  return (
    <div className="fixed inset-0 z-[90] bg-black/60 flex items-center justify-center p-4">
      <div className="bg-card border border-foreground/10 rounded-xl w-full max-w-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-primary" />
            <h3 className="font-montserrat font-bold text-foreground text-sm">Admin Login</h3>
          </div>
          <button onClick={onClose} className="text-muted hover:text-foreground"><X className="w-4 h-4" /></button>
        </div>
        <div className="flex gap-2">
          <input
            type="password"
            value={password}
            onChange={e => { setPassword(e.target.value); setError(false); }}
            onKeyDown={e => e.key === 'Enter' && handleSubmit()}
            placeholder="Senha de administrador"
            className="flex-1 bg-background border border-foreground/10 rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-primary"
            autoFocus
          />
          <button
            onClick={handleSubmit}
            className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-montserrat font-bold text-sm hover:brightness-110 transition-all"
          >
            Entrar
          </button>
        </div>
        {error && <p className="text-destructive text-xs mt-2 font-montserrat">Senha incorreta.</p>}
      </div>
    </div>
  );
};

export default AdminLoginModal;
