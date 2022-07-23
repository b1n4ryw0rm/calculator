function bclick(val)
{ 
    document.getElementById("screen").value+=val
} 
function clearDisplay()
{
    document.getElementById("screen").value=""
}
function equalClick()
{
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById('screen').value=result

}
function erase()
{
    document.getElementById("screen").value=document.getElementById("screen").value.substr(0, document.getElementById("screen").value.length-1)
}