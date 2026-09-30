fetch('https://jsonplaceholder.typicode.com/users/')
.then (javob => javob.json())
.then (malumot => console.log(malumot));

let quti=document.getElementById("isimlar-qutisi");
quti.textContent=malumot[0].name;