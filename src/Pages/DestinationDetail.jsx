import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  MapPin,
  Users,
  Plane,
  Hotel,
  Star,
  Clock,
  Shield,
  Heart,
  Share2,
  Download,
} from "lucide-react";

// Enhanced Data
const itineraryData = [
  {
    title: "Day 01: Kathmandu to Pokhara",
    content:
      "Travel by flight or bus to the serene city of lakes. Upon arrival, check into your hotel and explore the lakeside area. Evening at leisure with stunning sunset views over Phewa Lake.",
    highlight: "Lakeside exploration",
    duration: "6 hours",
  },
  {
    title: "Day 02: Drive to Nayapul, Trek to Ulleri",
    content:
      "Begin your trek through scenic trails with terraced fields and traditional villages. The trek offers magnificent views of Annapurna South and Hiunchuli peaks.",
    highlight: "First mountain views",
    duration: "7 hours",
  },
  {
    title: "Day 03: Trek to Ghorepani",
    content:
      "Hike to Ghorepani with stunning mountain views. Pass through beautiful rhododendron forests and experience authentic mountain hospitality.",
    highlight: "Rhododendron forests",
    duration: "6 hours",
  },
];

const tripInfoData = [
  {
    icon: Plane,
    label: "Transportation",
    value: "Bus, Airlines",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: MapPin,
    label: "Departure from",
    value: "Kathmandu",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Users,
    label: "Group Size",
    value: "2-15",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Hotel,
    label: "Accommodation",
    value: "3-Star Hotels",
    color: "bg-orange-50 text-orange-600",
  },
];

const highlights = [
  "UNESCO World Heritage Sites",
  "Professional Mountain Guides",
  "Small Group Experience",
  "Cultural Immersion",
  "Photography Opportunities",
];

