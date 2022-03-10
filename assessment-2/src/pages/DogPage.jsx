import axios from 'axios';
import { useState, useEffect } from 'react';
const DogPage = () => {
	const [ currentDog, setCurrentDog ] = useState([]);

	const fetchDogImage = async () => {
		try {
			const response = await axios.get(`https://dog.ceo/api/breeds/image/random`);
			setCurrentDog(response.data.message);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchDogImage();
	}, []);
	return (
		<div className="dog-page">
			<h1>DogPage</h1>
			<button onClick={fetchDogImage}>Get Random Dog</button>
			<img className="fetched-image" src={currentDog} alt="Random Dog Image" />
		</div>
	);
};

export default DogPage;
