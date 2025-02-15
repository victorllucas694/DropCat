import { useState } from "react";
import { Calendar, Search } from "lucide-react";

const posts = [
	{
		id: 1,
		title: "Viagem dos Sonhos",
		content: "Três amigas embarcam em uma jornada inesquecível pelo mundo.",
		image:
			"https://img.freepik.com/fotos-gratis/tres-meninas-bonitas-em-pe-no-aeroporto_1157-25494.jpg?t=st=1739654939~exp=1739658539~hmac=43d3ae8aabc90b375ffd800d14e3430b839dc11d099aec6e782c7d1370a85d4f&w=1380",
	},
	{
		id: 2,
		title: "Explorando Novos Destinos",
		content: "Duas amigas descobrem culturas fascinantes em sua nova aventura.",
		image:
			"https://img.freepik.com/fotos-gratis/duas-lindas-meninas-em-pe-no-aeroporto_1157-25505.jpg?t=st=1739654959~exp=1739658559~hmac=d81c0c65ccbfef369c7ce192abc1869506bf89b287c3c5bd8872fb9404d29188&w=1380",
	},
	{
		id: 3,
		title: "Paixão pela Equitação",
		content:
			"Uma jovem amazona se prepara para mais um dia emocionante nos estábulos.",
		image:
			"https://img.freepik.com/fotos-gratis/mulher-piloto-segurando-uma-sela-em-um-estabulo-mulher-tem-cabelo-comprido-e-t-shirt-branca_1157-49429.jpg?t=st=1739654980~exp=1739658580~hmac=94ba1ca75b8bf8eecf387df09f5871b988284edac1f92ded0a945892bdbc7144&w=1380",
	},
	{
		id: 4,
		title: "A Rotina de uma Médica",
		content:
			"Uma médica dedicada inicia mais um dia de atendimento no hospital.",
		image:
			"https://img.freepik.com/fotos-gratis/medico-da-mulher-em-um-uniforme-branco-em-pe-em-um-corredor_1157-33391.jpg?t=st=1739655008~exp=1739658608~hmac=a315bfec2ad1e3ff21a7771ee0a9f8292601d121fd0d90dd0efbf10bf5f3025c&w=1380",
	},
	{
		id: 5,
		title: "Viagem dos Sonhos",
		content: "Três amigas embarcam em uma jornada inesquecível pelo mundo.",
		image:
			"https://img.freepik.com/fotos-gratis/tres-meninas-bonitas-em-pe-no-aeroporto_1157-25494.jpg?t=st=1739654939~exp=1739658539~hmac=43d3ae8aabc90b375ffd800d14e3430b839dc11d099aec6e782c7d1370a85d4f&w=1380",
	},
    {
		id: 6,
		title: "Viagem dos Sonhos",
		content: "Três amigas embarcam em uma jornada inesquecível pelo mundo.",
		image:
			"https://img.freepik.com/fotos-gratis/tres-meninas-bonitas-em-pe-no-aeroporto_1157-25494.jpg?t=st=1739654939~exp=1739658539~hmac=43d3ae8aabc90b375ffd800d14e3430b839dc11d099aec6e782c7d1370a85d4f&w=1380",
	},
    {
		id: 7,
		title: "Viagem dos Sonhos",
		content: "Três amigas embarcam em uma jornada inesquecível pelo mundo.",
		image:
			"https://img.freepik.com/fotos-gratis/tres-meninas-bonitas-em-pe-no-aeroporto_1157-25494.jpg?t=st=1739654939~exp=1739658539~hmac=43d3ae8aabc90b375ffd800d14e3430b839dc11d099aec6e782c7d1370a85d4f&w=1380",
	},
    {
		id: 8,
		title: "Viagem dos Sonhos",
		content: "Três amigas embarcam em uma jornada inesquecível pelo mundo.",
		image:
			"https://img.freepik.com/fotos-gratis/tres-meninas-bonitas-em-pe-no-aeroporto_1157-25494.jpg?t=st=1739654939~exp=1739658539~hmac=43d3ae8aabc90b375ffd800d14e3430b839dc11d099aec6e782c7d1370a85d4f&w=1380",
	},
];

function Card({
	children,
	className,
}: { children: React.ReactNode; className?: string }) {
	return (
		<div
			className={`bg-card-button shadow-lg rounded-lg overflow-hidden p-4 ${className}`}
		>
			{children}
		</div>
	);
}

export default function AllEvents() {
	const [search, setSearch] = useState("");

	const filteredPosts = posts.filter((post) =>
		post.title.toLowerCase().includes(search.toLowerCase()),
	);

	return (
		<div className="p-6 w-full mx-auto bg-almost-black">
			<header className="bg-almost-black flex items-center gap-4 mb-6 pb-4">
				<Search className="w-5 h-5 bg-almost-black" />
				<input
					type="text"
					placeholder="Encontre eventos"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					className="bg-almost-black w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
				<button className="px-4 w-48 py-2  text-white rounded-md hover:bg-card-button transition flex items-center gap-2">
					<Calendar className="w-4 h-4" />
					Criar Evento
				</button>
			</header>
			<h1 className="text-2xl font-bold mb-4">Eventos criados recentemente</h1>
			<div className="grid mt-10 grid-cols-1 md:grid-cols-2 bg-almost-black lg:grid-cols-3 gap-4">
				{filteredPosts.map((post) => (
					<Card key={post.id}>
						<img
							src={post.image}
							alt={post.title}
							className="w-full object-cover rounded-md"
						/>
						<h2 className="text-lg mt-8 font-alfa font-semibold mt-2">
							{post.title}
						</h2>
						<p className="text-gray-300 mt-2">{post.content}</p>
						<button className="mt-4 w-full h-12 bg-button-card text-white px-4 py-2 rounded-md transition">
							Ver mais informações
						</button>
					</Card>
				))}
			</div>
		</div>
	);
}
