const mongoose = require('mongoose');

const tourSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A tour must have a name.'],
        unique: true,
        trim: true
    },
    duration: {
        type: Number,
        required: [true, 'A tour must have a duration.']
    },
    maxGroupSize: {
        type: Number,
        required: [true, 'A tour must have a maxGroupSize.']
    },
    difficulty: {
        type: String,
        required: [true, 'A tour must have a difficulty.']
    },
    ratingsAverage: {
        type: Number,
        default: 4.5
    },
    ratingsQuantity: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        required: [true, 'A tour must have a price.']
    },
    discount: Number,
    summary: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        required: [true, 'A tour must have a description'],
        trim: true
    },
    imageCover: {
        type: String,
        required: [true, 'A tour must have a imageCover.']
    },
    images: [String],
    createdAt: {
        type: Date,
        default: Date.now()
    },
    startDates: [Date]
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;