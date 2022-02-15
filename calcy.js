function add(a,b)
{
    c=a+b;
    console.log("addition=",c);
}
function sub(a,b)
{
    c=a-b;
    console.log("subatraction=",c);
}
function mult(a,b)
{
    c=a*b;
    console.log("multiplication=",c);

}
function div(a,b)
{
    c=a/b;
    console.log("division=",c);
}
 
module.exports.addition=add
module.exports.subatraction=sub
module.exports.multiplication=mult
module.exports.division=div