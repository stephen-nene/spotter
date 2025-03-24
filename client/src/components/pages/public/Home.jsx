import React from "react";
import {
  Truck,
  Clock,
  Map,
  Shield,
  BarChart2,
  Check,
  Cpu,
  Navigation,
} from "lucide-react";
import { Button } from "@/components/shadcn/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card";

export default function Home() {
  const features = [
    {
      icon: Clock,
      title: "Hours of Service Tracking",
      description:
        "Automatically log and manage your driving hours to stay compliant with FMCSA regulations.",
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: Map,
      title: "Intelligent Route Planning",
      description:
        "Optimize your routes, minimize downtime, and maximize efficiency with smart navigation.",
      color: "text-green-600 dark:text-green-400",
    },
    {
      icon: Shield,
      title: "Compliance Assurance",
      description:
        "Real-time alerts and warnings to prevent Hours of Service violations.",
      color: "text-red-600 dark:text-red-400",
    },
    {
      icon: BarChart2,
      title: "Comprehensive Reporting",
      description:
        "Detailed analytics and insights to improve your operational performance.",
      color: "text-purple-600 dark:text-purple-400",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-16 pb-24 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Simplify Your{" "}
            <span className="text-green-600 dark:text-green-400">
              Driving Logs
            </span>
            <br />
            Maximize Your{" "}
            <span className="text-blue-600 dark:text-blue-400">Efficiency</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl">
            Spotter Daily Driver Log revolutionizes electronic logging for
            professional drivers. Stay compliant, optimize routes, and focus on
            what matters most – your journey.
          </p>
          <div className="flex space-x-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
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

      {/* Features Section */}
      <div className="bg-white dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Designed for{" "}
              <span className="text-green-600 dark:text-green-400">
                Professional Drivers
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our comprehensive platform addresses the unique challenges of
              modern truck driving.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <feature.icon size={40} className={`mb-4 ${feature.color}`} />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="bg-gradient-to-r from-green-500 to-blue-500 dark:from-green-600 dark:to-blue-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Driving Experience?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Join thousands of professional drivers who have simplified their
            logging and improved their efficiency.
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
    </div>
  );
}
