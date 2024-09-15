const BookingModel = require("../Schema/bookMovieSchema");

// Store Booking
const storeBooking = async (req, res) => {
    try {
        const { movie, slot, seats } = req.body;

        // Create a new booking entry
        const myData = new BookingModel({ movie, slot, seats });
        const data = await myData.save(); // Save to database

        // Successful response
        return res.status(201).json({
            message: "Booking successful",
            status: 201,
            data: data
        });
    } catch (error) {
        console.error("Error storing booking:", error.message); // Log error message
        return res.status(500).json({
            message: "Something went wrong while storing the booking!",
            status: 500,
            data: {}
        });
    }
};

// Get Booking
const getBooking = async (req, res) => {
    try {
        // Find the last booking
        const data = await BookingModel.find().sort({ _id: -1 }).limit(1);

        if (data.length === 0) {
            // No bookings found
            return res.status(404).json({
                message: "No previous bookings found!",
                status: 404,
                data: null
            });
        }

        // Booking found
        return res.status(200).json({
            message: "Last booking retrieved successfully!",
            status: 200,
            data: data[0] // Return the first booking
        });
        
    } catch (error) {
        console.error("Error retrieving booking:", error.message); // Log error message
        return res.status(500).json({
            message: "Something went wrong while retrieving the booking!",
            status: 500,
            data: {}
        });
    }
}

module.exports = { storeBooking, getBooking };
