import { Request, Response } from 'express'
import { Event } from '../models/Event'

export const getAllEvents = async (_req: Request, res: Response): Promise<void> => {
  try {
    const events = await Event.find()
    res.json({ events })
  } catch (error: any) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const getEventByID = async (_req: Request, res: Response): Promise<void> => {
  try {

    res.json({events: []})
  } catch (error: any) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

export const createEvent = async (_req: Request, res: Response): Promise<void> => {
  try {
    
    res.status(201).json({})
  } catch (error: any) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

export const deleteEvent = async (_req: Request, res: Response): Promise<void> => {
  try {
    

    res.json({ })
  } catch (error: any) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

export const updateEvent = async (_req: Request, res: Response): Promise<void> => {
  try {
    
    res.json({ })
  } catch (error: any) {
    console.log(error)
    
    res.status(500).json({ error: error.message })
  }
}
