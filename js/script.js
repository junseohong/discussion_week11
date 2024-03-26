let pokemonList = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];

// Answers

// Question 1

document.querySelector("#host-name").innerHTML = "Junseo Hong";


// Question 2
// You can also create their own CSS classes in style.css file and use that. 


let hideButton = document.querySelector("#instruction_button");
hideButton.addEventListener("click", hideInstructions);

function hideInstructions() {
  console.log("Hide instructions button clicked");
}

// Question 3
// Try change event first
// There is another event which fires for every character. This is what we want to use.
document.getElementById('first_name').addEventListener('input', function(event) {
  if (event.target.value.toLowerCase() === 'john') {
      document.getElementById('last_name').value = 'Doe';
  }
});



// Question 4
// Try change event first
// There is another event which fires for every character. This is what we want to use.



// Question 5
// Try change event first
// There is another event which fires for every character. This is what we want to use.

const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm_password');
const passwordAlert = document.getElementById('password-alert');
const togglePasswordButton = document.getElementById('hide-password');

function updatePasswordAlert() {
    console.log("we came to update password");
    if (password.value === confirmPassword.value) {
        passwordAlert.textContent = "Password Matches";
    } else {
        passwordAlert.textContent = "Password does not match";
    }
}

function togglePasswordVisibility() {
    const isPassword = password.type === 'password';
    password.type = confirmPassword.type = isPassword ? 'text' : 'password';
    console.log("we came here ");
    togglePasswordButton.textContent = isPassword ? 'Show Password' : 'Hide Password';
}

password.addEventListener('input', updatePasswordAlert);
confirmPassword.addEventListener('input', updatePasswordAlert);
togglePasswordButton.addEventListener('click', togglePasswordVisibility);

document.addEventListener('keydown', (event) => {
    if (event.key === 'h') {
        togglePasswordVisibility();
    }
});




//Question 6

document.getElementById('radio-reset-button').addEventListener('click', function() {
  document.querySelectorAll('input[name="favorite_day"]').forEach(function(radio) {
      radio.checked = false;
  });
});




//Question 7 





//Question 8





//Question 9 

