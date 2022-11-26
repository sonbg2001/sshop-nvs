import Header from '../admin/components/Header';
import Footer from '../admin/components/Footer';
import './AdminStyles.scss';
function AdminLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default AdminLayout;
