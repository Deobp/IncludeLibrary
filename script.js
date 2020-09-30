let input = document.getElementById('input');

let script = document.createElement('script');
form.addEventListener('click', submit)

function submit() {

    return new Promise((resolve, reject) => {
        resolve(input.value)
    });
}

let promise = submit();
promise.then((item) => {
    script.src = item;
    document.head.append(item);
    input.value = ''
    event.preventDefault(event)
});


// a ) input box where we specify resource to load  =>< script src="#"> </script>
// b) button that when presses changes # to actual URL
// c) Alert that says resource has been loaded