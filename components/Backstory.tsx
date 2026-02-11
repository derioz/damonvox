import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { PORTRAIT_IMG } from '../constants';

// Declare puter global
declare const puter: any;

// Backstory text content for each part — plain text for TTS
const BACKSTORY_PARTS = [
    {
        title: 'Always Smiling: Part I – The Mask',
        numeral: 'I',
        text: `Damon Vox is one of the most recognizable figures in Los Santos. Not because of his face, but because of the bright yellow emoji mask that never stops smiling. Black sunglasses. Permanent grin. A look so iconic that most people forget there is a real person underneath it.

He is known citywide as an elite photographer. Events, weddings, street shoots, crime scenes. If something happens in Los Santos, there is a good chance Damon was there, quietly documenting it from behind the lens.

What most people do not know is that the mask is not a gimmick. It is permanent.

Years ago, Damon volunteered for an experimental neuroscience program designed to treat long-term emotional suppression. The procedure combined a neural interface with advanced facial prosthetics, meant to stabilize emotional output by locking a consistent external expression. Damon chose happiness. He did not fully understand the cost.

At first, the side effects were subtle. Emotional numbness. Disassociation. Sleepless nights.

Over time, it worsened. Damon did not just lose sadness, he lost joy, fear, and empathy. His emotions did not disappear. They were buried beneath layers of technology and unresolved trauma.

Now Damon smiles every second of every day, even when nothing inside him responds.

Photography became his anchor. Through the camera, he could still recognize emotion in others, even when he struggled to feel it himself.`,
    },
    {
        title: 'Always Smiling: Part II – The Diamond Days',
        numeral: 'II',
        text: `When Damon arrived in Los Santos, he felt hollow and directionless. A man driven more by habit than purpose.

That changed when an old acquaintance, Marianna, reached out and brought him into a close-knit crew. Through her, Damon met Henry and Nyx. They were loud, chaotic, and alive in a way Damon was not. The kind of people who made memories without trying.

Damon documented everything. Late nights. Heists. Laughter. For the first time since the procedure, he felt connected.

They became family.

Damon joined them as a Diamond Geeza, not just as a photographer, but as one of their own. He stopped feeling like an observer and started living inside the moments he used to capture.

Then Henry and Nyx were gone.

Their deaths were sudden and brutal. Damon processed the loss by freezing them in photographs he never shared and never deleted. The mask smiled. Inside, something fractured.`,
    },
    {
        title: 'Always Smiling: Part III – Borrowed Homes',
        numeral: 'III',
        text: `After the loss, Damon carried on. He worked. He survived. He drifted through Los Santos with no group to call family.

Eventually, he found belonging again when he was recruited into the Triads, alongside familiar faces from his old crew. The structure was quieter and more disciplined, but it felt like a home.

Until it wasn't.

Leadership vanished. The organization unraveled. The Triads disbanded without closure. Damon walked away without protest. He had learned that homes could disappear overnight.

Not long after, the truth surfaced.

Henry was alive.

He had faked his death. Nyx had survived as well, but vanished afterward, leaving no trail and no contact. Alive somewhere in the world, but unreachable.

The grief returned, sharper and more confusing than before.`,
    },
    {
        title: 'Always Smiling: Part IV – The Ghost and the Glizzy',
        numeral: 'IV',
        text: `Before the truth could settle, the IAA recruited them. An off-the-books operation under a name that did not exist. REDACTED. A unit built for surveillance, intelligence, and quiet work.

Damon fit perfectly. Seeing everything without being seen was already his life.

Around the same time, he opened Damon's Glizzys. A loud, ridiculous business selling strange and over-the-top hot dogs. Bright colors. Weird combinations. Food meant to make people laugh.

It was not a front. It was an anchor.

Behind the counter, Damon was not an asset or a ghost or a man buried in classified work. He was just Smiley, serving glizzys and snapping photos of people enjoying something simple.

Now Damon lives between worlds. Photographer. Business owner. Intelligence asset. A man with a permanent smile and emotions locked behind technology and trauma.

He no longer looks for forever homes. He builds places that last long enough to matter.

And he documents everything. Always smiling.`,
    },
];

type NarrationState = 'idle' | 'loading' | 'playing' | 'paused';

