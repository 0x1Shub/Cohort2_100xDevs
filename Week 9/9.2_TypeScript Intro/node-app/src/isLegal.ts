function isLegal(age: number){
    if(age > 18){
        return true;
    }
    else{
        return false;
    }
}

if(isLegal(20) == true){
    console.log("User is Valid");
}
else{
    console.log("User is invalid");
}