function monthOfYear(monthNum) {
    switch (monthNum) {
      case 1:
        console.log(`Month is: January as Month number is ${monthNum}`);
        break;
    case 2:
        console.log(`Month is: February as Month number is ${monthNum}`);
        break;
     case 3:
        console.log(`Month is: March as Month number is ${monthNum}`);
        break;
    case 4:
        console.log(`Month is:April as Month number is ${monthNum}`);
        break;
    case 5:
        console.log(`Month is:May as Month number is ${monthNum}`);
        break;
    case 6:
        console.log(`Month is: June as Month number is ${monthNum}`);
        break;
    case 7:
        console.log(`Month is: July as Month number is ${monthNum}`);
        break;
    case 8:
        console.log(`Month is: August as Month number is ${monthNum}`);
        break;
    case 9:
        console.log(`Month is: September as Month number is ${monthNum}`);
         break;
    case 10:
        console.log(`Month is: October as Month number is ${monthNum}`);
        break;
    case 11:
        console.log(`Month is: November as Month number is ${monthNum}`);
        break;
    case 12:
        console.log(`Month is: December as Month number is ${monthNum}`);
        break;
    default:
        console.log(`Invalid input ==>  ${monthNum}`);
        break;
    }
  }
  monthOfYear(1);
  monthOfYear(2);
  monthOfYear(3);
  monthOfYear(4);
  monthOfYear(8);
  monthOfYear(10);
  monthOfYear(11);
  monthOfYear(12);
  monthOfYear(null);
  monthOfYear(undefined);
  monthOfYear(NaN);