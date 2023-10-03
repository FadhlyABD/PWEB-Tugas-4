const form = document.getElementById('form');
const nama = document.getElementById('nama');
const nrp = document.getElementById('nrp');
const matkul = document.getElementById('matkul');
const dosen = document.getElementById('dosen');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidnrp = nrp => {
  const re = /^\d+$/; // This regular expression matches one or more digits
  return re.test(nrp);
}

const validateInputs = () => {
    const namaValue = nama.value.trim();
    const nrpValue = nrp.value.trim();
    const matkulValue = matkul.value.trim();
    const dosenValue = dosen.value.trim();

    if(namaValue === '') {
        setError(nama, 'Nama is required');
    } else {
        setSuccess(nama);
    }

    if(nrpValue === '') {
        setError(nrp, 'NRP is required');
    } else if (!isValidnrp(nrpValue)) {
        setError(nrp, 'Provide a valid NRP address (Containts only numbers)');
    } else {
        setSuccess(nrp);
    }

    if(matkulValue === '') {
      setError(matkul, 'Mata Kuliah is required');
    } else {
      setSuccess(matkul);
    }

    if(dosenValue === '') {
      setError(dosen, 'Dosen is required');
    } else {
      setSuccess(dosen);
    }

};
