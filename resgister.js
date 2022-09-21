
async function registerUser(){
    var name  = document.getElementById('name').value;
    var email  = document.getElementById('email').value;
    var password  = document.getElementById('password').value;
    var id = (Math.floor(100000 + Math.random() * 900000)).toString();

    
    const data = JSON.stringify({
        "name": name,
        "email": email,
        "password": password,
        "id": id
      });
      
      const xhr = new XMLHttpRequest();
      xhr.withCredentials = false;
      
      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
          console.log(this.responseText);
        }
      });
      
      xhr.open("POST", "https://go-apifirst.herokuapp.com/addUser");
      xhr.setRequestHeader("Access-Control-Allow-Origin", "http://localhost:5500");
      xhr.setRequestHeader("Access-Control-Allow-Origin", "https://exceptionxd.github.io/gcpTek/");
      xhr.setRequestHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
      xhr.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type');
      xhr.setRequestHeader("Content-Type", "application/json");
      
      xhr.send(data);


}