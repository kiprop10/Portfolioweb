
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
    'index.csr.html': {size: 17594, hash: '18f470f6512ddd38f7e5f541854a689be535bff0f46e69e753bf55e9f27cc42e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 13566, hash: '82bb8166555a6cfcc5079fe774c4cd6558f392df971086ae6b3573a0f0e24473', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 33442, hash: '466ffb675bfb5d49a5fb779855026fe3e8fffe14526f38c4b448cf7273534e12', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 28709, hash: '0f986770abeb12d7c9d811169ae3bfe86c103ec2f0d3ab54e3b070d4ff33ddb2', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 28721, hash: '252ba3235beb11c0f6e90d583900a569635ccf5d7dfd3e7be686c97f71bb3578', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 28718, hash: 'cda37b1b6e610dda34d580ababe85dbfc0f8e16758ca04e96b78b2415a365839', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 28715, hash: '552791193702188402731a11f36ae055a061f186a75d5f0424b3bda908157053', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-BVJQD57C.css': {size: 230873, hash: 'YU+im7r2LDs', text: () => import('./assets-chunks/styles-BVJQD57C_css.mjs').then(m => m.default)}
  },
};
