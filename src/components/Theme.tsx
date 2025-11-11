import type { SetStateAction } from "react";

type changeTheme = {
    isDark: boolean;
    setIsDark: React.Dispatch<SetStateAction<boolean>>;
}

function Theme({isDark, setIsDark}: changeTheme) {
  return (
    <div className={`flex flex-row items-center justify-center
        `} title="Switch Theme" onClick={() => setIsDark((prev) => !prev)}>
        <i className={isDark? "bx bx-sun bx-tada-hover text-[calc(0.6vw+1.2rem)] cursor-pointer text-[var(--dark-color)] hovered" : 
          "bx bx-moon bx-tada-hover text-[calc(0.6vw+1.2rem)] cursor-pointer text-[var(--dark-color)] hovered"}></i>
    </div>
  )
}

export default Theme