
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const FAQ = () => {
  // FAQ data structure
  const faqData = [
    {
      category: "General",
      questions: [
        {
          question: "What is TicketTrustWave?",
          answer: "TicketTrustWave is a secure peer-to-peer ticket exchange platform that uses escrow services, AI fraud detection, and trust scores to ensure safe transactions between buyers and sellers."
        },
        {
          question: "How is TicketTrustWave different from other ticket marketplaces?",
          answer: "Unlike other platforms, we focus on security first with our triple-layer protection: secure escrow holds funds until both parties confirm the transaction is complete, AI technology scans for potential fraud, and our Trust Score system helps you identify reliable sellers."
        },
        {
          question: "Is TicketTrustWave available internationally?",
          answer: "Currently, we operate in select countries with plans for international expansion. Please check our supported regions in your account settings."
        }
      ]
    },
    {
      category: "Ticket Listing",
      questions: [
        {
          question: "How do I list tickets for sale?",
          answer: "After creating an account, go to your Seller Dashboard and click 'List New Ticket.' Follow the guided form to provide event details, pricing, and seat information. Your listing will undergo AI verification before going live."
        },
        {
          question: "Can I edit my ticket listing after publishing?",
          answer: "Yes, you can edit certain details of your listing from your Seller Dashboard as long as no buyer has initiated a purchase. Some changes may trigger a re-verification by our AI system."
        },
        {
          question: "How should I price my tickets?",
          answer: "We recommend pricing tickets at fair market value. Sellers with higher Trust Scores and reasonable pricing tend to complete transactions more quickly."
        }
      ]
    },
    {
      category: "Escrow Process",
      questions: [
        {
          question: "How does the escrow system work?",
          answer: "When you sell a ticket, the buyer's payment is held in our secure escrow system. Once the buyer confirms receipt of valid tickets, the funds are released to you. This protects both parties from fraud."
        },
        {
          question: "How long does money stay in escrow?",
          answer: "Funds typically remain in escrow until the buyer confirms receipt of valid tickets, or until the event date passes. If a dispute arises, our resolution team will investigate and determine the appropriate outcome."
        },
        {
          question: "Are there fees for using the escrow service?",
          answer: "The escrow service is included in our platform's transaction fee. There are no additional charges specifically for escrow protection."
        }
      ]
    },
    {
      category: "Trust Score System",
      questions: [
        {
          question: "How is my Trust Score calculated?",
          answer: "Your Trust Score is based on several factors: successful transaction history, buyer reviews, verification status, account age, and platform behavior. Consistently positive transactions will improve your score over time."
        },
        {
          question: "Can my Trust Score decrease?",
          answer: "Yes, your Trust Score may decrease due to negative reviews, canceled transactions, verified complaints, or suspicious activity detected by our AI system."
        },
        {
          question: "How can I improve my Trust Score?",
          answer: "Complete transactions successfully, maintain accurate ticket listings, respond promptly to buyers, and provide excellent customer service. Verified accounts with complete profiles also tend to have higher Trust Scores."
        }
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-16">
        <div className="layout-grid">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">
              Frequently Asked <span className="title-gradient">Questions</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Find answers to common questions about our platform, escrow process, and trust system.
            </p>
            
            {/* Search bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                type="search" 
                placeholder="Search for questions..." 
                className="pl-10"
              />
            </div>
          </div>
          
          {/* FAQ accordion by category */}
          <div className="max-w-3xl mx-auto space-y-8">
            {faqData.map((category, index) => (
              <div key={index} className="space-y-4">
                <h2 className="text-xl font-semibold">{category.category}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, qIndex) => (
                    <AccordionItem key={qIndex} value={`item-${index}-${qIndex}`}>
                      <AccordionTrigger className="text-left">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">{item.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
          
          {/* Still have questions */}
          <div className="max-w-3xl mx-auto mt-16 text-center">
            <h3 className="text-xl font-semibold mb-4">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our support team is ready to help you with any specific questions not covered here.
            </p>
            <Button asChild>
              <a href="/contact">Contact Support</a>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
