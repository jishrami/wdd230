const inputElement = document.querySelector("#favchap");
const buttonElement = document.querySelector("button");
const listElement = document.querySelector("#list");
let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function displayList(item) {
    const deleteButton = document.createElement("button");
    const listItem = document.createElement('li');

    listItem.textContent = item;
    deleteButton.textContent = "❌";

    deleteButton.addEventListener('click', () => {
        debugger;
        deleteChapter(listItem.textContent);
        listElement.removeChild(listItem);
        inputElement.focus();
    })

    listItem.appendChild(deleteButton);
    listElement.appendChild(listItem);
}
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length -1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}


buttonElement.addEventListener('click', (e) => {
    if (inputElement.value != '') {
        displayList(inputElement.value);
        chaptersArray.push(inputElement.value);

        setChapterList(chaptersArray);
        inputElement.value = '';
        inputElement.focus();
    }
});