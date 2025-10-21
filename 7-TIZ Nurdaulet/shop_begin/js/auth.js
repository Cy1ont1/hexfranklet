// TODO: переключение вкладок (Вход / Регистрация)
document.getElementById("show-login").addEventListener("click", () => {
    document.getElementById("login-form").style.display="flex",
    document.getElementById("register-form").style.display="none"
});

document.getElementById("show-register").addEventListener("click", () => { 
    document.getElementById("login-form").style.display="none",
    document.getElementById("register-form").style.display="flex"
});
// TODO: регистрация нового пользователя (сохранять в localStorage)

// TODO: вход (проверять email + пароль в localStorage)

// TODO: при успешном входе сохранять currentUser в localStorage и перенаправлять на index.html
