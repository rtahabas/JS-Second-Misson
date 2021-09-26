
let userDOM = document.querySelector('#task')

let buttonDOM = document.querySelector('#liveToastBtn')

buttonDOM.addEventListener('click', createList)


const listeDOM = document.querySelector('#list')
function createList() {
    localStorage.setItem('userLastInfo', userDOM.value)
    if (userDOM.value != 0) {
        $(".success").toast("show");
        let liDOM = document.createElement('li')
        liDOM.innerHTML = userDOM.value
        userDOM.value = ""
        listeDOM.appendChild(liDOM)
        

    } else {
        $(".error").toast("show");

    }

    var nodeListDOM = listeDOM.getElementsByTagName("li")
 

    for (let index = 0; index < nodeListDOM.length; index++) {

        let addClose = document.createElement('span')
        addClose.textContent = "x"
        nodeListDOM[index].append(addClose)
        addClose.classList.add("close1")

    }

    var closebut = document.querySelectorAll('.close1')

    for (let index = 0; index < closebut.length; index++) {

        closebut[index].addEventListener("click", () => {
            closebut[index].parentElement.style.display = "none";
        })

    }
    listeDOM.addEventListener(
        "click",
        function (complate) {
          if (complate.target.tagName === "LI") {
            complate.target.classList.toggle("checked");
          }
        },
        false
      );

}

















