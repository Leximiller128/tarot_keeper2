const connection = mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

connection
  .then(() => console.log('MongoDB Connection: SUCCESS'))
  .catch(() => console.log('MongoDB Connection: FAILURE'));

  module.exports = mongoose.connection;