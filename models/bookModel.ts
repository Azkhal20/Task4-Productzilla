// src/models/bookModel.ts
import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  isbn: { type: String, required: true },
});

export const Book = mongoose.model('Book', bookSchema);
