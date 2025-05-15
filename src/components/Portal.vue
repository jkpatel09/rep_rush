<script setup>
    defineProps({
        handleCloseModal: Function
    })

    // also work like this

    // const { handleCloseModal } = defineProps({
    //     handleCloseModal: Function
    // })
    // call like this @click="handleCloseModal"


    // const props = defineProps({
    //     handleCloseModal: Function
    // })
    // call like this @click="props.handleCloseModal"
</script>

<template>
    <Teleport to="#portal">
        <div class="portal-container">
            <div role="button" tabindex="0"@click="handleCloseModal"
                 class="portal-underlay">
            </div>
            <div class="portal-content">
                <slot/>
            </div>
        </div>
    </Teleport>
</template>

<style scoped>
    .portal-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 11;
    }

    .portal-underlay {
        position: absolute;
        inset: 0;
        background-color: var(--background-primary);
        opacity: 0.7;
        z-index: 9;
    }

    .portal-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10;
        width: 600px;
        max-width: 90vw;
        max-height: 80vh;
        display: grid;
        place-items: center;
        background-color: var(--background-primary);
        border-radius: var(--border-radius-small);
        padding: 1rem;
        border: 1px solid var(--background-muted);
    }
</style>
