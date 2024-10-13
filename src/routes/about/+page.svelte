<!-- src/routes/about/+page.svelte -->
<script lang="ts">
	import '../../styles/app.css';
	import AboutHeader from '$lib/components/AboutHeader.svelte';
	import AboutPic from '$lib/components/AboutPic.svelte';

	type TextPart = {
		text: string;
		link?: string;
		isLinked?: boolean;
	};

	const name = 'Tanguy Frémont';
	const profileImage = '/Photo_CV.jpg';
	const altText = 'Portrait of Tanguy Frémont';

	const info: TextPart[][] = [
		[
			{ text: 'DevOps Engineering M1 Student @ ' },
			{ text: 'DataScientest', link: 'https://datascientest.com/', isLinked: true },
			{ text: ', Graduating Summer 2025' }
		],
		[
			{ text: 'DataOps Engineer & Lead Dev @ ' },
			{ text: 'Easier Labs', link: 'https://www.easierlabs.ai/', isLinked: true }
		],
		[
			{ text: 'BS, ' },
			{ text: 'UoPeople', link: 'https://www.uopeople.edu/', isLinked: true },
			{ text: ' 2023' }
		]
	];

	const socialLinks = [
		{ name: 'GitHub', link: 'https://github.com/tangos974' },
		{ name: 'LinkedIn', link: 'www.linkedin.com/in/tanguy-fremont-96068214a' },
		{ name: 'Mail', link: 'mailto:fremonttanguy@yahoo.fr' }
	];

	const description: TextPart[] = [
		{ text: 'Computer scientist based in Paris. Currently working mostly on refining ' },
		{ text: 'A.U.D.I.O', link: 'https://www.easierlabs.ai/#Services', isLinked: true },
		{ text: "'s data pipeline." }
	];
</script>

<main class="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
	<!-- Header Section -->
	<AboutHeader {name} {info} {socialLinks} />

	<!-- Profile Image and Description Section -->
	<AboutPic image={profileImage} {altText} {description} />
</main>
