<script lang="ts">
    const instagram = "https://instagram.com/vocal.bham/";
    const email = "mailto:vocalbham@gmail.com"
</script>

<footer class="footer">
    <div class="footer-inner">
        <div class="footer-column">
            <h2>VOCAL</h2>
            <div class="footer-socials">
                <a href={instagram} target="_blank" rel="noreferrer noopener">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 1000 1000"><path class="cls-1" d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34" transform="translate(-2.5 -2.5)"/></svg>
                </a>
                <a href={email}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M1.75 2A1.75 1.75 0 000 3.75v.736a.75.75 0 000 .027v7.737C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0016 12.25v-8.5A1.75 1.75 0 0014.25 2H1.75zM14.5 4.07v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88l6.5-3.81zm-13 1.74v6.441c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809z"></path></svg>
                </a>
            </div>
        </div>
        <div class="footer-column">
            <h2>Pages</h2>
            <a href="/">Home</a>
            <a href="/catalog">Catalog</a>
            <a href="/about">About us</a>
            <a href="/contact">Contact</a>
        </div>
    </div>
</footer>

<style lang="scss">
    .footer {
        position: relative;
        background-color: var(--background-alt-primary);
        color: var(--foreground-alt-primary);
        margin-top: auto;
        &-inner {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 48px;
        }
        &-column {
            display: flex;
            flex-direction: column;
            flex: 1 1 auto;
            max-inline-size: 240px;

            &:first-child h2 {
                font-size: 32px;
            }

            a {
                text-decoration: none;
                border-radius: 4px;
                color: var(--foreground-alt-tertiary);
                font-size: 16px;
                &:hover, &:focus {
                    text-decoration: underline;
                }
            }
        }
        &-socials {
            display: flex;
            inline-size: fit-content;
            gap: 8px;
            padding: 8px;
            background-color: var(--background-primary);
            box-shadow: var(--elevation-1);
            border-radius: 8px;

            a {
                display: flex;
                align-items: center;
                justify-content: center;;
                inline-size: 36px;
                block-size: 36px;
                
                &:hover {
                    background-color: var(--background-secondary);
                }

                svg {
                    inline-size: 20px;
                    block-size: auto;
                    fill: currentColor;
                }
            }
        }
        &-inner {
            box-sizing: border-box;
            max-inline-size: 1200px;
            padding: 48px;
            margin-inline: auto;

            @media only screen and (max-width: 905px) {
                padding: 16px;
            }
        }
    }
</style>