//
const key1 = document.querySelector(".key-1");
const key2 = document.querySelector(".key-2");
const key3 = document.querySelector(".key-3");
const key4 = document.querySelector(".key-4");
const key5 = document.querySelector(".key-5");
const key6 = document.querySelector(".key-6");
const key7 = document.querySelector(".key-7");
const key8 = document.querySelector(".key-8");
const key9 = document.querySelector(".key-9");
const key10 = document.querySelector(".key-10");
const key11 = document.querySelector(".key-11");
const key12 = document.querySelector(".key-12");
const key13 = document.querySelector(".key-13");
const key14 = document.querySelector(".key-14");
const key15 = document.querySelector(".key-15");
const key16 = document.querySelector(".key-16");
const key17 = document.querySelector(".key-17");
const key18 = document.querySelector(".key-18");
const key19 = document.querySelector(".key-19");
const key20 = document.querySelector(".key-20");
const key21 = document.querySelector(".key-21");
const key22 = document.querySelector(".key-22");
const key23 = document.querySelector(".key-23");
const key24 = document.querySelector(".key-24");
const key25 = document.querySelector(".key-25");
//
const black1 = document.querySelector(".black-1");
const black2 = document.querySelector(".black-2");
const black3 = document.querySelector(".black-3");
const black4 = document.querySelector(".black-4");
const black5 = document.querySelector(".black-5");
const black6 = document.querySelector(".black-6");
const black7 = document.querySelector(".black-7");
const black8 = document.querySelector(".black-8");
const black9 = document.querySelector(".black-9");
const black10 = document.querySelector(".black-10");

// /////////////
// hideBtn.addEventListener('click',  () =>{
//   console.log("hi");

// });

// *****************

function keyPressWhite(key) {
  key.classList.add("press");
  setTimeout(function () {
    key.classList.remove("press");
  }, 200);
}

function keyPressBlack(key) {
  key.classList.add("black-press");
  setTimeout(function () {
    key.classList.remove("black-press");
  }, 200);
}

// **************************************************************************************************************
//  Each key sound
// C
key1.addEventListener("click", () => {
  // new Audio('../public/keys//key01.mp3').play();
  new Audio("../public/keys//261-C.mp3").play();

  keyPressWhite(key1);
});
// ************************************************
key2.addEventListener("click", () => {
  new Audio("../public/keys//277-C-sharp.mp3").play();
  keyPressBlack(black1);
});
// D
key3.addEventListener("click", () => {
  new Audio("../public/keys//293-D.mp3").play();
  keyPressWhite(key3);
});

key4.addEventListener("click", () => {
  new Audio("../public/keys//311-D-sharp.mp3").play();
  keyPressBlack(black2);
});
/////////////////////////////////////////////////////////////////
// E
key5.addEventListener("click", () => {
  new Audio("../public/keys//329-E.mp3").play();
  keyPressWhite(key5);
});

// F
key6.addEventListener("click", () => {
  new Audio("../public/keys//349-F.mp3").play();
  keyPressWhite(key6);
});

key7.addEventListener("click", () => {
  new Audio("../public/keys//369F-sharp.mp3").play();
  keyPressBlack(black3);
});
// //////////////////////////////////////////////////////
// G
key8.addEventListener("click", () => {
  new Audio("../public/keys//391-G.mp3").play();
  keyPressWhite(key8);
});
key9.addEventListener("click", () => {
  new Audio("../public/keys//415-G-sharp.mp3").play();
  keyPressBlack(black4);
});

// A
key10.addEventListener("click", () => {
  new Audio("../public/keys//440-A.mp3").play();
  keyPressWhite(key10);
});
key11.addEventListener("click", () => {
  new Audio("../public/keys//466-A-sharp.mp3").play();
  keyPressBlack(black5);
});
// B
key12.addEventListener("click", () => {
  new Audio("../public/keys//495-B.mp3").play();
  keyPressWhite(key12);
});

// ***************************HIGHER OCTAVE*****************************************
// C
key13.addEventListener("click", () => {
  new Audio("../public/keys//HIGHER-OCTAVE/523-C.mp3").play();
  keyPressWhite(key13);
});
key14.addEventListener("click", () => {
  new Audio("../public/keys//HIGHER-OCTAVE/545-C-sharp.mp3").play();
  keyPressBlack(black6);
});

// D
key15.addEventListener("click", () => {
  new Audio("../public/keys//HIGHER-OCTAVE/587-D.mp3").play();
  keyPressWhite(key15);
});
key16.addEventListener("click", () => {
  new Audio("../public/keys//HIGHER-OCTAVE/622-D-sharp.mp3").play();
  keyPressBlack(black7);
});

// E
key17.addEventListener("click", () => {
  new Audio("../public/keys//HIGHER-OCTAVE/659-E.mp3").play();
  keyPressWhite(key17);
});

// F
key18.addEventListener("click", () => {
  new Audio("../public/keys//HIGHER-OCTAVE/698-F.mp3").play();
  keyPressWhite(key18);
});
key19.addEventListener("click", () => {
  new Audio("../public/keys//HIGHER-OCTAVE/698-F-sharp.mp3").play();
  keyPressBlack(black8);
});

