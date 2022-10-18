<script lang="ts">
    import NavigationItemComponent from "./NavigationItem.svelte";

    interface NavigationItem {
        name: string;
        href: string;
        external?: boolean;
    }

    export let items: NavigationItem[] = [];

    export let title = "";

    export let page = "/";

    let scrollY = 0;

    const isIndex = (path: string) => path === "/" || path === "" || path === "index" || path === "index.html";
</script>

<svelte:window bind:scrollY />

<header class="navigation" class:elevated={scrollY > 0}>
    <nav>
        <a href="/" class="navigation-title">{title}</a>

        <ul class="navigation-items">
            {#each items as item, i}
                {@const selected = isIndex(page) ? isIndex(item.href) : page.startsWith(item.href) && !isIndex(item.href)}
                
                <NavigationItemComponent {selected} {...item} />
            {/each}
        </ul>
    </nav>
</header>

<style lang="scss">
    .navigation {
        background-color: var(--background-secondary);
        
        &,
        nav,
        .navigation-items {
            flex-wrap: wrap;
            display: flex;
            align-items: center;
        }
        
        nav {
            justify-content: space-between;
            box-sizing: border-box;
            margin-inline: auto;
            padding-inline-start: 48px;
            inline-size: 100%;
            max-inline-size: 1200px;
            @media only screen and (max-width: 905px) {
                padding-inline-start: 16px;
            }

            @media only screen and (max-width: 512px) {
                padding: 16px;
                justify-content: center;

                .navigation-title {
                    margin: 0;
                    margin-block-end: 16px;
                }
            }
        }

        &-items {
            list-style-type: none;
            margin: 0;
            padding: 0;
        }

        &-title {
            text-decoration: none;
            color: var(--foreground-primary);
            font-family: var(--font-family-display);
            font-weight: 600;
            font-size: 18px;
            margin-inline-end: 16px;
        }
    }
</style>