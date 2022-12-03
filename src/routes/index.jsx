import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Details from '../pages/Details';
import NotFound from '../pages/NotFound';

const Rotas = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
)

export default Rotas;