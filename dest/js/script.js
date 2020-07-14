window.onload = function(){
    const registrationBtn = document.querySelector('#btn-registration');
    const loginBtn = document.querySelector('#btn-login');
    const registrationBlock = document.querySelector('.authorization-form');
    const loginBlock = document.querySelector('.authorization-form2');

    registrationBtn.addEventListener('click', function(){
        registrationBlock.classList.toggle('opacity');
        // if(registrationBlock.style.display === 'flex'){
        //     registrationBlock.style.display = "none";
        // }else{
        //     registrationBlock.style.display = 'flex';
        // }
    });
    loginBtn.addEventListener('click', function(){
        loginBlock.classList.toggle('opacity');
        // if(loginBlock.style.display === 'flex') {
        //     loginBlock.style.display = "none";
        // } else {
        //     loginBlock.style.display = 'flex';
        // }
    });

    const btn = document.querySelector('.user-doc');
    const btn2 = document.querySelector('.forget-js');
    const modal = document.querySelector('.overlay');
    const confirmited = document.querySelector('#conf-js');


    function modalShow(trigger, modal, confirm){
    trigger.addEventListener('click', function(e){
        if(e.target){
            e.preventDefault();
        }
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';

        confirm.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'visible';
        })


        modal.addEventListener('click',function(e){
            if(e.target === modal){
                modal.style.display ='none';
                document.body.style.overflow = 'visible';
            }
        })
    })
}

modalShow(btn, modal, confirmited);
modalShow(btn2, modal, confirmited);

}




