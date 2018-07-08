let val;
let valDoc;

valDoc = document;
console.log(valDoc);

val = document.all;

val = document.all[2];
// you can access the indexes of the tag within an array
val = document.all.length;

val = document.head;
// you can access only the head element alone by adding.head

val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;

val = document.characterSet;
val = document.contentType;

// Access all the forms in page 
val = document.forms;

val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;


//you can access the links collection
val = document.links;

val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;

// you can access the scripts that are used in the index.html 
val = document.scripts;
console.log(val);
val = document.scripts[2].getAttribute('src');

// Access all the collection of getattribute in scripts
let scripts = document.scripts;

//use array.from and pass the html collection
let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
    console.log(script.getAttribute('src'));
});