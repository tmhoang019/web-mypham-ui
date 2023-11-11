import routesConfig from '~/config/routes'
import Home from '../pages/Home'
import ListProduct from '../pages/ListProduct'
import DetailProduct from '../pages/DetailProduct'
import About from '../pages/About'

// routes can be used in all cases
const publicRoutes = [
    {path: routesConfig.home, component: Home},
    {path: routesConfig.cate, component: ListProduct},
    {path: routesConfig.detail, component: DetailProduct},
    {path: routesConfig.search, component: ListProduct},
    {path: routesConfig.about, component: About},
    {path: routesConfig.donhang, component: About},
    {path: routesConfig.giohang, component: About}
]

// routes only use after login
const privateRoutes = [

]

export { publicRoutes, privateRoutes }