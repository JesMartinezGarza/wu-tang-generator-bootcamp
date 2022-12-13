// Goal: Create a Wu-Tang Clan name generator. Present the user with 5 survey questions and based on those answers randomly generate their name. The name doesn't have to be exact names, but Wu-Tang sounding-ish names. Ex: Childish Gambino (who actually got his name from a Wu-Tang name generator).

let firstWu = ['Ancient','Big','Childish','Dangerous','Exceptional','Ferocious','Grand','Howling','Imaculate','Jolly','Killer','Loving','Money','Notorious','Oedipus','Pontius','Quest','Ringo','Savage','Trinidad','Ultra','Violet','Wholesome','Xolo','Yolo','Zolo']

let lastWu = ['Alabama','Bompton','Capper','Dingus','Ermentrout','Flex','Gambino','Hubris','Insolence','Juniper','Ketchup','Liver','Montoya','Neurotic','Orange','Pilot','Queens','Rittenhouse','Sauce','Timberland','Usurper','Vape','Willow','Xavier','Yayo','Zion']

let generate = document.querySelector('button')
generate.addEventListener('click', getName)

function getName(){

    let originalFirst = document.querySelector('#firstName').value.toLowerCase();
    let originalLast = document.querySelector('#lastName').value.toLowerCase();
    let favRapper = document.querySelector('#favRapper').value;
    let favRapperFav = document.querySelector('#favRapperFav').value;
    let firstConcert = document.querySelector('#firstConcert').value;

    let x = originalFirst.charAt(0)
    let y = originalLast.charAt(0)
    let indexAddedToFirstWu
    let indexAddedToLastWu

    let sumOfLengths = (favRapper.length) + (favRapperFav.length) + (firstConcert.length)
    indexAddedToFirstWu = sumOfLengths
    indexAddedToLastWu = sumOfLengths


    for(let i = 0; i < firstWu.length; i++){
        if(x === firstWu[i].charAt(0).toLowerCase()){
            x = firstWu[(i + indexAddedToFirstWu) % 25]
        }
    }

    for(let i = 0; i < lastWu.length; i++){
        if(y === lastWu[i].charAt(0).toLowerCase()){
            y = lastWu[(i + indexAddedToLastWu) % 25]
        }
    }



    if(originalFirst === 'donald' && originalLast === 'glover'){
        x = 'Childish'
        y = 'Gambino'
        document.querySelector('#placeForName').innerText = 'Childish Gambino'
    }else
        document.querySelector('#placeForName').innerText = x + " " + y
}
