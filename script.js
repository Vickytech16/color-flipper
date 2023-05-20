// 25/04/2023

function colorchange()
{
 let a=[,,,,,,]
 let i
 for (i=0;i<6;i++)
 {
 a[i]=Math.floor(Math.random()*16)
 console.log(a[i])
 switch(a[i])
 {
  case 10:
   a[i]='A'
   break
  case 11:
   a[i]='B'
   break 
  case 12:
   a[i]='C'
   break
  case 13:
   a[i]='D'
   break
  case 14:
   a[i]='E'
   break  
  case 15:
   a[i]='F'
   break
 }
 console.log(i)
}
let b=a.join()
console.log(a)
console.log(b)
str="#"+b.replaceAll(",","")
console.log(str)
let color=document.getElementById("code")
color.innerHTML= str
let main=document.getElementById("main")
main.style.background = str
}

