var slideIndex = 0;
carousel();
function carousel() {
    var i;
    var x = document.getElementsByClassName("headSlide");
    for (i=0; i < x.length; i++) {
        x[i].getElementsByClassName.display="none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex -1].getElementsByClassName.display = "block";
    setTimeout(carousel, 2000);
};

$("#scrapeButton").on("click", function() {
    $.ajax({
        type:"GET",
        url:"/articles"
    }).then(function(response) {
        console.log(response);

        const articleResults = $("#results");
        articleResults.empty();

        for (i=0; i < response.length; i++) {
            const article = response[i];
            
            const saveButton = $("<button>")
                .addClass("saveButton")
                .text("Save")
                .attr("id", article._id);

            const title = $("<div>")
                .addClass("title")
                .text(article.title)
                .append(saveButton);
            
            const link = $("<a>")
                .addClass("link")
                .text(article.link)
                .attr("href", article.link)
                .attr("target", "_blank");
            
            const summary = $("<p>")
                .addClass("summary")
                .text(article.summary);
                
            const listItem = $("<li>")
                .addClass("article")
                .append(title, link, summary);
            
                articleResults.append(listItem);
        }
    });

    hideContainer();

    showScrapeResults();

});