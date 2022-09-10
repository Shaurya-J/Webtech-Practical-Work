//fibonacci series
document.write("<br>");
 let currnet_no=0;
 let next_no=1;
 let sum=0;
 let i=0;
 document.write(currnet_no+"<br>");
 document.write(next_no+"<br>");
 for(i=2;i<101;i++)
 {
     sum=currnet_no+next_no;
     currnet_no=next_no;
     next_no=sum;
     document.write(sum+"<br>");
 }
document.write("<br>");

// // fizzbuzz

 for(i=1;i<101;i++)
 {
     if(i%15==0)
     {
         document.write("fizzbuzz<br>");
     }
     else if(i%3==0)
     {
         document.write("fizz<br>");
     }
     else if(i%5==0)
     {
         document.write("buzz<br>");
     }
     else
     {
         document.write(i+"<br>");
     }
}
document.write("<br>");

//factorial
let num=5;
i=1;
let f=1;
while(i<=num)
{
    f=f*i;
    i++;
}
document.write(f);
document.write("<br>");

// staircase
// change the link of script on order to run
let j=0;
i=0;
for(i=0;i<5;i++) 
{
    const rect = document.createElement("div");
    rect.classList.add("rect");
    const a = document.getElementById("box");
    a.appendChild(rect);
    const rect1 = document.createElement("div1");
    rect1.classList.add("rect1");
    const a1 = document.getElementById("box1");
    a1.appendChild(rect1);
}