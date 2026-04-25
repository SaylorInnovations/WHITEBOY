import { useState, useEffect } from 'react';
import { Twitter, Send, Copy, Check, Shield, Users, Eye, Zap, ChevronDown } from 'lucide-react';

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono bg-white/10 hover:bg-white/20 transition-colors border border-white/20"
    >
      {copied ? <Check size={12} /> : <Copy size={12} />}
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
}

const CONTRACT = '0x000...WHITEBOY';

const POSTS = [
  {
    id: 1,
    label: 'Twitter / X — Pinned Post',
    icon: <Twitter size={16} />,
    color: 'from-sky-900/40 to-sky-950/40 border-sky-700/40',
    accent: 'text-sky-400',
    content: `$WHITEBOY

No VCs. No insiders. No bots getting the bag before you.

Just a community built around one idea: crypto used to feel like something real. Like you were part of something. Before the rugs, before the influencer shills, before all of it.

We're going back to that.

Fair launch. Public contract. No hidden wallets.

If you remember when the internet was fun — this one's for you.

CA: ${CONTRACT}`,
  },
  {
    id: 2,
    label: 'Telegram — Welcome Message',
    icon: <Send size={16} />,
    color: 'from-blue-900/40 to-blue-950/40 border-blue-700/40',
    accent: 'text-blue-400',
    content: `Welcome to the $WHITEBOY community.

Glad you found this place.

Here's what you need to know:

- This is a fair launch. No presale, no team allocation, no VC bags.
- The contract is public. Liquidity is locked. Nothing is hidden.
- We're not promising you anything except honesty.

This community exists because a lot of us got tired. Tired of rugs. Tired of insiders. Tired of watching bots front-run every good thing.

$WHITEBOY is a reset. Simple. Clean. Community-owned.

Stick around. Ask questions. We'll answer them.

Rules: Be decent. No spam. No shilling other projects. That's pretty much it.`,
  },
  {
    id: 3,
    label: 'Community Post — Organic Drop',
    icon: <Users size={16} />,
    color: 'from-green-900/40 to-green-950/40 border-green-700/40',
    accent: 'text-green-400',
    content: `Remember when you'd stumble onto a forum at 2am and just... talk to people? No algorithm. No engagement farming. Just real people being real.

That's the energy we're trying to bring back.

$WHITEBOY isn't about getting rich. It's about being part of something that isn't trying to take something from you.

If that sounds good to you, welcome home.`,
  },
  {
    id: 4,
    label: 'Reassurance Post — New Holders',
    icon: <Shield size={16} />,
    color: 'from-amber-900/40 to-amber-950/40 border-amber-700/40',
    accent: 'text-amber-400',
    content: `New here? Nervous? That's fair. We've all been burned before.

Here's what makes $WHITEBOY different:

1. Contract is verified and public. Read every line.
2. Liquidity is locked — the dev cannot pull it.
3. No team wallets. No hidden allocation. No pre-sale.
4. Renounced ownership — no one can change the rules.
5. This community runs itself. Always has.

We're not asking you to trust us blindly. We're asking you to check the contract, check the wallet, check the liquidity — and then decide.

Transparency is the whole point.`,
  },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0f14] text-white font-sans">
      {/* Pixel grid background */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 31px, #fff 31px, #fff 32px), repeating-linear-gradient(90deg, transparent, transparent 31px, #fff 31px, #fff 32px)',
        }}
      />

      {/* Nav */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#0d0f14]/95 backdrop-blur border-b border-white/10 py-3' : 'py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/whiteboy.jpeg"
              alt="WHITEBOY"
              className="w-8 h-8 rounded"
              style={{ imageRendering: 'pixelated' }}
            />
            <span className="font-bold text-sm tracking-widest text-white/90">$WHITEBOY</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
            <a href="#story" className="hover:text-white transition-colors">Story</a>
            <a href="#mission" className="hover:text-white transition-colors">Mission</a>
            <a href="#transparency" className="hover:text-white transition-colors">Transparency</a>
            <a href="#community" className="hover:text-white transition-colors">Community</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="text-white/60 hover:text-white transition-colors"><Twitter size={18} /></a>
            <a href="#" className="text-white/60 hover:text-white transition-colors"><Send size={18} /></a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(220,38,38,0.08) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 flex flex-col items-center gap-8 max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-red-600/10 blur-2xl" />
            <img
              src="/whiteboy.jpeg"
              alt="WHITEBOY mascot"
              className="w-48 h-48 md:w-56 md:h-56 rounded-2xl relative z-10 shadow-2xl"
              style={{
                imageRendering: 'pixelated',
                border: '2px solid rgba(255,255,255,0.08)',
              }}
            />
          </div>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-600/15 border border-red-600/25 text-red-400 text-xs tracking-widest uppercase font-medium">
              Fair Launch &bull; No Insiders &bull; Community Owned
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-none">
              $WHITEBOY
            </h1>
            <p className="text-lg md:text-xl text-white/50 font-light max-w-xl mx-auto leading-relaxed">
              Back when crypto was just people. Before the bots, before the rugs, before all of it got complicated.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
            <div className="flex-1 w-full flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-3">
              <span className="text-white/30 text-xs font-mono">CA:</span>
              <span className="text-white/70 text-xs font-mono flex-1 truncate">{CONTRACT}</span>
              <CopyButton text={CONTRACT} />
            </div>
          </div>

          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a
              href="#"
              className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-lg transition-colors text-sm"
            >
              Buy on Pump.fun
            </a>
            <a
              href="#story"
              className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 font-semibold rounded-lg transition-colors text-sm"
            >
              Our Story
            </a>
          </div>
        </div>

        <a
          href="#story"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20 hover:text-white/50 transition-colors animate-bounce"
        >
          <ChevronDown size={24} />
        </a>
      </section>

      {/* Story */}
      <section id="story" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 rounded bg-white/5 border border-white/10 text-white/40 text-xs tracking-widest uppercase mb-6">
            The Story
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white leading-tight">
            Remember when it felt like something?
          </h2>

          <div className="space-y-6 text-white/60 leading-relaxed text-base md:text-lg">
            <p>
              There was a time — not that long ago — when the internet was just people. Forum posts at midnight. Subreddits before they had sponsors. Crypto wallets you set up yourself, not knowing if it would ever be worth anything, just because it felt like the future.
            </p>
            <p>
              That era is mostly gone. What replaced it is faster, louder, and meaner. Bots front-run every launch. Insiders hold the supply. Influencers get paid to hype things they're already dumping. Everyday people get left holding the bag — again.
            </p>
            <p className="text-white/80 font-medium text-xl">
              $WHITEBOY is a reset.
            </p>
            <p>
              Not a revolution. Not a movement. Just a coin made by regular people who are tired of the game being rigged — and who wanted to build something that felt like those earlier days again. Simple. Fair. Community-first.
            </p>
            <p>
              No presale. No team allocation. No VC bags waiting to dump on you. Just a fair launch and a community that runs itself.
            </p>
            <p className="text-white/80 font-medium">
              That's it. That's the whole thing.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded bg-white/5 border border-white/10 text-white/40 text-xs tracking-widest uppercase mb-6">
                Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
                Crypto was supposed to be for everyone.
              </h2>
              <p className="text-white/55 leading-relaxed mb-8 text-base md:text-lg">
                $WHITEBOY exists to prove that a token can launch without manipulation, without tricks, and without exploiting the people who show up first. We're building for the person who's been burned before and wants something they can actually trust.
              </p>
              <blockquote className="border-l-2 border-red-600/50 pl-5 text-white/70 italic text-base md:text-lg">
                "Community over insiders. Real people over bots. Transparency over tricks."
              </blockquote>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: <Shield size={20} />,
                  title: 'No Rug, No Games',
                  desc: 'Liquidity locked. Ownership renounced. Contract verified. Everything is public.',
                },
                {
                  icon: <Users size={20} />,
                  title: 'Community Owned',
                  desc: 'No insiders holding supply. No team wallet waiting to dump. You are the community.',
                },
                {
                  icon: <Eye size={20} />,
                  title: 'Full Transparency',
                  desc: 'Every wallet, every transaction — visible on-chain. We hide nothing.',
                },
                {
                  icon: <Zap size={20} />,
                  title: 'Fair From Day One',
                  desc: 'No presale. No whitelist. No VCs. Everyone got in the same way, at the same time.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.05] transition-colors"
                >
                  <div className="text-red-500 mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-white text-sm mb-2">{item.title}</h3>
                  <p className="text-white/45 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section id="transparency" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-block px-3 py-1 rounded bg-white/5 border border-white/10 text-white/40 text-xs tracking-widest uppercase mb-6">
              Transparency
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nothing to hide. Literally.
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Every detail is on-chain. We're not asking you to trust us — we're asking you to verify.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {[
              { label: 'Team Allocation', value: '0%', note: 'No insider bags' },
              { label: 'Presale', value: 'None', note: 'Everyone equal at launch' },
              { label: 'Liquidity Lock', value: 'Locked', note: 'Cannot be pulled' },
              { label: 'Ownership', value: 'Renounced', note: 'No one controls contract' },
              { label: 'Contract', value: 'Verified', note: 'Read every line' },
              { label: 'Tax', value: '0 / 0', note: 'Buy / Sell — no tricks' },
            ].map((item) => (
              <div
                key={item.label}
                className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-center"
              >
                <div className="text-2xl font-black text-white mb-1">{item.value}</div>
                <div className="text-xs font-semibold text-white/60 mb-1 uppercase tracking-wide">
                  {item.label}
                </div>
                <div className="text-xs text-white/30">{item.note}</div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-red-950/30 to-transparent border border-red-900/30 p-8">
            <h3 className="font-bold text-white text-lg mb-4">
              New here? That's exactly why we wrote this.
            </h3>
            <p className="text-white/60 leading-relaxed mb-5">
              We know the first question is always: "is this going to rug me?" Fair question. We've all been there. So here's the honest version of why this is different.
            </p>
            <ul className="space-y-3">
              {[
                'The contract is verified. You can read every line on the block explorer.',
                'Liquidity is locked — the dev physically cannot drain it.',
                'Ownership is renounced — no one can change the contract rules.',
                'There are no hidden team wallets waiting to sell on you.',
                'The community is public. Come ask questions. We answer them.',
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-white/70">
                  <span className="mt-0.5 w-4 h-4 rounded-full bg-red-600/30 border border-red-600/50 flex items-center justify-center flex-shrink-0">
                    <Check size={9} className="text-red-400" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Community Content */}
      <section id="community" className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-block px-3 py-1 rounded bg-white/5 border border-white/10 text-white/40 text-xs tracking-widest uppercase mb-6">
              Community
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Voice</h2>
            <p className="text-white/50 max-w-xl mx-auto">
              How we talk. What we post. The message we carry — everywhere we show up.
            </p>
          </div>

          <div className="space-y-6">
            {POSTS.map((post) => (
              <div
                key={post.id}
                className={`rounded-2xl bg-gradient-to-br border p-6 ${post.color}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`flex items-center gap-2 text-sm font-semibold ${post.accent}`}>
                    {post.icon}
                    {post.label}
                  </div>
                  <CopyButton text={post.content} />
                </div>
                <pre className="text-white/70 text-sm leading-relaxed whitespace-pre-wrap font-sans">
                  {post.content}
                </pre>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <img
            src="/whiteboy.jpeg"
            alt="WHITEBOY"
            className="w-20 h-20 rounded-xl mx-auto mb-8 opacity-90"
            style={{ imageRendering: 'pixelated' }}
          />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            You found it early. For real this time.
          </h2>
          <p className="text-white/50 mb-10 max-w-xl mx-auto text-base leading-relaxed">
            No hype. No promises. Just a fair token and a community that's tired of the same old game. Come see what it feels like when things are built right.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="px-8 py-3.5 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-lg transition-colors text-sm w-full sm:w-auto"
            >
              Buy $WHITEBOY
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-8 py-3.5 bg-[#229ED9]/10 hover:bg-[#229ED9]/20 border border-[#229ED9]/30 text-[#229ED9] font-semibold rounded-lg transition-colors text-sm w-full sm:w-auto justify-center"
            >
              <Send size={16} />
              Join Telegram
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 font-semibold rounded-lg transition-colors text-sm w-full sm:w-auto justify-center"
            >
              <Twitter size={16} />
              Follow on X
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.08] py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-white/30 text-xs">
          <div className="flex items-center gap-2">
            <img
              src="/whiteboy.jpeg"
              alt=""
              className="w-5 h-5 rounded opacity-60"
              style={{ imageRendering: 'pixelated' }}
            />
            <span>$WHITEBOY — Community Token</span>
          </div>
          <p className="text-center max-w-sm">
            This is not financial advice. $WHITEBOY is a community token. Always do your own research. Never invest more than you can afford to lose.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white/60 transition-colors">Twitter</a>
            <a href="#" className="hover:text-white/60 transition-colors">Telegram</a>
            <a href="#" className="hover:text-white/60 transition-colors">Contract</a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-white/[0.08] text-center text-white/20 text-xs">
          Powered by Saylor Innovations
        </div>
      </footer>
    </div>
  );
}
