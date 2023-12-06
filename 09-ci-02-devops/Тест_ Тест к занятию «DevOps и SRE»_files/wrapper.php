 function crossmailInit(){
    if (!(document.cookie.indexOf("g4c_x=1") + 1)) {
        let e = document.createElement("img"), t = new Date;
        t.setDate(t.getDate() + 14), e.src = "https://get4click.ru/api/cef6785ae892818edb70ed5f9ca70dd478919f78/xmail/1", e.style = "display:none;", document.body.appendChild(e), document.cookie = "g4c_x=1; expires=" + t.toUTCString()
    }
}

if (document.readyState !== "loading") {
    crossmailInit();
} else {
    document.addEventListener("DOMContentLoaded", crossmailInit);
} 