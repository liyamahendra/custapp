export const loginService = {
    login,
    logout,
};

function login(username:string, password:string) {
    if(username=='admin' && password=='admin'){
        var user={username:'admin'};
        localStorage.setItem('user', JSON.stringify(user));
        return user;
    }
}

function logout() {
    localStorage.removeItem('user');
}