let capainamerica = 0;
let ironman = 0;
let hulk = 0;
let questionno = 0;
function start() {
  capainamerica = 0;
  ironman = 0;
  hulk = 0;
  questionno = 0;
  document.getElementById("start").style.display = "block";
  document.getElementById("button1").style.display = "none";
  document.getElementById("button2").style.display = "none";
  document.getElementById("button3").style.display = "none";
  document.getElementById("question").style.display = "none";
  document.getElementById("name").style.display = "none";
  document.getElementById("img").style.display = "none";
  document.getElementById("restart").style.display = "none";
}
const questions = [
  [
    ["How would you describe yourself?"],
    ["Smart", "Sarcastic", "A born leader"],
  ],
  [
    ["Which one of these jobs appeal to you the most?"],
    ["Scientist", "Engineer", "Soldier"],
  ],
  [
    ["Which one of these colors appeal to you the most?"],
    ["Green", "Yellow", "Blue"],
  ],
  [
    ["Which one of these is more important to you?"],
    ["Knowledge", "Money", "Friendship"],
  ],
  [
    ["Which of these would you do in your spare time?"],
    ["Draw", "Build", "Play"],
  ],
];
function setQuestion() {
  document.getElementById("start").style.display = "none";
  document.getElementById("question").innerHTML = questions[questionno][0];
  document.getElementById("button1").innerHTML = questions[questionno][1][0];
  document.getElementById("button2").innerHTML = questions[questionno][1][1];
  document.getElementById("button3").innerHTML = questions[questionno][1][2];
  document.getElementById("button1").style.display = "block";
  document.getElementById("button2").style.display = "block";
  document.getElementById("button3").style.display = "block";
  document.getElementById("question").style.display = "block";
  document.getElementById("name").style.display = "none";
  document.getElementById("img").style.display = "none";
}
function addpoint(selected) {
  if (selected == 1) {
    hulk += 1;
  } else if (selected == 2) {
    ironman += 1;
  } else {
    capainamerica += 1;
  }
}
function result() {
  let highest = Math.max(capainamerica, ironman, hulk);
  if (hulk == highest) {
    document.getElementById("name").innerHTML =
      "<b>You resemble The Hulk!</b><br><br>Fiercely protective of friends and family, you are always there to help out in a time of need.";
    document.getElementById("img").src =
      "https://i.ytimg.com/vi/MAfIvBgChjQ/maxresdefault.jpg";
  } else if (ironman == highest) {
    document.getElementById("name").innerHTML =
      "<b>You resemble Iron Man!</b><br><br>Tony Stark is in an ongoing effort to protect the world from the evil forces that he knows are out there.";
    document.getElementById("img").src =
      "hhttps://static.wikia.nocookie.net/a6de4d17-b7d2-4e10-855d-fcf066d043a2/scale-to-width/755";
  } else {
    document.getElementById("name").innerHTML =
      "<b>You resemble Captain America!</b><br><br>Embracing the mantle of team leader, Captain America must find a way to rally The Avengers.";
    document.getElementById("img").src =
      "https://static1.moviewebimages.com/wordpress/wp-content/uploads/article/pgcFyKTA1rTFYcnUxDhHlAoGzZuDbP.jpg?q=50&fit=contain&w=1200";
  }
  document.getElementById("button1").style.display = "none";
  document.getElementById("button2").style.display = "none";
  document.getElementById("button3").style.display = "none";
  document.getElementById("question").style.display = "none";
  document.getElementById("name").style.display = "block";
  document.getElementById("img").style.display = "block";
  document.getElementById("restart").style.display = "block";
}
function button1_clicked() {
  addpoint(1);
  check();
}
function button2_clicked() {
  addpoint(2);
  check()
}
function button3_clicked() {
  addpoint(3);
  check()
}
function check() {
  questionno += 1;
  if (questionno == 5) {
    result();
  } else {
    setQuestion();
  }
}
