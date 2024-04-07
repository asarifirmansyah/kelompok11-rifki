const formBtn = document.getElementById("buttonSubmit");
const nama = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const requase_room = document.getElementById("apartment");

formBtn.addEventListener("click", () => {
  sendData("", {
    name: nama.value,
    email: email.value,
    phone: phone.value,
    requase_room: requase_room.value,
  });
});

const sendData = (path, data) => {
  fetch(path, {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
    });
};
