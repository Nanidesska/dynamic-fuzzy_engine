export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./prerender_HTV47CRs.mjs').then(n => n.p);

export { page };
