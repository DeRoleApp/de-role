'use server'

import { connectToDatabase } from '../db'
import Carousels, { Carousel } from '../db/models/carousel'

type GetCarouselsReturn = {
  data?: Carousel[]
  error?: unknown
  message?: string
}

export const getCarousels = async (): Promise<GetCarouselsReturn> => {
  try {
    await connectToDatabase()

    const carousels = await Carousels.find()

    return { data: carousels }
  } catch (error) {
    return {
      error,
      message: 'Ocorreu um erro durante a busca pelos carrosséis.'
    }
  }
}
