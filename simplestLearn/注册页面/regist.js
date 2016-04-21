var usernameRegex = /^.{3,15}$/;
var passwordRegex = /.{6,12}/;
var emailRegex = /^\w+@\w+(\.\w+)+$/;
var realNameRegex = /^[\u4e00-\u9fa5]{2,5}$/;

function onSubmit() {
    var username = checkUsername();
    var password = checkPassword();
    var repassword = checkRepassword();
    var email = checkEmail();
    var realname = checkRealName();
    var provice = checkProvince();
    var hobby = checkHobby();

    return username && password && repassword && email && provice && hobby;
}

function onReset() {
    byId("username_span").style.display = "none";
    byId("password_span").style.display = "none";
    byId("repassword_span").style.display = "none";
    byId("email_span").style.display = "none";
    byId("realName_span").style.display = "none";
    byId("province_span").style.display = "none";
    byId("hobby_span").style.display = "none";
}

function checkUsername() {
    var username = byId("username").value;
    var username_span = byId("username_span");

    if (usernameRegex.test(username)) {
        username_span.style.display = "none";
        return true;
    }

    username_span.style.display = "inline";

    return false;
}

function checkPassword() {
    var password = byId("password").value;
    var password_span = byId("password_span");

    if (passwordRegex.test(password)) {
        password_span.style.display = "none";
        return true;
    }

    password_span.style.display = "inline";
    return false;
}

function checkRepassword() {
    var repassword = byId("repassword").value;
    var repassword_span = byId("repassword_span");

    if (passwordRegex.test(repassword) && repassword == byId("password").value) {
        repassword_span.style.display = "none";
        return true;
    }

    repassword_span.style.display = "inline";
    return false;
}

function checkEmail() {
    var email = byId("email").value;
    var email_span = byId("email_span");

    if (emailRegex.test(email)) {
        email_span.style.display = "none";
        return true;
    }

    email_span.style.display = "inline";
    return false;
}

function checkRealName() {
    var realName = byId("realName").value;
    var realName_span = byId("realName_span");

    if (realNameRegex.test(realName)) {
        realName_span.style.display = "none";
        return true;
    }

    realName_span.style.display = "inline";
    return false;
}


function checkProvince() {
    var province = byId("province").value;
    var province_span = byId("province_span");

    if ("--请选择--" == province) {
        province_span.style.display = "inline";
        return false;
    }

    province_span.style.display = "none";
    return true;
}

function checkHobby() {
    var hobbies = document.getElementsByName("hobby");
    var hobby_span = byId("hobby_span");

    var length = hobbies.length;

    for (var i = 0; i < length; i++) {
        if (hobbies[i].checked) {
            hobby_span.style.display = "none";
            return true;
        }
    }

    hobby_span.style.display = "inline";
    return false;
}




function byId(id) {
    return document.getElementById(id);
}
