document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const schoolName = document.getElementById('Schoolname').value;
    const candidateName = document.getElementById('Candidatename').value;
    const schoolEmail = document.getElementById('Schoolemail').value;
    const schoolCountry = document.getElementById('Schoolcountry').value;
    const formData = {
        schoolName: schoolName,
        candidateName: candidateName,
        schoolEmail: schoolEmail,
        schoolCountry: schoolCountry
    };

    saveFormData(formData);
});

function saveFormData(formData) {
    const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];

    storedFormData.push(formData);

    localStorage.setItem('formData', JSON.stringify(storedFormData));
}

function createCandidate(){
    let btn = document.getElementById('btn');
    btn.onclick = alert(`You have 2minutes to complete the Quiz. Click 'OK' to procced`)
    window.location.href = ('lumenQandA.html')
}