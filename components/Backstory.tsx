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
                            Always Smiling: Part I – The Mask
                        </h2>
                        <div className="space-y-6 text-xl leading-relaxed text-zinc-400 font-light">
                            <p>
                                Damon Vox is one of the most recognizable figures in Los Santos. Not because of his face, but because of the bright yellow emoji mask that never stops smiling. Black sunglasses. Permanent grin. A look so iconic that most people forget there is a real person underneath it.
                            </p>
                            <p>
                                He is known citywide as an elite photographer. Events, weddings, street shoots, crime scenes. If something happens in Los Santos, there is a good chance Damon was there, quietly documenting it from behind the lens.
                            </p>
                            <p>
                                What most people do not know is that the mask is not a gimmick. It is permanent.
                            </p>
                            <p>
                                Years ago, Damon volunteered for an experimental neuroscience program designed to treat long-term emotional suppression. The procedure combined a neural interface with advanced facial prosthetics, meant to stabilize emotional output by locking a consistent external expression. Damon chose happiness. He did not fully understand the cost.
                            </p>
                            <p className="bg-primary/5 p-6 rounded-xl border-l-4 border-primary italic text-zinc-300">
                                At first, the side effects were subtle. Emotional numbness. Disassociation. Sleepless nights.
                            </p>
                            <p>
                                Over time, it worsened. Damon did not just lose sadness, he lost joy, fear, and empathy. His emotions did not disappear. They were buried beneath layers of technology and unresolved trauma.
                            </p>
                            <p>
                                Now Damon smiles every second of every day, even when nothing inside him responds.
                            </p>
                            <p>
                                Photography became his anchor. Through the camera, he could still recognize emotion in others, even when he struggled to feel it himself.
                            </p>
                        </div>
                    </section>

                    {/* Part II */}
                    <section className="relative">
                        <div className="absolute -left-12 top-0 text-primary/10 text-9xl font-display select-none">II</div>
                        <h2 className="text-3xl font-display font-bold text-primary mb-8 uppercase tracking-widest border-b-2 border-primary/20 pb-2 inline-block">
                            Always Smiling: Part II – The Diamond Days
                        </h2>
                        <div className="space-y-6 text-xl leading-relaxed text-zinc-400 font-light">
                            <p>
                                When Damon arrived in Los Santos, he felt hollow and directionless. A man driven more by habit than purpose.
                            </p>
                            <p>
                                That changed when an old acquaintance, Marianna, reached out and brought him into a close-knit crew. Through her, Damon met Henry and Nyx. They were loud, chaotic, and alive in a way Damon was not. The kind of people who made memories without trying.
                            </p>
                            <p>
                                Damon documented everything. Late nights. Heists. Laughter. For the first time since the procedure, he felt connected.
                            </p>
                            <p className="text-primary font-bold text-2xl uppercase tracking-tighter">
                                They became family.
                            </p>
                            <p>
                                Damon joined them as a Diamond Geeza, not just as a photographer, but as one of their own. He stopped feeling like an observer and started living inside the moments he used to capture.
                            </p>
                            <p>
                                Then Henry and Nyx were gone.
                            </p>
                            <p>
                                Their deaths were sudden and brutal. Damon processed the loss by freezing them in photographs he never shared and never deleted. The mask smiled. Inside, something fractured.
                            </p>
                        </div>
                    </section>

                    {/* Part III */}
                    <section className="relative">
                        <div className="absolute -left-12 top-0 text-primary/10 text-9xl font-display select-none">III</div>
                        <h2 className="text-3xl font-display font-bold text-primary mb-8 uppercase tracking-widest border-b-2 border-primary/20 pb-2 inline-block">
                            Always Smiling: Part III – Borrowed Homes
                        </h2>
                        <div className="space-y-6 text-xl leading-relaxed text-zinc-400 font-light">
                            <p>
                                After the loss, Damon carried on. He worked. He survived. He drifted through Los Santos with no group to call family.
                            </p>
                            <p>
                                Eventually, he found belonging again when he was recruited into the Triads, alongside familiar faces from his old crew. The structure was quieter and more disciplined, but it felt like a home.
                            </p>
                            <p className="border-l-4 border-zinc-700 pl-6 italic">
                                Until it wasn’t.
                            </p>
                            <p>
                                Leadership vanished. The organization unraveled. The Triads disbanded without closure. Damon walked away without protest. He had learned that homes could disappear overnight.
                            </p>
                            <p>
                                Not long after, the truth surfaced.
                            </p>
                            <p className="text-white font-bold text-2xl tracking-tighter uppercase">
                                Henry was alive.
                            </p>
                            <p>
                                He had faked his death. Nyx had survived as well, but vanished afterward, leaving no trail and no contact. Alive somewhere in the world, but unreachable.
                            </p>
                            <p>
                                The grief returned, sharper and more confusing than before.
                            </p>
                        </div>
                    </section>

                    {/* Part IV */}
                    <section className="relative">
                        <div className="absolute -left-12 top-0 text-primary/10 text-9xl font-display select-none">IV</div>
                        <h2 className="text-3xl font-display font-bold text-primary mb-8 uppercase tracking-widest border-b-2 border-primary/20 pb-2 inline-block">
                            Always Smiling: Part IV – The Ghost and the Glizzy
                        </h2>
                        <div className="space-y-6 text-xl leading-relaxed text-zinc-400 font-light">
                            <p>
                                Before the truth could settle, the IAA recruited them. An off-the-books operation under a name that did not exist. [REDACTED]. A unit built for surveillance, intelligence, and quiet work.
                            </p>
                            <p>
                                Damon fit perfectly. Seeing everything without being seen was already his life.
                            </p>
                            <p>
                                Around the same time, he opened Damon’s Glizzy’s. A loud, ridiculous business selling strange and over-the-top hot dogs. Bright colors. Weird combinations. Food meant to make people laugh.
                            </p>
                            <p className="bg-zinc-800 p-6 rounded-xl border-l-4 border-primary">
                                It was not a front. It was an anchor.
                            </p>
                            <p>
                                Behind the counter, Damon was not an asset or a ghost or a man buried in classified work. He was just Smiley, serving glizzys and snapping photos of people enjoying something simple.
                            </p>
                            <p>
                                Now Damon lives between worlds. Photographer. Business owner. Intelligence asset. A man with a permanent smile and emotions locked behind technology and trauma.
                            </p>
                            <p>
                                He no longer looks for forever homes. He builds places that last long enough to matter.
                            </p>
                            <p className="font-display text-2xl text-white italic">
                                And he documents everything. Always smiling.
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
