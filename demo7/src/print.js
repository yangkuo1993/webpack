import _ from 'lodash'
export default function printMe() {
    console.log('I get called from print.js333338!');
    console.log(_.join(['Another', 'module', 'loaded!'], ' '))
  }