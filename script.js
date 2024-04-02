function generateQRCode(){
    var inputText = document.getElementById("inputText").value
    var linku = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(inputText) + "&bgcolor=ffff00"

    document.getElementById("fotoja").src = linku;
}
