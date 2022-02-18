let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dog_string, dog_names){
    for (dog of dog_names){
        dog_string = dog_string.toLowerCase()
        if (dog_string.indexOf(dog.toLowerCase()) != -1) {
            console.log(`Matched ${dog}.`)
        }else{
            console.log(`No Matches For ${dog}.`)
        };
    };
};

findWords(dog_string, dog_names)

arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i+=2) {
        arr.splice(i,1, "even index");
    };
    return arr
};

console.log(replaceEvens(arr))