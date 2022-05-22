import Navbar from "elements/default/Navbar";
import Backdrop from "elements/Hero/Backdrop";
import Demonstration from "elements/Hero/Demonstration";
import type { NextPage } from "next";
import Image from "next/image";
import RocketEmoji from "static/images/rocket_emoji.png";

const Section1: React.FC = () => {
	return (
		<div className="relative grid h-screen border-b shadow-xl place-items-center border-zinc-800">
			<div className="absolute z-0 w-full h-full hero-bg" />
			<main className="absolute flex items-center justify-between w-3/4 mx-auto">
				<div>
					<h1 className="font-medium text-8xl text-zinc-50">
						Horizon
					</h1>
					<h3 className="text-2xl leading-none text-transparent text-zinc-300 bg-clip-text bg-gradient-to-r from-accent-300 to-red-200">
						Blazing fast checkout made easy
						<span className="inline-block ml-2 align-middle shake">
							<Image
								src={RocketEmoji}
								height={20}
								width={20}
								alt="rocket-emoji"
							/>
						</span>
					</h3>
				</div>
				<Demonstration />
			</main>
		</div>
	);
};

const Section2: React.FC = () => {
	return (
		<div className="relative grid h-screen bg-zinc-900 place-items-center">
			<div className="w-3/4 mx-auto">
				<h1 className="font-medium text-8xl text-zinc-50">Blah</h1>
				<h3 className="text-xl text-zinc-300 ">
					Enter Some more content for later. Yes its that easy!
				</h3>
			</div>
		</div>
	);
};
const Hero: NextPage = () => {
	return (
		<>
			<Navbar />
			<Section1 />
			<Section2 />
		</>
	);
};

export default Hero;
