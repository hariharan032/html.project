var productcontainer = document.getElementById("produts")
var search = document.getElementById("search")
var productlist = productcontainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredvalue = event.target.value.toUppercase()

    for(count=0;count<productlist.length;count=count+1)
    {
        var productname = productlist[count].querySelector("p").textContent

        if(productname.toUppercase().indexof(enteredvalue)<0)
        {
            productlist[count].style.display="none"
        }
        else{
            product[count].style.display="block"

        }
        
    }
})