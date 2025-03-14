
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlurCard from "@/components/ui/BlurCard";
import { Shield, Award, Users } from "lucide-react";

const About = () => {
  // Team members data
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-founder",
      bio: "Former security consultant with 15+ years in digital fraud prevention and consumer protection.",
      image: "/placeholder.svg"
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-founder",
      bio: "Tech innovator with extensive experience in blockchain, secure payment systems, and AI development.",
      image: "/placeholder.svg"
    },
    {
      name: "Jessica Williams",
      role: "Chief Security Officer",
      bio: "Cybersecurity expert with a background in financial transaction protection and risk management.",
      image: "/placeholder.svg"
    },
    {
      name: "David Rodriguez",
      role: "Head of Customer Experience",
      bio: "Customer advocacy veteran dedicated to creating seamless, trustworthy user experiences.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-16">
        <div className="layout-grid">
          {/* Company Mission */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="title-gradient">Mission</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              To create the safest peer-to-peer ticket exchange marketplace in the world, 
              where trust and security are built into every transaction.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <BlurCard className="text-center p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Security First</h3>
                <p className="text-muted-foreground text-sm">
                  We built our platform from the ground up with security as the foundation, 
                  not an afterthought.
                </p>
              </BlurCard>
              
              <BlurCard className="text-center p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Trust & Transparency</h3>
                <p className="text-muted-foreground text-sm">
                  We believe in complete transparency in every transaction, backed 
                  by our innovative Trust Score system.
                </p>
              </BlurCard>
              
              <BlurCard className="text-center p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community Protection</h3>
                <p className="text-muted-foreground text-sm">
                  We're committed to creating a marketplace where both buyers and sellers 
                  feel protected and valued.
                </p>
              </BlurCard>
            </div>
          </div>
          
          {/* Our Story */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Story</h2>
            <BlurCard className="p-8">
              <p className="text-muted-foreground mb-4">
                SeatHaven was born from a painful personal experience. In 2019, our founders were victims of ticket 
                fraud that cost them thousands of dollars and ruined what should have been a memorable concert experience.
              </p>
              <p className="text-muted-foreground mb-4">
                After discovering that thousands of people face similar situations every day with no reliable 
                solution, they decided to create the platform they wished had existed: a secure marketplace that 
                puts trust and protection at the center of every transaction.
              </p>
              <p className="text-muted-foreground">
                Today, SeatHaven has protected thousands of transactions worth millions of dollars, using 
                innovative technology to make peer-to-peer ticket sales safe for everyone.
              </p>
            </BlurCard>
          </div>
          
          {/* Team Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {teamMembers.map((member, index) => (
                <BlurCard key={index} className="p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div className="text-center sm:text-left">
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-primary text-sm mb-2">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </div>
                </BlurCard>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
