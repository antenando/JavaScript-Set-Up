/* Knowledge about Object */
"use strict";

/* How to create an empty Object ? */
let anObject;

// same
anObject = Object.create(Object);
anObject = Object();
anObject = {};

// without prototype
anObject = Object.create(null);

// creating with prefilled properties
anObject = {
    "key1": "value1",
    "key2": "value2",
};

// assign simple
anObject["key"] = "value";

// assign multiple
Object.assing(anObject, {
    "key1": "value1",
    "key2": "value2"
});

// get a specific value
anObject["key"];

// get Length
Object.keys(anObject).length;
Object.values(anObject).length;
Object.entries(anObject).length;

// iterate over
// keys only
Object.keys(anObject).forEach(function (key) {

});

// values only
Object.values(anObject).forEach(function (value) {

});

// keys and values
Object.entries(anObject).forEach(function ([key, value]) {

});

// has a key
anObject.hasOwnProperty("key");

// has safe, works even when anObject has a key "hasOwnProperty"
Object.prototype.hasOwnProperty.call(anObject, "key");

// remove a value
anObject["key"] = undefined;

// completly remove a property (key and value)
delete anObject["key"];

// prevent future extensions
Object.preventExtensions(anObject);
anObject["newThing"] = 2; // Error in strict mode

// prevent future extensions and removals
anObject["beforeSealing"] = 10;
Object.seal(anObject);
anObject["newThing"] = 2; // Error in strict mode
delete anObject["beforeSealing"]; // Error in strict mode

// prevent future extensions and removals and mutations
anObject["beforeSealing"] = 10;
Object.freeze(anObject);
anObject["newThing"] = 2; // Error in strict mode
delete anObject["beforeSealing"]; // Error in strict mode
anObject["beforeSealing"] = 11; // Error in strict mode
