import { Octokit } from "https://cdn.skypack.dev/@octokit/core";
const octokit = new Octokit({ auth: `key` });
let field = document.getElementById('input');
let form = document.getElementById('form');
let paragraph = document.getElementById('par');
let ulList = document.getElementById("list");
let request;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    search();
});

async function search() {
    request = await octokit.request('GET /users/{username}/repos', {
        username: field.value,
    });
    ul(request['data'], field.value);
}

function ul(itemInList, name) {
    let par = document.createElement("p");
    while (paragraph.firstChild) {
        paragraph.removeChild(paragraph.firstChild);
    }

    while (ulList.firstChild) {
        ulList.removeChild(ulList.firstChild);
    }

    par.innerText = `${name} has ${itemInList.length} repositories:`;
    paragraph.appendChild(par);

    for (let i = 0; i < itemInList.length; i++) {
        let list = document.createElement('li');
        list.innerText = `${itemInList[i]['name']}`;
        ulList.appendChild(list);

    }
    field.value = '';
}
