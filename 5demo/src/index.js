import './index.css';
import pic from './img/person.jpeg';


const div = document.createElement('div');
const img = document.createElement('img');
img.src = pic;
div.innerHTML = 'hello';
document.body.appendChild(div);
document.body.appendChild(img);
// todo `type: 'asset/resource', 都可以放那些类型资源呢`