import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Target, Lightbulb, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-primary py-24 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-[...placeholder-id...]')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <Badge className="bg-secondary text-secondary-foreground mb-6 hover:bg-secondary border-none">Our Story</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">About HIMO-PH</h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed">
            Born from a school project that became a real product. We are on a mission to digitize Filipino businesses.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 mx-auto w-full max-w-4xl">
        <div className="prose prose-lg md:prose-xl mx-auto text-muted-foreground">
          <p className="lead text-2xl text-foreground font-medium mb-8">
            HIMO-PH was founded by students from South Philippines who built YUMPIA — a complete food ordering platform — as a school project. 
            Our professor said it was good enough to sell. So we did.
          </p>
          <p className="mb-6">
            &quot;Himo&quot; means &quot;to create&quot; in Bisaya. That is exactly what we do. We create solutions for local businesses that are tired of relying on manual chat orders, losing track of customer data, and paying exorbitant fees to food delivery apps.
          </p>
          <p>
            We realized that every business—whether selling food, jewelry, or services—needs a proper online presence that works seamlessly. We built HIMO-PH to make that digital transformation accessible, fast, and highly affordable for our fellow Filipinos.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-muted/50 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground italic">
              &quot;To help Filipino businesses go digital — fast, affordable, and built specifically for the Philippine market.&quot;
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: "Purpose-Driven", desc: "Solving real problems for real local businesses." },
              { icon: TrendingUp, title: "Growth-Focused", desc: "Your success and growth is our primary metric." },
              { icon: Lightbulb, title: "Innovative", desc: "Bringing enterprise-level tech to small businesses." },
              { icon: Heart, title: "Filipino-First", desc: "Understanding the unique needs of our fellow Pinoys." }
            ].map((value, i) => (
              <Card key={i} className="border-none shadow-md bg-white">
                <CardContent className="pt-8 pb-8 flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full text-primary mb-6">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team (Placeholder) */}
      <section className="py-24 px-6 mx-auto w-full max-w-7xl text-center">
        <h2 className="text-3xl font-bold mb-16">Meet the Team</h2>
        <div className="flex justify-center">
          <div className="group text-center">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 bg-slate-200 border-4 border-white shadow-xl group-hover:border-secondary transition-colors">
              <div className="w-full h-full flex items-center justify-center text-slate-400">
                <span className="text-6xl font-bold">M</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold">Marco</h3>
            <p className="text-primary font-medium mb-2">Founder & Developer</p>
            <p className="text-muted-foreground text-sm max-w-xs mx-auto">
              Student developer passionate about building systems that help local businesses thrive in the digital age.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
