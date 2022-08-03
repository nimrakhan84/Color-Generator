function colorChanger(color_id , event){
    event.preventDefault();
    let sliptting = color_id.split("-");
    let value_id = sliptting[1];
    let color_value = document.getElementById(color_id).value;
    document.getElementById(value_id).innerHTML=color_value;

    document.getElementById('c-'+value_id).innerHTML=color_value;

    let bg_color=document.getElementById('rgb').textContent;

    document.getElementById('color-box').style.backgroundColor=bg_color;

}