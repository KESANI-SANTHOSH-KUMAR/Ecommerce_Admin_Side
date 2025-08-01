import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import multer from 'multer';
import path from 'path';
import fs from 'fs';




const app = express();
app.use(cors());
app.use(express.json());

app.use('/uploads', express.static('uploads'));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'SUS77#ta',
  database: 'ecom'
});


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); 
  }
});
const upload = multer({ storage });


app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  db.query('INSERT INTO admins (username, password) VALUES (?, ?)', [username, hash], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Admin registered' });
  });
});


app.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.query('SELECT * FROM admins WHERE email = ?', [username], async (err, results) => {
    if (err || results.length === 0) return res.status(401).json({ error: 'Invalid credentials' });
    const match = await bcrypt.compare(password, results[0].password);
    if (!match) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: results[0].id }, 'secret_key');
    res.json({ message: 'Login successful', token });
  });
});


app.post('/add-product', upload.single('image'), (req, res) => {
  const { name, price,description } = req.body;
  const image = req.file ? req.file.filename : null;
  db.query('INSERT INTO products (name, price,description, image) VALUES (?, ?, ?, ?)', [name, price, description,image], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Product added' });
  });
});

app.get('/products', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});


app.delete('/product/:id', (req, res) => {
  db.query('DELETE FROM products WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Product deleted' });
  });
});

app.put('/edit/:id', upload.single('image'),(req, res) => {
    const { id } = req.params;
    const { name, price, description } = req.body;
   const image = req.file ? req.file.filename : null;

  
    const query = `
      UPDATE products SET name = ?, price = ?, description = ?, image = ? WHERE id = ?
    `;
    db.query(query, [name, price, description, image, id], (err, result) => {
      if (err) return res.status(500).send('Error updating product');
      res.send('Product updated');
    });
  });
  

app.listen(5000, () => console.log('Server running on port 5000'));
