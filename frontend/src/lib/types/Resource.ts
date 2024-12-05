// src/types/Book.ts
export type Resource = {
	title: string;
	author: string;
	link: string;
	Description?: string;
	additional_resources?: Record<string, string>;
	tags: string[];
};
