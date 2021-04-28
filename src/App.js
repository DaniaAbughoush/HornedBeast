import React from 'react';
import Footer from './component/Footer';
import Header from './component/Header';
import Main from './component/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './component/Header';
// import Footer from './component/Footer';

class App extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}
export default App;
