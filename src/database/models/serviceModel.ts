import mongoose, { Schema, model, Document } from 'mongoose';

export type IService = Document & {
  _id?: Schema.Types.ObjectId;
  image: string;
  label: string;
  short_description: string;
  description: string;
};

const serviceSchema = new Schema<IService>({
  image: String,
  label: String,
  short_description: String,
  description: String,
});

export const ServiceModel = mongoose.models.Service || model<IService>('Service', serviceSchema);
