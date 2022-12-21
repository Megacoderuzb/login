function $(name){
    return document.querySelector(name)
}

function $$(tagName, className, data){
    let element = document.createElement(tagName)
    element.className = className
    element.innerHTML = data
    return element
}

export default {$, $$}