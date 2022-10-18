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

        &::before {
            content: "";
            position: absolute;
            width: calc(100% - 20px);
            height: 30px;
            border-radius: 50px;
            background: var(--background-primary);
            transform: scaleX(0.75);
            transform-origin: center;
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
            padding-inline: 24px;
            padding-block: 16px;
            text-decoration: none;
            font-weight: 500;
            font-size: 12px;
            line-height: 16px;
            letter-spacing: 0.5px;
            text-align: center;
            color: var(--foreground-secondary);
        }

        span {
            transition: 150ms ease;
            padding: 8px 16px;
            border-radius: 50px;
        }

        &.selected span {
            background-color: var(--background-primary);
        }
    }
</style>