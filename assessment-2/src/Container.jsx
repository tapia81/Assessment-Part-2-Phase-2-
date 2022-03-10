import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import CatPage from './pages/CatPage';
import DogPage from './pages/DogPage';

const Container = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/cats" element={<CatPage />} />
				<Route path="/dogs" element={<DogPage />} />
			</Routes>
		</div>
	);
};

export default Container;
