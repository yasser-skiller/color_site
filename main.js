//variable
var color_name = document.querySelector(".color_name");
var btn = document.querySelector(".btn");
var btn_copy = document.querySelector(".btn_copy");
var btn_Hex = document.querySelector(".Hex");
var btn_RGB = document.querySelector(".RGB");
var copy = document.querySelector(".copy");



// RGB Case
function RGB_color(){
    var r = Math.floor(Math.random() * 250);
    var g = Math.floor(Math.random() * 250);
    var b = Math.floor(Math.random() * 250);

    color_name.textContent = `rgb(${r},${g},${b})`;
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
    copy.style.backgroundColor = `rgb(${r},${g},${b})`;

};

//Hex Case
function Hex_color(){
    var color = '#'
    var unit = '1234567890abcdef'.split('');
    for(var i=0; i<6 ;i++){
       color += unit [Math.floor(Math.random() * 15)]
    }
    color_name.textContent = color;
    document.body.style.backgroundColor = color;
    copy.style.backgroundColor = color;
};


//Run Hex Case
btn_Hex.addEventListener('click',function(){
    this.classList.add('work');
    btn_RGB.classList.remove('work')

});

//Run RGB Case
btn_RGB.addEventListener('click',function(){
    this.classList.add('work');
    btn_Hex.classList.remove('work')
});


btn.addEventListener('click',()=>{
    //to change case

    if(btn_Hex.classList.contains('work')){
        // run change fun
        Hex_color();
        //change btn txt
        if(btn.textContent = 'Click Me'){
            btn.textContent = 'Change Color'
        }; 
    }
    if(btn_RGB.classList.contains('work')){
        RGB_color();
        //change btn txt
        if(btn.textContent = 'Click Me'){
            btn.textContent = 'Change Color'
        }; 

    }
});

//copy btn
btn_copy.addEventListener('click',()=>{
    document.querySelector('.copy').value = color_name.innerHTML;
    document.querySelector('.copy').select();
    document.execCommand("copy");

    if(btn_copy.textContent == 'Copy Color'){
        btn_copy.textContent = 'Copied'
    }
});

setInterval(()=>{
    if(btn_copy.textContent == 'Copied'){
        btn_copy.textContent = 'Copy Color'
    }
},2000)


