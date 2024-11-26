<nav>
	<div class="header-container">
		<ul class="nav-links">
			<li><a class="nav-link" href="/about">About</a></li>
			<li><a class="nav-link" href="/reading-list">Reading List</a></li>
		</ul>
	</div>
</nav>

<style>
	nav {
		background-color: #333;
		color: white;
		padding: 1rem;
	}

	.header-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	ul.nav-links {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		gap: 1rem;
	}

	a.nav-link {
		color: white;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}
</style>
