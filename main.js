function main(){
    cur_url = window.location.href;
    if (cur_url.includes("shorts")) {
        var new_url = cur_url.replace("shorts", "watch");
        window.location.href = new_url;
    }
}

window.addEventListener("yt-navigate-start", main);
main()