window.addEventListener("load", function () {
  let listItems;
  let list;
  let count = 0;
  let animationCount = 0;
  let top = 38;
  let length;
  let countText = 0;
  let screenNumber;
  let display;
  let lists;
  let cloned;
  let timer_3;
  let timer_4;
  let timer_5;
  let reload;
  let listQtt = 0;
  let listCount = 1;
  let click = 0;
  let button_1 = this.document.getElementById("btn_1");
  let button_2 = this.document.getElementById("btn_2");
  let moveScreen = this.document.querySelector(
    "#container > #features > #upper-scren > div"
  );
  upAnimation();

  // List animation====================================================

  listItems = this.document.querySelectorAll("#features ul li");
  length = listItems.length;
  list = this.document.querySelector("#features > ul");

  function getList(par) {
    if (par == undefined || par == 1) {
      list = this.document.querySelector("#features > ul:first-of-type");
      listItems = this.document.querySelectorAll("#features ul li");
      lists = document.querySelectorAll("#features > ul ul ");
      cloned = this.document.querySelector("#features  ul:first-of-type");
    }
  }

  let timer_2 = setInterval(() => {
    listUp();
  }, 4000);

  function listUp() {
    getList();
    list.style.top = `-${top}px`;
    top += 38;
    count++;
    getDisplay(count);
    changeDisplay(1);

    if (count == length - 5) {
      count = 0;
      addItem();
    }
  }

  function addItem() {
    let clonedMenu;
    getList();
    listQtt++;
    clonedMenu = list.cloneNode(true);

    clonedMenu.className = "eachfeature_cloned";
    list.appendChild(clonedMenu);
    if (listQtt > 1 && lists.length > 2) {
      listQtt = 0;
      removeItem(1);
    } else if (listQtt > 1 && lists.length < 2) {
      removeItem();
      listQtt = 0;
    }
  }

  function removeItem(call) {
    let list_2;
    let list_3;
    getList();
    function remoItemPartTwo() {
      list_2 = document.querySelector("#features> ul > ul:first-of-type");
      cloned.removeChild(list_2);
    }
    if (call == undefined) {
      remoItemPartTwo();
    } else if (call == 1 && lists.length == 1) {
      remoItemPartTwo();
    } else if (call == 1 && lists.length > 1) {
      list_3 = document.querySelector("#features> ul > ul:last-of-type");
      cloned.removeChild(list_3);
      remoItemPartTwo();
    }
  }
  // End of List animation==============================================

  // Up screen animation================================================

  setTimeout(() => {
    listItems[countText].style.color = "red";
    listItems[countText].style.fontWeight = "700";

    setTimeout(() => {
      listItems[countText].style.color = "black";
      listItems[countText].style.fontWeight = "400";
    }, 1100);
  }, 800);

  let timer_1 = setInterval(() => {
    upAnimation();
  }, 4000);

  function upAnimation() {
    if (animationCount == 2) {
      animationCount = 0;
    }
    animationCount++;
    function textAnimation() {
      countText++;
      timer_4 = setTimeout(() => {
        listItems[countText].style.color = "red";
        listItems[countText].style.fontWeight = "700";

        timer_5 = setTimeout(() => {
          listItems[countText].style.color = "black";
          listItems[countText].style.fontWeight = "400";
          listItems.forEach((li) => {
            li.style.color = "black";
            li.style.fontWeight = "400";
          });
        }, 1000);
      }, 2900);
    }
    switch (animationCount) {
      case 1:
        moveScreen.className = "leftToRight";
        moveScreen.style.display = "block";
        setTimeout(() => {
          moveScreen.className = "leftToRightBack";
          textAnimation();
          setTimeout(() => {
            moveScreen.style.display = "none";
          }, 1000);
        }, 2000);
        break;
      case 2:
        moveScreen.className = "righttoLeft";
        moveScreen.style.display = "block";
        setTimeout(() => {
          moveScreen.className = "RighttoLeftBack";
          textAnimation();
          setTimeout(() => {
            moveScreen.style.display = "none";
          }, 1000);
        }, 2000);
        break;
      default:
        moveScreen.style.display = "none";
    }
  }

  // End of screen animation===============================================

  // Start of buttons animation=============================================

  button_1.addEventListener("click", () => {
    callFunctions();
    button_1.classList.add("pressed");
    document.getElementById("btn_1").style.color = "red";
    setInterval(() => {
      button_1.classList.remove("pressed");
      document.getElementById("btn_1").style.color = "black";
    }, 400);
    list.removeChild(listItems[0]);
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(listItems[0].innerHTML));
    list.appendChild(li);
    if (click == listItems.length - 1) {
      getList(1);
    }
  });

  button_2.addEventListener("click", () => {
    callFunctions();
    button_2.classList.add("pressed");
    document.getElementById("btn_2").style.color = "red";
    setInterval(() => {
      button_2.classList.remove("pressed");
      document.getElementById("btn_2").style.color = "black";
    }, 400);
    var li = document.createElement("li");
    li.appendChild(
      document.createTextNode(listItems[listItems.length - 1].innerHTML)
    );
    list.removeChild(listItems[listItems.length - 1]);
    list.insertBefore(li, list.firstChild);
    if (listCount == listItems.length - 1) {
      getList(1);
      listCount = 1;
    } else {
      listCount++;
    }
  });

  function callFunctions() {
    click++;
    clearInterval(timer_1);
    clearInterval(timer_2);
    clearTimeout(timer_3);
    clearTimeout(timer_4);
    clearTimeout(timer_5);
    clearTimeout(reload);
    removeItem(1);
    getList(click);
    getDisplay(click);
    removeStile(click);
    changeDisplay(1);
    reload = setTimeout(function () {
      location.reload();
    }, 3000);
  }

  function getDisplay(num) {
    if (num == 1) {
      screenNumber = this.document.querySelector("#count_1 > p");
      display = parseInt(screenNumber.innerHTML);
    }
  }

  function removeStile(num) {
    if (num == 1) {
      list.style.top = "0px";
      list.classList.remove("transition");
    }
  }

  // End of buttons animation===============================================

  // Start of Display animation=============================================

  function changeDisplay(up) {
    switch (up) {
      case 1:
        if (display == 15) {
          display = 0;
        }
        display++;
        screenNumber.innerHTML = `${display}`;
        break;
      case 2:
        if (display == 1) {
          display = 16;
        }
        display--;
        screenNumber.innerHTML = `${display}`;
        break;
      default:
        alert("Something went wrong with the display");
    }
  }

  // End of Display animation=============================================
});
