import React from 'react';
import './display.css';

class Display extends React.Component {
  render() {
    return(
      <div class="container-fluid spinach">
        <div class="row text-center" id="location">
          {this.props.city && <h4>City: {this.props.city}</h4>}
          {this.props.country && <h4>Country: {this.props.country}</h4>}
        </div>
          <div class="row text-center">
            {this.props.date0 && <h4 id="forecast">Weather Forecast</h4>}
          </div>
          <div class="row text-center">
            <div class="col-md-2">
              {this.props.date0 && <p>Date: {this.props.date0}</p>}
              {this.props.icon0 && <img src={"https:www.weatherbit.io/static/img/icons/" + this.props.icon0 + ".png"} />}
              {this.props.description0 && <p>Description: {this.props.description0}</p>}
              {this.props.temperature0 && <p>Temperature: {this.props.temperature0}</p>}
            </div>
            <div class="col-md-2">
              {this.props.date1 && <p>Date: {this.props.date1}</p>}
              {this.props.icon1 && <img src={"https:www.weatherbit.io/static/img/icons/" + this.props.icon1 + ".png"} />}
              {this.props.description1 && <p>Description: {this.props.description1}</p>}
              {this.props.temperature1 && <p>Temperature: {this.props.temperature1}</p>}
            </div>
            <div class="col-md-2">
              {this.props.date2 && <p>Date: {this.props.date2}</p>}
              {this.props.icon2 && <img src={"https:www.weatherbit.io/static/img/icons/" + this.props.icon2 + ".png"} />}
              {this.props.description2 && <p>Description: {this.props.description2}</p>}
              {this.props.temperature2 && <p>Temperature: {this.props.temperature2}</p>}
            </div>
            <div class="col-md-2">
              {this.props.date3 && <p>Date: {this.props.date3}</p>}
              {this.props.icon3 && <img src={"https:www.weatherbit.io/static/img/icons/" + this.props.icon3 + ".png"} />}
              {this.props.description3 && <p>Description: {this.props.description3}</p>}
              {this.props.temperature3 && <p>Temperature: {this.props.temperature3}</p>}
            </div>
            <div class="col-md-2">
              {this.props.date4 && <p>Date: {this.props.date4}</p>}
              {this.props.icon4 && <img src={"https:www.weatherbit.io/static/img/icons/" + this.props.icon4 + ".png"} />}
              {this.props.description4 && <p>Description: {this.props.description4}</p>}
              {this.props.temperature4 && <p>Temperature: {this.props.temperature4}</p>}
            </div>
            <div class="col-md-2">
              {this.props.date5 && <p>Date: {this.props.date5}</p>}
              {this.props.icon5 && <img src={"https:www.weatherbit.io/static/img/icons/" + this.props.icon5 + ".png"} />}
              {this.props.description5 && <p>Description: {this.props.description5}</p>}
              {this.props.temperature5 && <p>Temperature: {this.props.temperature5}</p>}
            </div>
          </div>
          <div class="row text-center">
            <div class="col-md-2">
              {this.props.date6 && <p>Date: {this.props.date6}</p>}
              {this.props.icon6 && <img src={"https:www.weatherbit.io/static/img/icons/" + this.props.icon6 + ".png"} />}
              {this.props.description6 && <p>Description: {this.props.description6}</p>}
              {this.props.temperature6 && <p>Temperature: {this.props.temperature6}</p>}
            </div>
            <div class="col-md-2">
              {this.props.date7 && <p>Date: {this.props.date7}</p>}
              {this.props.icon7 && <img src={"https:www.weatherbit.io/static/img/icons/" + this.props.icon7 + ".png"} />}
              {this.props.description7 && <p>Description: {this.props.description7}</p>}
              {this.props.temperature7 && <p>Temperature: {this.props.temperature7}</p>}
            </div>
            <div class="col-md-2">
              {this.props.date8 && <p>Date: {this.props.date8}</p>}
              {this.props.icon8 && <img src={"https:www.weatherbit.io/static/img/icons/" + this.props.icon8 + ".png"} />}
              {this.props.description8 && <p>Description: {this.props.description8}</p>}
              {this.props.temperature8 && <p>Temperature: {this.props.temperature8}</p>}
            </div>
            <div class="col-md-2">
              {this.props.date9 && <p>Date: {this.props.date9}</p>}
              {this.props.icon9 && <img src={"https:www.weatherbit.io/static/img/icons/" + this.props.icon9 + ".png"} />}
              {this.props.description9 && <p>Description: {this.props.description9}</p>}
              {this.props.temperature9 && <p>Temperature: {this.props.temperature9}</p>}
            </div>
            <div class="col-md-2">
              {this.props.date10 && <p>Date: {this.props.date10}</p>}
              {this.props.icon10 && <img src={"https:www.weatherbit.io/static/img/icons/" + this.props.icon10 + ".png"} />}
              {this.props.description10 && <p>Description: {this.props.description10}</p>}
              {this.props.temperature10 && <p>Temperature: {this.props.temperature10}</p>}
            </div>
            <div class="col-md-2">
              {this.props.date11 && <p>Date: {this.props.date11}</p>}
              {this.props.icon11 && <img src={"https:www.weatherbit.io/static/img/icons/" + this.props.icon11 + ".png"} />}
              {this.props.description11 && <p>Description: {this.props.description11}</p>}
              {this.props.temperature11 && <p>Temperature: {this.props.temperature11}</p>}
            </div>
          </div>
          <div class="row text-center">
            <div class="col-md-2">
              {this.props.date12 && <p>Date: {this.props.date12}</p>}
              {this.props.icon12 && <img src={"https:www.weatherbit.io/static/img/icons/" + this.props.icon12 + ".png"} />}
              {this.props.description12 && <p>Description: {this.props.description12}</p>}
              {this.props.temperature12 && <p>Temperature: {this.props.temperature12}</p>}
            </div>
            <div class="col-md-2">
              {this.props.date13 && <p>Date: {this.props.date13}</p>}
              {this.props.icon13 && <img src={"https:www.weatherbit.io/static/img/icons/" + this.props.icon13 + ".png"} />}
              {this.props.description13 && <p>Description: {this.props.description13}</p>}
              {this.props.temperature13 && <p>Temperature: {this.props.temperature13}</p>}
            </div>
            <div class="col-md-2">
              {this.props.date14 && <p>Date: {this.props.date14}</p>}
              {this.props.icon14 && <img src={"https:www.weatherbit.io/static/img/icons/" + this.props.icon14 + ".png"} />}
              {this.props.description14 && <p>Description: {this.props.description14}</p>}
              {this.props.temperature14 && <p>Temperature: {this.props.temperature14}</p>}
            </div>
            <div class="col-md-2">
              {this.props.date15 && <p>Date: {this.props.date15}</p>}
              {this.props.icon15 && <img src={"https:www.weatherbit.io/static/img/icons/" + this.props.icon15 + ".png"} />}
              {this.props.description15 && <p>Description: {this.props.description15}</p>}
              {this.props.temperature15 && <p>Temperature: {this.props.temperature15}</p>}
            </div>
            <div class="col-md-2">
            </div>
            <div class="col-md-2">
            </div>
          </div>
      </div>
    );
  };
}

export default Display;
