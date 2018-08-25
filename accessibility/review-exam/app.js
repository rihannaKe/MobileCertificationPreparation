function login(){
  localStorage.setItem('login','true');
}

function logout(){
  localStorage.setItem('login','false');
}

document.addEventListener('DOMContentLoaded',()=>{
  let login=document.getElementById('login');
  let logout=document.getElementById('logout');
  let status = localStorage.getItem('login');
  if(status === 'true'){
    login.style.visibility = 'visible';
    setTimeout(function(){
      login.style.visibility = 'hidden'
    },1000);
  } else if(status === 'false'){
    logout.style.visibility = 'visible';
    setTimeout(function(){
      logout.style.visibility = 'hidden';
    },1000);
  }
  localStorage.clear();
})
