import React from 'react';
import './radish_display.css';
import Radish_no from './radish_no';
import Radish_yes from './radish_yes';

class Radish_display extends React.Component {
  render() {
      function importAll(r) {
        let Icons = {};
        r.keys().forEach((item, index) => { Icons[item.replace('./', '')] = r(item); });
        return Icons;
      }

      const Icons = importAll(require.context('./icons2', false, /\.(png|jpe?g|svg)$/));
      let Ruling;
      if ((this.props.temperature0 >= 10 && this.props.temperature0 <= 21)
          && (this.props.temperature1 >= 10 && this.props.temperature1 <= 21)
          && (this.props.temperature2 >= 10 && this.props.temperature2 <= 21)
          && (this.props.temperature3 >= 10 && this.props.temperature3 <= 21)
          && (this.props.temperature4 >= 10 && this.props.temperature4 <= 21)
          && (this.props.temperature5 >= 10 && this.props.temperature5 <= 21)
          && (this.props.temperature6 >= 10 && this.props.temperature6 <= 21)
          && (this.props.temperature7 >= 10 && this.props.temperature7 <= 21)
          && (this.props.temperature8 >= 10 && this.props.temperature8 <= 21)
          && (this.props.temperature9 >= 10 && this.props.temperature9 <= 21)
          && (this.props.temperature10 >= 10 && this.props.temperature10 <= 21)
          && (this.props.temperature11 >= 10 && this.props.temperature11 <= 21)
          && (this.props.temperature12 >= 10 && this.props.temperature12 <= 21)
          && (this.props.temperature13 >= 10 && this.props.temperature13 <= 21)
          && (this.props.temperature14 >= 10 && this.props.temperature14 <= 21)
          && (this.props.temperature15 >= 10 && this.props.temperature15 <= 21)) {
         Ruling = <Radish_yes city={this.props.city} />;
      }
      else {
        Ruling = <Radish_no city={this.props.city} />;
      }
    return(
      <div class="container-fluid spinach">
        <div class="row text-center" id="location">
          {this.props.city && <h4>City: {this.props.city}</h4>}
          {this.props.country && <h4>Country: {this.props.country}</h4>}
          {this.props.error && <h4>{this.props.error}</h4>}
        </div>
          <div class="row text-center">
            {this.props.date0 && <h4 id="forecast">Weather Forecast</h4>}
          </div>
          {this.props.date0 &&
            <div class="row text-center">
            <div class="col-md-2">
              {this.props.date0 && <h5>{this.props.date0}</h5>}
              {this.props.icon0 && <img src={Icons[this.props.icon0 + '.png']} />}
              {this.props.temperature0 && <p>{this.props.temperature0}°C</p>}
            </div>
            <div class="col-md-2">
              {this.props.date1 && <h5>{this.props.date1}</h5>}
              {this.props.icon1 && <img src={Icons[this.props.icon1 + '.png']} />}
              {this.props.temperature1 && <p>{this.props.temperature1}°C</p>}
            </div>
            <div class="col-md-2">
              {this.props.date2 && <h5>{this.props.date2}</h5>}
              {this.props.icon2 && <img src={Icons[this.props.icon2 + '.png']} />}
              {this.props.temperature2 && <p>{this.props.temperature2}°C</p>}
            </div>
            <div class="col-md-2">
              {this.props.date3 && <h5>{this.props.date3}</h5>}
              {this.props.icon3 && <img src={Icons[this.props.icon3 + '.png']} />}
              {this.props.temperature3 && <p>{this.props.temperature3}°C</p>}
            </div>
            <div class="col-md-2">
              {this.props.date4 && <h5>{this.props.date4}</h5>}
              {this.props.icon4 && <img src={Icons[this.props.icon4 + '.png']} />}
              {this.props.temperature4 && <p>{this.props.temperature4}°C</p>}
            </div>
            <div class="col-md-2">
              {this.props.date5 && <h5>{this.props.date5}</h5>}
              {this.props.icon5 && <img src={Icons[this.props.icon5 + '.png']} />}
              {this.props.temperature5 && <p>{this.props.temperature5}°C</p>}
            </div>
          </div>
          }
         {this.props.date6 &&
         <div class="row text-center">
            <div class="col-md-2">
              {this.props.date6 && <h5>{this.props.date6}</h5>}
              {this.props.icon6 && <img src={Icons[this.props.icon6 + '.png']} />}
              {this.props.temperature6 && <p>{this.props.temperature6}°C</p>}
            </div>
            <div class="col-md-2">
              {this.props.date7 && <h5>{this.props.date7}</h5>}
              {this.props.icon7 && <img src={Icons[this.props.icon7 + '.png']} />}
              {this.props.temperature7 && <p>{this.props.temperature7}°C</p>}
            </div>
            <div class="col-md-2">
              {this.props.date8 && <h5>{this.props.date8}</h5>}
              {this.props.icon8 && <img src={Icons[this.props.icon8 + '.png']} />}
              {this.props.temperature8 && <p>{this.props.temperature8}°C</p>}
            </div>
            <div class="col-md-2">
              {this.props.date9 && <h5>{this.props.date9}</h5>}
              {this.props.icon9 && <img src={Icons[this.props.icon9 + '.png']} />}
              {this.props.temperature9 && <p>{this.props.temperature9}°C</p>}
            </div>
            <div class="col-md-2">
              {this.props.date10 && <h5>{this.props.date10}</h5>}
              {this.props.icon10 && <img src={Icons[this.props.icon10 + '.png']} />}
              {this.props.temperature10 && <p>{this.props.temperature10}°C</p>}
            </div>
            <div class="col-md-2">
              {this.props.date11 && <h5>{this.props.date11}</h5>}
              {this.props.icon11 && <img src={Icons[this.props.icon11 + '.png']} />}
              {this.props.temperature11 && <p>{this.props.temperature11}°C</p>}
            </div>
          </div>
          }
          {this.props.date12 &&
          <div class="row text-center">
            <div class="col-md-2">
              {this.props.date12 && <h5>{this.props.date12}</h5>}
              {this.props.icon12 && <img src={Icons[this.props.icon12 + '.png']} />}
              {this.props.temperature12 && <p>{this.props.temperature12}°C</p>}
            </div>
            <div class="col-md-2">
              {this.props.date13 && <h5>{this.props.date13}</h5>}
              {this.props.icon13 && <img src={Icons[this.props.icon13 + '.png']} />}
              {this.props.temperature13 && <p>{this.props.temperature13}°C</p>}
            </div>
            <div class="col-md-2">
              {this.props.date14 && <h5>{this.props.date14}</h5>}
              {this.props.icon14 && <img src={Icons[this.props.icon14 + '.png']} />}
              {this.props.temperature14 && <p>{this.props.temperature14}°C</p>}
            </div>
            <div class="col-md-2">
              {this.props.date15 && <h5>{this.props.date15}</h5>}
              {this.props.icon15 && <img src={Icons[this.props.icon15 + '.png']} />}
              {this.props.temperature15 && <p>{this.props.temperature15}°C</p>}
            </div>
            <div class="col-md-4">
            </div>
          </div>
          }
          <div class="row text-center" id="ruling">
            <div class="col-md-12">
              {this.props.date0 && <h4 id="final">The Final Ruling:</h4>}
              {this.props.date0 && Ruling}
            </div>
          </div>
      </div>
    );
  };
}

export default Radish_display;
