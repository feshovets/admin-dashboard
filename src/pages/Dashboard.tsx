import { dashboardItems } from "../constants";

function Dashboard() {
    return (
        <main className="flex flex-col grow bg-zinc-100 px-6 py-8 gap-8">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <section id="general">
                <ul className="flex gap-8">
                    {dashboardItems.general.map((item, id) => (
                        <li key={"general-" + id} className="flex flex-col bg-white rounded-xl">
                            <div>
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>30,000</p>
                                </div>
                                <div>
                                    {/*Icon*/}
                                </div>
                            </div>
                            <span>

                            </span>
                        </li>
                    ))}

                </ul>
            </section>
            <section id="sales-chart">
            </section>
            <section id="details-table">
            </section>
        </main>
    )
}

export default Dashboard;