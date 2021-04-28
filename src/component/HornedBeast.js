import React from 'react';
import Card from 'react-bootstrap/Card';


class HornedBeasts extends React.Component{
  constructor(props){
    super(props);
    this.state={
      clickFav:0,
      heart:'💟'
    };
  }
  countClicks=()=>{
    this.setState(

      {

        clickFav:this.state.clickFav+1,
        heart:this.state.heart
      }
    );

  }
  render(){
    return(

      <div>

        <Card style={{ width: '20rem',margin:'3rem' }}>
          <Card.Img onClick={this.countClicks} variant="top" src={this.props.image_url} />
          <Card.Body>
            <Card.Title>{this.props.title} </Card.Title>
            <Card.Text>
              {this.props.description}<br></br>
              {this.state.heart}{this.state.clickFav}click my horn!🦄

            </Card.Text>

          </Card.Body>
        </Card>

      </div>

    );
  }
}
export default HornedBeasts;
