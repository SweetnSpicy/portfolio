import ImageCarousel from '@/components/ImageCarousel';
import './Art.scss'

/**
 * 
 * @returns The art page with a moving carousel
 */
const Art = () => {
	const imageModules = import.meta.glob('@assets/portraits/*.{png,jpg,jpeg,SVG}', { eager: true });
	const imageModulo = import.meta.glob('@assets/images/*.{png,jpg,jpeg,SVG}', { eager: true });
	
	// iterates through assets/portraits folder
	const images = Object.values(imageModules).map((module) => ({
		url: module.default,
		alt: 'Gallery Image',
		title: 'Project Photo',
		description: 'A photo from our collection'
	}));

	// iterates through images folder
	const images2 = Object.values(imageModulo).map((module) => ({
		url: module.default,
		alt: 'Gallery Image',
		title: 'Project Photo',
		description: 'A photo from our collection'
	}));

	return (
		<div>
			<h2>Years of Effort</h2>
			<p>
				For the last few years, i have been trying to improve my art skills. I wouldn't say
				I had a terrible foundation. i've had art classes, and with experience in frontend
				developemnt, I understand how to make something look "good". The on-paper steps that
				should be followed to make sure that your drawings or website looks nice. Obviously,
				that only gets you so far.
			</p>
			<p>
				To try and remedy this problem of mine, I bought a tablet in 2020 to start drawing more.
				I really wanted to dive into the world of digital art, as I had only done the manual
				methods before in life (unless making phone web mockups count). I did take a photoshop/illustrator
				class for New Media Design first year students but I didn't really make much of what I
				would consider "art". I didn't know how to draw still so most of what I did was photography and
				editing that into a book cover. Guess I'll also attach those in this webpage.
			</p>
			<p>
				Through sheer impatience, and lack of trying all these years seriously, I still don't think
				I can draw exactly. I can't make anything complex like a human face look 3D. All the eyes
				I draw look dead. Drawing women's bodies is just not a thing in my arsenal. Action poses,
				really dark images, multiple people at different depths, motion, etc. The list goes on and on. But I am still trying
				so that one day I can quit all my jobs and become a Twitter artist (joking). I just want to create
				something as cool as what I see online all the time.
			</p>
			<p>Add button here to make portraits appear</p>
			<ImageCarousel images={images} />
			<p>Add button here to make other type of images appear</p>
			<ImageCarousel images={images2} />
		</div>
	);
};

export default Art;