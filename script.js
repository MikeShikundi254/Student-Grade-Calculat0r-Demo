function calculateResult(){
    let math= parseFloat(document.getElementById("math").value);
        let english= parseFloat(document.getElementById("english").value);
            let science= parseFloat(document.getElementById("science").value);
             let output=document.getElementById("output");

            if(isNaN(math) || isNaN(english) || isNaN(science)){
                output.style.display="block";
                output.innerText="Please enter valid numbers for all subjects.";
                return;
            }
        
        let mean=(math+english+science)/3;
    let grade;
let comment;
if(mean>=70){
    grade="A";
    comment="Excellent performance!";
} else if(mean>=60){
    grade="B";
    comment="Very Good job!";
}else if(mean>=50){
    grade="C";
    comment="Good effort!";
}else if(mean>=40){
    grade="D";
    comment="You can Improve!";
}else {
    grade="F";
    comment="Needs serious improvement!";
}
output.style.display="block";
output.style.borderColor="darkorchid";
output.innerText="Mean Score:"+mean.toFixed(2)+ "\n"+ "Grade:"+grade+ "\n" +"Comment:"+comment;
}
