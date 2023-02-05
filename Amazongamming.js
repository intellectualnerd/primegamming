var i = 0, j = 0, k = 1, t = 2000, o = 0,parth=0;
var start = 0;
var start2 = 0;
function dropdown() {
    if (start2 == 1) {
        dropdown2();
    }
    if (i % 2 == 0) {
        start = 1;
        document.getElementById('dropdown').className = 'wrap';
        document.getElementById('down').className = 'none';
        document.getElementById('up').className = 'display';
    }
    if (i % 2 == 1) {
        start = 0;
        document.getElementById('dropdown').className = 'dropdownmenu';
        document.getElementById('down').className = 'display';
        document.getElementById('up').className = 'none';
    }
    i++;
}
function dropdown2() {
    if (start == 1) {
        dropdown();
    }
    if (j % 2 == 0) {
        start2 = 1;
        document.getElementById('dropdown2').className = 'wrap';
        document.getElementById('down2').className = 'none';
        document.getElementById('up2').className = 'display';
    }
    if (j % 2 == 1) {
        start2 = 0;
        document.getElementById('dropdown2').className = 'dropdownmenu';
        document.getElementById('down2').className = 'display';
        document.getElementById('up2').className = 'none';
    }
    j++;
}
function wait(delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("");
        }, delay);
    });
}
function k1(){
    k=0;
    if(o==0){
        k=1;
    }
}
function k2(){
    k=1;
    if(o==0){
        k=2;
    }
}
function k3(){
    k=2;
    if(o==0){
        k=3;
    }
}
function k4(){
    k=3;
    if(o==0){
        k=4;
    }
}
function k5(){
    k=4;
    if(o==0){
        k=5;
    }
}
async function changeback() {   
 

    o = o + 1;
    if(o==2){
        document.getElementById('p').className = 'display';
        document.getElementById('c').className = 'none';
        document.getElementById('p1').className = 'display';
        document.getElementById('c1').className = 'none';
        document.getElementById('p2').className = 'display';
        document.getElementById('c2').className = 'none';
        document.getElementById('p3').className = 'display';
        document.getElementById('c3').className = 'none';
        document.getElementById('p4').className = 'display';
        document.getElementById('c4').className = 'none';
        document.getElementById('p5').className = 'display';
        document.getElementById('c5').className = 'none';
    }
    if (o == 1) {
        document.getElementById('c').className = 'display';
        document.getElementById('p').className = 'none';
        document.getElementById('c1').className = 'display';
        document.getElementById('p1').className = 'none';
        document.getElementById('c2').className = 'display';
        document.getElementById('p2').className = 'none';
        document.getElementById('c3').className = 'display';
        document.getElementById('p3').className = 'none';
        document.getElementById('c4').className = 'display';
        document.getElementById('p4').className = 'none';
        document.getElementById('c5').className = 'display';
        document.getElementById('p5').className = 'none';
        document.getElementById('blackback1').className = ' none';
        document.getElementById('blackback2').className = ' none';
        document.getElementById('blackback2').className = ' none';
        document.getElementById('blackback4').className = ' none';
        document.getElementById('blackback5').className = ' none';
        for (; k <= 6; k++) {
            if(k==6){
                k=0;
            }
            if (k == 1) {
                document.getElementById('blackback1').className = ' blackback';
                document.getElementById('k1').className = 'wborder';
                document.getElementById('c1').className = 'display';
                document.getElementById('p1').className = 'none';
                await wait(t);
                if (o == 2) {
                    o = 0;
                    break;
                }
                document.getElementById('blackback1').className = ' none';
            }
            else if (k == 2) {
                document.getElementById('blackback2').className = ' blackback';
                document.getElementById('k2').className = 'wborder';
                await wait(t);
                if (o == 2) {
                    o = 0;
                    break;
                }
                document.getElementById('blackback2').className = ' none';
            }
            else if (k == 3) {
                document.getElementById('blackback3').className = ' blackback';
                document.getElementById('k3').className = 'wborder';        
                await wait(t);
                if (o == 2) {
                    o = 0;
                    break;
                }
                document.getElementById('blackback3').className = ' none';
            }
            else if (k == 4) {
                document.getElementById('blackback4').className = ' blackback';
                document.getElementById('k4').className = 'wborder';
                await wait(t);
                if (o == 2) {
                    o = 0;
                    break;
                }
                document.getElementById('blackback4').className = ' none';
            }
            else if (k == 5) {
                document.getElementById('blackback5').className = ' blackback';
                document.getElementById('k5').className = 'wborder';
                await wait(t);
                if (o == 2) {
                    o = 0;
                    break;
                }
                document.getElementById('blackback5').className = ' none';
            }
        }
    }
}
  