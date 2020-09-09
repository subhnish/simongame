let numArr = [];
let userArr = [];
let level = 0;
let num;


//Game Over Function
function gameOver() {
    numArr = [];
    userArr = [];
    
    document.body.style.background = "red";
    setTimeout(() => {
      document.body.style.background = "#202020";
    }, 500);
    document.querySelector(".header").innerText = `Game over, Score = ${level}`;
    level = 0
  }

  //flash

function flash(tileNum) {
let = tileNumber = `.tile${tileNum}`
// console.log(tileNumber)
setTimeout(() => {
document.querySelector(tileNumber).classList.add("flash")
}, 300);

setTimeout(() => {
document.querySelector(tileNumber).classList.remove("flash")
}, 500);
}

function click(tileNum) {
clickTile = `.tile${tileNum}`
    document.querySelector(clickTile).classList.add("flash")
    setTimeout(() => {
    document.querySelector(clickTile).classList.remove("flash")
    }, 100);
}

//Generate the Number
function genNum() {
  if (numArr.length > 0) {
  let num = Math.ceil(Math.random() * 4);
  numArr.push(num);
  flash(num);
  } else {

}
};

//User Play Function
let tiles = document.querySelectorAll(".tile")
for (x of tiles) {
  x.addEventListener("click", (e)=> {
    if (numArr.length > 0) {
    tileNumber = e.target.getAttribute("class").split(" ")[2]
    click(parseInt(tileNumber))
    userArr.push(parseInt(tileNumber));
    if (check(userArr, numArr) == false) {
      gameOver()
    } else if (check(userArr, numArr) && userArr.length == numArr.length) {
         userArr = [];
         level++
         document.querySelector(".header").innerText = `Level ${level}`
         genNum();
    }
  }
  })
}

// Press Any key to Start
document.addEventListener("keydown", () => {
    if (numArr.length == 0) {
        num = Math.ceil(Math.random() * 4);
        numArr.push(num);
        flash(num);
    }
  });

function check(a, b) {
  counter = 0;
 for(let i = 0; i <= a.length - 1; i++) {
//   console.log(a)
//    console.log("a" + a[i])
//    console.log(b)
//    console.log("b" + b[i])
if(a[i] == b[i]) {
  counter++
//   console.log("counter " + counter)
}
 }
if (counter == a.length) return true
else return false;
  }
