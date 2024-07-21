function reverse(str){
    let newstring = "";
    for (let i = str.length-1;i>=0;i--) {
        newstring += str[i];
    }
    return newstring;
}

const Name="welcome";
const result = reverse(Name);
console.log(result);