        // Ejercicio 1
        const z = 4.5;
        const resultA = Math.pow(0.42, 4) + Math.pow(3.12, 2) - 162.32 - 80.7;
        document.getElementById('result-a').textContent = `Resultado: ${resultA.toFixed(6)}`;
        
        const numerator = Math.pow(z, 3) - 23;
        const denominator = Math.cbrt(Math.pow(z, 2) + 17.5);
        const resultB = numerator / denominator;
        document.getElementById('result-b').textContent = `Resultado: ${resultB.toFixed(6)}`;
        
        // Ejercicio 2
        const t = 3.2;
        const expTerm = 0.5 * Math.exp(2 * t);
        const cubicTerm = 3.8 * Math.pow(t, 3);
        const resultTA = expTerm - cubicTerm;
        document.getElementById('result-t-a').textContent = `Resultado: ${resultTA.toFixed(6)}`;
        
        const numeratorT = 6 * Math.pow(t, 2) + 6 * t - 2;
        const denominatorT = Math.pow(t, 2) - 1;
        const resultTB = numeratorT / denominatorT;
        document.getElementById('result-t-b').textContent = `Resultado: ${resultTB.toFixed(6)}`;
        
        // Ejercicio 3
        const x = 6.5;
        const y = 3.8;
        const sumOfSquares = Math.pow(x, 2) + Math.pow(y, 2);
        const term1 = Math.pow(sumOfSquares, 2/3);
        const term2 = (x * y) / (y - x);
        const resultXA = term1 + term2;
        document.getElementById('result-x-a').textContent = `Resultado: ${resultXA.toFixed(6)}`;
        
        const sqrtTerm = Math.sqrt(x + y);
        const denominatorXY = Math.pow(x - y, 2);
        const term3 = sqrtTerm / denominatorXY;
        const term4 = 2 * Math.pow(x, 2);
        const term5 = x * Math.pow(y, 2);
        const resultXB = term3 + term4 - term5;
        document.getElementById('result-x-b').textContent = `Resultado: ${resultXB.toFixed(6)}`;
        
        // Ejercicio 4
        const c = 4.6;
        const d = 1.7;
        const a = c * Math.pow(d, 2);
        const b = (c + a) / (c - d);
        
        const expDB = Math.exp(d - b);
        const cbrtCA = Math.cbrt(c + a);
        const powCAD = Math.pow(c * a, d);
        const numeratorABCDA = expDB + cbrtCA - powCAD;
        const resultABCDA = numeratorABCDA / b;
        document.getElementById('result-abcd-a').textContent = `Resultado: ${resultABCDA.toFixed(6)}`;
        
        const termDIVc = d / c;
        const aDIVb = a / b;
        const powAB2 = Math.pow(aDIVb, 2);
        const expD = Math.exp(d);
        const resultABCDB = termDIVc + powAB2 - expD - aDIVb;
        document.getElementById('result-abcd-b').textContent = `Resultado: ${resultABCDB.toFixed(6)}`;
        
        // Ejercicio 5
        const xVal = Math.PI / 10;
        
        // Parte a
        const cosX = Math.cos(xVal);
        const sinX = Math.sin(xVal);
        
        const leftA = Math.pow(cosX, 2) - Math.pow(sinX, 2);
        const rightA = 1 - 2 * Math.pow(sinX, 2);
        
        document.getElementById('trig-a-left').textContent = `Lado izquierdo: ${leftA.toFixed(8)}`;
        document.getElementById('trig-a-right').textContent = `Lado derecho: ${rightA.toFixed(8)}`;
        
        const diffA = Math.abs(leftA - rightA);
        const verificationA = diffA < 1e-10 ? 
            `<span class="success">✓ Identidad verificada (diferencia: ${diffA.toExponential(2)})</span>` : 
            `<span class="error">✗ Las expresiones difieren en ${diffA.toExponential(2)}</span>`;
        document.getElementById('trig-a-verification').innerHTML = verificationA;
        
        // Parte b
        const tanX = Math.tan(xVal);
        
        const leftB = tanX / (sinX - 2 * tanX);
        const rightB = 1 / (cosX - 2);
        
        document.getElementById('trig-b-left').textContent = `Lado izquierdo: ${leftB.toFixed(8)}`;
        document.getElementById('trig-b-right').textContent = `Lado derecho: ${rightB.toFixed(8)}`;
        
        const diffB = Math.abs(leftB - rightB);
        const verificationB = diffB < 1e-10 ? 
            `<span class="success">✓ Identidad verificada (diferencia: ${diffB.toExponential(2)})</span>` : 
            `<span class="error">✗ Las expresiones difieren en ${diffB.toExponential(2)}</span>`;
        document.getElementById('trig-b-verification').innerHTML = verificationB;