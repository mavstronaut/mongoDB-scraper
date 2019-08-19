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

const saveNewNote = function(articleId) {
    var newNoteText = $("#noteTextInput").val();
    console.log(newNoteText);
    
    $.ajax({
        type: "POST",
        url: "/create-note/" + articleId,
        data: {body: newNoteText, article: articleId}
    }).then(function(response) {
        console.log(response);
        displayNotes(articleId);
    });
};

var displayNotes = function(articleId) {
    $.ajax({
        type: "GET",
        url: "/show-article-notes/" + articleId
    }).then(function(response) {
        console.log(response);

        document.getElementById("saved").style.display="none";
        document.getElementById("notes").style.display="block";

        const saveNoteInput = $("#button-addon4");
        saveNoteInput.empty();

        const saveNewNoteButton = $("<button>")
            .attr("id", articleId)
            .addClass("saveNewButton")
            .attr("type", "button")
            .text("Save");

        saveNoteInput.append(saveNewNoteButton);

        const savedNotes = $("#savedArticleNotes");
        savedNotes.empty();

        console.log(response);

        for (i=0; i <response.note.length; i++) {
            var savedNote = response.note[i];
            console.log(savedNote);

            const deleteNoteButton = $("<button>")
                .addClass("deleteNoteButton")
                .text("Delete")
                .attr("id", savedNote._id);
            
            const noteText = $("<p>")
                .addClass("noteText")
                .text(savedNote.body);
            
            const listItem = $("<li>")
                .addClass("articleNote")
                .append(noteText, deleteNoteButton);
            
            savedNotes.append(listItem);
        };

    


    })
}