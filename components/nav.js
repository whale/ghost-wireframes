// Shared navigation component — used across all wireframe pages
// Include with: <script src="components/nav.js"></script>
// Then place: <div id="site-nav"></div> and the script auto-injects

document.addEventListener('DOMContentLoaded', () => {
  const navEl = document.getElementById('site-nav');
  if (!navEl) return;

  navEl.outerHTML = `
  <nav class="max-w-[1280px] mx-auto px-8 py-6 flex items-center justify-between">

    <!-- Left: Logo -->
    <a href="#" class="flex items-center gap-2.5">
      <div class="w-8 h-8 bg-wire-900 rounded-full"></div>
      <span class="font-sans text-[17px] font-semibold text-wire-900">Ghost</span>
    </a>

    <!-- Center: Nav links -->
    <div class="flex items-center gap-8">

      <!-- Product dropdown -->
      <div class="relative" id="nav-product">
        <button onclick="toggleNav('nav-product')" class="font-sans text-[14px] font-medium text-wire-600 flex items-center gap-1">
          Product
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" class="mt-px"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <div class="nav-dropdown hidden absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white rounded-xl border border-wire-200 shadow-sm py-3 min-w-[200px] z-50">
          <a href="#" class="block px-5 py-2 font-sans text-[14px] text-wire-700 hover:text-wire-900">Creators</a>
          <a href="#" class="block px-5 py-2 font-sans text-[14px] text-wire-700 hover:text-wire-900">Publishers</a>
          <a href="#" class="block px-5 py-2 font-sans text-[14px] text-wire-700 hover:text-wire-900">Businesses</a>
        </div>
      </div>

      <!-- Resources dropdown -->
      <div class="relative" id="nav-resources">
        <button onclick="toggleNav('nav-resources')" class="font-sans text-[14px] font-medium text-wire-600 flex items-center gap-1">
          Resources
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" class="mt-px"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <div class="nav-dropdown hidden absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white rounded-xl border border-wire-200 shadow-sm py-3 min-w-[200px] z-50">
          <a href="#" class="block px-5 py-2 font-sans text-[14px] text-wire-700 hover:text-wire-900">Tutorials</a>
          <a href="#" class="block px-5 py-2 font-sans text-[14px] text-wire-700 hover:text-wire-900">Resources</a>
          <a href="#" class="block px-5 py-2 font-sans text-[14px] text-wire-700 hover:text-wire-900">Integrations</a>
          <a href="#" class="block px-5 py-2 font-sans text-[14px] text-wire-700 hover:text-wire-900">Experts</a>
          <a href="#" class="block px-5 py-2 font-sans text-[14px] text-wire-700 hover:text-wire-900">Themes</a>
        </div>
      </div>

      <a href="#" class="font-sans text-[14px] font-medium text-wire-600">Pricing</a>
      <a href="#" class="font-sans text-[14px] font-medium text-wire-600">Explore</a>

    </div>

    <!-- Right: Login + CTA -->
    <div class="flex items-center gap-5">
      <a href="#" class="font-sans text-[14px] font-medium text-wire-600">Login</a>
      <a href="#" class="font-sans text-[14px] font-semibold text-wire-900 border-2 border-wire-900 px-5 py-2 rounded-lg">Start free</a>
    </div>

  </nav>
  `;

  // Nav dropdown toggle
  window.toggleNav = function(id) {
    const dropdown = document.getElementById(id).querySelector('.nav-dropdown');
    const wasHidden = dropdown.classList.contains('hidden');
    document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.add('hidden'));
    if (wasHidden) dropdown.classList.remove('hidden');
  };
  document.addEventListener('click', (e) => {
    if (!e.target.closest('[id^="nav-"]')) {
      document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.add('hidden'));
    }
  });
});
