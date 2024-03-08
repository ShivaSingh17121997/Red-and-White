
const express = require('express');
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');

const {cartroute } = require('./Control/cart') 

const cors = require('cors');
const { connection } = require('./connection');
const app = express();
app.use(express.json());
app.use(cors());


app.use('/categories', categoryRoutes);
app.use('/products', productRoutes);
app.use('/cart',cartroute)

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
    try {
         await connection

        console.log(`Server is running on port ${PORT}`);

    } catch (err) {
        console.log(err)
    }

});
