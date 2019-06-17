import React from 'react';
import './spinach.css';
import Title from './spinach_title';
import Form from './spinach_form';
import Spinach_display from './spinach_display';


const apiKey = 'f81f81f13d074f9bb153555a10c7d37b';

class Spinach extends React.Component {
  state = {
    temperature0: undefined,
    icon0: undefined,
    description0: undefined,
    date0: undefined,

    temperature1: undefined,
    icon1: undefined,
    description1: undefined,
    date1: undefined,

    temperature2: undefined,
    icon2: undefined,
    description2: undefined,
    date2: undefined,

    temperature3: undefined,
    icon3: undefined,
    description3: undefined,
    date3: undefined,

    temperature4: undefined,
    icon4: undefined,
    description4: undefined,
    date4: undefined,

    temperature5: undefined,
    icon5: undefined,
    description5: undefined,
    date5: undefined,

    temperature6: undefined,
    icon6: undefined,
    description6: undefined,
    date6: undefined,

    temperature7: undefined,
    icon7: undefined,
    description7: undefined,
    date7: undefined,

    temperature8: undefined,
    icon8: undefined,
    description8: undefined,
    date8: undefined,

    temperature9: undefined,
    icon9: undefined,
    description9: undefined,
    date9: undefined,

    temperature10: undefined,
    icon10: undefined,
    description10: undefined,
    date10: undefined,

    temperature11: undefined,
    icon11: undefined,
    description11: undefined,
    date11: undefined,

    temperature12: undefined,
    icon12: undefined,
    description12: undefined,
    date12: undefined,

    temperature13: undefined,
    icon13: undefined,
    description13: undefined,
    date13: undefined,

    temperature14: undefined,
    icon14: undefined,
    description14: undefined,
    date14: undefined,

    temperature15: undefined,
    icon15: undefined,
    description15: undefined,
    date15: undefined,

    city: undefined,
    country: undefined,
    error: undefined
  }
  getClimateData = async (e) => {
    const city = e.target.elements.City.value;
    const country = e.target.elements.Country.value;;
    e.preventDefault();
    const apiCall = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?&city=${city}&country=${country}&key=${apiKey}`);
    const weatherData = await apiCall.json();
    if (city) {
      console.log(weatherData);
      this.setState(
        {
          temperature0: weatherData.data[0].temp,
          temperature1: weatherData.data[1].temp,
          temperature2: weatherData.data[2].temp,
          temperature3: weatherData.data[3].temp,
          temperature4: weatherData.data[4].temp,
          temperature5: weatherData.data[5].temp,
          temperature6: weatherData.data[6].temp,
          temperature7: weatherData.data[7].temp,
          temperature8: weatherData.data[8].temp,
          temperature9: weatherData.data[9].temp,
          temperature10: weatherData.data[10].temp,
          temperature11: weatherData.data[11].temp,
          temperature12: weatherData.data[12].temp,
          temperature13: weatherData.data[13].temp,
          temperature14: weatherData.data[14].temp,
          temperature15: weatherData.data[15].temp,

          icon0: weatherData.data[0].weather.icon,
          icon1: weatherData.data[1].weather.icon,
          icon2: weatherData.data[2].weather.icon,
          icon3: weatherData.data[3].weather.icon,
          icon4: weatherData.data[4].weather.icon,
          icon5: weatherData.data[5].weather.icon,
          icon6: weatherData.data[6].weather.icon,
          icon7: weatherData.data[7].weather.icon,
          icon8: weatherData.data[8].weather.icon,
          icon9: weatherData.data[9].weather.icon,
          icon10: weatherData.data[10].weather.icon,
          icon11: weatherData.data[11].weather.icon,
          icon12: weatherData.data[12].weather.icon,
          icon13: weatherData.data[13].weather.icon,
          icon14: weatherData.data[14].weather.icon,
          icon15: weatherData.data[15].weather.icon,

          city: weatherData.city_name,
          country: weatherData.country_code,

          description0: weatherData.data[0].weather.description,
          description1: weatherData.data[1].weather.description,
          description2: weatherData.data[2].weather.description,
          description3: weatherData.data[3].weather.description,
          description4: weatherData.data[4].weather.description,
          description5: weatherData.data[5].weather.description,
          description6: weatherData.data[6].weather.description,
          description7: weatherData.data[7].weather.description,
          description8: weatherData.data[8].weather.description,
          description9: weatherData.data[9].weather.description,
          description10: weatherData.data[10].weather.description,
          description11: weatherData.data[11].weather.description,
          description12: weatherData.data[12].weather.description,
          description13: weatherData.data[13].weather.description,
          description14: weatherData.data[14].weather.description,
          description15: weatherData.data[15].weather.description,

          date0: weatherData.data[0].valid_date,
          date1: weatherData.data[1].valid_date,
          date2: weatherData.data[2].valid_date,
          date3: weatherData.data[3].valid_date,
          date4: weatherData.data[4].valid_date,
          date5: weatherData.data[5].valid_date,
          date6: weatherData.data[6].valid_date,
          date7: weatherData.data[7].valid_date,
          date8: weatherData.data[8].valid_date,
          date9: weatherData.data[9].valid_date,
          date10: weatherData.data[10].valid_date,
          date11: weatherData.data[11].valid_date,
          date12: weatherData.data[12].valid_date,
          date13: weatherData.data[13].valid_date,
          date14: weatherData.data[14].valid_date,
          date15: weatherData.data[15].valid_date,

          error: undefined
        }
      );
    }
    else {
      this.setState({
        temperature0: undefined,
        icon0: undefined,
        description0: undefined,
        date0: undefined,

        temperature1: undefined,
        icon1: undefined,
        description1: undefined,
        date1: undefined,

        temperature2: undefined,
        icon2: undefined,
        description2: undefined,
        date2: undefined,

        temperature3: undefined,
        icon3: undefined,
        description3: undefined,
        date3: undefined,

        temperature4: undefined,
        icon4: undefined,
        description4: undefined,
        date4: undefined,

        temperature5: undefined,
        icon5: undefined,
        description5: undefined,
        date5: undefined,

        temperature6: undefined,
        icon6: undefined,
        description6: undefined,
        date6: undefined,

        temperature7: undefined,
        icon7: undefined,
        description7: undefined,
        date7: undefined,

        temperature8: undefined,
        icon8: undefined,
        description8: undefined,
        date8: undefined,

        temperature9: undefined,
        icon9: undefined,
        description9: undefined,
        date9: undefined,

        temperature10: undefined,
        icon10: undefined,
        description10: undefined,
        date10: undefined,

        temperature11: undefined,
        icon11: undefined,
        description11: undefined,
        date11: undefined,

        temperature12: undefined,
        icon12: undefined,
        description12: undefined,
        date12: undefined,

        temperature13: undefined,
        icon13: undefined,
        description13: undefined,
        date13: undefined,

        temperature14: undefined,
        icon14: undefined,
        description14: undefined,
        date14: undefined,

        temperature15: undefined,
        icon15: undefined,
        description15: undefined,
        date15: undefined,

        city: undefined,
        country: undefined,
        error: "Please Enter Valid Inputs!"
        }
      );
    }
  }
  render() {
    return (
      <div id='spinach'>
        <Title />
        <Form getClimateData={this.getClimateData}/>
        <Spinach_display
        temperature0={this.state.temperature0}
        icon0={this.state.icon0}
        description0={this.state.description0}
        date0={this.state.date0}

        temperature1={this.state.temperature1}
        icon1={this.state.icon1}
        description1={this.state.description1}
        date1={this.state.date1}

        temperature2={this.state.temperature2}
        icon2={this.state.icon2}
        description2={this.state.description2}
        date2={this.state.date2}

        temperature3={this.state.temperature3}
        icon3={this.state.icon3}
        description3={this.state.description3}
        date3={this.state.date3}

        temperature4={this.state.temperature4}
        icon4={this.state.icon4}
        description4={this.state.description4}
        date4={this.state.date4}

        temperature5={this.state.temperature5}
        icon5={this.state.icon5}
        description5={this.state.description5}
        date5={this.state.date5}

        temperature6={this.state.temperature6}
        icon6={this.state.icon6}
        description6={this.state.description6}
        date6={this.state.date6}

        temperature7={this.state.temperature7}
        icon7={this.state.icon7}
        description7={this.state.description7}
        date7={this.state.date7}

        temperature8={this.state.temperature8}
        icon8={this.state.icon8}
        description8={this.state.description8}
        date8={this.state.date8}

        temperature9={this.state.temperature9}
        icon9={this.state.icon9}
        description9={this.state.description9}
        date9={this.state.date9}

        temperature10={this.state.temperature10}
        icon10={this.state.icon10}
        description10={this.state.description10}
        date10={this.state.date10}

        temperature11={this.state.temperature11}
        icon11={this.state.icon11}
        description11={this.state.description11}
        date11={this.state.date11}

        temperature13={this.state.temperature13}
        icon13={this.state.icon13}
        description13={this.state.description13}
        date13={this.state.date13}

        temperature14={this.state.temperature14}
        icon14={this.state.icon14}
        description14={this.state.description14}
        date14={this.state.date14}

        temperature15={this.state.temperature15}
        icon15={this.state.icon15}
        description15={this.state.description15}
        date15={this.state.date15}

        temperature12={this.state.temperature12}
        icon12={this.state.icon12}
        description12={this.state.description12}
        date12={this.state.date12}

        city={this.state.city}
        country={this.state.country}
        error={this.state.error}
        />
      </div>
    );
  };
}

export default Spinach;
