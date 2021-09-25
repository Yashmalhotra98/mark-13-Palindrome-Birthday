// var str = String(myStr);

function reverseString(str) {
    var charList = str.split('');
    var reversedList = charList.reverse();
    var reversedString = reversedList.join('');
    return reversedString;
}

function palindromeChecker(str) {
    if (str === reverseString(str)) {
        var msg = true;
        return console.log(msg);
    } else {
        var msg = false;
        return console.log(msg);
    }
    // var stringRev = reverseString(str);
    // return str === stringRev;

    //     return ((str === reverseString(str)) ? true : false);
}

// palindromeChecker("level");
// palindromeChecker("racecar");
// palindromeChecker("yash");

// function dateToString(date) {
//     var newDate = date.toString();
//     return newDate;
// }

function convertDateToStr(date) {

    var dateStr = {
        day: "",
        month: "",
        year: ""
    };

    if (date.day < 10) {
        dateStr.day = "0" + date.day;
    } else {
        dateStr.day = date.day.toString();
    }

    if (date.month < 10) {
        dateStr.month = "0" + date.month;
    } else {
        dateStr.month = date.month.toString();
    }

    dateStr.year = date.year.toString();

    return dateStr;
}

function getAllDateFormats(date) {
    var dateStr = convertDateToStr(date);

    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;

    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

function checkPalindromeForAllDateFormats(date) {
    var listOfPalindromes = getAllDateFormats(date);

    var flag = false;

    for (var i = 0; i < listOfPalindromes.length; i++) {
        if (isPalindrome(listOfPalindromes[i])) {
            flag = true;
            break;
        }
    }
    return flag;
}

// check for leap year
function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;
    }
    if (year % 100 === 0) {
        return false;
    }
    if (year % 4 === 0) {
        return true;
    }
    return false;
}


function getNextDate(date) {
    var day = date.day + 1; //increament the day
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 0 - 11
    //check for february
    if (month === 2) {
        // check for leap year
        if (isLeapYear(year)) //here if(isLeapYear[year]), big bracket(braces) was giving us the wrong console instead of 29,2,2020 --> 1,3,2020 for using 28,2,2020
        {
            if (day > 29) {
                day = 1;
                month++;
            }
        } else {
            if (day > 28) {
                day = 1;
                month++;
            }

        }
    }
    // check for months other than february
    else {
        // cheching is the day exceeds the max days in month
        if (day > daysInMonth[month - 1]) {
            day = 1;
            month++;
        }
    }
    if (month > 12) {
        month = 1;
        year++;
    }

    return {
        day: day,
        month: month,
        year: year
    };