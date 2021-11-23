const mongoose = require('mongoose');

const Note = require('./models/note');

mongoose.connect('mongodb://127.0.0.1:27017/noteitnowdb') // or localhost
    .then(() => {
        console.log('Mongoose : Mongo Connection Open.');
    })
    .catch(err => {
        console.log('Mongoose : Mongo Connection Error');
        console.log(err);
    })

// run file on its own separate from webapp to seed the db

// const n = new Note({
//     title : 'Mongo Note Title',
//     content : 'Hello there. This is Mongo Note',
//     dateModified: '31-11-2021 (Monday), 15:33:9'
// })
// n.save()
//     .then(p => {
//         console.log(n);
//     })
//     .catch(e => {
//         console.log(e);
// })

const seedNotes = [
    {
        "userId": "6193cb6597371f2afb28952b",
        "title": "Gonzales Perry",
        "content": "Veniam ea ipsum velit tempor. Tempor voluptate pariatur anim amet ex id officia ea magna nulla dolore eu. Exercitation magna ut eiusmod commodo anim elit Lorem mollit ullamco nisi. Cupidatat aliquip officia cillum labore sunt officia cupidatat proident aliquip et aliquip excepteur labore.\r\n",
        "dateModified": "31-11-2021 (Monday), 15:33:9"
    },
    {
        "userId": "6193cb6597371f2afb28952b",
        "title": "Alford Livingston",
        "content": "Irure do aliqua irure sit. Deserunt ut ullamco ipsum minim ut ea fugiat quis aute. Veniam et tempor irure reprehenderit ex in laborum eu labore anim reprehenderit minim voluptate sunt.\r\n",
        "dateModified": "30-11-2021 (Monday), 15:33:9"
    },
    {
        "userId": "6193f730e9a1e69d1a110e98",
        "title": "Patrice Brock",
        "content": "Mollit pariatur adipisicing proident est elit est non. Aute consequat nisi dolore labore commodo sunt quis irure enim irure. Sit dolor consequat sunt quis consequat officia culpa veniam duis voluptate enim officia est do.\r\n",
        "dateModified": "26-11-2021 (Monday), 15:33:9"
    },
    {
        "userId": "6193f730e9a1e69d1a110e98",
        "title": "Dee Tanner",
        "content": "Dolor fugiat aliqua ipsum exercitation duis. Est qui veniam nisi anim aute ex dolor duis amet anim aliquip. Exercitation ad laboris eu aliqua eu tempor minim minim dolor pariatur exercitation consequat. Aute est nisi minim tempor qui et Lorem ea occaecat occaecat Lorem labore. Amet eiusmod Lorem excepteur cupidatat excepteur exercitation sint est.\r\n",
        "dateModified": "12-11-2021 (Monday), 15:33:9"
    },
    {
        "userId": "6193f730e9a1e69d1a110e98",
        "title": "Katina Riley",
        "content": "Nostrud aute qui enim ut velit cillum adipisicing laborum laborum ut duis amet. Ullamco proident Lorem in pariatur excepteur. Laborum eiusmod magna consectetur tempor. Anim irure laboris culpa consectetur tempor duis qui qui sunt excepteur veniam officia laborum in. Nulla nulla minim velit duis aliqua dolore dolore commodo irure.\r\n",
        "dateModified": "31-11-2021 (Monday), 15:33:9"
    },
    {
        "userId": "6193f730e9a1e69d1a110e98",
        "title": "Laverne Gates",
        "content": "Qui sit enim consectetur irure nisi occaecat anim ullamco non minim nisi magna consequat pariatur. Et occaecat laboris reprehenderit deserunt enim ipsum. Et esse veniam commodo labore aute dolor qui non adipisicing.\r\n",
        "dateModified": "31-11-2011 (Monday), 15:33:9"
    },
    {
        "userId": "6193f730e9a1e69d1a110e98",
        "title": "Finch Lott",
        "content": "Laborum deserunt commodo incididunt minim velit qui enim voluptate amet id. Sunt esse mollit deserunt laborum cillum. Aute pariatur in pariatur mollit sint. Excepteur fugiat voluptate Lorem exercitation consectetur nulla est exercitation mollit excepteur.\r\n",
        "dateModified": "12-11-2021 (Monday), 15:33:9"
    },
    {
        "userId": "6193f730e9a1e69d1a110e98",
        "title": "Solomon Thornton",
        "content": "Do ex irure sit culpa Lorem fugiat fugiat aliquip enim. Velit deserunt nulla ex laborum adipisicing culpa elit. Incididunt labore fugiat nisi est incididunt velit in commodo qui culpa eiusmod. Sit velit ut laborum quis ea labore amet consequat mollit consectetur.\r\n",
        "dateModified": "31-11-2021 (Tuesday), 15:33:9"
    },
    {
        "userId": "6193f730e9a1e69d1a110e98",
        "title": "King Wilson",
        "content": "Officia laboris consectetur mollit enim occaecat quis nostrud consectetur ullamco eu. Excepteur commodo sit enim nulla dolor non. Amet cillum enim officia dolor dolor anim minim officia sint exercitation non cillum laboris dolore. Voluptate qui culpa laborum id ipsum. Officia voluptate irure reprehenderit anim. Laborum excepteur sint ipsum reprehenderit aliquip nostrud laboris adipisicing fugiat sint labore laboris do. Esse et id laboris voluptate aliqua sint eu voluptate id ut nostrud tempor.\r\n",
        "dateModified": "9-11-2021 (Monday), 15:33:9"
    },
    {
        "userId": "6193f730e9a1e69d1a110e98",
        "title": "Lucinda Kerr",
        "content": "Occaecat ex mollit do ipsum ad Lorem aliquip eiusmod incididunt. Consequat consectetur labore ex deserunt. Sit reprehenderit fugiat eu ea dolore velit ullamco sunt magna amet ipsum deserunt quis cillum. Ad dolore fugiat quis nostrud dolor irure ad cupidatat pariatur in reprehenderit cupidatat Lorem dolore.\r\n",
        "dateModified": "6-11-2021 (Monday), 15:33:9"
    },
    {
        "userId": "6193f730e9a1e69d1a110e98",
        "title": "Burke Stuart",
        "content": "Laboris laborum consectetur ex adipisicing pariatur fugiat laborum. Laboris labore occaecat aute sit cupidatat. Mollit anim excepteur veniam adipisicing incididunt exercitation laborum in et ipsum.\r\n",
        "dateModified": "7-11-2021 (Monday), 15:33:9"
    },
    {
        "userId": "6193f730e9a1e69d1a110e98",
        "title": "Rivers Dunn",
        "content": "Consequat laborum aute aliquip minim et in quis consequat irure dolore ipsum. Nulla culpa qui consectetur sit non sit consequat cillum aliquip dolore deserunt sint. Nisi sunt aute veniam ut laborum occaecat fugiat. Laboris nulla sint irure sunt laboris quis consequat. Culpa proident voluptate occaecat fugiat. Laborum do ullamco consequat adipisicing irure ullamco nostrud qui est consectetur non. Sit ullamco deserunt qui voluptate.\r\n",
        "dateModified": "8-11-2021 (Monday), 15:33:9"
    },
    {
        "userId": "6193f730e9a1e69d1a110e98",
        "title": "Geneva Dejesus",
        "content": "Cillum cillum aliquip cupidatat fugiat consequat. Ea eiusmod nisi quis mollit dolor magna id mollit adipisicing et nisi. Non nisi cupidatat ex laboris aliquip pariatur amet velit ipsum elit. Incididunt in amet quis et tempor veniam aute reprehenderit tempor. Nostrud sit ad pariatur consectetur aliqua do cillum minim aliquip minim cillum. Reprehenderit laboris ea aute minim veniam amet adipisicing labore eiusmod dolor proident occaecat.\r\n",
        "dateModified": "31-11-2021 (Friday), 15:33:9"
    },
    {
        "userId": "6193f730e9a1e69d1a110e98",
        "title": "Lorene Dillon",
        "content": "Velit adipisicing nisi exercitation aliquip labore incididunt sit labore magna duis ad elit. Commodo sit nostrud aliqua laboris quis in qui amet sint occaecat. Qui consequat dolor Lorem exercitation enim ut esse tempor quis culpa proident. Do aliquip exercitation nulla est cupidatat do duis exercitation ipsum ullamco pariatur proident mollit.\r\n",
        "dateModified": "31-11-2021 (Monday), 15:12:9"
    },
    {
        "userId": "6193f730e9a1e69d1a110e98",
        "title": "Harris Johns",
        "content": "Duis proident aliqua minim occaecat incididunt reprehenderit est laborum ex duis eiusmod do duis eu. Sint excepteur ad ad cupidatat Lorem ad ipsum. Quis ullamco et commodo sit pariatur cillum et id anim.\r\n",
        "dateModified": "31-11-2021 (Monday), 12:33:9"
    },
    {
        "userId": "6193f730e9a1e69d1a110e98",
        "title": "Hernandez Ray",
        "content": "Exercitation consequat ex esse culpa cupidatat elit voluptate sint qui cillum occaecat aliqua eu nulla. Qui consequat deserunt enim eu qui. Ipsum quis labore irure eu deserunt. Velit laboris elit duis eiusmod qui occaecat magna pariatur tempor culpa ullamco. In esse velit elit ad proident sit consequat incididunt.\r\n",
        "dateModified": "31-11-2021 (Monday), 13:33:9"
    },
    {
        "userId": "6193f730e9a1e69d1a110e98",
        "title": "Paulette Rivera",
        "content": "Elit commodo ullamco quis id eiusmod quis sint deserunt laborum irure. Pariatur culpa mollit sit nostrud pariatur ut. Sunt deserunt excepteur minim in duis ut ad mollit est commodo. Ea culpa quis elit quis proident et tempor. Quis quis ex Lorem cupidatat consectetur ex. Adipisicing laboris cillum amet consectetur.\r\n",
        "dateModified": "1-11-2021 (Monday), 15:33:9"
    },
    {
        "userId": "6193f730e9a1e69d1a110e98",
        "title": "Silva Mendez",
        "content": "Dolore ea reprehenderit exercitation ut reprehenderit commodo ut nisi adipisicing nostrud reprehenderit ea. Fugiat fugiat velit culpa labore magna veniam sit eiusmod occaecat aliquip officia pariatur ad voluptate. Nulla ut dolor occaecat veniam qui.\r\n",
        "dateModified": "5-11-2021 (Monday), 15:8:9"
    },
    {
        "userId": "6193f730e9a1e69d1a110e98",
        "title": "Lesa Grimes",
        "content": "Veniam ut consequat ex tempor esse adipisicing non do commodo minim. Duis consectetur incididunt reprehenderit anim fugiat sit do magna mollit. Mollit commodo consequat pariatur irure minim exercitation esse irure ad consequat cillum sunt dolor. Duis occaecat ipsum eiusmod non. Ea culpa cillum ipsum mollit do dolor. Dolore veniam reprehenderit incididunt ex enim aute excepteur ipsum do ea voluptate.\r\n",
        "dateModified": "31-8-2021 (Monday), 8:33:9"
    },
    {
        "userId": "6193f730e9a1e69d1a110e98",
        "title": "Lourdes Howell",
        "content": "Aliqua mollit pariatur sunt cillum aute nostrud aliqua. Non amet fugiat occaecat aliquip tempor reprehenderit enim sit commodo ad fugiat consectetur adipisicing deserunt. Incididunt ipsum pariatur irure exercitation voluptate. Officia ad do consequat dolore ut dolor magna aute duis nostrud adipisicing aliquip ad id.\r\n",
        "dateModified": "31-6-2021 (Monday), 15:6:9"
    },
    {
        "userId": "6193f730e9a1e69d1a110e98",
        "title": "Beach Conway",
        "content": "Culpa proident reprehenderit in irure mollit veniam occaecat minim. Eiusmod dolor qui sint amet ea aute velit id duis aute nisi labore nostrud. Laborum labore eu eiusmod aute non duis ea magna laboris commodo id laborum irure. Deserunt ut irure aliquip excepteur fugiat voluptate nisi dolor ea. Sint duis et labore amet. Ad cupidatat exercitation cillum magna elit duis ex consequat exercitation velit esse ut elit. Eu labore excepteur aliqua laborum quis.\r\n",
        "dateModified": "31-12-2021 (Monday), 15:37:9"
    },
    {
        "userId": "6193f730e9a1e69d1a110e98",
        "title": "Battle Welch",
        "content": "Anim nisi nostrud adipisicing esse consectetur sunt deserunt nisi aliqua. Officia est sit aliqua aute cupidatat incididunt nulla aliqua ex veniam nulla sunt. Cillum magna id quis enim irure adipisicing laboris anim aliquip adipisicing minim ut.\r\n",
        "dateModified": "30-11-2021 (Monday), 1:33:9"
    },
    {
        "userId": "6193f730e9a1e69d1a110e98",
        "title": "Cain Bates",
        "content": "Fugiat ex quis sit culpa Lorem dolore voluptate ullamco Lorem anim sit dolor. Voluptate nisi veniam anim incididunt irure non adipisicing minim non. Officia exercitation nisi pariatur quis ullamco excepteur aute eu est laborum anim Lorem veniam fugiat. Cillum aute velit veniam adipisicing.\r\n",
        "dateModified": "6-11-2021 (Monday), 5:33:9"
    }
]

Note.insertMany(seedNotes)
    .then(res => {
        console.log(res);
    })
    .catch( e => {
        console.log(e);
    })