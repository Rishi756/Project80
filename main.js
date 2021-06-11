

var names_of_people=[];

function sort(){
    names_of_people.sort();
    document.getElementById("sortednames").innerHTML=names_of_people;
}
function submit(){
    var GuestName= document.getElementById("guest_names").value;
    names_of_people.push(GuestName);
    document.getElementById("showname").innerHTML=names_of_people;
    document.getElementById("guest_names").value="";
    
    
}
function searchthelist(){
    var s=document.getElementById("search").value;
    var found=0;
    var j;
    for(j=0; j<names_of_people.length; j++)
    {
        if(s==names_of_people[j]){
            found=found+1;
        }
    }
    document.getElementById("showresult").innerHTML="name found"+found;
}