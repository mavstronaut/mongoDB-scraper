var articleIdFromNote;

const clearTextField = function() {
    document.getElementById('noteTextInput').value="";
};

const deleteSavedArticle = function(articleId) {
    $.ajax({
        type: "PUT",
        url: "/delete-from-saved/" + articleId
    }).then(function(response) {
        console.log(JSON.stringify(response));
        displaySaved();
    });
};