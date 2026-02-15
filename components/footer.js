// Shared footer component — used across all wireframe pages
// Include with: <script src="components/footer.js"></script>
// Then call: <div id="site-footer"></div> and the script auto-injects

document.addEventListener('DOMContentLoaded', () => {
  const footerEl = document.getElementById('site-footer');
  if (!footerEl) return;

  footerEl.outerHTML = `
  <footer style="background-color: #121212; padding: 80px 0 0; margin-top: 32px;">
    <div class="max-w-[1280px] mx-auto px-16">

      <!-- Link columns -->
      <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; gap: 32px; margin-bottom: 64px;">

        <!-- Product -->
        <div>
          <p class="font-sans text-[13px] font-semibold text-white tracking-wide mb-5">Product</p>
          <ul style="list-style: none; margin: 0; padding: 0;" class="space-y-3">
            <li><a href="#" class="font-sans text-[13px] text-wire-400 hover:text-wire-300" style="text-decoration: none;">Creator platform</a></li>
            <li><a href="#" class="font-sans text-[13px] text-wire-400 hover:text-wire-300" style="text-decoration: none;">Theme marketplace</a></li>
            <li><a href="#" class="font-sans text-[13px] text-wire-400 hover:text-wire-300" style="text-decoration: none;">Integrations</a></li>
            <li><a href="#" class="font-sans text-[13px] text-wire-400 hover:text-wire-300" style="text-decoration: none;">Experts</a></li>
            <li><a href="#" class="font-sans text-[13px] text-wire-400 hover:text-wire-300" style="text-decoration: none;">Ghost for news</a></li>
          </ul>
        </div>

        <!-- Resources -->
        <div>
          <p class="font-sans text-[13px] font-semibold text-white tracking-wide mb-5">Resources</p>
          <ul style="list-style: none; margin: 0; padding: 0;" class="space-y-3">
            <li><a href="#" class="font-sans text-[13px] text-wire-400 hover:text-wire-300" style="text-decoration: none;">Ghost tutorials</a></li>
            <li><a href="#" class="font-sans text-[13px] text-wire-400 hover:text-wire-300" style="text-decoration: none;">Resources</a></li>
            <li><a href="#" class="font-sans text-[13px] text-wire-400 hover:text-wire-300" style="text-decoration: none;">Node.js CMS guide</a></li>
          </ul>
        </div>

        <!-- Developers -->
        <div>
          <p class="font-sans text-[13px] font-semibold text-white tracking-wide mb-5">Developers</p>
          <ul style="list-style: none; margin: 0; padding: 0;" class="space-y-3">
            <li><a href="#" class="font-sans text-[13px] text-wire-400 hover:text-wire-300" style="text-decoration: none;">How to install Ghost</a></li>
            <li><a href="#" class="font-sans text-[13px] text-wire-400 hover:text-wire-300" style="text-decoration: none;">Core concepts</a></li>
            <li><a href="#" class="font-sans text-[13px] text-wire-400 hover:text-wire-300" style="text-decoration: none;">Ghost hosting</a></li>
            <li><a href="#" class="font-sans text-[13px] text-wire-400 hover:text-wire-300" style="text-decoration: none;">API documentation</a></li>
            <li><a href="#" class="font-sans text-[13px] text-wire-400 hover:text-wire-300" style="text-decoration: none;">Security overview</a></li>
            <li><a href="#" class="font-sans text-[13px] text-wire-400 hover:text-wire-300" style="text-decoration: none;">Source code</a></li>
          </ul>
        </div>

        <!-- Comparisons -->
        <div>
          <p class="font-sans text-[13px] font-semibold text-white tracking-wide mb-5">Comparisons</p>
          <ul style="list-style: none; margin: 0; padding: 0;" class="space-y-3">
            <li><a href="#" class="font-sans text-[13px] text-wire-400 hover:text-wire-300" style="text-decoration: none;">Ghost vs Substack</a></li>
            <li><a href="#" class="font-sans text-[13px] text-wire-400 hover:text-wire-300" style="text-decoration: none;">Ghost vs Beehiiv</a></li>
            <li><a href="#" class="font-sans text-[13px] text-wire-400 hover:text-wire-300" style="text-decoration: none;">Ghost vs WordPress</a></li>
            <li><a href="#" class="font-sans text-[13px] text-wire-400 hover:text-wire-300" style="text-decoration: none;">Ghost vs Medium</a></li>
            <li><a href="#" class="font-sans text-[13px] text-wire-400 hover:text-wire-300" style="text-decoration: none;">Ghost vs Patreon</a></li>
            <li><a href="#" class="font-sans text-[13px] text-wire-400 hover:text-wire-300" style="text-decoration: none;">Ghost alternatives →</a></li>
          </ul>
        </div>

        <!-- Support -->
        <div>
          <p class="font-sans text-[13px] font-semibold text-white tracking-wide mb-5">Support</p>
          <ul style="list-style: none; margin: 0; padding: 0;" class="space-y-3">
            <li><a href="#" class="font-sans text-[13px] text-wire-400 hover:text-wire-300" style="text-decoration: none;">Help center</a></li>
            <li><a href="#" class="font-sans text-[13px] text-wire-400 hover:text-wire-300" style="text-decoration: none;">Community forum</a></li>
            <li><span class="font-sans text-[13px] text-wire-400">Status</span> <span class="font-sans text-[11px] font-medium px-2 py-0.5 rounded-full" style="background-color: #22c55e; color: white;">99.9%</span></li>
          </ul>
        </div>

        <!-- About -->
        <div>
          <p class="font-sans text-[13px] font-semibold text-white tracking-wide mb-5">About</p>
          <ul style="list-style: none; margin: 0; padding: 0;" class="space-y-4">
            <li><a href="#" class="font-sans text-[16px] font-semibold text-white hover:text-wire-300" style="text-decoration: none;">Manifesto</a></li>
            <li><a href="#" class="font-sans text-[16px] font-semibold text-white hover:text-wire-300" style="text-decoration: none;">Explore</a></li>
            <li><a href="#" class="font-sans text-[16px] font-semibold text-white hover:text-wire-300" style="text-decoration: none;">Careers</a></li>
          </ul>
        </div>

      </div>

      <!-- Badge bar + legal -->
      <div class="border-t border-wire-800 py-8 flex justify-between items-center">
        <div class="flex items-center gap-6">
          <span class="font-sans text-[11px] text-wire-500 uppercase tracking-wider">Carbon Neutral</span>
          <span class="font-sans text-[11px] text-wire-500 uppercase tracking-wider">Non-Profit Foundation</span>
          <span class="font-sans text-[11px] text-wire-500 uppercase tracking-wider">Open Source</span>
        </div>
        <div class="flex items-center gap-6">
          <a href="#" class="font-sans text-[12px] text-wire-500 hover:text-wire-400" style="text-decoration: none;">Terms</a>
          <a href="#" class="font-sans text-[12px] text-wire-500 hover:text-wire-400" style="text-decoration: none;">Privacy</a>
          <a href="#" class="font-sans text-[12px] text-wire-500 hover:text-wire-400" style="text-decoration: none;">Contact</a>
          <span class="font-sans text-[12px] text-wire-600">Ghost Foundation © 2026</span>
        </div>
      </div>

      <!-- Large Ghost wordmark -->
      <div style="text-align: center; padding: 40px 0 60px; overflow: hidden;">
        <span style="font-family: Georgia, 'Times New Roman', serif; font-size: 240px; line-height: 0.8; letter-spacing: -0.04em; color: #1a1a1a; user-select: none;">Ghost</span>
      </div>

    </div>
  </footer>
  `;
});
