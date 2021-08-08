
let arr3=[12,313,11,44,9,1,67,82];
let palindrome=[];
let Palin=()=>{
    arr3.filter((pal)=>{
        const str=String(pal);
        const str1=[...str].reverse().join("");
        if(str==str1){
          palindrome.push(str)
        }
    })
    console.log(palindrome);
}

Palin();