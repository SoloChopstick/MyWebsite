const btn = document.querySelector('#btn');

function alertFunction() {
  alert("YOU DID IT YAY");
}

//method 1
//btn.onclick = () => alert("Hello World");

//method 2
//btn.onclick = alertFunction;

//method 3
//btn.addEventListener('click', alertFunction);

btn.addEventListener('click', function (e) {
  console.log(e.target);
});
