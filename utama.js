import React from 'react';
import {Switch, Route} from 'react-router-dom';

import beranda from './beranda';
import tentangsaya from './tentangsaya';
import karya from './karya';
import kontak from './kontak';
import list from './list'

const utama = () =>(
    <Switch>
        <Route exact path="/beranda" component={beranda} />
        <Route path="/tentangsaya" component={tentangsaya} />
        <Route path="/karya" component={karya} />
        <Route path="/kontak" component={kontak} />
        <Route path="/list" component={list} />
    </Switch>
)
export default utama;