// src/lib/boop.ts
import { spring } from 'svelte/motion';

type BoopParams = {
	isBooped?: boolean;
	x?: number;
	y?: number;
	rotation?: number;
	scale?: number;
	timing?: number;
	setter: (value: boolean) => void;
};

export default function boop(node: HTMLElement, params: BoopParams) {
	const { setter } = params;
	const { x = 0, y = 0, rotation = 0, scale = 1, timing = 150 } = params;

	const springyAnimation = spring(
		{ x: 0, y: 0, rotation: 0, scale: 1 },
		{ stiffness: 0.1, damping: 0.15 }
	);

	node.style.display = 'inline-block';
	const unsubscribe = springyAnimation.subscribe(({ x, y, rotation, scale }) => {
		node.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg) scale(${scale})`;
	});

	function triggerBoop() {
		springyAnimation.set({ x, y, rotation, scale });
		window.setTimeout(() => {
			springyAnimation.set({ x: 0, y: 0, rotation: 0, scale: 1 });
			setter(false);
		}, timing);
	}

	node.addEventListener('mouseenter', triggerBoop);
	return {
		destroy() {
			unsubscribe();
			node.removeEventListener('mouseenter', triggerBoop);
		}
	};
}
