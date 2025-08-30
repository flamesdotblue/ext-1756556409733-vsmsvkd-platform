import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="relative mt-16 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
        <div className="flex items-center gap-3">
          <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-purple-500 via-fuchsia-500 to-orange-400" />
          <span>© {new Date().getFullYear()} OrbiOps, Inc.</span>
        </div>
        <div className="flex items-center gap-6">
          <a className="hover:text-white transition" href="#">Privacy</a>
          <a className="hover:text-white transition" href="#">Security</a>
          <a className="hover:text-white transition" href="#">Status</a>
        </div>
      </div>
    </footer>
  );
}
