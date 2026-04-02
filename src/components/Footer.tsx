import { useState } from 'react';
import { Settings } from 'lucide-react';
import AdminLoginModal from './AdminLoginModal';
import AdminPanel from './AdminPanel';

const Footer = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <>
      <footer className="bg-background py-12 border-t border-foreground/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-baseline gap-2">
            <span className="font-montserrat font-bold text-lg text-foreground">VIKING</span>
            <span className="font-montserrat font-medium text-[10px] tracking-[0.2em] text-primary">TRADING BOTS</span>
          </div>
          <div className="flex items-center gap-4">
            <p className="font-opensans text-xs text-muted">© 2026 · All rights reserved</p>
            <button
              onClick={() => setShowLogin(true)}
              className="flex items-center gap-1 text-muted/40 hover:text-muted/70 transition-colors text-[10px] font-montserrat"
              title="Admin"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Admin</span>
            </button>
          </div>
        </div>
      </footer>
      {showLogin && (
        <AdminLoginModal
          onClose={() => setShowLogin(false)}
          onSuccess={() => { setShowLogin(false); setShowAdmin(true); }}
        />
      )}
      {showAdmin && <AdminPanel onClose={() => setShowAdmin(false)} />}
    </>
  );
};

export default Footer;
