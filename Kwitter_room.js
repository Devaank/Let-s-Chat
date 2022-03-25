var firebaseConfig = {
    apiKey: "AIzaSyAqD2-RwzGcVOuk8EzDsSvDxDINHnykIX8",
    authDomain: "prject-lets-chat.firebaseapp.com",
    databaseURL: "https://prject-lets-chat-default-rtdb.firebaseio.com",
    projectId: "prject-lets-chat",
    storageBucket: "prject-lets-chat.appspot.com",
    messagingSenderId: "1024408648422",
    appId: "1:1024408648422:web:b5ef3b3b68dc89ebd55927"
  };

  function addRoom() {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
    });
  
    localStorage.setItem("room_name", room_name)
  
    window.location = "kwitter_page.html";
  }

  function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html"
  }

  function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
  
        console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
        document.getElementById("output").innerHTML += row;
  
      });
    });
  }
  getData();