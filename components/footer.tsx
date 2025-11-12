export default function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-background/50 backdrop-blur-sm py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Nova
            </span>
          </div>
          <p className="text-sm text-foreground/60">
            Lightning-fast webhook notifications for the modern web.
          </p>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary/10 flex flex-col sm:flex-row justify-between items-center text-sm text-foreground/60">
          <p>&copy; 2025 Nova Notifier. All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Discord
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
