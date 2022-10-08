const nameForm = document.querySelector("#name-form");
const nameInput = document.querySelector("#inputName");
const greeting = document.querySelector("#greeting");
const greetingsList = [
    "Hello",
    "Hi",
    "안뇽",
    "안녕하세요",
    "こんにちは",
    "你好",
];

const CLASSNAME_HIDDEN = "hidden";
const KEY_USERNAME = "username";

function onNameSubmit(event) {
    event.preventDefault();
    nameForm.classList.add(CLASSNAME_HIDDEN);
    const userName = nameInput.value;
    localStorage.setItem(KEY_USERNAME, userName);
    paintGreetings(userName);
}

function paintGreetings(name) {
    const greetingHeader = greetingsList[Math.floor(Math.random() * greetingsList.length)];
    greeting.innerText = `${greetingHeader}, ${name}!`;
    greeting.classList.remove(CLASSNAME_HIDDEN);
}

const userName_saved = localStorage.getItem(KEY_USERNAME);

if(userName_saved === null)
{
    nameForm.classList.remove(CLASSNAME_HIDDEN);
    nameForm.onsubmit = onNameSubmit;
}
else
{
    paintGreetings(userName_saved);
}