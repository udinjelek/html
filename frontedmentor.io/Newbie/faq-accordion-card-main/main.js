// function hideUnhideAnswer(selectedId){
//     console.log(selectedId);
//     if (document.getElementById(selectedId).style.display === "none") 
//     {   document.getElementById(selectedId).style.display = "block";
//     }
//     else
//     {   document.getElementById(selectedId).style.display = "none";
//     }
  
// }

function hideUnhideAnswer(e){
    // console.log(e.target);  // to get the element
    // console.log(e.target.tagName);  // to get the element tag name alone
    // console.log(e.target.parentNode); // parent Node
    var nowNodes = e.target.parentNode.childNodes;
    if (    nowNodes[3].style.display === "none") 
    {       nowNodes[3].style.display = "block";
    }
    else
    {       nowNodes[3].style.display = "none";
    }
    
    

}