// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc

function myFunction(a, b) {
   
 let reverseB = b.split("");
 let arrreverseB=reverseB.reverse();
 let joinB=arrreverseB.join("");
 let joinAB=a+joinB;
 let result=joinAB.replace("%","")
 let result2=result.charAt(0).toUpperCase()+result.slice(1);
 return result2;
 }