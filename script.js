let input = document.getElementById('input');


form.addEventListener('click', submit)

function submit() {
    let item = fetch(input.value);
    return new Promise

    function((resolve, reject) {
            resolve(item);
            reject('cannot upload script')
        )
    };
}