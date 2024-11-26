<script lang="ts">
	import type { Book } from '$lib/types/Books';
	import BookList from '$lib/components/BookList.svelte';
	//import { general_code_practice, organizational_advice_personal, organizational_advice_company } from './data'; // Import data if externalized

	// Good Code Practices
	const general_code_practice: Book[] = [
		{
			title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
			author: 'Robert C. Martin',
			pdf_link:
				'https://inprogrammer.com/wp-content/uploads/2022/01/Martin-Robert-Cecil-Clean-code_-a-handbook-of-agile-software-craftsmanship-2009-Prentice-Hall-libgen.lc_.pdf',
			Description: 'First and most well known of the Clean series of Uncle Bob, a must-read on TDD',
			additional_resources: {
				'Test driven development - A no-BS guide by the Excellent Continuous Delivery YouTuber':
					'https://www.youtube.com/watch?v=ln4WnxX-wrw&t=96s',
				'A series of conferences by the man himself':
					'https://www.youtube.com/watch?v=ln4WnxX-wrw&t=96s'
			}
		}
	];

	// Organizational Advice (Personal)
	const organizational_advice_personal: Book[] = [
		{
			title: 'The Clean Coder',
			author: 'Robert C. Martin',
			pdf_link: 'https://blog.freec.asia/wp-content/uploads/2020/12/The-Clean-Coder.pdf',
			Description:
				"What is a good Dev, where does he fit in an organization? How should he organize his time at work? Here you'll find advicestuff like the pomodoro technique, pair programming, and more",
			additional_resources: {}
		}
	];

	// Organizational Advice (Company)
	const organizational_advice_company: Book[] = [
		{
			title: 'The Phoenix Project',
			author: 'Gene Kim, Kevin Behr, George Spafford',
			pdf_link: 'https://theswissbay.ch/pdf/Books/Computer%20science/PhoenixProjectExcerpt.pdf',
			Description:
				'A book about the origins of Agile and DevOps and how it took inspiration from Lean in manufacturing. Not technical at all, but too important in the history of DevOps to be skipped',
			additional_resources: {}
		},
		{
			title: 'Accelerate',
			author: 'Nicole Forsgren, Jez Humble, Gene Kim',
			pdf_link: '/Accelerate.pdf',
			Description:
				'Another foundational book about DevOps from a company organization perspective, this one is based on data issued from research',
			additional_resources: {}
		}
	];
</script>

<BookList title="Good Code Practices" books={general_code_practice} />
<BookList title="Organizational Advice (Personal)" books={organizational_advice_personal} />
<BookList title="Organizational Advice (Company)" books={organizational_advice_company} />
