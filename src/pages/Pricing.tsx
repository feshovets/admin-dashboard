import { pricingItems } from "../constants";
import { twMerge } from "tailwind-merge";

function Pricing() {
    return (
        <main className="flex flex-col grow bg-zinc-100 px-6 py-8 gap-8">
            <h1 className="text-3xl font-bold">Pricing</h1>
            <div className="flex h-full gap-10">
                {pricingItems.options.map((item, id) => (
                    <PriceCard
                        key={"price-card-" + id}
                        name={item.name}
                        price={item.price}
                        featuresCount={item.featuresCount}
                    />
                ))}
            </div>
        </main>
    )
}

function PriceCard({
    name,
    price,
    featuresCount,
}: {
    name: string,
    price: number,
    featuresCount?: number,
}) {
    return (
        <div className="flex flex-col grow basis-0 items-center rounded-3xl px-6 py-10 h-fit bg-white">
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-sm">Monthly Charge</p>
            <p className="text-blue-500 text-5xl font-extrabold mt-2">${price}</p>
            <ul className="flex flex-col items-center w-full gap-4 py-6 my-6 border-b border-t border-zinc-200">
                {pricingItems.features.map((item, id) => (
                    <li className={twMerge("font-semibold", featuresCount! <= id && "text-zinc-400")}>
                        {item}
                    </li>
                ))}

            </ul>
            <button className="py-4 px-12 rounded-full border-2 border-blue-500 bg-white text-blue-500 font-bold transition-colors hover:text-white hover:bg-blue-500">
                Get Started
            </button>
            <a className="font-bold underline mt-4">
                Start Your 30 day Free Trial
            </a>
        </div >
    )
}


export default Pricing;