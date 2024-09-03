// const dropdown=document.querySelector('.dropdown-content');
// const para=document.createElement('p');
// para.id="username";
// const storedName = localStorage.getItem('name');
// const logout=document.querySelector('.logout');
// const isLoggedIn=localStorage.getItem('isLoggedIn');
// if (isLoggedIn=="true" && storedName) {
//     para.textContent=`${storedName}`;
//     para.style.display="inline-block";
//     dropdown.insertBefore(para,logout);      
//     logout.style.display="inline-block";
//     document.querySelector('.login').style.display = 'none';
//     document.querySelector('.signup').style.display = 'none';
// } else {
//     localStorage.setItem('isLoggedIn',false);
//     logout.style.display="none";
//     document.querySelector('.login').style.display = 'block';
//     document.querySelector('.signup').style.display = 'block';
// }
// logout.addEventListener('click',()=>{
//     dropdown.removeChild(para)
//     localStorage.setItem('isLoggedIn',false);
//     document.querySelector('.login').style.display = 'block';
//     document.querySelector('.signup').style.display = 'block';
//     logout.style.display="none";
//     alert('You have been logged out.');
// })
    document.querySelector('.login').addEventListener('click', function () {
        window.location.href = 'login.html';
    });
    document.querySelector('.signup').addEventListener('click', function () {
        window.location.href = 'signup.html';
    });