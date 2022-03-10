import './App.css';
import Navbar from './components/Navbar';
import Container from './Container';
import Footer from './components/Footer';

function App() {
	return (
		<div className="App">
			<header>
				<Navbar />
			</header>
			<div className="container ">
				<main>
					<Container />
				</main>
				<div className="background" />
			</div>
			<Footer />
		</div>
	);
}

export default App;
