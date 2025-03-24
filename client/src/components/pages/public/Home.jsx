import React, { useState } from "react";
import {
  Truck,
  Clock,
  Map,
  Shield,
  BarChart2,
  Check,
  Cpu,
  Navigation,
  AlertTriangle,
  Calculator,
  FileText,
  Database,
} from "lucide-react";
import { Button } from "@/components/shadcn/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shadcn/dialog";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const detailedFeatures = [
    {
      icon: Clock,
      title: "Hours of Service Tracking",
      description:
        "Automatically calculate and log driving hours according to FMCSA regulations for property-carrying drivers.",
      details: [
        "70-hour/8-day cycle tracking",
        "Real-time HOS compliance monitoring",
        "Automatic log sheet generation",
      ],
    },
    {
      icon: Map,
      title: "Intelligent Route Planning",
      description:
        "Optimize routes with mandatory stops, rest periods, and fuel considerations.",
      details: [
        "Fuel stops every 1,000 miles",
        "Mandatory 30-minute breaks",
        "Route optimization algorithms",
      ],
    },
    {
      icon: FileText,
      title: "Comprehensive Logging",
      description:
        "Detailed Electronic Logging Device (ELD) documentation for complete trip management.",
      details: [
        "Multi-page log sheet generation",
        "Detailed trip documentation",
        "Compliant with FMCSA standards",
      ],
    },
    {
      icon: Shield,
      title: "Compliance Assurance",
      description:
        "Proactive alerts and warnings to prevent Hours of Service violations.",
      details: [
        "Real-time violation warnings",
        "Automated compliance checks",
        "Detailed reporting",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-16 pb-24 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Electronic Logging Reimagined
            <br />
            <span className="text-green-600 dark:text-green-400">
              Compliance
            </span>{" "}
            Meets
            <span className="text-blue-600 dark:text-blue-400">
              {" "}
              Efficiency
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl">
            Spotter Daily Driver Log: Your comprehensive solution for
            FMCSA-compliant electronic logging, route optimization, and driver
            management.
          </p>
          <div className="flex space-x-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
              onClick={() => setIsModalOpen(true)}
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-2 bg-green-400/10 dark:bg-blue-400/10 rounded-full blur-2xl"></div>
            <Truck
              size={320}
              className="relative text-green-600 dark:text-blue-400 opacity-20"
            />
          </div>
        </div>
      </div>

      {/* Features Deep Dive */}
      <div className="bg-white dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Comprehensive{" "}
              <span className="text-green-600 dark:text-green-400">
                Driver Management
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Designed specifically for property-carrying drivers to simplify
              compliance and maximize efficiency.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {detailedFeatures.map((feature, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 group"
              >
                <CardHeader>
                  <feature.icon
                    size={40}
                    className="mb-4 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform"
                  />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2 text-xs text-gray-500 dark:text-gray-300">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-center">
                        <Check size={14} className="mr-2 text-green-500" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Technical{" "}
            <span className="text-green-600 dark:text-green-400">
              Specifications
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <Database
                size={40}
                className="text-blue-600 dark:text-blue-400 mb-4"
              />
              <h3 className="font-bold mb-2">Data Inputs</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>Current Location</li>
                <li>Pickup Location</li>
                <li>Dropoff Location</li>
                <li>Current Cycle Used (Hours)</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <Calculator
                size={40}
                className="text-green-600 dark:text-green-400 mb-4"
              />
              <h3 className="font-bold mb-2">Calculation Assumptions</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>70-hour/8-day Cycle</li>
                <li>No Adverse Driving Conditions</li>
                <li>Fuel Stop Every 1,000 Miles</li>
                <li>1-Hour Pickup/Dropoff</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <Navigation
                size={40}
                className="text-indigo-600 dark:text-indigo-400 mb-4"
              />
              <h3 className="font-bold mb-2">Route Optimization</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>Free Map API Integration</li>
                <li>Mandatory Rest Calculations</li>
                <li>Dynamic Stop Planning</li>
                <li>Compliance-Driven Routing</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <FileText
                size={40}
                className="text-orange-600 dark:text-orange-400 mb-4"
              />
              <h3 className="font-bold mb-2">Logging Capabilities</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>Multiple Log Sheets</li>
                <li>FMCSA Compliant</li>
                <li>Detailed Trip Documentation</li>
                <li>Printable Reports</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="bg-gradient-to-r from-green-500 to-blue-500 dark:from-green-600 dark:to-blue-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Transform Your Driving Workflow
          </h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Join the future of electronic logging. Accurate, compliant, and
            efficient trip management starts here.
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-green-600 hover:bg-gray-100"
            >
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Input Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Get Started with Spotter Daily Driver Log</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p>To begin your trip planning, we'll need a few details:</p>
            {/* Basic input form would go here */}
            <div className="grid gap-4">
              <input
                placeholder="Current Location"
                className="w-full p-2 border rounded"
              />
              <input
                placeholder="Pickup Location"
                className="w-full p-2 border rounded"
              />
              <input
                placeholder="Dropoff Location"
                className="w-full p-2 border rounded"
              />
              <input
                placeholder="Current Cycle Used (Hours)"
                type="number"
                className="w-full p-2 border rounded"
              />
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Generate Route & Logs
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
