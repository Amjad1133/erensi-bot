import { useState } from "react";

export default function App() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "Advanced Moderation",
      description: "Automated moderation with customizable filters, auto-ban, mute, and warning systems.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#067ec2]"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
    },
    {
      title: "Server Protection",
      description: "Anti-raid protection, spam detection, and advanced security measures to keep your server safe.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#067ec2]"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
    },
    {
      title: "Role Management",
      description: "Automated role assignment, reaction roles, and advanced permission management.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#067ec2]"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M6.376 18.91a6 6 0 0 1 11.249.003"/><circle cx="12" cy="11" r="4"/></svg>
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time server statistics, member activity tracking, and detailed reports.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#067ec2]"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>
    },
    {
      title: "Custom Commands",
      description: "Create custom commands, automod responses, and automated workflows.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#067ec2]"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>
    },
    {
      title: "Welcome System",
      description: "Customizable welcome messages, auto-roles for new members, and verification systems.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#067ec2]"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="m22 2-5 10-5-4-5 10"/></svg>
    }
  ];

  const stats = [
    { label: "Servers Protected", value: "10,000+" },
    { label: "Commands Executed", value: "1M+" },
    { label: "Threats Blocked", value: "50K+" },
    { label: "Uptime", value: "99.9%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#041732] via-[#0f226b] to-[#04264f]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#041732]/80 backdrop-blur-lg border-b border-[#1742a9]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img 
                src="https://i.ibb.co/7tv6JmdY/Flux-Dev-A-futuristic-shield-logo-radiating-a-vibrant-electric-3.jpg" 
                alt="Erensi Logo" 
                className="w-10 h-10 rounded-lg"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-[#067ec2] to-[#1742a9] bg-clip-text text-transparent">
                Erensi
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-[#067ec2] transition-colors">Features</a>
              <a href="#stats" className="text-gray-300 hover:text-[#067ec2] transition-colors">Stats</a>
              <a href="#invite" className="text-gray-300 hover:text-[#067ec2] transition-colors">Invite</a>
            </div>
            <a
              href="https://discord.com/oauth2/authorize?client_id=1242125557194555402&permissions=8&integration_type=0&scope=bot"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#1742a9] to-[#067ec2] text-white px-6 py-2 rounded-lg font-semibold hover:from-[#067ec2] hover:to-[#145f87] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Add to Discord
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <img 
              src="https://i.ibb.co/chRjY6Qf/Flux-Dev-A-futuristic-shield-logo-radiating-a-vibrant-electric-0.png" 
              alt="Erensi Banner" 
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
            />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#067ec2] via-[#1742a9] to-[#145f87] bg-clip-text text-transparent">
              ERENSI
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Next-generation Discord bot for advanced server management, protection, and automation. 
            Powered by cutting-edge AI technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://discord.com/oauth2/authorize?client_id=1242125557194555402"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#1742a9] to-[#067ec2] text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-[#067ec2] hover:to-[#145f87] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline mr-2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>Add to Server
            </a>
            <a
              href="#features"
              className="border-2 border-[#1742a9] text-[#067ec2] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#1742a9] hover:text-white transition-all duration-300"
            >
              Explore Features
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 px-4 bg-[#041732]/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#067ec2] to-[#1742a9] bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#067ec2] to-[#1742a9] bg-clip-text text-transparent">
              Advanced Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Erensi combines powerful moderation tools with intelligent automation to create the ultimate Discord management experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#0f226b]/50 to-[#04264f]/50 p-8 rounded-2xl border border-[#1742a9]/20 hover:border-[#067ec2]/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                onClick={() => setActiveFeature(index)}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-[#067ec2] mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#041732] to-[#0f226b]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-[#067ec2] to-[#1742a9] bg-clip-text text-transparent">
            Cutting-Edge Technology
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-[#04264f]/50 p-8 rounded-2xl border border-[#1742a9]/20">
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#067ec2] mx-auto"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
              </div>
              <h3 className="text-xl font-bold text-[#067ec2] mb-4">AI-Powered</h3>
              <p className="text-gray-300">Advanced machine learning algorithms for intelligent moderation and threat detection.</p>
            </div>
            <div className="bg-[#04264f]/50 p-8 rounded-2xl border border-[#1742a9]/20">
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#067ec2] mx-auto"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>
              </div>
              <h3 className="text-xl font-bold text-[#067ec2] mb-4">Lightning Fast</h3>
              <p className="text-gray-300">Optimized performance with sub-second response times and 99.9% uptime.</p>
            </div>
            <div className="bg-[#04264f]/50 p-8 rounded-2xl border border-[#1742a9]/20">
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#067ec2] mx-auto"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
              </div>
              <h3 className="text-xl font-bold text-[#067ec2] mb-4">Highly Customizable</h3>
              <p className="text-gray-300">Extensive configuration options to tailor the bot to your server's unique needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="invite" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-[#067ec2] to-[#1742a9] bg-clip-text text-transparent">
            Ready to Protect Your Server?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Join thousands of Discord servers already using Erensi for advanced moderation and protection. 
            Get started in seconds with our easy setup process.
          </p>
          <a
            href="https://discord.com/oauth2/authorize?client_id=1242125557194555402&permissions=8&integration_type=0&scope=bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#1742a9] to-[#067ec2] text-white px-12 py-6 rounded-2xl font-bold text-xl hover:from-[#067ec2] hover:to-[#145f87] transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline mr-2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>Add Erensi to Discord
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-[#041732] border-t border-[#1742a9]/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <img 
              src="https://i.ibb.co/7tv6JmdY/Flux-Dev-A-futuristic-shield-logo-radiating-a-vibrant-electric-3.jpg" 
              alt="Erensi Logo" 
              className="w-8 h-8 rounded-lg"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-[#067ec2] to-[#1742a9] bg-clip-text text-transparent">
              Erensi
            </span>
          </div>
          <p className="text-gray-400 mb-4">
            Advanced Discord Bot Management & Protection System
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 Erensi. All rights reserved. | Powered by cutting-edge AI technology
          </p>
        </div>
      </footer>
    </div>
  );
}
