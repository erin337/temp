alert();

const daystrained=prompt ();
alert(you trained for ${daystrained}grueling days...);

if(daystrained>=15){alert("your power level is 90001!");alert("you cast your spell..."),}else{alert("your power level is 10!")}



function passexam()

function failexam()

functions first have to be declared. the function declararation includes the code that the indtuctions for the function

once a function is declared, i can be invoked or called as many times as you want anwhere in the code.$
functions declared with the function keyword are hoisted hoisted means the interpreter will hoist the code to the top of the file when the code is return


js
function convertCelsius(fahrenheit){
    return (fahrenheit - 32) * 5/9;
  }


const level=prompt ();

function describeTemperature(fahrenheit) {
    const celsuius = convertCelsius(fahrenheit);
  
    let description;
  
    if (fahrenheit < 0) {
      description = "very cold";
    } else if (fahrenheit <20) {
      description = "cold";
    } else if (fahrenheit <30) ;{
      description = "warm";
    }
    else if (fahrenheit <40) ;{
      description = "hot";
    } else (fahrenheit >=40);{
      description = "very hot";
    }
  
    return `${fahrenheit} temp is ${celsuius} fahrenheit, which is bigger than ${description}!`;
  }
  