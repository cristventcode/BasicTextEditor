// Allow tabs in the textarea
$("#text-area").keydown(function (e) {
    if (e.keyCode === 9) {
        var start = this.selectionStart;
        end = this.selectionEnd;
        var $this = $(this);
        $this.val($this.val().substring(0, start) + "\t" + $this.val().substring(end));
        this.selectionStart = this.selectionEnd = start + 1;
        return false;
    }
});

// Font name data object
var fonts = {
    "Georgia": "Georgia, serif",
    "Palatino Linotype": '"Palatino Linotype", "Book Antiqua", Palatino, serif',
    "Times New Roman": '"Times New Roman", Times, serif',
    "Arial": "Arial, Helvetica, sans-serif",
    "Impact": "Impact, Charcoal, sans-serif",
    "Courier New": '"Courier New", Courier, monospace',
    "Tahoma": "Tahoma, Geneva, sans-serif"
};

// Change text color on click
$(".color").click(function () {
    $("#text-area").css({
        "color": this.innerText
    });
    $("#active-color").css({
        "background-color": this.innerText
    })
})

// Change text color on click 
$(".size").click(function () {
    $("#text-area").css({
        "font-size": parseInt(this.innerText)
    })
    $("#size-button-text").text(this.innerText + " px");
});

// Change font family on click
$(".font").click(function () {
    $("#text-area").css({
        "font-family": fonts[this.innerText]
    })
    $("#font-button-text").text(this.innerText);
});