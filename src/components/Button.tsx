import { ReactElement } from "react";

export function Button(): ReactElement {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <button className="rounded-md bg-secondary1 p-2 text-white hover:bg-secondary2">
                Click me
            </button>
        </div>
    );
}
