
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolioweb/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolioweb"
  },
  {
    "renderMode": 2,
    "route": "/portfolioweb/about"
  },
  {
    "renderMode": 2,
    "route": "/portfolioweb/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/portfolioweb/services"
  },
  {
    "renderMode": 2,
    "route": "/portfolioweb/contact"
  },
  {
    "renderMode": 2,
    "route": "/portfolioweb/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5047, hash: '1092c8d94db8633f1a830bd52b5a2ef285d1f8949fbbd5a3965be1442ccd521f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1019, hash: '96eec741df91fe6280a45b92baa0ff0580bda3fab6650d987f6091a30d4628bc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 8899, hash: '44965154cc88a2dd4e7c011f17c07d4dca55cc21810b711aafd18fb3dcc3b29b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 8905, hash: '7e4242e394a76eedd024fc841197713bcb2ec8abd0cf1b57ea5ff1295158ca4c', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 8917, hash: '6fee333b723ee144ba9b0a1d6cf66252402381b83578262d54b2f28bb6a18771', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 8914, hash: '8786755e53a3b4c087aa4edecc97f001757df3ca3aa06460f353a4bccff2047d', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 8911, hash: 'c04c7d952a7ae5bb0693bb4addb9d1a44c7fc83ae963c79576fdec86814edc3d', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-BVJQD57C.css': {size: 230873, hash: 'YU+im7r2LDs', text: () => import('./assets-chunks/styles-BVJQD57C_css.mjs').then(m => m.default)}
  },
};
