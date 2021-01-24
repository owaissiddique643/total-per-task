function abc(){
    let no1 = document.getElementById("no1").value
    // console.log(no1)
    let no2 = document.getElementById("no2").value
    // console.log(omarks);
    let marks = (no2/no1*100)
    // console.log(marks);
    document.getElementById("result").innerHTML = Math.floor(marks)


    if (marks >= 80 && marks<=100 ) {
        alert("A+1")
    }
    else if (marks>=70 && marks<=79){
        alert("A")
    }
    else if (marks>=60 && marks<=69){
        alert("B")
    }
    else if (marks>=50 && marks<=59){
        alert("C")
    }
    else if (marks>=1 && marks<=49){
        alert("Ja Beta Mehnat Kar")
    }
}

