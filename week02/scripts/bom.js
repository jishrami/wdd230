const inputElement = document.querySelector("#favchap");
const buttonElement = document.querySelector("button");
const listElement = document.querySelector("#list");

buttonElement.addEventListener('click', (e) => {
    if (inputElement.value != '') {
        e.preventDefault();
        const value = inputElement.value;
        if (value) {
            const deleteButton = document.createElement("button");
            const listItem = document.createElement('li');
            listItem.textContent = value;
            deleteButton.textContent = "❌";

            deleteButton.addEventListener('click', () => {
                listElement.removeChild(listItem);
                listElement.focus();
            })

            listItem.appendChild(deleteButton);
            listElement.appendChild(listItem);
            inputElement.value = '';
            inputElement.focus();
        }
    }
});