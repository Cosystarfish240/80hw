name_of_the_student_array = [];
function submit()
{
    var display_student_array = [];

    for (var j = 1; j <= 5; j++)
    {
var name_of_the_student= document.getElementById("name_of_the_student_"+j).value;
console.log(name_of_the_student);
name_of_the_student_array.push(name_of_the_student);
    }

    console.log(name_of_the_student_array);

    var length_of_name_of_student_array = name_of_the_student_array.length;
    console.log(length_of_name_of_student_array);

    for(var k = 0; k <length_of_name_of_student_array; k++)
    {
        display_student_array.push("<h4>NAME - "+ name_of_the_student_array[k] + "</h4>")
        console.log(display_student_array);
    }
    console.log(display_student_array);
    document.getElementById("display_name_with_commas").innerHTML = display_student_array;

    var remove_commas = display_student_array.join("");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;

    document.getElementById("submit_button").style.display = "none";
    document.getElemaentById("sort_button").style.display = "inline-block";
}
function searching()
{
var s= document.getElementById("s1").value;
var found=0;
var j;
for(j=0; j<name_of_the_student_array.length; j++)
{

    if(s==name_of_the_student_array[j]){
        found=found+1;
    }
}
document.getElementById("display_name_without_commas").innerHTML="name found"+found+" time/s";
console.log("found name"+found+" time/s");
}