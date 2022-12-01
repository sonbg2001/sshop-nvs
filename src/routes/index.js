//Layouts
// import {  HeaderOnly } from '~/components/Layouts';
import AdminLayout from '~/components/Layouts/AdminLayout';
//Pages
import Home from '~/pages/Home';
import Products from '~/pages/Products';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Login from '~/pages/Login';
import Brand from '~/pages/Brand';
import ProductDetail from '~/pages/Product-detail';
import Cart from '~/pages/Cart';
import Register from '~/pages/Register';
import Contact from '~/pages/Contact';
import Category from '~/pages/Category';
//Amin page
import Admin from '~/pages/admin/Admin';
import AdminProduct from '~/pages/admin/AdminProduct';
import AdminCustomer from '~/pages/admin/AdminCustomer';
import AdminOrder from '~/pages/admin/AdminOrder';
//Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/products', component: Products },
    { path: '/upload', component: Upload, layout: null },
    { path: '/search', component: Search },
    { path: '/login', component: Login },
    { path: '/brand', component: Brand },
    { path: '/product-detail/:id', component: ProductDetail },
    { path: '/cart', component: Cart },
    { path: '/register', component: Register },
    { path: '/contact', component: Contact },
    { path: '/category', component: Category },
];
//Private Routes
const privateRoutes = [
    { path: '/admin/products', component: AdminProduct, layout: AdminLayout },
    { path: '/admin/customer', component: AdminCustomer, layout: AdminLayout },
    { path: '/admin/order', component: AdminOrder, layout: AdminLayout },
    { path: '/admin', component: Admin, layout: AdminLayout },
];

export { publicRoutes, privateRoutes };
