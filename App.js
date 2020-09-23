import React from 'react';
import Utama from './components/utama';
import {Link} from 'react-router-dom';
import { render } from '@testing-library/react';


class App extends React.Component{
  render(){
    return(
      <div> 
      <nav class="navbar navbar-dark bg-dark">
      <div class="card-header">
      <ul class="nav nav-tabs">
    
      <li class="nav-item">
      <a class="nav-link active"> 
      <Link to="/beranda">Beranda</Link></a>
      </li>
      <li class="nav-item">
      <a class="nav-link active" href="#">
      <Link to="/tentangsaya">Tentang Saya</Link>
      </a>
      </li>
      <li class="nav-item">
      <a class="nav-link active" href="#">
      <Link to="/karya">Karya</Link>
      </a>
      </li>
      <li class="nav-item">
      <a class="nav-link active" href="#">
      <Link to="/kontak">Kontak</Link>
      </a>
      </li>
      <li class="nav-item">
      <a class="nav-link active" href="#">
      <Link to="/list">List</Link>
      </a>
      </li>
      </ul>
      </div></nav>
      <div class="card-body">
      <Utama/>  
    </div>
    </div>
    );
  }

}
export default App;




