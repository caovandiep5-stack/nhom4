const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Đăng ký tài khoản
router.post('/register', async (req, res) => {
  try {
    const { username, password, avatar } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Vui lòng nhập tên đăng nhập và mật khẩu' });
    }

    // Kiểm tra tài khoản đã tồn tại
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Tên đăng nhập đã tồn tại' });
    }

    const newUser = new User({
      username,
      password, // Lưu mật khẩu dạng plain text (có thể hash sau)
      avatar: avatar || `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`
    });

    await newUser.save();

    res.status(201).json({
      message: 'Đăng ký thành công',
      user: {
        username: newUser.username,
        avatar: newUser.avatar
      }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Đăng nhập
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Vui lòng nhập tên đăng nhập và mật khẩu' });
    }

    // Tìm user trong MongoDB
    const user = await User.findOne({ username, password });

    if (!user) {
      return res.status(401).json({ message: 'Sai tên đăng nhập hoặc mật khẩu' });
    }

    res.json({
      message: 'Đăng nhập thành công',
      user: {
        username: user.username,
        avatar: user.avatar
      }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Lấy danh sách tất cả tài khoản (admin)
router.get('/users', async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 }); // Ẩn password
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
