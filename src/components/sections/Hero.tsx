import { ReactElement } from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

import { Button } from "../Button";

export default function Hero(): ReactElement {
    const handleHrefClick = (location: string): void => {
        window.open(location, "_blank");
    };

    return (
        <div className="flex flex-col justify-between py-24">
            <span className="text-header flex text-3xl font-extrabold sm:text-5xl lg:text-6xl">
                Andrew Houghton
            </span>
            <span className="text-header mt-2 flex text-lg lg:text-xl">
                Software Engineer
            </span>
            <span className="text-body mt-4 flex text-sm font-light">
                Hello! I'm a recent computer science graduate with practical
                experience in a variety of industries, including aerospace,
                education, and retail.
            </span>
            <div className="mt-8 flex flex-row">
                <Button
                    onClick={() =>
                        handleHrefClick("https://github.com/andrewhought")
                    }
                    icon={<IoLogoGithub />}
                />
                <div className="ml-4">
                    <Button
                        onClick={() =>
                            handleHrefClick(
                                "https://www.linkedin.com/in/andrewhought/"
                            )
                        }
                        icon={<IoLogoLinkedin />}
                    />
                </div>
            </div>
        </div>
    );
}
