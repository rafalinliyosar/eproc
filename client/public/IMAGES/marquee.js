function move1(whichlayer)
{

tlayer=eval(whichlayer)

if (tlayer.top>0&&tlayer.top<=5){

tlayer.top=0

setTimeout("move1(tlayer)",6000)

setTimeout("move2(document.main.document.second)",6000)

return

}

if (tlayer.top>=tlayer.document.height*-1){

tlayer.top-=5

setTimeout("move1(tlayer)",50)

}

else{

tlayer.top=parseInt(scrollerheight)

tlayer.document.write(messages[i])

tlayer.document.close()

if (i==messages.length-1)

i=0

else

i++

}

}



function move2(whichlayer){

tlayer2=eval(whichlayer)

if (tlayer2.top>0&&tlayer2.top<=5){

tlayer2.top=0

setTimeout("move2(tlayer2)",5000)

setTimeout("move1(document.main.document.first)",5000)

return

}

if (tlayer2.top>=tlayer2.document.height*-1){

tlayer2.top-=5

setTimeout("move2(tlayer2)",50)

}

else{

tlayer2.top=parseInt(scrollerheight)

tlayer2.document.write(messages[i])

tlayer2.document.close()

if (i==messages.length-1)

i=0

else

i++

}

}



function move3(whichdiv){

tdiv=eval(whichdiv)

if (parseInt(tdiv.style.top)>0&&parseInt(tdiv.style.top)<=5){

tdiv.style.top=0+"px"

setTimeout("move3(tdiv)",5000)

setTimeout("move4(second2_obj)",5000)

return

}

if (parseInt(tdiv.style.top)>=tdiv.offsetHeight*-1){

tdiv.style.top=parseInt(tdiv.style.top)-5+"px"

setTimeout("move3(tdiv)",50)

}

else{

tdiv.style.top=parseInt(scrollerheight)

tdiv.innerHTML=messages[i]

if (i==messages.length-1)

i=0

else

i++

}

}



function move4(whichdiv){

tdiv2=eval(whichdiv)

if (parseInt(tdiv2.style.top)>0&&parseInt(tdiv2.style.top)<=5){

tdiv2.style.top=0+"px"

setTimeout("move4(tdiv2)",5000)

setTimeout("move3(first2_obj)",5000)

return

}

if (parseInt(tdiv2.style.top)>=tdiv2.offsetHeight*-1){

tdiv2.style.top=parseInt(tdiv2.style.top)-5+"px"

setTimeout("move4(second2_obj)",50)

}

else{

tdiv2.style.top=parseInt(scrollerheight)

tdiv2.innerHTML=messages[i]

if (i==messages.length-1)

i=0

else

i++

}

}



function startscroll(){

if (ie||dom){

first2_obj=ie? first2 : document.getElementById("first2")

second2_obj=ie? second2 : document.getElementById("second2")

move3(first2_obj)

second2_obj.style.top=scrollerheight

second2_obj.style.visibility='visible'

}

else if (document.layers){

document.main.visibility='show'

move1(document.main.document.first)

document.main.document.second.top=parseInt(scrollerheight)+5

document.main.document.second.visibility='show'

}

}



//window.onload=startscroll
