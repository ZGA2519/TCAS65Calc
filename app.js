const scorecalc = () =>{
    let gat = parseFloat(document.getElementById("gat").value);
    let pat1 = parseFloat(document.getElementById("pat1").value);
    let pat2 = parseFloat(document.getElementById("pat2").value);
    let pat3 = parseFloat(document.getElementById("pat3").value);
    let pat4 = parseFloat(document.getElementById("pat4").value);
    let pat5 = parseFloat(document.getElementById("pat5").value);
    let pat6 = parseFloat(document.getElementById("pat6").value);
    let pat71 = parseFloat(document.getElementById("pat7.1").value);
    let pat72 = parseFloat(document.getElementById("pat7.2").value);
    let pat73 = parseFloat(document.getElementById("pat7.3").value);
    let pat74 = parseFloat(document.getElementById("pat7.4").value);
    let pat75 = parseFloat(document.getElementById("pat7.5").value);
    let pat76 = parseFloat(document.getElementById("pat7.6").value);
    let pat77 = parseFloat(document.getElementById("pat7.7").value);
    let gatperc = parseFloat(document.getElementById("gatperc").value);
    let pat1perc = parseFloat(document.getElementById("pat1perc").value);
    let pat2perc = parseFloat(document.getElementById("pat2perc").value);
    let pat3perc = parseFloat(document.getElementById("pat3perc").value);
    let pat4perc = parseFloat(document.getElementById("pat4perc").value);
    let pat5perc = parseFloat(document.getElementById("pat5perc").value);
    let pat6perc = parseFloat(document.getElementById("pat6perc").value);
    let pat71perc = parseFloat(document.getElementById("pat7.1perc").value);
    let pat72perc = parseFloat(document.getElementById("pat7.2perc").value);
    let pat73perc = parseFloat(document.getElementById("pat7.3perc").value);
    let pat74perc = parseFloat(document.getElementById("pat7.4perc").value);
    let pat75perc = parseFloat(document.getElementById("pat7.5perc").value);
    let pat76perc = parseFloat(document.getElementById("pat7.6perc").value);
    let pat77perc = parseFloat(document.getElementById("pat7.7perc").value);
    
    sum1 = (gat/300*gatperc)+(pat1/300*pat1perc)+(pat2/300*pat2perc)+(pat3/300*pat3perc)+(pat4/300*pat4perc)+(pat5/300*pat5perc)+(pat6/300*pat6perc)+(pat71/300*pat71perc)+(pat72/300*pat72perc)+(pat73/300*pat73perc)+(pat74/300*pat74perc)+(pat75/300*pat75perc)+(pat76/300*pat76perc)+(pat77/300*pat77perc);
    sum2 = (gat*gatperc)+(pat1*pat1perc)+(pat2*pat2perc)+(pat3*pat3perc)+(pat4*pat4perc)+(pat5*pat5perc)+(pat6*pat6perc)+(pat71*pat71perc)+(pat72*pat72perc)+(pat73*pat73perc)+(pat74*pat74perc)+(pat75*pat75perc)+(pat76*pat76perc)+(pat77*pat77perc);
    
    document.getElementById("result1").innerHTML = sum1;
    document.getElementById("result2").innerHTML = sum2;
}
