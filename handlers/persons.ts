import { Handler } from '../types'
const Person = require('./models/person')

export const persons: Handler = (req, res) => {
  Person.find().then(persons => {
    res.json(persons.map(p => p.toJSON()))
  })
}
