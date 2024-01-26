// call-to-action button
const openModalButton = document.querySelector("#open-modal");

// dialog element
const dialogElement = document.querySelector("#dialog-modal");

// close dialog button
const closeDialogButton = document.querySelector("#close-modal");

// call-to-action button
openModalButton.addEventListener("click", onClickOpenButton);
 
function onClickOpenButton(e) {
   dialogElement.showModal();
}

// close dialog button
closeDialogButton.addEventListener("click", onClickCloseButton);

function onClickCloseButton(e) {
   dialogElement.close();
}