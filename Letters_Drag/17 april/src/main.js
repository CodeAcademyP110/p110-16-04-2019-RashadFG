"use strict";
let contextMenu = document.querySelector(".context-menu");
let newFolder = document.querySelector(".c-folder-1");
let openedFolder = document.querySelector(".main");
let input = document.querySelector(".input");
let folders = document.querySelector(".folders");
let cancel = document.querySelector(".cancel")
let create = document.querySelector(".create")

document.oncontextmenu = function (e) {
    e.preventDefault();
    contextMenu.classList.remove("d-none");
    contextMenu.style.left = e.pageX + "px";
    contextMenu.style.top = e.pageY + "px";
    if (e.pageX > 1000) {
        contextMenu.style.left = e.pageX - 300 + "px";
    }
    if (e.pageY > 400) {
        contextMenu.style.top = e.pageY - 350 + "px";
    }
    let close = document.querySelector(".close")
    newFolder.onclick = function () {
        openedFolder.classList.remove("d-none");

        input.onkeydown = function (e) {
            if (e.keyCode == 13) {
                let div = document.createElement("div");
                div.classList.add("folder", "p-2", "m-2");

                let i = document.createElement("i");
                i.classList.add("fas", "fa-folder", "mr-2")
                div.appendChild(i)

                let span = document.createElement("span");
                span.innerHTML = input.value;

                div.appendChild(span)
                folders.appendChild(div)

                input.value = ""

                openedFolder.classList.remove("d-block");
                openedFolder.classList.add("d-none");

            }
        }
        close.onclick = function () {
            openedFolder.classList.remove("d-block");
            openedFolder.classList.add("d-none");
        }
        cancel.onclick = function () {
            openedFolder.classList.remove("d-block");
            openedFolder.classList.add("d-none");
        }
        input.onkeydown = function (e) {
            if (e.keyCode == 13) {
                if (input.value == "") {
                    return
                }
                let div = document.createElement("div");
                div.classList.add("folder", "p-2", "m-2");

                let i = document.createElement("i");
                i.classList.add("fas", "fa-folder", "mr-2")
                div.appendChild(i)

                let span = document.createElement("span");
                span.innerHTML = input.value;

                div.appendChild(span)
                folders.appendChild(div)

                input.value = ""

                openedFolder.classList.remove("d-block");
                openedFolder.classList.add("d-none");

            }
        }

        create.onclick = function () {
            if (input.value == "") {
                return
            }
            let div = document.createElement("div");
            div.classList.add("folder", "p-2", "m-2");

            let i = document.createElement("i");
            i.classList.add("fas", "fa-folder", "mr-2")
            div.appendChild(i)

            let span = document.createElement("span");
            span.innerHTML = input.value;

            div.appendChild(span)
            folders.appendChild(div)

            input.value = ""

            openedFolder.classList.remove("d-block");
            openedFolder.classList.add("d-none");


        }
        input.value = ""
    }
}
 
document.onclick = function (e) {
    contextMenu.classList.remove("d-block")
    contextMenu.classList.add("d-none")
}