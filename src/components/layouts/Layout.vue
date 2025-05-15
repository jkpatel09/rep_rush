<script setup>

</script>

<template>
    <header>
        <h1 class="text-gradient">RepRush</h1>
    </header>
    <main>
        <slot/>
    </main>
    <footer>
        <small>Created by</small>
        <a href="https://github.com/jkpatel09" target="_blank">
            <img alt="jkp" src="https://avatars.githubusercontent.com/u/142573639"/>
            <p>jkpatel09</p>
            <i class="fa-brands fa-github"></i>
        </a>
    </footer>
</template>

<style scoped>
    header, footer, main {
        padding: 1rem;
        width: 100%;
        max-width: 700px;
        margin: 0 auto;
    }

    main {
        flex: 1;
    }

    footer {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        align-items: center;
        padding: 3rem;
        padding-bottom: 4rem;
    }

    footer a {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.3rem;
        padding-right: 0.5rem;
        background: var(--background-muted);
        border-radius: 4rem;
        border: 1px solid transparent;
        transition-duration: 200ms;
        text-decoration: none;
    }

    footer a img {
        max-width: 30px;
        aspect-ratio: 1 / 1;
        border-radius: 100%;
    }

    footer a:hover {
        border-color: var(--color-link);
    }
</style>
