// src/types/Book.ts
export type Book = {
	title: string;
	author: string;
	pdf_link: string;
	Description: string;
	additional_resources?: Record<string, string>;
};
