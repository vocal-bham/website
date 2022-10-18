<script lang="ts">
    export let variant: "filled" | "outlined" | "text" | "elevated" | "tonal" = "filled";

    export let href = "";

    export let disabled = false;

    let className = "";
    export { className as class };
</script>

<svelte:element
    on:click
    on:mousedown
    on:mouseup
    on:focus
    on:blur
    on:keydown
    on:keyup
    on:keypress
    this={href && !disabled ? "a" : "button"}
    class="button variant-{variant} {className}"
    {disabled}
    {href}
    {...$$restProps}
>
    <slot />
</svelte:element>

<style lang="scss">
    .button {
        cursor: pointer;
        user-select: none;
        border: none;
        outline: none;
        appearance: none;

        background: rgba(0, 0, 0, 0);
        box-sizing: border-box;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        min-inline-size: 64px;
        padding-inline: 24px;
        padding-block: 10px;
        gap: 10px;
        
        vertical-align: middle;
        text-decoration: none;
        font-family: inherit;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.1px;

        transition: 280ms ease;

        &.variant- {
            &filled, &outlined, &text, &elevated, &tonal { border-radius: 100px; }

            &filled {
                background-color: var(--foreground-secondary);
                color: #fff;

                &:hover {
                    background-color: var(--foreground-tertiary);
                }
            }

            &outlined {
                color: var(--foreground-secondary);
                box-shadow: inset 0 0 0 1px var(--foreground-primary);

                &:hover, &:focus {
                    background-color: var(--background-secondary);
                }
                
                &:focus {
                    box-shadow: inset 0 0 0 1px var(--foreground-primary), var(--focus-ring);
                }
            }

            &elevated {
                color: var(--foreground-secondary);
                background: var(--background-secondary);
                box-shadow: var(--elevation-2);

                &:hover {
                    color: var(--foreground-tertiary);
                    box-shadow: var(--elevation-1);
                }

                &:focus {
                    box-shadow: var(--elevation-2), var(--focus-ring);
                }
            }
        }
    }
</style>