
import './index.css';
const os  = require('os');
import a from './a';
import pic from './img/person.jpeg';
import tiny from './img/status.png'

const concat = ([...rest]) => {
  return rest.join(',')
}
const { name , age } = a;
const div = document.createElement('div');
const img = document.createElement('img');
const imgTiny = document.createElement('img');
img.src = pic;
imgTiny.src = tiny;
div.innerHTML = concat([name, age, os.hostname()]);
img.classList.add('pic');
imgTiny.classList.add('pic');
document.body.appendChild(div);
document.body.appendChild(img);
document.body.appendChild(imgTiny);
// todo `type: 'asset/resource', 都可以放那些类型资源呢`