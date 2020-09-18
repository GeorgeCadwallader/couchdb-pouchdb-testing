import PouchDB from 'pouchdb';
import find from 'pouchdb-find';

var db = new PouchDB('mydb');
PouchDB.plugin(find);

document.getElementById("submit-btn").addEventListener("click", function() {
    var message = document.getElementById("message-input").value;

    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1;
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    var date = day + '/' + month + '/' + year;

    var doc = {
        "_id": 'message-' + Math.floor(Math.random() * Math.floor(100000)),
        "message": message,
        "date": date
    };

    db.put(doc);
    document.getElementById("message-input").value = '';
});

var sync = PouchDB.sync(db, 'http://localhost:5984/mydb', {
  live: true,
  retry: true
}).on('change', function (info) {
    console.log(info);
});