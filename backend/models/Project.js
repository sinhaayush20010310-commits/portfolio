import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: String,
  description: { type: String, required: true },
  longDescription: String,
  image: String,
  images: [String],
  liveUrl: String,
  githubUrl: String,
  featured: { type: Boolean, default: false },
  category: String,
  tech: [String],
  stats: { type: Map, of: String },
  features: [String],
  color: { type: String, default: '#6366f1' },
  year: Number,
  order: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.model('Project', projectSchema);
