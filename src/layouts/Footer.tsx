
type FooterProps = {
    isDark: boolean;
}

function Footer({ isDark }: FooterProps) {
    return (
        <div id="footer" className={`${isDark? "bg-[var(--dark-color)] text-[var(--light-color)]" : "bg-[var(--light-color)] bg-[var(--dark-color)]"}
            relative overflow-hidden h-screen w-full flex flex-col items-center justify-center gap-[calc(0.4vw+0.6rem)] pb-[calc(1.4vw+1.6rem)] pt-[calc(0.8vw+1rem)]`}>
            Footer
        </div>
    )
}

export default Footer