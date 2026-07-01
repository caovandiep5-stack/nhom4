const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Kết nối MongoDB
mongoose.connect(process.env.MOVIEREVIEWS_DB_URI, {
  dbName: process.env.MOVIEREVIEWS_NS || 'shopcar'
})
  .then(() => console.log('✅ Kết nối MongoDB thành công'))
  .catch(err => console.error('❌ Lỗi kết nối MongoDB:', err));

// Routes
const ordersRouter = require('./routes/orders');
app.use('/api/orders', ordersRouter);

const authRouter = require('./routes/auth');
app.use('/api/auth', authRouter);

app.get('/', (req, res) => {
  res.send('API Tam Ca Bánh Ngọt đang chạy');
});

app.listen(PORT, () => {
  console.log(`🚀 Server chạy tại http://localhost:${PORT}`);
});
