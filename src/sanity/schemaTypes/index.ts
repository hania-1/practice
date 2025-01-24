import { type SchemaTypeDefinition } from 'sanity'
import product from './product'  // Import the product schema

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product],  // Add the product schema to the types array
}

