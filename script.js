function main(){
    let htmlCode = document.getElementById("html_area");
    let cssCode = document.getElementById("css_area");
    let jsCode = document.getElementById("js_area");

    let output = document.getElementById("result_area");

    output.contentDocument.body.innerHTML = htmlCode.value +"<style>"+ cssCode.value +"<style>";

    output.contentWindow.eval(jsCode.value);
}