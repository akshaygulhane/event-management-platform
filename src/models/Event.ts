import { Schema, model } from 'mongoose'

const eventSchema: Schema = new Schema(
    {
        id: {
            type: String,
            required: true
        }, // Unique identifier for the event
        eventName: {
            type: String,
            required: true
        }, // Name of the event
        eventDate: {
            type: Date,
            required: true
        }, // Date of the event
        organizer: {
            type: String,
            required: true
        }, // Organizer's name
        email: {
            type: String,
            required: true
        }, // Email of the organizer
        phone: {
            type: String,
            required: true
        }, // Phone number of the organizer
        location: {
            street: {
                type: String,
                required: true
            }, // Venue street address
            city: {
                type: String,
                required: true
            }, // Venue city
            state: {
                type: String,
                required: true
            }, // Venue state
            zip: {
                type: String,
                required: true
            } // Venue zip code
        },
        createdAt: {
            type: Date,
        }, // Timestamp when the event was created
        updatedAt: {
            type: Date
        } // Timestamp when the event was last updated
    }

)

export const Event = model('Event', eventSchema)
