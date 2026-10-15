'use client';

import { useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const MUSIC_SRC = '/audio/ambiance.mp3';

export default function BackgroundMusic() {
	const audioRef = useRef<HTMLAudioElement>(null);
	const [isPlaying, setIsPlaying] = useState(false);

	if (!MUSIC_SRC) return null;

	async function togglePlayback() {
		const audio = audioRef.current;
		if (!audio) return;

		if (audio.paused) {
			try {
				await audio.play();
				setIsPlaying(true);
			} catch {
				setIsPlaying(false);
			}
		} else {
			audio.pause();
			setIsPlaying(false);
		}
	}

	return (
		<>
			<audio ref={audioRef} src={MUSIC_SRC} loop preload="none" />
			<button
				type="button"
				onClick={togglePlayback}
				aria-label={isPlaying ? 'Couper la musique' : 'Activer la musique'}
				aria-pressed={isPlaying}
				title={isPlaying ? 'Couper la musique' : 'Activer la musique'}
				className="fixed bottom-5 right-5 z-50 flex size-11 items-center justify-center rounded-full border border-white/30 bg-black/50 text-white backdrop-blur transition hover:bg-black/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
			>
				{isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
			</button>
		</>
	);
}