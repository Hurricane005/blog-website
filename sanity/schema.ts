import { type SchemaTypeDefinition } from "sanity";
import { blog } from "./schemaTypes/blog";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog],
};
