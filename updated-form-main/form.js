let currentTab = 0;
ShowForm(currentTab);

function ShowForm(n) {
    var form = document.getElementsByClassName('form');
    form[n].style.display = 'flex';

    if (n == 0) {
        form[n].querySelector('.previous-btn').style.display = 'none';
    } else {
        form[n].querySelector('.previous-btn').style.display = 'flex';
    }

    if (n == (form.length - 1)) {
        form[n].querySelector('.next-btn').innerHTML = 'Submit';
    } else {
        form[n].querySelector('.next-btn').innerHTML = 'Next';
    }

    regulateStepIndicator(n);
}

prevBtns = [...document.getElementsByClassName('previous-btn')];
prevBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        nextTab(-1);
    });
});

nextBtns = [...document.getElementsByClassName('next-btn')];
nextBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        nextTab(1);
    });
});

function nextTab(n) {
    var form = document.getElementsByClassName('form');
    if (n == 0 && !validateForm()) return false;
    form[currentTab].style.display = 'none';
    currentTab = currentTab + n;

    if (currentTab >= form.length) {
        document.getElementById('donationform').submit();
        return false;
    }
    ShowForm(currentTab);
}

function validateForm() {
    var form, input, i = true;
    var form = document.getElementsByClassName('form');
    var input = document.getElementsByTagName('input');
    for (i = 0, i < input.length; i++;) {
        if (input[i].value = "") {
            input[i].classList.add('invalid');
            valid = false;
        }
    }
    if (valid) {
        document.getElementsByClassName('check')[currentTab].classList.add('completed');
    }
    return valid;
}

function regulateStepIndicator(n) {
    var i, check = document.getElementsByClassName('check');
    for (i = 0, i < check.length; i++;) {
        check[i].classList.remove('completed');
    }
    check[n].classList.add('completed');
}