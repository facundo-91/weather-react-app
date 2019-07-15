import React from 'react';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';


class App extends React.Component {
	state = {
		city: undefined,
		country: undefined,
		temperature: undefined,
		description: undefined,
		icon: undefined,
		pressure: undefined,
		humidity: undefined,
		error: undefined,
		show: false
	}
	
	getWeather = async (e) => {
		e.preventDefault();
		const cityName = e.target.elements.cityName.value;
		const API_KEY = "eae61422270d89bd7c448c2fed80ff59";
		
		try {
			const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`);
			const data = await api_call.json();
			this.setState({
				city: data.name,
				country: data.sys.country,
				temperature: data.main.temp,
				description: data.weather[0].main,
				icon: `https://openweathermap.org/img/w/${data.weather[0].icon}.png`,
				pressure: data.main.pressure,
				humidity: data.main.humidity,
				error: "",
				show: true
			});
		} catch(err) {
				this.setState({
					city: undefined,
					country: undefined,
					temperature: undefined,
					description: undefined,
					icon: undefined,
					pressure: undefined,
					humidity: undefined,
					error: "Please enter a valid city name",
					show: false
				});
			}
	}
	
	render() {
		return (
			<div>
				<Titles />
				<Form getWeather={this.getWeather}/>
				<Weather 
					city={this.state.city}
					country={this.state.country}
					temperature={this.state.temperature}
					description={this.state.description}
					icon={this.state.icon}
					pressure={this.state.pressure}
					humidity={this.state.humidity}
					error={this.state.error}
					show={this.state.show}
				/>
			</div>
		);
	}
}

export default App;
