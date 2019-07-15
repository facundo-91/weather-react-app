import React from 'react';

const Weather = props => {
	if (props.show) {
		return (
			<div className="weather-main">
				{
					props.city && props.country && 
					<div className="weather-city">
						{ props.city }, { props.country }
					</div>
				}
				{
					props.temperature &&
					<div className="weather-temp">
						{ Math.round(props.temperature) }ºC
					</div>
				}
				{
					props.description &&
					<div className="weather-description">
						{ props.description }
					</div>}
				{
					props.icon &&
					<div className="weather-icon-holder">
						<img src={ props.icon } alt="" className="weather-icon"/>
					</div>
				}
				{
					props.pressure && 
					<div className="weather-pressure">
						Pressure: { props.pressure } hPa
					</div>
				}
				{
					props.humidity &&
					<div className="weather-humidity">
						Humidity: { props.humidity } %
					</div>
				}
			</div>
		)
	} else {
		return (
			<div>
				{
					props.error &&
					alert(props.error)
				}
			</div> 
		)
	}
}

export default Weather;