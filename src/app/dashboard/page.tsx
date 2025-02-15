"use client";

import type React from "react";
import { useState } from "react";
import AllEvents from "./AllEvents";
import MyDocuments from "../dashboard/MyDocuments";
import Travels from "../dashboard/Travels";

const Dashboard: React.FC = () => {
	const [activeComponent, setActiveComponent] = useState<string>("AllEvents");

	const renderComponent = () => {
		switch (activeComponent) {
			case "AllEvents":
				return <AllEvents />;
			case "MyDocuments":
				return <MyDocuments />;
			case "Travels":
				return <Travels />;
		}
	};

	return (
		<div className="flex min-h-screen bg-almost-black">
			<aside className="w-64 bg-custom-black text-white p-5">
				<h1 className="font-bold mb-6 justify-normal font-alfa text-4xl">
					DropCat
				</h1>
				<nav className="space-y-3">
					{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
<p
						className={`block p-3 font-roboto rounded-md ${
							activeComponent === "AllEvents" ? "bg-almost-black" : ""
						}`}
						onClick={() => setActiveComponent("AllEvents")}
					>
						Todos os eventos
					</p>
					{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
<p
						className={`block p-3 font-roboto rounded-md ${
							activeComponent === "MyDocuments" ? "bg-almost-black" : ""
						}`}
						onClick={() => setActiveComponent("MyDocuments")}
					>
						Meus documentos
					</p>
					{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
<p
						className={`block p-3 font-roboto rounded-md ${
							activeComponent === "Travels" ? "bg-almost-black" : ""
						}`}
						onClick={() => setActiveComponent("Travels")}
					>
						Viagens
					</p>
					{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
<p
						className={`block p-3 font-roboto rounded-md ${
							activeComponent === "Shared" ? "bg-almost-black" : ""
						}`}
						onClick={() => setActiveComponent("Shared")}
					>
						Compartilhados
					</p>
					{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
<p
						className={`block p-3 font-roboto rounded-md ${
							activeComponent === "Others" ? "bg-almost-black" : ""
						}`}
						onClick={() => setActiveComponent("Others")}
					>
						Outros
					</p>
				</nav>
			</aside>

			<main className="flex-1 w-full p-8">
				<div className="w-full gap-6">{renderComponent()}</div>
			</main>
		</div>
	);
};

export default Dashboard;
