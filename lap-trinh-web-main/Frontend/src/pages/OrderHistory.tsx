import { Link } from 'react-router-dom';

export default function OrderSuccess() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex items-center justify-center p-4">
      <div className="relative flex h-auto max-w-md w-full flex-col bg-white dark:bg-slate-900 overflow-hidden rounded-xl shadow-2xl">
        <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">smartphone</span>
            <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight">Galaxy Store</h2>
          </Link>
          <Link to="/" className="flex items-center justify-center rounded-full h-8 w-8 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            <span className="material-symbols-outlined text-sm">close</span>
          </Link>
        </header>
        <div className="flex flex-col items-center px-6 pt-10 pb-8 text-center">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-primary text-white shadow-[0_0_40px_rgba(15,44,189,0.3)]">
              <span className="material-symbols-outlined text-5xl">check_circle</span>
            </div>
          </div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">Success!</h1>
          <p className="text-slate-600 dark:text-slate-400 text-base max-w-[280px]">
            Your Galaxy S24 Ultra order has been confirmed. We're getting it ready for launch.
          </p>
        </div>
        <div className="px-6 mb-8">
          <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-xl p-4 flex items-center gap-4">
            <div className="h-16 w-16 rounded-lg bg-cover bg-center shrink-0 border border-slate-200 dark:border-slate-700" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBJvnfAH8kcXDpgNRgnm_iUB9nNuBI-OZAesKwesX3g8BUCdSPgIzgTwOtJrhZ0SI4dknDdtM9z8Fn73FlUGN5prM5_H00JMFVQ10gaXPtvrFLV1bStXa3aFip8i4moy4hylxQ65Hxkyz4WSzapmk5T4Qv932v0eAy25i3Y-gcsvZtXl15O0Y5hRjiNskq4GOIqBopHR51MLwhuPK-S0eI4KO9Txg76ASH_CNxVjk4EUQsKnR8FwVSPL4O3FXpTSGrWg5OeNimoHL8')" }}>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-primary uppercase tracking-wider">Order #GX-99281</span>
              <span className="text-sm font-bold text-slate-900 dark:text-white">Galaxy S24 Ultra, Titanium Violet</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">Arriving by Oct 24, 2023</span>
            </div>
          </div>
        </div>
        <div className="px-6 pb-10 flex flex-col gap-3">
          <Link to="/order-history" className="w-full h-14 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
            <span className="material-symbols-outlined">package_2</span>
            Track Order
          </Link>
          <Link to="/" className="w-full h-14 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center justify-center">
            Back to Store
          </Link>
        </div>
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800 flex justify-center items-center gap-2 text-xs text-slate-400">
          <span className="material-symbols-outlined text-sm">verified_user</span>
          <span>Secure Checkout by Galaxy Store</span>
        </div>
      </div>
    </div>
  );
}
