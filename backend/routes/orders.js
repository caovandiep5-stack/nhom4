const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Lấy tất cả đơn hàng (có thể filter theo email)
router.get('/', async (req, res) => {
  try {
    const { email } = req.query;
    const filter = email ? { customerEmail: email } : {};
    const orders = await Order.find(filter).sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Tạo đơn hàng mới
router.post('/', async (req, res) => {
  try {
    const { customerName, customerEmail, items, total } = req.body;

    if (!customerName || !customerEmail || !items || items.length === 0) {
      return res.status(400).json({ message: 'Thiếu thông tin đơn hàng' });
    }

    // Tạo mã đơn hàng duy nhất
    const orderId = 'ORD-' + Date.now() + '-' + Math.floor(Math.random() * 1000);

    const newOrder = new Order({
      orderId,
      customerName,
      customerEmail,
      items,
      total
    });

    await newOrder.save();
    res.status(201).json({ message: 'Đặt hàng thành công', order: newOrder });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;