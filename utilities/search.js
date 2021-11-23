function sortNotesObj(notesObj, query){

    // const data = require('./db.json');

    let scores=[];

    // let query = "id in ut";
    if(query){
        queryWords = query.toLowerCase().split(' ');
        for(let note of notesObj){
            let noteScore = 1;
            for(let queryWord of queryWords){
                let contentNote = `${note.title} ${note.content} ${note.dateModified}`
                contentNote = contentNote.toLowerCase();
                let wordScore = 5*(contentNote.split(queryWord).length-1);
                noteScore = noteScore * (wordScore || 1);
            }
            // console.log({id:note._id,score:noteScore});
            if(noteScore!==1)
                scores.push({_id:note._id,score:noteScore});
        }
    }
    scores.sort(function(a,b){
        if(a.score<b.score)
            return 1;
        if(a.score>b.score)
            return -1;
        if(a.score===b.score)
            return 0;
    });
    dataSorted = []
    for(let score of scores){
        let obj = notesObj.find(o => o._id === score._id)
        dataSorted.push(obj);

    }

    return dataSorted;

}

module.exports = sortNotesObj;