function GetPassword(){

    let PasswordLenght = document.getElementById("PassLen").value;
    let IncludeLetters = document.getElementById("Cletters");
    let IncludeLettersUppercase = document.getElementById("CUletters");
    let IncludeNumbers = document.getElementById("Cnumbers");
    let IncludeSymbols = document.getElementById("Csymbols");
    let PasswordDisplay = document.getElementById("DisplayPass");

    IncludeLetters = IncludeLetters.checked ? true : false;
    IncludeLettersUppercase = IncludeLettersUppercase.checked ? true : false;
    IncludeNumbers = IncludeNumbers.checked ? true : false;
    IncludeSymbols = IncludeSymbols.checked ? true : false;

    const lettersLower = 'abcdefghijklmnopqrstuvwxyz';
    const lettersUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const Numbers = '0123456789';
    const symbols = '~!@#$%^&*()_+-={}[]|\:;<>,.?/';

    let Password = '';
    let AllowedChar = '';

    AllowedChar += IncludeLetters ? lettersLower : '';
    AllowedChar += IncludeLettersUppercase ? lettersUpper : '';
    AllowedChar += IncludeNumbers ? Numbers : '';
    AllowedChar += IncludeSymbols ? symbols : '';

    for(i = 0; i < PasswordLenght; i++){
        let RandomCharacter = Math.floor(Math.random() * AllowedChar.length);
        Password += AllowedChar.charAt(RandomCharacter);
    }

    if(Password.length <= 0){
        PasswordDisplay.textContent = `Please customize your password`;
    }
    else{
        PasswordDisplay.textContent = `Password : ${Password}`;
    }

}
