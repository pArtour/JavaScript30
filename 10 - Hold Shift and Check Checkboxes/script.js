
//1) My first version (did it all by myself)
// it works but a can check many chekboxes even when there's no checkbox checked previously

// let inbox = document.querySelector('.inbox');
// let items = [];

// inbox.addEventListener('mouseover', function (event) {
//   if(event.target.classList.contains('item')) {
//     let checkbox = event.target.children[0];
//     if (event.shiftKey) {
//       items.push(event.target);
//     }
//     checkbox.addEventListener('click', () => {
//       items.forEach(item => {
//         item.children[0].checked = true
//       });
//       items = []; 
//     });
//   }
// });

//2) Version number 2
//Probably a better version

const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;

function handleCheck (event) {
  let inBetween = false;
  if (event.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      if(checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }



  lastChecked = this;
}




checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))



