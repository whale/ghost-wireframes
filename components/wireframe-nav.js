// Wireframe switcher bar — top black bar linking all wireframe pages
// Include with: <script src="components/wireframe-nav.js"></script>
// Place: <div id="wireframe-nav"></div> at very top of <body>

document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('wireframe-nav');
  if (!el) return;

  // Active wireframe pages (top bar)
  const pages = [
    { label: 'Home', href: 'home.html' },
    { label: 'Product', href: 'product.html' },
    { label: 'About', href: 'about.html' },
  ];

  // Reference wireframes (collapsible drawer at bottom)
  const refs = [
    { label: 'Home v1', href: 'archive/homepage.html' },
    { label: 'Creators', href: 'archive/creators-full.html' },
    { label: 'Basecamp ref', href: 'archive/homepage-alt-basecamp.html' },
    { label: 'Flodesk ref', href: 'archive/homepage-flodesk-framework.html' },
  ];

  const currentFile = window.location.pathname.split('/').pop() || '';

  const makeLink = (p, size, activeColor, inactiveColor) => {
    const isActive = currentFile === p.href;
    const style = (isActive
      ? `color: ${activeColor}; font-weight: 600;`
      : `color: ${inactiveColor};`)
      + ` text-decoration: none; font-size: ${size}; font-family: Inter, 'Helvetica Neue', Arial, sans-serif; white-space: nowrap;`;
    const a = document.createElement('a');
    a.href = p.href;
    a.style.cssText = style;
    a.textContent = p.label;
    return a;
  };

  // Build top nav bar
  const topBar = document.createElement('div');
  topBar.style.cssText = 'background: #121212; padding: 10px 24px; display: flex; align-items: center; gap: 24px; position: sticky; top: 0; z-index: 9999;';
  const label = document.createElement('span');
  label.style.cssText = 'color: #595959; font-size: 11px; font-family: Inter, sans-serif; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; margin-right: 8px;';
  label.textContent = 'Wireframes';
  topBar.appendChild(label);
  pages.forEach(p => topBar.appendChild(makeLink(p, '13px', 'white', '#a6a6a6')));
  el.replaceWith(topBar);

  // Build collapsible references drawer at bottom
  if (refs.length) {
    const drawer = document.createElement('div');
    drawer.style.cssText = 'background: #e5e5e5; font-family: Inter, sans-serif;';

    // Toggle button row (always visible)
    const toggle = document.createElement('button');
    toggle.style.cssText = 'background: none; border: none; cursor: pointer; padding: 8px 24px; display: flex; align-items: center; gap: 6px; width: 100%;';
    const arrow = document.createElement('span');
    arrow.style.cssText = 'font-size: 10px; color: #888; transition: transform 0.2s;';
    arrow.textContent = '\u25B6';
    const toggleLabel = document.createElement('span');
    toggleLabel.style.cssText = 'color: #a6a6a6; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em;';
    toggleLabel.textContent = 'References';
    toggle.appendChild(arrow);
    toggle.appendChild(toggleLabel);

    // Links row (hidden by default)
    const linksRow = document.createElement('div');
    linksRow.style.cssText = 'display: none; padding: 0 24px 10px; display: flex; align-items: center; gap: 20px; padding-left: 44px;';
    linksRow.style.display = 'none';
    refs.forEach(p => linksRow.appendChild(makeLink(p, '12px', '#595959', '#a6a6a6')));

    toggle.addEventListener('click', () => {
      const isOpen = linksRow.style.display !== 'none';
      linksRow.style.display = isOpen ? 'none' : 'flex';
      arrow.style.transform = isOpen ? '' : 'rotate(90deg)';
    });

    drawer.appendChild(toggle);
    drawer.appendChild(linksRow);
    document.body.appendChild(drawer);
  }
});
