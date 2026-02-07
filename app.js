let userInput = document.getElementById("date");

let btn = document.getElementById("btn");
btn.addEventListener("click", CalculateAge);

let result = document.getElementById("result");

userInput.max = new Date().toISOString().split("T")[0];

/* new Date() -> Ye current date & time deta hai
.toISOString() ->Date ko standard ISO format string me convert karta hai
.split("T") ->"T" date aur time ko separate karta hai
[0] ->Array ka pehla part nikalta hai

User future date select nahi kar sakta
*/

function CalculateAge(){
    let birthDate = new Date(userInput.value);

    /* 
    1. User ne jo date select ki hai (date input se)
    2. Us date ko JavaScript Date object me convert karti hai
    3. Aur usko birthDate naam ke variable me store kar deti hai
    */

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;/* it  gives month no , but in js january = 0 , feb = 1 so  we need to add 1*/
    let y1 = birthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth()+1;
    let y2 = today.getFullYear();

    let d3 , m3 , y3;

    y3 = y2 - y1;

    if(m2 >= m1){
        m3 = m2 - m1;
    }else{
        y3--;
        m3 = 12 + m2 - m1; /*Pichhle birthday se kitne months hue */
    }

    if(d2 >= d1){
        d3 = d2 - d1;
    }else{
        m3--;
        d3 = getDaysInMonths(y1,m1) + d2 - d1;
    }

    if(m3 < 0){ /*Agar days calculation me m3-- ki wajah se month −1 ho jaaye: */
        m3 = 11;/*Month ko 11 (Dec) set karo and year ko ek se kam krdo */
        y3--;
    }
    
    result.innerHTML = `You are <span>${y3}</span> years ,<span> ${m3}</span> months and <span>${d3}</span> days old`;
}

function getDaysInMonths(year , month){
    return new Date(year , month , 0).getDate();


    /* 
JavaScript Date rule:

Month 0-based hota hai , to humne jo month bheja hai 1 based index ke hisab se hai to 
jis montha ka days hum chahte hai woh , next month ke days batayega
eg.
Jan = 0

Feb = 1

so , isliye hum day 0 krdenge 
Day = 0 ka matlab hota hai
👉 previous month ka last day

jisse hume previous month ki no of days mil jayenge jo hume chahiye*/
}

