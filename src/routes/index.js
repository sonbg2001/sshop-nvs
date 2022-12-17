//Layouts
import AdminLayout from '~/components/Layouts/AdminLayout';
//Paths
import configPaths from './configPaths';

//Pages
import Home from '~/pages/Home';
import Products from '~/pages/Products';
import Upload from '~/pages/Upload';
import Login from '~/pages/Login';
import Brand from '~/pages/Brand';
import ProductDetail from '~/pages/Product-detail';
import Cart from '~/pages/Cart';
import Register from '~/pages/Register';
import Contact from '~/pages/Contact';
import Category from '~/pages/Category';
import Account from '~/pages/Account';
//Admin page
import Admin from '~/pages/admin/Admin';
import AdminProduct from '~/pages/admin/AdminProduct';
import AdminCustomer from '~/pages/admin/AdminCustomer';
import AdminOrder from '~/pages/admin/AdminOrder';
//Public Routes
const publicRoutes = [
    { path: configPaths.home, component: Home },
    { path: configPaths.products, component: Products },
    { path: configPaths.upload, component: Upload, layout: null },
    { path: configPaths.login, component: Login },
    { path: configPaths.brand, component: Brand },
    { path: configPaths.productDetail, component: ProductDetail },
    { path: configPaths.cart, component: Cart },
    { path: configPaths.register, component: Register },
    { path: configPaths.contact, component: Contact },
    { path: configPaths.category, component: Category },
    { path: configPaths.account, component: Account },
];
//Private Routes
const privateRoutes = [
    { path: configPaths.adminProducts, component: AdminProduct, layout: AdminLayout },
    { path: configPaths.adminCustomer, component: AdminCustomer, layout: AdminLayout },
    { path: configPaths.adminOrder, component: AdminOrder, layout: AdminLayout },
    { path: configPaths.adminHome, component: Admin, layout: AdminLayout },
];

export { publicRoutes, privateRoutes };
