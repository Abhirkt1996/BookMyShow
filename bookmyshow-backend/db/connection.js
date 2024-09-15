const mongoose = require('mongoose');

const dbUrl = process.env.MONGO_URI || process.env.MONGO_URI_LIVE;
console.log('MongoDB URI:', dbUrl); // Debugging

const connectToMongo = async () => {
  try {
    if (!dbUrl) {
      throw new Error('MongoDB URI is not defined in environment variables');
    }
    // Removed deprecated options
    await mongoose.connect(dbUrl);
    console.info('Successfully connected to the DB');
  } catch (e) {
    console.error('Error connecting to the DB:', e);
    process.exit(1); // Exit the process if connection fails
  }
};

exports.connection = connectToMongo;
