import React from 'react'
import { Globe, Mail, Instagram, Map } from 'lucide-react'

const AboutPage = () => {
	return (
		<div id='background-image' className="min-h-screen bg-gray-50 py-12 px-4">
			<div className="max-w-4xl mx-auto">
				{/* Header Section */}
				<div className="text-center mb-12">
					<h1 className="text-4xl font-bold text-gray-900 mb-4">
						Welcome to My Travel Journey
					</h1>
					<div className="flex justify-center mb-6">
						<img
							src="https://plus.unsplash.com/premium_photo-1690397038570-7ec0cacb37f2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="Profile"
							className="rounded-full border-4 border-white shadow-lg"
						/>
					</div>
					<p className="text-xl text-gray-600">
						Hi, I'm Sarah! Professional wanderer, amateur photographer.
					</p>
				</div>

				{/* About Me Card */}
				<div className="bg-white rounded-lg shadow-md p-6 mb-8">
					<h2 className="text-2xl font-semibold mb-4">My Story</h2>
					<p className="text-gray-700 mb-4">
						I discovered my passion for travel during a spontaneous backpacking trip 
						through Southeast Asia in 2019. Since then, I've visited over 30 countries 
						across 5 continents, documenting my adventures and sharing travel tips 
						along the way.
					</p>
					<p className="text-gray-700 mb-4">
						When I'm not exploring new destinations, you can find me planning my next 
						trip, learning new languages, or trying to recreate dishes from my travels 
						in my tiny kitchen.
					</p>
				</div>

				{/* Stats Section */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
					<div className="bg-white p-4 rounded-lg shadow text-center">
						<p className="text-3xl font-bold text-black-600">30+</p>
						<p className="text-gray-600">Countries</p>
					</div>
					<div className="bg-white p-4 rounded-lg shadow text-center">
						<p className="text-3xl font-bold text-black-600">5</p>
						<p className="text-gray-600">Continents</p>
					</div>
					<div className="bg-white p-4 rounded-lg shadow text-center">
						<p className="text-3xl font-bold text-black-600">200+</p>
						<p className="text-gray-600">Blog Posts</p>
					</div>
					<div className="bg-white p-4 rounded-lg shadow text-center">
						<p className="text-3xl font-bold text-black-600">4</p>
						<p className="text-gray-600">Languages</p>
					</div>
				</div>

				{/* Contact Section */}
				<div className="bg-white rounded-lg shadow p-6">
					<h2 className="text-2xl font-semibold mb-4">Let's Connect!</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-blue-600">
							<Mail size={20} />
							<span>hello@mytravelblog.com</span>
						</a>
						<a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-blue-600">
							<Instagram size={20} />
							<span>@wandering_sarah</span>
						</a>
						<a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-blue-600">
							<Globe size={20} />
							<span>mytravelblog.com</span>
						</a>
						<a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-blue-600">
							<Map size={20} />
							<span>Currently: Bali, Indonesia</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutPage