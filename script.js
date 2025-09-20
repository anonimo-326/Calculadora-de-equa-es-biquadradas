function calcular(){
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);
    let delta = b**2-4*a*c;
    if (delta >= 0){
        let y1 = (-b+(Math.sqrt(delta)))/(2*a);
        let y2 = (-b-(Math.sqrt(delta)))/(2*a);
        if (y1 >= 0 && y2 >= 0){
            if (y1 != y2){
                let x1 = Math.sqrt(y1);
                let x2 = -Math.sqrt(y1);
                let x3 = Math.sqrt(y2);
                let x4 = -Math.sqrt(y2);
                document.getElementById('resultado').innerHTML = `\\(x = \\{${x1}, ${x2}, ${x3}, ${x4}\\}\\)`;
                MathJax.typesetPromise();
            }
            if (y1 == y2){
                let y = y1 || y2;
                let x1 = Math.sqrt(y);
                let x2 = -Math.sqrt(y);
                document.getElementById('resultado').innerHTML = `\\(x = \\{${x1}, ${x2}\\}\\)`;
                MathJax.typesetPromise();
            }
        }
        if (y1 >= 0 && y2 < 0){
            let x1 = Math.sqrt(y1);
            let x2 = -Math.sqrt(y1);
            document.getElementById('resultado').innerHTML = `\\(x = \\{${x1}, ${x2}\\}\\)`;
            MathJax.typesetPromise();
        }
        if (y1 < 0 && y2 >= 0){
            let x1 = Math.sqrt(y2);
            let x2 = -Math.sqrt(y2);
            document.getElementById('resultado').innerHTML = `\\(x = \\{${x1}, ${x2}\\}\\)`;
            MathJax.typesetPromise();
        }
        if (y1 < 0 && y2 < 0){
            document.getElementById('resultado').innerHTML = 'A equação não tem nenhuma solução.';
            MathJax.typesetPromise();
        }
        else{
            document.getElementById('resultado').innerHTML = 'A equação não tem nenhuma solução.';
        }
    }
}