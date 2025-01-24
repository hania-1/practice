import { Rule } from 'sanity'; // Import the Rule type

// Define the schema object first
const productSchema = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Enable image cropping
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Electronics', value: 'electronics' },
          { title: 'Clothing', value: 'clothing' },
          { title: 'Home Appliances', value: 'home-appliances' },
          { title: 'Books', value: 'books' },
          { title: 'Toys', value: 'toys' },
          { title: 'Sports', value: 'sports' },
          { title: 'Health', value: 'health' },
          { title: 'Beauty', value: 'beauty' },
          { title: 'Groceries', value: 'groceries' },
          { title: 'Jewelry', value: 'jewelry' },
          { title: 'Accessories', value: 'accessories' },
          { title: 'Furniture', value: 'furniture' },
        ], // Dropdown for predefined categories
      },
    },
    {
      name: 'stock',
      title: 'Stock',
      type: 'number',
      description: 'Available stock quantity',
    },
    {
      name: 'sku',
      title: 'SKU',
      type: 'string',
      description: 'Stock Keeping Unit (Unique identifier for products)',
    },
    {
      name: 'brand',
      title: 'Brand',
      type: 'string',
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      description: 'Average customer rating',
      validation: (Rule: Rule) => Rule.min(0).max(5), // Explicitly type Rule
    },
    {
      name: 'discount',
      title: 'Discount',
      type: 'number',
      description: 'Discount percentage',
      validation: (Rule: Rule) => Rule.min(0).max(100), // Explicitly type Rule
    },
    {
      name: 'isFeatured',
      title: 'Featured Product',
      type: 'boolean',
      description: 'Mark this product as featured',
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      description: 'Date when the product was added',
    },
    {
      name: 'updatedAt',
      title: 'Updated At',
      type: 'datetime',
      description: 'Last updated date of the product',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Keywords for search and filtering',
    },
  ],
};

// Export the schema object
export default productSchema;