const Backstory: React.FC = () => {
    const navigate = useNavigate();
    const [narrationState, setNarrationState] = useState<NarrationState>('idle');
    const [activePartIndex, setActivePartIndex] = useState<number>(-1);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const cancelledRef = useRef<boolean>(false);
    const sectionRefs = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            cancelledRef.current = true;
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    // Scroll active section into view
    useEffect(() => {
        if (activePartIndex >= 0 && sectionRefs.current[activePartIndex]) {
            sectionRefs.current[activePartIndex]?.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    }, [activePartIndex]);

    const generateAndPlayPart = useCallback(async (partIndex: number): Promise<void> => {
        if (cancelledRef.current || partIndex >= BACKSTORY_PARTS.length) {
            setNarrationState('idle');
            setActivePartIndex(-1);
            return;
        }

        setActivePartIndex(partIndex);
        setNarrationState('loading');

        try {
            const audio: HTMLAudioElement = await puter.ai.txt2speech(
                BACKSTORY_PARTS[partIndex].text,
                {
                    provider: 'openai',
                    model: 'gpt-4o-mini-tts',
                    voice: 'onyx',
                    response_format: 'mp3',
                    instructions: 'Read like a dramatic narrator telling a dark, cinematic backstory. Measured pace, deep tone, slight gravitas. Add natural pauses between paragraphs.',
                }
            );

            if (cancelledRef.current) return;

            audioRef.current = audio;
            setNarrationState('playing');

            audio.play();

            // Wait for audio to finish, then advance to next part
            await new Promise<void>((resolve) => {
                audio.onended = () => resolve();
                audio.onerror = () => resolve();
            });

            if (!cancelledRef.current) {
                audioRef.current = null;
                await generateAndPlayPart(partIndex + 1);
            }
        } catch (error) {
            console.error('TTS error:', error);
            if (!cancelledRef.current) {
                setNarrationState('idle');
                setActivePartIndex(-1);
            }
        }
    }, []);

    const startNarration = useCallback(() => {
        cancelledRef.current = false;
        generateAndPlayPart(0);
    }, [generateAndPlayPart]);

    const togglePause = useCallback(() => {
        if (!audioRef.current) return;
        if (narrationState === 'playing') {
            audioRef.current.pause();
            setNarrationState('paused');
        } else if (narrationState === 'paused') {
            audioRef.current.play();
            setNarrationState('playing');
        }
    }, [narrationState]);

    const stopNarration = useCallback(() => {
        cancelledRef.current = true;
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current = null;
        }
        setNarrationState('idle');
        setActivePartIndex(-1);
    }, []);

    const isActive = narrationState !== 'idle';

    return (
        <div className="min-h-screen bg-black text-zinc-100 font-body selection:bg-primary selection:text-black pb-24">
            {/* Cinematic Header */}
            <div className="relative h-[60vh] overflow-hidden border-b-4 border-primary">
                <img
                    src={PORTRAIT_IMG}
                    alt="Damon Vox"
                    className="w-full h-full object-cover grayscale opacity-40 scale-110 motion-safe:animate-[pulse_10s_infinite]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="absolute bottom-12 left-0 w-full px-6">
                    <div className="container mx-auto max-w-4xl">
                        <button
                            onClick={() => navigate('/')}
                            className="group flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm mb-6 hover:translate-x-1 transition-transform"
                        >
                            <span className="material-symbols-outlined">west</span>
                            Return to Reality
                        </button>
                        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                            <h1 className="text-5xl md:text-8xl font-display font-bold leading-none tracking-tighter">
                                THE MASK OF <br />
                                <span className="text-primary text-stroke-primary">DAMON VOX</span>
                            </h1>

                            {/* Listen Button */}
                            {!isActive && (
                                <button
                                    onClick={startNarration}
                                    className="group relative flex items-center gap-3 bg-gradient-to-r from-primary/20 to-primary/10 border-2 border-primary/60 text-primary px-6 py-3 rounded-2xl font-bold uppercase tracking-wider text-sm hover:border-primary hover:from-primary/30 hover:to-primary/20 hover:shadow-glow transition-all duration-300 backdrop-blur-sm self-start sm:self-end shrink-0"
                                >
                                    <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">headphones</span>
                                    <span className="flex flex-col items-start leading-tight">
                                        <span className="text-xs text-primary/60 font-normal">AI Narration</span>
                                        <span>Listen to Story</span>
                                    </span>
                                    <span className="absolute inset-0 rounded-2xl bg-primary/5 animate-pulse pointer-events-none"></span>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto max-w-4xl px-6 pt-20">
                <div className="space-y-16">
                    {BACKSTORY_PARTS.map((part, index) => (
                        <section
                            key={index}
                            ref={(el) => { sectionRefs.current[index] = el; }}
                            className={`relative transition-all duration-700 ${activePartIndex === index
                                    ? 'ring-2 ring-primary/40 rounded-3xl p-6 -mx-6 bg-primary/[0.03] shadow-[0_0_40px_rgba(255,200,0,0.08)]'
                                    : activePartIndex >= 0 && activePartIndex !== index
                                        ? 'opacity-40'
                                        : ''
                                }`}
                        >
                            <div className="absolute -left-12 top-0 text-primary/10 text-9xl font-display select-none">
                                {part.numeral}
                            </div>

                            {/* Active indicator */}
                            {activePartIndex === index && narrationState === 'playing' && (
                                <div className="absolute -left-2 top-1/2 -translate-y-1/2 flex flex-col gap-1">
                                    {[...Array(4)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="w-1 bg-primary rounded-full"
                                            style={{
                                                height: `${12 + Math.random() * 16}px`,
                                                animation: `soundBar 0.${4 + i}s ease-in-out infinite alternate`,
                                            }}
                                        />
                                    ))}
                                </div>
                            )}

                            <h2 className="text-3xl font-display font-bold text-primary mb-8 uppercase tracking-widest border-b-2 border-primary/20 pb-2 inline-block">
                                {part.title}
                            </h2>
                            <div className="space-y-6 text-xl leading-relaxed text-zinc-400 font-light">
                                {renderPartContent(index)}
                            </div>
                        </section>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <button
                        onClick={() => navigate('/')}
                        className="inline-block bg-primary text-black px-12 py-5 rounded-2xl font-display text-2xl font-bold shadow-hard hover:shadow-hard-lg hover:-translate-y-1 transition-all"
                    >
                        END OF RECORD // RETURN
                    </button>
                </div>
            </div>

            {/* Floating Narration Controls */}
            {isActive && (
                <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center p-4 pointer-events-none">
                    <div className="pointer-events-auto bg-black/80 backdrop-blur-xl border border-primary/30 rounded-2xl px-6 py-4 flex items-center gap-5 shadow-[0_0_30px_rgba(255,200,0,0.15)]">
                        {/* Play/Pause */}
                        <button
                            onClick={togglePause}
                            disabled={narrationState === 'loading'}
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-black hover:scale-110 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {narrationState === 'loading' ? (
                                <span className="material-symbols-outlined animate-spin">progress_activity</span>
                            ) : narrationState === 'paused' ? (
                                <span className="material-symbols-outlined">play_arrow</span>
                            ) : (
                                <span className="material-symbols-outlined">pause</span>
                            )}
                        </button>

                        {/* Progress Info */}
                        <div className="flex flex-col">
                            <span className="text-xs text-primary/60 uppercase tracking-widest font-bold">
                                {narrationState === 'loading' ? 'Generating...' : narrationState === 'paused' ? 'Paused' : 'Now Reading'}
                            </span>
                            <span className="text-sm text-zinc-200 font-bold">
                                Part {activePartIndex + 1} of {BACKSTORY_PARTS.length}
                            </span>
                        </div>

                        {/* Progress Dots */}
                        <div className="flex gap-2">
                            {BACKSTORY_PARTS.map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${i === activePartIndex
                                            ? 'bg-primary scale-125 shadow-glow'
                                            : i < activePartIndex
                                                ? 'bg-primary/40'
                                                : 'bg-zinc-700'
                                        }`}
                                />
                            ))}
                        </div>

                        {/* Stop */}
                        <button
                            onClick={stopNarration}
                            className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-600 text-zinc-400 hover:border-red-500 hover:text-red-400 hover:scale-110 transition-all"
                        >
                            <span className="material-symbols-outlined text-xl">stop</span>
                        </button>
                    </div>
                </div>
            )}

            <style>{`
                .text-stroke-primary {
                    -webkit-text-stroke: 1px #FFC800;
                    color: transparent;
                }
                @keyframes soundBar {
                    0% { height: 6px; }
                    100% { height: 24px; }
                }
            `}</style>
        </div>
    );
};

// Helper function to render the styled content of each part
function renderPartContent(partIndex: number) {
    switch (partIndex) {
        case 0:
            return (
                <>
                    <p>Damon Vox is one of the most recognizable figures in Los Santos. Not because of his face, but because of the bright yellow emoji mask that never stops smiling. Black sunglasses. Permanent grin. A look so iconic that most people forget there is a real person underneath it.</p>
                    <p>He is known citywide as an elite photographer. Events, weddings, street shoots, crime scenes. If something happens in Los Santos, there is a good chance Damon was there, quietly documenting it from behind the lens.</p>
                    <p>What most people do not know is that the mask is not a gimmick. It is permanent.</p>
                    <p>Years ago, Damon volunteered for an experimental neuroscience program designed to treat long-term emotional suppression. The procedure combined a neural interface with advanced facial prosthetics, meant to stabilize emotional output by locking a consistent external expression. Damon chose happiness. He did not fully understand the cost.</p>
                    <p className="bg-primary/5 p-6 rounded-xl border-l-4 border-primary italic text-zinc-300">At first, the side effects were subtle. Emotional numbness. Disassociation. Sleepless nights.</p>
                    <p>Over time, it worsened. Damon did not just lose sadness, he lost joy, fear, and empathy. His emotions did not disappear. They were buried beneath layers of technology and unresolved trauma.</p>
                    <p>Now Damon smiles every second of every day, even when nothing inside him responds.</p>
                    <p>Photography became his anchor. Through the camera, he could still recognize emotion in others, even when he struggled to feel it himself.</p>
                </>
            );
        case 1:
            return (
                <>
                    <p>When Damon arrived in Los Santos, he felt hollow and directionless. A man driven more by habit than purpose.</p>
                    <p>That changed when an old acquaintance, Marianna, reached out and brought him into a close-knit crew. Through her, Damon met Henry and Nyx. They were loud, chaotic, and alive in a way Damon was not. The kind of people who made memories without trying.</p>
                    <p>Damon documented everything. Late nights. Heists. Laughter. For the first time since the procedure, he felt connected.</p>
                    <p className="text-primary font-bold text-2xl uppercase tracking-tighter">They became family.</p>
                    <p>Damon joined them as a Diamond Geeza, not just as a photographer, but as one of their own. He stopped feeling like an observer and started living inside the moments he used to capture.</p>
                    <p>Then Henry and Nyx were gone.</p>
                    <p>Their deaths were sudden and brutal. Damon processed the loss by freezing them in photographs he never shared and never deleted. The mask smiled. Inside, something fractured.</p>
                </>
            );
        case 2:
            return (
                <>
                    <p>After the loss, Damon carried on. He worked. He survived. He drifted through Los Santos with no group to call family.</p>
                    <p>Eventually, he found belonging again when he was recruited into the Triads, alongside familiar faces from his old crew. The structure was quieter and more disciplined, but it felt like a home.</p>
                    <p className="border-l-4 border-zinc-700 pl-6 italic">Until it wasn't.</p>
                    <p>Leadership vanished. The organization unraveled. The Triads disbanded without closure. Damon walked away without protest. He had learned that homes could disappear overnight.</p>
                    <p>Not long after, the truth surfaced.</p>
                    <p className="text-white font-bold text-2xl tracking-tighter uppercase">Henry was alive.</p>
                    <p>He had faked his death. Nyx had survived as well, but vanished afterward, leaving no trail and no contact. Alive somewhere in the world, but unreachable.</p>
                    <p>The grief returned, sharper and more confusing than before.</p>
                </>
            );
        case 3:
            return (
                <>
                    <p>Before the truth could settle, the IAA recruited them. An off-the-books operation under a name that did not exist. [REDACTED]. A unit built for surveillance, intelligence, and quiet work.</p>
                    <p>Damon fit perfectly. Seeing everything without being seen was already his life.</p>
                    <p>Around the same time, he opened Damon's Glizzy's. A loud, ridiculous business selling strange and over-the-top hot dogs. Bright colors. Weird combinations. Food meant to make people laugh.</p>
                    <p className="bg-zinc-800 p-6 rounded-xl border-l-4 border-primary">It was not a front. It was an anchor.</p>
                    <p>Behind the counter, Damon was not an asset or a ghost or a man buried in classified work. He was just Smiley, serving glizzys and snapping photos of people enjoying something simple.</p>
                    <p>Now Damon lives between worlds. Photographer. Business owner. Intelligence asset. A man with a permanent smile and emotions locked behind technology and trauma.</p>
                    <p>He no longer looks for forever homes. He builds places that last long enough to matter.</p>
                    <p className="font-display text-2xl text-white italic">And he documents everything. Always smiling.</p>
                </>
            );
        default:
            return null;
    }
}

export default Backstory;
