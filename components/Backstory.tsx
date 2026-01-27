import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PORTRAIT_IMG } from '../constants';

const Backstory: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                        <h1 className="text-5xl md:text-8xl font-display font-bold leading-none tracking-tighter">
                            THE MASK OF <br />
                            <span className="text-primary text-stroke-primary">DAMON VOX</span>
                        </h1>
                    </div>
                </div>
            </div>

            <div className="container mx-auto max-w-4xl px-6 pt-20">
                <div className="space-y-16">
                    {/* Part I */}
                    <section className="relative">
                        <div className="absolute -left-12 top-0 text-primary/10 text-9xl font-display select-none">I</div>
                        <h2 className="text-3xl font-display font-bold text-primary mb-8 uppercase tracking-widest border-b-2 border-primary/20 pb-2 inline-block">
                            Always Smiling: Part I
                        </h2>
                        <div className="space-y-6 text-xl leading-relaxed text-zinc-400 font-light">
                            <p>
                                Damon Vox is one of the most recognizable faces in Los Santos — well, not his actual face. The bright yellow emoji mask, permanently smiling and always shaded by black sunglasses, has become his signature look. He's known citywide as a top tier photographer — events, weddings, street shoots, crime scenes, you name it. Everyone knows Smiley.
                            </p>
                            <p>
                                What people don’t know is that Damon’s mask isn’t just a gimmick — it’s permanent, medically installed. It wasn’t for clout. It was a last resort.
                            </p>
                            <p>
                                Years ago, Damon volunteered for a cutting-edge neuroscience study aimed at treating long term emotional suppression disorders. The twist? The procedure used an experimental neural interface combined with facial prosthetics to “lock in” a consistent external emotion. Damon, always the optimist on the surface, chose happiness.
                            </p>
                            <p className="bg-primary/5 p-6 rounded-xl border-l-4 border-primary italic text-zinc-300">
                                He didn’t read the fine print.
                            </p>
                            <p>
                                The side effects were subtle at first: numbness, disassociation, sleepless nights. Over time, Damon began to feel less and less — not just sadness, but joy, empathy, even fear. His emotions didn’t go away… they got buried. Compressed beneath layers of tech and trauma until they no longer had a clear way out.
                            </p>
                            <p>
                                Now he smiles on the outside every hour of every day. But inside, he feels like a ghost — drifting through life with memories that no longer sting, and victories that no longer satisfy. The only thing that keeps him grounded is photography. Through the lens, he can still see emotion, even if he can’t always feel it himself.
                            </p>
                            <p>
                                Some say Damon’s just eccentric. Some think the mask is a branding move. Few know the truth: it’s both a prison and a crutch. And maybe, just maybe, he’s still hoping that one perfect photo — one pure, undistorted human moment — might snap something loose in his head and let him feel again.
                            </p>
                        </div>
                    </section>

                    {/* Part II */}
                    <section className="relative">
                        <div className="absolute -left-12 top-0 text-primary/10 text-9xl font-display select-none">II</div>
                        <h2 className="text-3xl font-display font-bold text-primary mb-8 uppercase tracking-widest border-b-2 border-primary/20 pb-2 inline-block">
                            Always Smiling: Part II
                        </h2>
                        <div className="space-y-6 text-xl leading-relaxed text-zinc-400 font-light">
                            <p>
                                When Damon Vox first arrived in Los Santos, he didn’t feel like a man. He felt like a malfunction — a walking mask with a camera and a vague sense of direction. The city was loud, fast, and bright, and he was a stranger wrapped in a permanent smile he couldn’t take off.
                            </p>
                            <p>
                                Behind that expressionless grin was nothing but static. Fear, doubt, and emptiness all blurred together. That’s when Marianna reached out. An old acquaintance from the freelance days, Marianna knew Damon’s work. She offered him a gig: photos and video work for a close-knit group of her friends.
                            </p>
                            <p className="text-white font-medium border-l-4 border-white pl-6">
                                “They're good people,” she said. “You'll like them.”
                            </p>
                            <p>
                                Damon didn’t know it at the time, but that call would change everything. Through her, he met Henry and Nyx — two magnetic souls who felt like human sunlight. Charisma, energy, chaos — but the good kind. They were the kind of people who turned a random Tuesday into a memory.
                            </p>
                            <p>
                                Damon was fascinated by them. Obsessed, even. Not in a weird way — in the way someone starving for emotion clings to people who radiate it. He started documenting everything. Photos of late night get-togethers, of getaways from banks and beat-up cop cars, of laughing until it hurt.
                            </p>
                            <p>
                                It was the first time in years Damon felt seen. Not for the mask, but for the man holding the camera. They didn’t just tolerate him. They celebrated him.
                            </p>
                            <p className="text-primary font-bold text-2xl uppercase tracking-tighter">
                                Join us. Be a Diamond Geeza.
                            </p>
                            <p>
                                It wasn’t just a name. It was a family. A chaotic, ridiculous, beautiful family. And for once, Damon didn’t feel like an outsider documenting life. He was finally living it.
                            </p>
                            <p>
                                Weeks became months. The crew made noise in every corner of the city. Pranks, heists, wild nights in rented penthouses. Damon kept snapping photos through it all. The camera became his diary. He still didn’t feel things the way others did, but around them, he didn’t have to fake it. He could just exist.
                            </p>
                            <p>
                                Then came the day that shattered it all. Henry and Nyx were gone. Taken in a sudden, brutal act that Damon never saw coming. One moment they were planning a job, laughing about lunch. The next... silence.
                            </p>
                            <p className="font-display text-2xl text-white italic">
                                The kind of silence Damon had heard once before. But this time, it wasn’t a building on fire. It was his heart, cracking beneath a mask that couldn’t cry.
                            </p>
                        </div>
                    </section>
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

            <style>{`
        .text-stroke-primary {
          -webkit-text-stroke: 1px #FFC800;
          color: transparent;
        }
      `}</style>
        </div>
    );
};

export default Backstory;
