import _ from 'lodash'
// import Print from './print';
function component () {
    var element = document.createElement('div')
    element.innerHTML = _.join(['Hello', 'world'], '')
    // element.onClick = Print.bind(null, 'Hello webpack!')
    return element
}
document.body.appendChild(component())