import classNames from "classnames/bind";
import styles from '../../components/GlobalStyles/GlobalStyles.module.scss'
import Header from '../components/Header';
import Footer from '../components/Footer';

function BasisLayout({children}) {
    const cxGlobal = classNames.bind(styles)
    return ( 
        <div>
            <Header></Header>
            <div className={cxGlobal('wrapper')}>
                {children}
            </div>
            <Footer></Footer>
        </div>
     );
}

export default BasisLayout;