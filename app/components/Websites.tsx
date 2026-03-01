import { namesOfWebsites } from "@/app/data/websites";
import WebsiteCard from "./WebsiteCard";

export default function Websites() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">Websites</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
                {namesOfWebsites.map((website, index) => (
                    <WebsiteCard key={index} {...website} />
                ))}
            </div>
        </section>

    )
}