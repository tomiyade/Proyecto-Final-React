import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Carrito from '../Pages/Carrito';
import Home from '../Pages/Home';
import Titulares from '../Pages/Titulares';
import Layout from './Layout';

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/titulares/:id" element={<Titulares />} />
                <Route path='/item/:id' element={<Titulares />} />
                <Route path="/carrito/" element={<Carrito />} />
                <Route path="*" element={<div>404</div>} />
            </Route>
        </Routes>
    </BrowserRouter>
);

export default Router;