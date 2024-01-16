    var nameError = document.getElementById('name-error');
	var phoneError = document.getElementById('phone-error');
	var emailError = document.getElementById('email-error');
	var submitError = document.getElementById('submit-errro');
	/*checking validation name*/				
	function validateName(){
		var name = document.getElementById('contact-name').value;
		
		if(name.length==0){//if the user not press any key in the placeholder
			nameError.innerHTML ='Name is required'
			return false;
		}
		if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*&/)){//pattern which checking if the name is valid
			nameError.innerHTML ='Write full name';
			return false;
		}
		/*if all the conditions exist we show this icon*/
		nameError.innerHTML = '<i  class="fas fa-check-circle"></i>';
		return true;
	}

	/*checking validation email*/
	function validateEmail(){
		var email = document.getElementById('contatc-email').value;
		if(email.length==0){//The user  not presses any key
			emailError.innerHTML = "Email is required!";
			return false;
		}
		if(!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[a-z]{2,4}$/)){
			emailError.innerHTML = 'Email Invlid';
			return false;
		}
		emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
		return true;
		

	}
	/*checking in general the situation in the whole form*/
	function validateForm(){
		if(!validateForm() || !validatePhone() || !validateEmail()){
			submitError.style.display = 'block';
			submitError.innerHTML = 'Please fix error to submit';
			setTimeout(function(){submitError.style.display = 'none'},3000);
			return false;
		}
			
	}