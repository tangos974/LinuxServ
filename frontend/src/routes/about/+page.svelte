<!-- src/routes/about/+page.svelte -->
<script lang="ts">
	import '../../styles/app.css';
	import AboutHeader from '$lib/components/AboutHeader.svelte';
	import AboutPic from '$lib/components/AboutPic.svelte';
	import BoopableLink from '$lib/components/BoopableLink.svelte';

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
			{ text: 'DataOps Engineer @ ' },
			{ text: 'Easier Labs', link: 'https://www.easierlabs.ai/', isLinked: true },
			{ text: ' since 2023' }
		],
		[
			{ text: 'DevOps Engineering ' },
			{
				text: 'M1-level bootcamp',
				link: 'https://datascientest.com/formation-devops',
				isLinked: true
			},
			{ text: ' graduate @ ' },
			{ text: 'DataScientest', link: 'https://datascientest.com/', isLinked: true },
			{ text: ' 2024' }
		],
		[
			{ text: 'BS, ' },
			{ text: 'UoPeople', link: 'https://www.uopeople.edu/', isLinked: true },
			{ text: ' 2023' }
		]
	];

	const socialLinks = [
		{ name: 'GitHub', link: 'https://github.com/tangos974' },
		{ name: 'LinkedIn', link: 'https://www.linkedin.com/in/tɑnguy-fremont-96068214a' },
		{ name: 'Mail', link: 'mailto:fremonttanguy@yahoo.fr' }
	];

	const description: TextPart[] = [
		{ text: 'Computer scientist based in Paris. Currently working mostly on refining ' },
		{ text: 'Easier Labs', link: 'https://www.easierlabs.ai/#Services', isLinked: true },
		{ text: "' infra." }
	];
</script>

<main class="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
	<!-- Header Section -->
	<AboutHeader {name} {info} {socialLinks} />

	<!-- Profile Image and Description Section -->
	<AboutPic image={profileImage} {altText} {description} />

	<!-- Footer Section -->
	<footer class="text-center mt-5">
		<p>
			This website is a <BoopableLink
				href="https://github.com/tangos974/LinuxServ"
				boopParams={{ isBooped: true, y: 3, timing: 150 }}>fully open source</BoopableLink
			> WIP deployed on a k3s cluster. You're viewing the frontend that was written in <BoopableLink
				href="https://svelte.dev/"
				boopParams={{ isBooped: true, y: 3, timing: 150 }}>Svelte</BoopableLink
			>.
		</p>
		<p>&copy; {new Date().getFullYear()} Tanguy Frémont. All rights reserved.</p>
	</footer>
</main>
