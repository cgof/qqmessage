function refresh(){
    document.getElementById('info2').remove();
    var d=document.createElement('div');
    d.id='info2';
    document.getElementById('info').appendChild(d);
    for(x in contact_list){
        var node=document.createElement("input");
        var text=x;
        node.type='checkbox';
        node.checked=true;
        node.value=contact_list[x];
        var info=document.getElementById('info2');
        info.appendChild(node);
        info.appendChild(document.createTextNode(text));
    }
}
function send_message(){
    var collection=document.getElementById('info2').children;
    for(var i=0;i<collection.length;i++){
        tar=collection[i];
        if(tar.checked==true){
            var request=new XMLHttpRequest();
            var url='http://127.0.0.1:5700/send_private_msg?'
            var str='user_id='+tar.value+'&message='+document.getElementById('text').value;
            request.open('get',url+str);
            request.send();
        }
    }
}
function check_all(){
    var checkbox=document.getElementById('info2').children;
    for(var i=0;i<checkbox.length;i++){
        checkbox[i].checked=(checkbox[i].checked==true)?false:true;
    }
}