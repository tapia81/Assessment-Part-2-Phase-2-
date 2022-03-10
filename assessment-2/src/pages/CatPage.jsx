import axios from 'axios';
import { useState, useEffect } from 'react';

const CatPage = () => {
	const [ currentCat, setCurrentCat ] = useState([]);

	const fetchCatImage = async () => {
		try {
			const response = await axios.get(`https://api.thecatapi.com/v1/images/search`);
			setCurrentCat(response.data[0].url);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchCatImage();
	}, []);
	return (
		<div className="cat-page">
			<h1>CatPage</h1>
			<button onClick={fetchCatImage}>Get Random Cat</button>
			<img className="fetched-image" src={currentCat} alt="Random Cat Image" />
		</div>
	);
};

export default CatPage;
