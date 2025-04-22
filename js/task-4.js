const form = document.querySelector('form')


form.addEventListener('submit', handleForm);




function handleForm(event){
    event.preventDefault();
    const form = event.target;
    const login = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    if(login === '' || password === ''){
        return alert('All form fields must be filled in');

    }
    const result = {
        'login': login,
        'password': password
    };
    console.log(result);
    form.reset();
    
}
