const formValid = document.querySelector('#form')
    // regex patterns
const nameReg = ("[^\u0600-\u06FF\sa-zA-Z]");
const mobileReg = ("[^0-9]");
const mailReg = ("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")

// variables 
let messageElement = document.querySelector('#messageError')
let ErrMessage;
let statusForm = 0



// event

events()

function events() {
    formValid.addEventListener('submit', formValidator);

}






function formValidator(e) {
    e.preventDefault();
    let nameForm = document.querySelector('#name').value,
        familyForm = document.querySelector('#family').value,
        mobileForm = document.querySelector('#mobile').value,
        emailForm = document.querySelector('#email').value,
        selectorForm = document.querySelector('#selector').value,
        messageForm = document.querySelector('#message').value;


    // name validate input
    if (nameForm.match(nameReg) || nameForm.length <= 2 || nameForm.length >= 15) {
        ErrMessage = 'نام و نام خانوادگی نمیتوانند شامل اعداد و علامت  باشد و باید بین 3 تا 14 کارکتر باشد'
        showMessage(ErrMessage)


    } else {
        statusForm = statusForm + 1
    }


    // family validate input
    if (familyForm.match(nameReg) || nameForm.length <= 2 || nameForm.length >= 15) {
        ErrMessage = 'نام و نام خانوادگی نمیتوانند شامل اعداد و علامت  باشد و باید بین 3 تا 14 کارکتر باشد'
        showMessage(ErrMessage)


    } else {
        statusForm = statusForm + 1
    }


    // mobile validate input
    if (mobileForm.match(mobileReg) || mobileForm.length < 11 || mobileForm.length > 11) {
        ErrMessage = 'لطفا شماره  خود را درست وارد کنید'
        showMessage(ErrMessage)

    } else {
        statusForm = statusForm + 1
    }


    // email validate input
    if (!emailForm.match(mailReg)) {
        ErrMessage = 'لطفا یک ایمیل معتبر وارد کنید'
        showMessage(ErrMessage)
    } else {
        statusForm = statusForm + 1
    }


    // select validate input
    if (selectorForm == 'نوع درخواست') {
        ErrMessage = 'نوع درخواست را انتخاب کنید'
        showMessage(ErrMessage)
    } else {
        statusForm = statusForm + 1
    }


    // textarea validate input
    if (messageForm.length <= 10 || messageForm.length >= 300) {
        ErrMessage = 'پیام شما باید حداقل 10 کاراکتر و حداکثر 300 کاراکتر داشته باشد'
        showMessage(ErrMessage)
    } else {
        statusForm = statusForm + 1
    }

    // send message 
    if (statusForm == 6) {
        statusForm = 0
        ErrMessage = 'پیام با موفقیت ارسال شد'
        showMessage(ErrMessage)
    }

}





function showMessage(ErrMessage) {


    // give text error 
    let textError = ErrMessage;

    // show error & add message error 
    messageElement.innerHTML = `
    <div class="content--msg">${textError}</div>
    <div class="timeline--msg timeline--animation"></div>    
    `

    // change style error div 
    styleError = document.querySelector('#messageError').style.display = 'block'


    // hidden error div after 5sec

    setTimeout(() => {
        // change style error div 
        styleError = document.querySelector('#messageError').style.display = 'none'

        // change back status form 

    }, 5000);
}