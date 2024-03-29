import Component, { hbs } from '@glimmerx/component';

import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  logo = logo;

  static template = hbs`
    <div id="intro">
      <img src={{this.logo}}/>

      <h1>Hello World, glimmerx!</h1>
      <h3>
        you can get started by editing <code>src/App.js</code>.
      </h3>
    </div>
  `;
}
