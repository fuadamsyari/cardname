// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function () {
//   card.style.display = 'none';
// });

// dom transversal
// const close = document.querySelectorAll('.close');
// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener('click', function (e) {
//     e.target.parentElement.style.display = 'none';
//   });
// }
// close.forEach((el) => {
//   el.addEventListener('click', function (e) {
//     e.target.parentElement.style.display = 'none';
//   });
// });
// close.forEach((el) => {
//   el.addEventListener('click', function (e) {
//     e.target.parentElement.style.display = 'none';
//     e.preventDefault();
//     e.stopPropagation();
//   });
// });

const container = document.querySelector('.container');
container.addEventListener('click', function (e) {
  if (e.target.className == 'close') {
    e.target.parentElement.style.display = 'none';
    e.preventDefault();
  }
});
