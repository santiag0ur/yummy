const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    location: {
      address: String,
      city: String,
      country: String
    },
    cuisine: {
      type: String,
      enum: [
        'breakfast',
        'cafe',
        'hamburger',
        'pizza',
        'asian',
        'mexican',
        'restaurant',
        'dessert',
        'other'
      ],
      required: true
    },
    price: { type: Number, min: 0 },
    rating: { type: Number, enum: [0, 1, 2, 3, 4, 5] }
  },
  { timestamps: { createdAt: 'publishingDate', updatedAt: 'editingDate' } }
);

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