// G
key20.addEventListener("click", () => {
  new Audio("../public/keys//HIGHER-OCTAVE/783-G.mp3").play();
  keyPressWhite(key20);
});
key21.addEventListener("click", () => {
  new Audio("../public/keys//HIGHER-OCTAVE/830-G-sharp.mp3").play();
  keyPressBlack(black9);
});

// A
key22.addEventListener("click", () => {
  new Audio("../public/keys//HIGHER-OCTAVE/880-A.mp3").play();
  keyPressWhite(key22);
});
key23.addEventListener("click", () => {
  new Audio("../public/keys//HIGHER-OCTAVE/932-A-sharp.mp3").play();
  keyPressBlack(black10);
});
// B
key24.addEventListener("click", () => {
  new Audio("../public/keys//HIGHER-OCTAVE/987-B.mp3").play();
  keyPressWhite(key24);
});
// C
key25.addEventListener("click", () => {
  new Audio("../public/keys//HIGHER-OCTAVE/1046-C.mp3").play();
  keyPressWhite(key25);
});

// //////////////////////////////////////////////
// KEYBOARD EVENTS
// //////////////////////////////////////////
document.addEventListener("keydown", function (e) {
  if (e.key === "a") {
    new Audio("../public/keys//261-C.mp3").play();
    keyPressWhite(key1);
  }
  if (e.key === "w") {
    new Audio("../public/keys//277-C-sharp.mp3").play();
    keyPressBlack(black1);
  }

  if (e.key === "s") {
    new Audio("../public/keys//293-D.mp3").play();
    keyPressWhite(key3);
  }
  if (e.key === "e") {
    new Audio("../public/keys//311-D-sharp.mp3").play();
    keyPressBlack(black2);
  }
  // /////////////////////////////////////////////////////////
  // EEEEEEEEEEEEEE
  if (e.key === "d") {
    new Audio("../public/keys//329-E.mp3").play();
    keyPressWhite(key5);
  }
  //FFFFFFFFFFFFFFF
  if (e.key === "f") {
    new Audio("../public/keys//349-F.mp3").play();
    keyPressWhite(key6);
  }

  if (e.key === "r") {
    new Audio("../public/keys//369F-sharp.mp3").play();
    keyPressBlack(black3);
  }
  // /////////////////////////////////////////////
  // GGGGGGGGGGGGG
  if (e.key === "g") {
    new Audio("../public/keys//391-G.mp3").play();
    keyPressWhite(key8);
  }
  if (e.key === "t") {
    new Audio("../public/keys//415-G-sharp.mp3").play();
    keyPressBlack(black4);
  }

  // AAAAAAAAAAA
  if (e.key === "h") {
    new Audio("../public/keys//440-A.mp3").play();
    keyPressWhite(key10);
  }
  if (e.key === "y") {
    new Audio("../public/keys//466-A-sharp.mp3").play();
    keyPressBlack(black5);
  }

  // B
  if (e.key === "j") {
    new Audio("../public/keys//495-B.mp3").play();
    keyPressWhite(key12);
  }

  // CCCCCCCCCCCCCCCCC

  if (e.key === "k") {
    new Audio("../public/keys//HIGHER-OCTAVE/523-C.mp3").play();
    keyPressWhite(key13);
  }

  if (e.key === "u") {
    new Audio("../public/keys//HIGHER-OCTAVE/545-C-sharp.mp3").play();
    keyPressBlack(black6);
  }
  // DDDDDDDDDDDDDDDDD
  if (e.key === "l") {
    new Audio("../public/keys//HIGHER-OCTAVE/587-D.mp3").play();
    keyPressWhite(key15);
  }
  if (e.key === "i") {
    new Audio("../public/keys//HIGHER-OCTAVE/622-D-sharp.mp3").play();

    keyPressBlack(black7);
  }
  // E
  if (e.key === ";") {
    new Audio("../public/keys//HIGHER-OCTAVE/659-E.mp3").play();
    keyPressWhite(key17);
  }
  //FFFFFFF
  if (e.key === '"') {
    new Audio("../public/keys//HIGHER-OCTAVE/698-F.mp3").play();
    keyPressWhite(key18);
  }
  if (e.key === "o") {
    new Audio("../public/keys//HIGHER-OCTAVE/698-F-sharp.mp3").play();
    keyPressBlack(black8);
  }
  // ggggg
  if (e.key === "v") {
    new Audio("../public/keys//HIGHER-OCTAVE/783-G.mp3").play();
    keyPressWhite(key20);
  }
  if (e.key === "p") {
    new Audio("../public/keys//HIGHER-OCTAVE/830-G-sharp.mp3").play();
    keyPressBlack(black9);
  }
  // aaaaaaa
  if (e.key === "b") {
    new Audio("../public/keys//HIGHER-OCTAVE/880-A.mp3").play();
    keyPressWhite(key22);
  }
  if (e.key === "[" || e.key === "+") {
    new Audio("../public/keys//HIGHER-OCTAVE/932-A-sharp.mp3").play();
    keyPressBlack(black10);
  }
  if (e.key === "n") {
    new Audio("../public/keys//HIGHER-OCTAVE/987-B.mp3").play();
    keyPressWhite(key24);
  }
  if (e.key === "m") {
    new Audio("../public/keys//HIGHER-OCTAVE/1046-C.mp3").play();
    keyPressWhite(key25);
  }
});
