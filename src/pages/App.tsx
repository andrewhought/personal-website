import { ReactElement } from "react";

import Hero from "../components/sections/Hero";

export function App(): ReactElement {
    return (
        <div className="flex items-center justify-center lg:mx-16 sm:mx-14 mx-12">
            <Hero />
        </div>
    );
}
