import Product from "../models/product_model.js";
// function
class ProductsController {
  // GET /products
  async getAllProducts(req, res) {
    try {
      const products = await Product.find();
      res.status(200).json({
        message: "Get All Product Done!!",
        data: products
      });
    } catch (error) {
      res.status(400).json({
        message: error.message
      });
    }
    // res.send("Get product");
  }
  // GET /products/:id
  async getProductDetail(req, res) {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({
          message: " product Not Found"
        });
      }
      res.status(200).json({
        message: "Get product Detail Done",
        data: product
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  // POST /products
  async createProduct(req, res) {
    console.log(">>> log: " + req.body);
    // Product.create({
    //   title: "Book 7",
    //   description:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    //   image: "image 4",
    //   price: 7000
    // });
    try {
      const product = await Product.create(req.body);
      res.status(200).json({
        message: "Create product Done",
        data: product
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
    // res.send("done");
  }
  // PUT /products/:id
  async updateProduct(req, res) {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true
      });
      if (!product) {
        return res.status(404).json({
          message: " product Not Found"
        });
      }
      res.status(200).json({
        message: "Update product Done",
        data: product
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  // delete /products/:id
  async deleteProduct(req, res) {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      if (!product) {
        return res.status(404).json({
          message: " product Not Found"
        });
      }
      res.status(200).json({
        message: "Delete product Done"
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}
export default ProductsController;
