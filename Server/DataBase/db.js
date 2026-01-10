const mongoose = require("mongoose");

// Schema for storing component references
const componentSchema = new mongoose.Schema({
  componentName: {
    type: String,
    required: true,
    trim: true,
  },
  inspiredPerson: {
    type: String,
    required: false,
    trim: true,
  },
  inspiredLink: {
    type: String,
    required: false,
    trim: true,
  },
  code: {
    type: String,
    required: true,
  },
  mediaLink: {
    type: String,
    required: false,
    trim: true,
  }
  
});

// Update the updatedAt field before saving
componentSchema.pre("save", function () {
  this.updatedAt = Date.now();
});

const Component = mongoose.model("Component", componentSchema);

module.exports = Component;
