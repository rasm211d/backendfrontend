var request = new XMLHttpRequest();

function monkey() {
  request.open("GET", "https://dog.ceo/api/breeds/image/random", true);
  request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
      document.getElementById("picture").src = `${data.message}`;

    } else {
      console.log("error");
    }
  };

  request.send();
}
