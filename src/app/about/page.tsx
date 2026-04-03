import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Target, Lightbulb, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-12 pb-24 px-6 text-center overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,_var(--tw-gradient-stops))] from-sky-100/50 via-white to-white"></div>
        <div className="absolute inset-0 -z-10 overflow-hidden opacity-30 mix-blend-multiply">
          <img 
            src="/hero_about_bg.png" 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <Badge className="bg-sky-100 text-primary mb-8 hover:bg-sky-100 border-sky-200 px-4 py-1.5 text-sm font-bold">Our Story</Badge>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-slate-900 leading-none">
            About <span className="text-primary">HIMO-PH</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
            Born from a school project that became a real product. We are on a mission to digitize Filipino businesses.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 mx-auto w-full max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="prose prose-lg md:prose-xl text-slate-500 font-medium leading-relaxed">
            <p className="text-3xl text-slate-900 font-black mb-10 leading-tight">
              &quot;Himo&quot; means <span className="text-primary">&quot;to create&quot;</span> in Bisaya. That is exactly what we do.
            </p>
            <p className="mb-8">
              HIMO-PH was founded by students from South Philippines who built YUMPIA — a complete food ordering platform — as a school project. 
              Our professor said it was good enough to sell. So we did.
            </p>
          </div>
          <div className="bg-sky-50/50 p-12 rounded-[3rem] border border-sky-100">
            <p className="text-slate-600 font-medium leading-relaxed mb-6">
              We create solutions for local businesses that are tired of relying on manual chat orders, losing track of customer data, and paying exorbitant fees to food delivery apps.
            </p>
            <p className="text-slate-600 font-medium leading-relaxed">
              We built HIMO-PH to make that digital transformation accessible, fast, and highly affordable for our fellow Filipinos.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-32 bg-white px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-slate-900">Our <span className="text-primary">Mission</span></h2>
            <p className="text-2xl text-slate-500 font-bold leading-relaxed italic">
              &quot;To help Filipino businesses go digital — fast, affordable, and built specifically for the Philippine market.&quot;
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: Target, title: "Purpose-Driven", desc: "Solving real problems for real local businesses." },
              { icon: TrendingUp, title: "Growth-Focused", desc: "Your success and growth is our primary metric." },
              { icon: Lightbulb, title: "Innovative", desc: "Bringing enterprise-level tech to small businesses." },
              { icon: Heart, title: "Filipino-First", desc: "Understanding the unique needs of our fellow Pinoys." }
            ].map((value, i) => (
              <div key={i} className="bg-sky-50/30 p-10 rounded-[2.5rem] border border-sky-100 transition-all hover:scale-105 hover:bg-white hover:shadow-xl hover:shadow-sky-500/10 group">
                <div className="bg-white p-5 rounded-2xl text-primary mb-8 w-fit shadow-lg group-hover:bg-primary group-hover:text-white transition-all">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{value.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 px-6 mx-auto w-full max-w-7xl text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-24 text-slate-900">Meet the <span className="text-primary">Team</span></h2>
        <div className="flex flex-wrap justify-center gap-16 lg:gap-32">
          {[
            { img: "/shai.png", name: "Shai", role: "Design Lead", desc: "Passionate about creating simple, accessible, and beautiful interfaces." },
            { img: "/dou.png", name: "Dou", role: "Backend Architect", desc: "Specializes in scalable databases and robust integrations." },
            { img: "/marco.png", name: "Marco", role: "Founder & Developer", desc: "Student developer passionate about building systems that help local businesses thrive." }
          ].map((member, i) => (
            <div key={i} className="group text-center max-w-xs">
              <div className="w-56 h-56 mx-auto rounded-[3rem] overflow-hidden mb-8 bg-sky-50 border-4 border-white shadow-2xl group-hover:scale-105 transition-all duration-500">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-2">{member.name}</h3>
              <p className="text-primary font-black mb-5 uppercase tracking-widest text-sm">{member.role}</p>
              <p className="text-slate-500 font-medium leading-relaxed">
                {member.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
