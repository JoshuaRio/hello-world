age_count = 1; //Start age count
age = 19;
while(age_count < age){
    if(age_count >= age/2){
        console.log("I'm old!");
        break;
    }
    console.log("age $ {age_count}");
    age_count++;
}
console.log('Dan is ${age_count} years old');