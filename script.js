let input = document.getElementById('input');
let button = document.getElementById('button');
let script = document.createElement('script');


button.addEventListener('click', consumingPromise);
input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') consumingPromise();
});



function submit() {

    return new Promise((resolve, reject) => {
        script.src = input.value;
        document.head.append(script);
        resolve(input.value);
        input.value = '';

    });
}

function consumingPromise() {
    submit().then((item) => alert(item));
}