<script lang="ts">
    export let external = false;
    export let selected = false;
    export let href = "";
    export let name = "";
</script>

<li class="navigation-item" class:selected>
    <a
        {href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer noopener" : undefined}
    >
        {name}
    </a>
</li>

<style lang="scss">
    .navigation-item {
        display: flex;
        align-items: center;
        justify-content: center;
        list-style-type: none;
        position: relative;
        block-size: 100%;
        margin-inline: 16px;
        padding-block: 8px;

        &::before {
            content: "";
            position: absolute;
            border-bottom: 2px solid var(--background-secondary);
            inline-size: 100%;
            block-size: 2px;
            inset-block-end: 0;
            transform: scaleX(0);
            transform-origin: left;
            opacity: 0;
            transition: 150ms ease;
        }

        &:hover::before,
        &:focus-within::before {
            opacity: 0.5;
            transform: none;
        }

        &.selected::before {
            transform: none;
            opacity: 1;
        }

        a {
            position: relative;
            display: flex;
            align-items: center;
            padding-block: 4px;
            text-decoration: none;
            font-weight: 500;
            font-size: 14px;
            line-height: 16px;
            letter-spacing: 0.5px;
            text-align: center;
            color: var(--background-secondary);
        }
    }
</style>