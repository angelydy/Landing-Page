;(function () {
  var queryString = window.location.search
  var parameters = new URLSearchParams(queryString)
  var name = parameters.get('name');
  var email = parameters.get('email')

  console.log ("Name:", name, "Email", email)

  var domName = document.querySelector('[data-name]')
  domName.textContent = name;
  domName.style.fontWeight = 'bold';
  var domEmail = document.querySelector('[data-email]')
  domEmail.textContent = email;
  domEmail.style.fontWeight = 'bold';
})()