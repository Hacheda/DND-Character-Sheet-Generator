function charRace2(){

    let racesArry = ["Dragonborn", "Dwarf", "Elf", "Gnome", "Half-Elf", "Halfling", "Half-Orc", "Human", "Tiefling"];

    function fyShuffle(arr) {       // fisher-yates shuffle function
        let i = arr.length;
        while (--i > 0) {
        let randIndex = Math.floor(Math.random() * (i + 1));
        [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
        }
        return arr;
    }

    fyShuffle(racesArry);       // shuffles array

    for (i = 0; i < 8; i++){        // pops array until one remains
        racesArry.pop();
    }


    //raceStorage.push = (racesArry.toString());

    document.getElementsByName('cRace')[0].value = racesArry;

    }
function charFirstName2(){
    
        let typeAConsonant = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", 
                                "r", "s", "t", "v", "w", "y", "b", "c", "d", "f", "g",   
                                "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w",
                                "y", "sh", "ch", "th", "sh", "ch", "th", "sh", "ch", "th"]
        let typeBConsonant = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", 
                                "r", "s", "t", "v", "w", "x", "y", "z", "b", "c", "d", "f", "g",   
                                "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w",
                                "x", "y", "z", "sh", "ch", "th", "sh", "ch", "th", "sh", "ch", "th"]
        let typeCConsonant = ["d", "f", "g", "h", "j", "l", "n", "p", "q", 
                                "r", "s", "v", "w", "y", "d", "f", "g",   
                                "h", "j", "l", "n", "p", "q", "r", "s", "v", "w",
                                "y", "sh", "sh", "sh"]

        let vowelArry = ["a", "e", "i", "o", "u", "a", "e", "i", "o", 
                        "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u"]

        let wordLength = Math.floor(Math.random() * (9 - 3 + 1) + 3)    // creates a word length between 3 and 9

        function fyShuffle(arr) {                       // fisher-yates shuffle
            let i = arr.length;
            while (--i > 0) {
            let randIndex = Math.floor(Math.random() * (i + 1));
            [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
            }
            return arr;
        }

        fyShuffle(vowelArry);                           // shuffling both primary arrays
        fyShuffle(typeAConsonant);
        fyShuffle(typeBConsonant);
        fyShuffle(typeCConsonant);

        let consonantToAdd = [];
        let vowelToAdd = [];


        if (cRace == "Human"){
            for (let i = 0; i < wordLength; i++){           // stores consonants from shuffled
                consonantToAdd.push(typeAConsonant[i])       // consonant array to new array and limits entries to wordLength
            }       

        } else if (cRace == "Dwarf"){
            for (let i = 0; i < wordLength; i++){           // stores consonants from shuffled
                consonantToAdd.push(typeAConsonant[i])       // consonant array to new array and limits entries to wordLength
            }  
        } else if (cRace == "Dragonborn"){
            for (let i = 0; i < wordLength; i++){           // stores consonants from shuffled
                consonantToAdd.push(typeAConsonant[i])       // consonant array to new array and limits entries to wordLength
            }  
        } else if (cRace == "Gnome"){
            for (let i = 0; i < wordLength; i++){           // stores consonants from shuffled
                consonantToAdd.push(typeAConsonant[i])       // consonant array to new array and limits entries to wordLength
            }  
        } else if (cRace == "Halfling"){
            for (let i = 0; i < wordLength; i++){           // stores consonants from shuffled
                consonantToAdd.push(typeAConsonant[i])       // consonant array to new array and limits entries to wordLength
            }  
        } else if (cRace == "Elf"){
            for (let i = 0; i < wordLength; i++){           // stores consonants from shuffled
                consonantToAdd.push(typeCConsonant[i])       // consonant array to new array and limits entries to wordLength
            }
        }  else if (cRace == "Half-Elf"){
            for (let i = 0; i < wordLength; i++){           // stores consonants from shuffled
                consonantToAdd.push(typeCConsonant[i])       // consonant array to new array and limits entries to wordLength
            }
        } else if (cRace == "Tiefling"){
            for (let i = 0; i < wordLength; i++){           // stores consonants from shuffled
                consonantToAdd.push(typeCConsonant[i])       // consonant array to new array and limits entries to wordLength
            }
        } else {
            for (let i = 0; i < wordLength; i++){           // stores consonants from shuffled
                consonantToAdd.push(typeBConsonant[i])       // consonant array to new array and limits entries to wordLength
            }
        }

        for (let i = 0; i < wordLength; i++){ 
            vowelToAdd.push(vowelArry[i])
        }

        let vowelConsonantArry = [];                    // new array waiting for concat of vowel consonant

        let i, l = Math.min(consonantToAdd.length, vowelToAdd.length); // function for merging consonant and vowel arrays in an alternating fashion
            
        for (i = 0; i < l; i++) {
            vowelConsonantArry.push(consonantToAdd[i], vowelToAdd[i]);
        }
        vowelConsonantArry.push(...consonantToAdd.slice(l), ...vowelToAdd.slice(l));

        let wordLengthB = Math.floor(Math.random() * (9 - 4 + 1) + 3)    

        for (i = 0; vowelConsonantArry.length > wordLengthB; i++){ // popping the final array to 5 characters long or less. 
            vowelConsonantArry.pop()
        }


        let preExitString = vowelConsonantArry.toString();   // convering the array to a string
        let exitString = preExitString.replace(/,/g, '');   // removing spaces (?)
        let exitStringFInal = exitString[0].toUpperCase() + exitString.substring(1) // setting the first character to be uppercase

        document.getElementsByName('fname')[0].value = exitStringFInal;

}
function charLastName2(){

    let typeAConsonant = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", 
                                            "r", "s", "t", "v", "w", "y", "b", "c", "d", "f", "g",   
                                            "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w",
                                            "y", "sh", "ch", "th", "sh", "ch", "th", "sh", "ch", "th"]
                    let typeBConsonant = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", 
                                            "r", "s", "t", "v", "w", "x", "y", "z", "b", "c", "d", "f", "g",   
                                            "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w",
                                            "x", "y", "z", "sh", "ch", "th", "sh", "ch", "th", "sh", "ch", "th"]
                    let typeCConsonant = ["d", "f", "g", "h", "j", "l", "n", "p", "q", 
                                            "r", "s", "v", "w", "y", "d", "f", "g",   
                                            "h", "j", "l", "n", "p", "q", "r", "s", "v", "w",
                                            "y", "sh", "sh", "sh"]

                    let vowelArry = ["a", "e", "i", "o", "u", "a", "e", "i", "o", 
                                    "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u"]

                    let wordLength = Math.floor(Math.random() * (9 - 3 + 1) + 3)    // creates a word length between 3 and 9

                    function fyShuffle(arr) {                       // fisher-yates shuffle
                        let i = arr.length;
                        while (--i > 0) {
                        let randIndex = Math.floor(Math.random() * (i + 1));
                        [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
                        }
                        return arr;
                    }

                    fyShuffle(vowelArry);                           // shuffling both primary arrays
                    fyShuffle(typeAConsonant);
                    fyShuffle(typeBConsonant);
                    fyShuffle(typeCConsonant);

                    let consonantToAdd = [];
                    let vowelToAdd = [];


                    if (cRace == "Human"){
                        for (let i = 0; i < wordLength; i++){           // stores consonants from shuffled
                            consonantToAdd.push(typeAConsonant[i])       // consonant array to new array and limits entries to wordLength
                        }       

                    } else if (cRace == "Dwarf"){
                        for (let i = 0; i < wordLength; i++){           // stores consonants from shuffled
                            consonantToAdd.push(typeAConsonant[i])       // consonant array to new array and limits entries to wordLength
                        }  
                    } else if (cRace == "Dragonborn"){
                        for (let i = 0; i < wordLength; i++){           // stores consonants from shuffled
                            consonantToAdd.push(typeAConsonant[i])       // consonant array to new array and limits entries to wordLength
                        }  
                    } else if (cRace == "Gnome"){
                        for (let i = 0; i < wordLength; i++){           // stores consonants from shuffled
                            consonantToAdd.push(typeAConsonant[i])       // consonant array to new array and limits entries to wordLength
                        }  
                    } else if (cRace == "Halfling"){
                        for (let i = 0; i < wordLength; i++){           // stores consonants from shuffled
                            consonantToAdd.push(typeAConsonant[i])       // consonant array to new array and limits entries to wordLength
                        }  
                    } else if (cRace == "Elf"){
                        for (let i = 0; i < wordLength; i++){           // stores consonants from shuffled
                            consonantToAdd.push(typeCConsonant[i])       // consonant array to new array and limits entries to wordLength
                        }
                    }  else if (cRace == "Half-Elf"){
                        for (let i = 0; i < wordLength; i++){           // stores consonants from shuffled
                            consonantToAdd.push(typeCConsonant[i])       // consonant array to new array and limits entries to wordLength
                        }
                    } else if (cRace == "Tiefling"){
                        for (let i = 0; i < wordLength; i++){           // stores consonants from shuffled
                            consonantToAdd.push(typeCConsonant[i])       // consonant array to new array and limits entries to wordLength
                        }
                    } else {
                        for (let i = 0; i < wordLength; i++){           // stores consonants from shuffled
                            consonantToAdd.push(typeBConsonant[i])       // consonant array to new array and limits entries to wordLength
                        }
                    }

                    for (let i = 0; i < wordLength; i++){ 
                        vowelToAdd.push(vowelArry[i])
                    }

                    let vowelConsonantArry = [];                    // new array waiting for concat of vowel consonant

                    let i, l = Math.min(consonantToAdd.length, vowelToAdd.length); // function for merging consonant and vowel arrays in an alternating fashion
                        
                    for (i = 0; i < l; i++) {
                        vowelConsonantArry.push(consonantToAdd[i], vowelToAdd[i]);
                    }
                    vowelConsonantArry.push(...consonantToAdd.slice(l), ...vowelToAdd.slice(l));

                    let wordLengthB = Math.floor(Math.random() * (9 - 4 + 1) + 3)    

                    for (i = 0; vowelConsonantArry.length > wordLengthB; i++){ // popping the final array to 5 characters long or less. 
                        vowelConsonantArry.pop()
                    }

                    let preExitString = vowelConsonantArry.toString();   // convering the array to a string
                    let exitString = preExitString.replace(/,/g, '');   // removing spaces (?)
                    let exitStringFInal = exitString[0].toUpperCase() + exitString.substring(1) // setting the first character to be uppercase

                    document.getElementsByName('lname')[0].value = exitStringFInal;
}
function charClass2(){

        let charClassesArry = ["Artificer", "Barbarian", "Bard", "Cleric", "Druid", "Fighter",
                                "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock",
                                "Wizard"];

        function fyShuffle(arr) {       // fisher-yates shuffle function
            let i = arr.length;
            while (--i > 0) {
            let randIndex = Math.floor(Math.random() * (i + 1));
            [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
            }
            return arr;
        }

        fyShuffle(charClassesArry);     // shuffles array

        for (i = 0; i < 12; i++){
            charClassesArry.pop();
        }

        document.getElementsByName('cClass')[0].value = charClassesArry;
        

        


}