import React from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

const api_key = 'TvvNyDhd4hCzNyaBpjDbhswJ5CwfiqYzGtHoiTMs';
const api_url = 'https://api.nasa.gov/planetary/apod';

class APOD extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            uri: '',
            description: '',
            date: new Date(),
            resource_type: '',
        };
    }

    parseDate(){
        const date = this.state.date;
        return date.getFullYear() + '-' + ('0' + (date.getMonth()+1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
    }

    handleAPICall(){
        fetch(api_url + '?api_key=' + api_key + '&date=' + this.parseDate())
        .then(response => response.json())
        .then(data => {
            this.setState({
                uri: data.url,
                description: data.explanation,
                resource_type: data.media_type,
            });
        });
    }

    handleDateChange(date){
        this.setState({
            date: date
        });
    }

    render(){
        const element = this.state.resource_type === 'image' ? <img width="560" height="315" src={ this.state.uri } alt="Apod pic"/> : <iframe title="APOD Pic" width="560" height="315" src={ this.state.uri } frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>;
        
        return(
            <div className="background-container">
                <div className="stars">
                    <div style={{margin: 15 + "px"}}>
                        <h3>Lets checkout the astronomical event that took place on your last birthday!</h3>
                        <p>This archive list links to previous daily APOD pages from the current date through January 1, 2015.</p>
                        <div className="datepicker">
                        <DatePicker selected={this.state.date} onChange={ date => this.handleDateChange(date) } maxDate={new Date()} />
                        </div>
                            <div className="container">
                                <button className="apodButton"
                                onClick={ () => this.handleAPICall() }>
                                    Get resource
                                </button>
                            </div>
                            <div className="image-description">
                                <p>{ this.state.description }</p>
                                <div className="apod-image">
                                    { element }
                                </div>
                            </div>
                    </div>
            </div>
        </div>
        );
    }

}

export default APOD;