import React from 'react';
import data from './data.json';
import HornedBeasts from './HornedBeast';
import CardColumns from 'react-bootstrap/CardColumns';

class Main extends React.Component{
  render(){
    let beast=data.map(beast=>{
      return<HornedBeasts title={beast.title} description={beast.description} image_url={beast.image_url}/>;
    });
    return(

      <div>
        <CardColumns>

          {beast}
        </CardColumns>
      </div>
    );
  }
}
export default Main;
