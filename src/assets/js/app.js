$(document).foundation()

function applyCss() {
    
    var lines = ['#bob{']
    lines.push(document.querySelector('#code').value)
    lines.push('}')
    var css = lines.join('')

    console.log(css)

    var element = document.createElement('style')
    element.setAttribute('type', 'text/css')
    element.textContent = css
    document.getElementsByTagName('head')[0].appendChild(element)

}