import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { publicRoutes } from './routes';
import {BasisLayout} from './layouts';

function App() {
  return (
      
    <Router>
        <div className='App'>
          <Routes>
            {publicRoutes.map((route, index)=>{
              const Page = route.component;
              return <Route 
                        key={index} 
                        path = {route.path} 
                        element={<BasisLayout><Page></Page></BasisLayout>}
                      ></Route>
            })}
          </Routes>
        </div>
    </Router>
      
  );
}

export default App;
