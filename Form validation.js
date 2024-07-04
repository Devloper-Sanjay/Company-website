function validateForm(event){
    event.preventDefault();

    document.querySelectorAll('.error-message').forEach(element=>{element.textContent='';});

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phonenumber = document.getElementById("mobilenumber").value.trim();
    const university = document.getElementById("university").value.trim();
    const year = document.getElementById("year").value.trim();
    const country = document.getElementById("country").value.trim();
    const course = document.getElementById("course").value.trim();
    const duration = document.getElementById("duration").value.trim();
    
    if(name===""){
      document.getElementById('nameError').textContent='Please enter your name';
      return false;
    }
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById("emailError").textContent = 'Please enter a valid email address';
      return false;
    }

    var numberRegex = /^[0-9]{10}$/;
    if(!numberRegex.test(phonenumber)){
        document.getElementById("mobileError").textContent = 'Please enter a valid mobile number';
        return false;
    }

    var yearRegex=/^[0-9]{4}$/
    if(!yearRegex.test(year) || parseInt(year) < 2017 || parseInt(year) > new Date().getFullYear()){
      document.getElementById('yearError').innerText='Please enter a valid year';
      return false;
    }
    
    if(course==='Select'){
      document.getElementById('courseError').innerText = 'Please select a course';
      return false;
    }

    if(duration==='Select'){
      document.getElementById('durationError').innerText = 'Please select course duration';
      return false;
    }
    document.getElementById('registrationForm').submit();
    return true;
}
