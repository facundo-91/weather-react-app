import React from 'react';

const Form = props => (
	<form onSubmit={ props.getWeather }>
		<div>
			<input type="text" name="cityName" placeholder="Enter a city name..." className="search-input" autoFocus/>
		</div>
		<div>
			<button className="search-btn">Get Weather</button>
		</div>
	</form>
);

export default Form;