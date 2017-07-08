function $(classname){
    return document.getElementsByClassName(classname)[0];
}
function $get(containerId,tagName){
    if(typeof containerId =="string" && $(containerId)){
        return $(containerId).getElementsByTagName(tagName);
    }
    else if(typeof containerId=="object")
    {
        return containerId.getElementsByTagName(tagName);
    }
    else{
        throw ("你写的第一个参数不是一个ID");
    }
}
function $create(TagName,attr){
    var dom = document.createElement(TagName);
    for(var p in attr){
        dom[p] = attr[p];
    }
    return dom;
}