"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.persons = void 0;
const Person = require('./models/person');
const persons = (req, res) => {
    Person.find().then(persons => {
        res.json(persons.map(p => p.toJSON()));
    });
};
exports.persons = persons;
