let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn) {
    btn.addEventListener('click',function(e){
        const styles= e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }
        else if (styles.contains('increase')){
            count++;
        }
        else if (styles.contains('reset')){
            count=0;
        }

        if(count>0){
            document.getElementById("value").style.color = "var(--clr-green-light)";
        }
        else if(count<0){
            document.getElementById("value").style.color = "var(--clr-red-dark)";
        }
        else{
            document.getElementById("value").style.color = "var(--clr-grey-1)";
        }
        value.textContent = count;
    })
});