import { Schema, InferSchemaType, model, models } from 'mongoose'

const carouselItemSchema = new Schema({
  imageUrl: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true }
})

const carouselsSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  items: [carouselItemSchema]
})

export type Carousel = InferSchemaType<typeof carouselsSchema>
export type CarouselItem = InferSchemaType<typeof carouselItemSchema>

const Carousels =
  models.Carousels || model<Carousel>('Carousels', carouselsSchema)

export default Carousels
