//Layouts
import { DefaultLayout, HeaderOnly } from '~/components/Layouts';

//Pages
import Home from '~/pages/Home';
import Products from '~/pages/Products';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
//Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/products', component: Products, layout: HeaderOnly },
    { path: '/upload', component: Upload, layout: null },
    { path: '/search', component: Search },
];
//Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
