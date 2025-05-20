
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/services"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5034, hash: '51eeed5a200b66c5f463cf7190d8e88e04ee52fb767324f53cf71d5c5775727a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1006, hash: '06587568cd974da11152079ed7c81b0948ea0bee11356c682c0bcb70c3fbaf29', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 8675, hash: 'f56c55a3c738dcc5aa215bebccecb0ffe8450c8bde1cc854e73ef5f25e9e7559', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 8681, hash: '85950900b5470cd4cd181a3df813a22fa2facb573fbd6bb985b497d593b5c811', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 8693, hash: '754778ce7d70e29f1423002aed4997649eaf7e621cf96b25caeecf5c3cbd92e8', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 8690, hash: '4fb194dd72c4b1e1d5d0a57a866ce3ea3d0dff6ab02cdd24d9c61a25f91d7482', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 8687, hash: '1cc7469e0ef98b129e87d48b30022c1739927c36e96eef034b6084f1e1f237a0', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-BVJQD57C.css': {size: 230873, hash: 'YU+im7r2LDs', text: () => import('./assets-chunks/styles-BVJQD57C_css.mjs').then(m => m.default)}
  },
};
