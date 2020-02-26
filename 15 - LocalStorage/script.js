const addItems = document.querySelector('.add-items');
const removeItems = document.querySelector('.remove');
const unCheckAll = document.querySelector('.uncheck');
const checkAll = document.querySelector('.checkAll');
const itemsList = document.querySelector('.plates');

let items = JSON.parse(localStorage.getItem('items')) || [];



function addItem(event) {
  event.preventDefault()
  const text = this.querySelector('[name=item]').value;
   
  const item = {
    text,
    done: false
  };

  items.push(item);
  populateList(items, itemsList); 

  localStorage.setItem('items', JSON.stringify(items));

  this.reset();
  
};

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, index) => {
    return `
      <li>
        <input type="checkbox" data-index="${index}" id="item${index}" ${plate.done ? 'checked' : ''}/>
        <label for="item${index}">${plate.text}</label>
      </li>
    `
  }).join('');
};


function toggleDone(event) {
  if (!event.target.matches('input')) return;
  const el = event.target;
  const index = el.dataset.index;

  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
  
};

function clearList(event) {
  event.preventDefault();
  items = [];
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
};

function uncheckAll(event) {
  event.preventDefault();
  items.forEach(item => {
    item.done = false;
  });
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
};

function checkAllFunc(event) {
  event.preventDefault();
  items.forEach(item => item.done = true);
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}




addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
removeItems.addEventListener('click', clearList);
unCheckAll.addEventListener('click', uncheckAll);
checkAll.addEventListener('click', checkAllFunc);


populateList(items, itemsList);