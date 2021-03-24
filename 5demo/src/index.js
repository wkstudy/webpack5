import './index.css';
import './test.less';
import pic from './img/person.jpeg';
import a from './a';
import { show } from './b';
const os  = require('os');

const concat = ([...rest]) => {
  return rest.join('-')
}
show()
const { name , age } = a;
const div = document.createElement('div');
const img = document.createElement('img');
img.src = pic;
div.innerHTML = concat([name, age, os.hostname()]);
img.classList.add('pic');
document.body.appendChild(div);
// document.body.appendChild(img);
// todo `type: 'asset/resource', 都可以放那些类型资源呢`