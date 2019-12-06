'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Please enter the name of your task'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [
      {
        type: String,
        enum: ['Pending', 'In-Progress', 'Completed']
      }
    ],
    default: ['Pending']
  }
})

module.exports = mongoose.model('Tasks', TaskSchema)
