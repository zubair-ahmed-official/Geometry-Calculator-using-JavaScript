let i = 0;

//Sorting the Calculated results
function sortList() {
    var table;
    var rows;
    var switching;
    var i;
    var x;
    var y;
    var shouldSwitch;
    table = document.getElementById("tablenum");
    switching = true;

    while (switching) {

        switching = false;
        rows = table.rows;

        for (i = 1; i < (rows.length - 1); i++) {

            shouldSwitch = false;

            x = rows[i].getElementsByTagName("span")[0];
            y = rows[i + 1].getElementsByTagName("span")[0];

            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

const triangleArea = document.getElementById('calculateTriangle').addEventListener('click', function () {
   
    const triangleB = document.getElementById('triangleB');
    const triangleH = document.getElementById('triangleH');

    const triangleBNum = parseFloat(triangleB.value);
    const triangleHNum = parseFloat(triangleH.value);

    if(isNaN(triangleBNum) == true && isNaN(triangleHNum) == true)
    {
        alert("Please, enter numbers");
        triangleB.value = '';
        triangleH.value = '';
    }
    else if(isNaN(triangleBNum) == false && isNaN(triangleHNum) == true)
    {
        alert("Please, enter numbers");
        triangleB.value = '';
        triangleH.value = '';
    }
    else if(isNaN(triangleBNum) == true && isNaN(triangleHNum) == false)
    {
        alert("Please, enter numbers");
        triangleB.value = '';
        triangleH.value = '';
    }
    else{
    const triangleAreaValue = 0.5 * triangleBNum * triangleHNum;
    const triangleAreaValueNum = parseFloat(triangleAreaValue);
    // console.log(triangleAreaValueNum);

    const trNum = document.getElementById('trNum');
    i = i + 1;
    trNum.innerText = i;
    document.getElementById('Triangle').style.display = "block";

    triangleB.value = '';
    triangleH.value = '';
    const areaTraingle = document.getElementById('areaTraingle');
    areaTraingle.innerText = triangleAreaValueNum.toFixed(2);
    sortList();
    } 
      
    //    console.log(triangleBNum);
});

//function for the Area of both Rectangle and Parallelogram
function RecParallelArea(recParalel1Num, recParalel2Num) {
    var recParallelarea = recParalel1Num * recParalel2Num;
    var recParallelareaNum = parseFloat(recParallelarea);
    return recParallelareaNum;
}

const RecArea = document.getElementById('recArea').addEventListener('click', function () {

    var recParalel1 = document.getElementById('rec1');
    var recParalel1Num = parseFloat(recParalel1.value);
    var recParalel2 = document.getElementById('rec2');
    var recParalel2Num = parseFloat(recParalel2.value);

    if(isNaN(recParalel1Num) == true && isNaN(recParalel2Num) == true)
    {
        alert("Please, enter numbers");
        recParalel1.value = '';
        recParalel2.value = '';
    }
    else if(isNaN(recParalel1Num) == false && isNaN(recParalel2Num) == true)
    {
        alert("Please, enter numbers");
        recParalel1.value = '';
        recParalel2.value = '';
    }
    else if(isNaN(recParalel1Num) == true && isNaN(recParalel2Num) == false)
    {
        alert("Please, enter numbers");
        recParalel1.value = '';
        recParalel2.value = '';
    }
    else{
    const recNum = document.getElementById('recNum');
    i = i + 1;
    recNum.innerText = i;
    document.getElementById('Rectangle').style.display = "block";

    recParalel1.value = '';
    recParalel2.value = '';
    const recParallelArea = RecParallelArea(recParalel1Num, recParalel2Num);
    const areaRectangle = document.getElementById('areaRectangle');
    areaRectangle.innerText = recParallelArea.toFixed(2);
    // console.log(RecParallelArea())
    sortList();
}
}
);

const paralelArea = document.getElementById('recParallel').addEventListener('click', function () {

    var recParalel1 = document.getElementById('Paralel1');
    var recParalel1Num = parseFloat(recParalel1.value);
    var recParalel2 = document.getElementById('Paralel2');
    var recParalel2Num = parseFloat(recParalel2.value);

    
    if(isNaN(recParalel1Num) == true && isNaN(recParalel2Num) == true)
    {
        alert("Please, enter numbers");
        recParalel1.value = '';
        recParalel2.value = '';
    }
    else if(isNaN(recParalel1Num) == false && isNaN(recParalel2Num) == true)
    {
        alert("Please, enter numbers");
        recParalel1.value = '';
        recParalel2.value = '';
    }
    else if(isNaN(recParalel1Num) == true && isNaN(recParalel2Num) == false)
    {
        alert("Please, enter numbers");
        recParalel1.value = '';
        recParalel2.value = '';
    }
    else{
    const paraNum = document.getElementById('paraNum');
    i = i + 1;
    paraNum.innerText = i;

    document.getElementById('Parallelogram').style.display = "block";
    recParalel1.value = '';
    recParalel2.value = '';

    const recParallelArea = RecParallelArea(recParalel1Num, recParalel2Num);
    const areaParallel = document.getElementById('areaParallel');
    areaParallel.innerText = recParallelArea.toFixed(2);
    sortList();
    }
    // console.log(RecParallelArea())
}
);

//function for the Area of both Rhombus and Pentagon
function RhomPent(rhomPent1Num, rhomPent2Num) {
    var rhomPentArea = 0.5 * rhomPent1Num * rhomPent2Num;
    return rhomPentArea;
    // console.log(rhomPentArea);
}

const rhomArea = document.getElementById('rhombusArea').addEventListener('click', function () {
    
    var rhomPent1 = document.getElementById('rhombus1');
    var rhomPent1Num = parseFloat(rhomPent1.value);

    var rhomPent2 = document.getElementById('rhombus2');
    var rhomPent2Num = parseFloat(rhomPent2.value);

    if(isNaN(rhomPent1Num) == true && isNaN(rhomPent2Num) == true)
    {
        alert("Please, enter numbers");
        rhomPent1.value = '';
        rhomPent2.value = '';
    }
    else if(isNaN(rhomPent1Num) == false && isNaN(rhomPent2Num) == true)
    {
        alert("Please, enter numbers");
        rhomPent1.value = '';
        rhomPent2.value = '';
    }
    else if(isNaN(rhomPent1Num) == true && isNaN(rhomPent2Num) == false)
    {
        alert("Please, enter numbers");
        rhomPent1.value = '';
        rhomPent2.value = '';
    }
    else{
    const rhombusNum = document.getElementById('rhombusNum');
    i = i + 1;
    rhombusNum.innerText = i;

    document.getElementById('Rhombus').style.display = "block";
    rhomPent1.value = '';
    rhomPent2.value = '';
    var rhomPent = RhomPent(rhomPent1Num, rhomPent2Num);
    // console.log(rhomPent);
    const rhomPentArea = document.getElementById('areaRhombus');
    rhomPentArea.innerText = rhomPent.toFixed(2);
    sortList();
    }

});

const pentArea = document.getElementById('pentagonArea').addEventListener('click',
    function () {
        var rhomPent1 = document.getElementById('pentagon1');
        var rhomPent1Num = parseFloat(rhomPent1.value);

        var rhomPent2 = document.getElementById('pentagon2');
        var rhomPent2Num = parseFloat(rhomPent2.value);

        if(isNaN(rhomPent1Num) == true && isNaN(rhomPent2Num) == true)
        {
            alert("Please, enter numbers");
            rhomPent1.value = '';
            rhomPent2.value = '';
        }
        else if(isNaN(rhomPent1Num) == false && isNaN(rhomPent2Num) == true)
        {
            alert("Please, enter numbers");
            rhomPent1.value = '';
            rhomPent2.value = '';
        }
        else if(isNaN(rhomPent1Num) == true && isNaN(rhomPent2Num) == false)
        {
            alert("Please, enter numbers");
            rhomPent1.value = '';
            rhomPent2.value = '';
        }
        else{
        const pentagonNum = document.getElementById('pentagonNum');
        i = i + 1;
        pentagonNum.innerText = i;

        document.getElementById('Pentagon').style.display = "block";
        rhomPent1.value = '';
        rhomPent2.value = '';
        var rhomPent = RhomPent(rhomPent1Num, rhomPent2Num);
        // console.log(rhomPent);
        const rhomPentArea = document.getElementById('areaPentagon');
        rhomPentArea.innerText = rhomPent.toFixed(2);
        sortList();
        }
    });

const ellipse = document.getElementById('ellipseArea').addEventListener('click',
    function () {
        var ellipseA = document.getElementById('ellipseA');
        var ellipseANum = parseFloat(ellipseA.value);

        var ellipseB = document.getElementById('ellipseB');
        var ellipseBNum = parseFloat(ellipseB.value);


        if(isNaN(ellipseANum) == true && isNaN(ellipseBNum) == true)
        {
            alert("Please, enter numbers");
            ellipseA.value = '';
            ellipseB.value = '';
        }
        else if(isNaN(ellipseANum) == false && isNaN(ellipseBNum) == true)
        {
            alert("Please, enter numbers");
            ellipseA.value = '';
            ellipseB.value = '';
        }
        else if(isNaN(ellipseANum) == true && isNaN(ellipseBNum) == false)
        {
            alert("Please, enter numbers");
            ellipseA.value = '';
            ellipseB.value = '';
        }
        else{
        const ellipseArea = 3.1416 * ellipseANum * ellipseBNum;

        const ellipseNum = document.getElementById('ellipseNum');
        i = i + 1;
        ellipseNum.innerText = i;

        document.getElementById('Ellipse').style.display = "block";
        ellipseA.value = '';
        ellipseB.value = '';
        const areaEllipse = document.getElementById('areaEllipse');
        areaEllipse.innerText = ellipseArea.toFixed(2);

        sortList();
        }
    })