// Modern Components
const TripInfoCard = ({ icon: Icon, label, value, color }) => (
  <div className="group bg-white p-4 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer">
    <div className="flex items-center gap-3">
      <div
        className={`p-2 rounded-xl ${color} group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-600">{label}</p>
        <p className="text-base font-semibold text-gray-900">{value}</p>
      </div>
    </div>
  </div>
);

const ModernItineraryAccordion = ({ data }) => (
  <div className="space-y-4">
    {data.map((item, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
      >
        <Accordion type="single" collapsible>
          <AccordionItem value={`item-${index}`} className="border-none">
            <AccordionTrigger className="px-6 py-4 hover:no-underline group">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-500 transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-1">
                      <Badge
                        variant="secondary"
                        className="text-xs bg-orange-50 text-orange-600"
                      >
                        {item.highlight}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        {item.duration}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    ))}
  </div>
);

const ModernEnquiryForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  return (
    <div className="space-y-6 p-8 bg-gradient-to-br from-white to-gray-50 rounded-3xl border border-gray-100">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Start Your Adventure
        </h3>
        <p className="text-gray-600">
          Fill out the form and we'll get back to you within 24 hours
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium text-gray-700">
            Full Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Enter your full name"
            required
            className="h-12 rounded-xl border-gray-200 focus:border-orange-300 focus:ring-orange-200"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email Address <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            required
            className="h-12 rounded-xl border-gray-200 focus:border-orange-300 focus:ring-orange-200"
          />
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="country"
            className="text-sm font-medium text-gray-700"
          >
            Country <span className="text-red-500">*</span>
          </Label>
          <Select>
            <SelectTrigger className="h-12 rounded-xl border-gray-200">
              <SelectValue placeholder="Select your country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="USA">🇺🇸 United States</SelectItem>
              <SelectItem value="Canada">🇨🇦 Canada</SelectItem>
              <SelectItem value="UK">🇬🇧 United Kingdom</SelectItem>
              <SelectItem value="Australia">🇦🇺 Australia</SelectItem>
              <SelectItem value="Germany">🇩🇪 Germany</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Phone Number <span className="text-red-500">*</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+1 (555) 123-4567"
            required
            className="h-12 rounded-xl border-gray-200 focus:border-orange-300 focus:ring-orange-200"
          />
        </div>

        <div className="md:col-span-2 space-y-2">
          <Label
            htmlFor="message"
            className="text-sm font-medium text-gray-700"
          >
            Tell us about your travel plans{" "}
            <span className="text-red-500">*</span>
          </Label>
          <textarea
            id="message"
            placeholder="When are you planning to travel? Any special requirements or questions?"
            required
            rows={4}
            className="w-full p-4 border border-gray-200 rounded-xl focus:border-orange-300 focus:ring-orange-200 focus:ring-2 focus:ring-opacity-20 resize-none"
          />
        </div>

        <div className="md:col-span-2">
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full h-14 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Sending Request...
              </div>
            ) : (
              "Send Enquiry"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

const DestinationDetail = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const images = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="w-full">
            {/* Hero Section */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8">
              {/* Image Gallery */}
              <div className="relative">
                <img
                  src={images[activeImage]}
                  alt="Annapurna Adventure"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Image Controls */}
                <div className="absolute bottom-6 left-6 flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeImage ? "bg-white" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>

                {/* Action Buttons */}
                {/* <div className="absolute top-6 right-6 flex gap-3">
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 group"
                  >
                    <Heart
                      className={`w-5 h-5 transition-all duration-300 ${
                        isLiked
                          ? "fill-red-500 text-red-500 scale-110"
                          : "text-gray-600 group-hover:text-red-500"
                      }`}
                    />
                  </button>
                  <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 group">
                    <Share2 className="w-5 h-5 text-gray-600 group-hover:text-blue-500 transition-colors" />
                  </button>
                  <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 group">
                    <Download className="w-5 h-5 text-gray-600 group-hover:text-green-500 transition-colors" />
                  </button>
                </div> */}

                {/* Price Badge */}
                <div className="absolute bottom-6 right-6 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-2xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold">8</div>
                    <div className="text-sm opacity-90">Days</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        4.9 Rating
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-orange-200 text-orange-700"
                      >
                        Best Seller
                      </Badge>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      Annapurna Adventure Tour
                    </h3>
                    <p className="text-xl text-gray-600">
                      Experience the majestic beauty of the Himalayas with our
                      premium guided tour
                    </p>
                  </div>
                </div>

                {/* Trip Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {tripInfoData.map((info, index) => (
                    <TripInfoCard key={index} {...info} />
                  ))}
                </div>

                {/* Highlights */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Tour Highlights
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {highlights.map((highlight, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="px-3 py-1 bg-gradient-to-r from-orange-50 to-pink-50 text-orange-700 border-orange-200"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Tabs */}
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-4 bg-gray-50 p-1 rounded-2xl">
                    {["overview", "itinerary", "cost", "map"].map((tab) => (
                      <TabsTrigger
                        key={tab}
                        value={tab}
                        className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-orange-600 font-medium transition-all duration-300"
                      >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  <TabsContent value="overview" className="mt-6 space-y-6">
                    <div className="prose prose-lg max-w-none">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        About This Adventure
                      </h2>
                      <p className="text-gray-700 leading-relaxed">
                        Embark on an unforgettable journey through the stunning
                        landscapes of the Annapurna region. This carefully
                        crafted 8-day adventure combines breathtaking mountain
                        vistas, rich cultural experiences, and comfortable
                        accommodations to create memories that will last a
                        lifetime.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
                          <h4 className="font-semibold text-gray-900 mb-3">
                            What You'll Experience
                          </h4>
                          <ul className="space-y-2 text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              Explore the majestic Himalayas
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              Visit charming Sherpa villages
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              Enjoy breathtaking sunrise views
                            </li>
                          </ul>
                        </div>
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
                          <h4 className="font-semibold text-gray-900 mb-3">
                            Safety & Comfort
                          </h4>
                          <div className="flex items-center gap-2 text-gray-700 mb-2">
                            <Shield className="w-4 h-4 text-green-600" />
                            Professional certified guides
                          </div>
                          <div className="flex items-center gap-2 text-gray-700 mb-2">
                            <Shield className="w-4 h-4 text-green-600" />
                            Emergency medical support
                          </div>
                          <div className="flex items-center gap-2 text-gray-700">
                            <Shield className="w-4 h-4 text-green-600" />
                            Premium accommodation
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="itinerary" className="mt-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Daily Itinerary
                    </h2>
                    <ModernItineraryAccordion data={itineraryData} />
                  </TabsContent>

                  <TabsContent value="cost" className="mt-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      What's Included
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
                        <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          Package Includes
                        </h3>
                        <ul className="space-y-3 text-gray-700">
                          {[
                            "All transportation (flights & ground)",
                            "3-star mountain lodges & hotels",
                            "Professional English-speaking guides",
                            "All meals during the trek",
                            "Permits and entrance fees",
                            "First aid kit and emergency support",
                          ].map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              </div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl">
                        <h3 className="text-xl font-semibold text-orange-800 mb-4 flex items-center gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          Not Included
                        </h3>
                        <ul className="space-y-3 text-gray-700">
                          {[
                            "International flights to/from Nepal",
                            "Travel insurance (mandatory)",
                            "Personal trekking equipment",
                            "Alcoholic beverages & soft drinks",
                            "Tips for guides and porters",
                            "Personal expenses & souvenirs",
                          ].map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center mt-0.5">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              </div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="map" className="mt-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Tour Route
                    </h2>
                    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.627392275094!2d83.9594067!3d28.2096022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995937bbf4f02d5%3A0xf6cf823b25802164!2sAnnapurna%20Base%20Camp!5e0!3m2!1sen!2s!4v1635000000000!5m2!1sen!2s"
                        className="w-full h-96"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>

          {/* Booking Section - Full width below main content */}
          <div className="mt-12">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className=" bg-[#f7921f]  text-white text-center">
                <h2 className="text-3xl font-bold mb-3 text-white">
                  Ready to Book Your Adventure?
                </h2>
                <p className="text-lg opacity-90">
                  Join thousands of satisfied travelers who have experienced
                  this incredible journey
                </p>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                  {/* Quick Info Cards */}
                  <div className="lg:col-span-1 space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Trip Summary
                    </h3>
                    {tripInfoData.map((info, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                      >
                        <div className={`p-3 rounded-xl ${info.color}`}>
                          <info.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-600">
                            {info.label}
                          </p>
                          <p className="text-base font-semibold text-gray-900">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Booking Form */}
                  <div className="lg:col-span-3">
                    <ModernEnquiryForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationDetail;
