import React from "react";
import { MapPin, Clock } from "lucide-react";

const events = [
    {
        date: "15",
        month: "June",
        year: "2025",
         image: "https://i.pinimg.com/736x/3f/cd/ad/3fcdad525a2179c67b465470d01a0c6c.jpg",
        title: "Guest Lecture: Panchakarma in Modern Context",
        location: "Seminar Hall, Academic Block",
        time: "11:00 AM – 1:00 PM",
        description:
            "Dr. R.K. Mishra delivered an insightful lecture on the relevance of Panchakarma in treating chronic diseases today.",
    },
    {
        date: "15",
        month: "may",
        year: "2025",
        title: "Free Ayurvedic Health Camp",
        location: "Amrapali Hospital Campus",
        time: "9:00 AM – 4:00 PM",
        description:
            "Amrapali Hospital organized a free Ayurvedic health check-up and consultation camp for rural patients with experienced BAMS doctors and PG scholars.",
    },
    {
        date: "12",
        month: "Apr",
        year: "2025",
        title: "Cultural Fest – *Arogya Utsav*",
        location: "College Auditorium",
        time: "5:00 PM – 9:00 PM",
        description:
            "Students celebrated cultural diversity with music, dance, drama, and Ayurveda-themed performances during the annual college fest.",
    },
    {
        date: "28",
        month: "Mar",
        year: "2025",
        title: "Hands-on Workshop: Herbal Drug Preparation",
        location: "Pharmacy Lab",
        time: "10:30 AM – 2:00 PM",
        description:
            "BAMS & Pharmacy students participated in practical herbal formulation sessions using traditional Ayurvedic techniques.",
    },
];


const EventSection = () => {
    return (
        <section className="bg-white py-16 px-18 sm:px-8 lg:px-16">
            <div className="text-center mb-12 max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold text-[#087521] mb-4">Upcoming Events</h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    Then along come two they got nothing but their jeans made rich these
                    days are all share them with me oh baby said californ is the place you ought
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Left Column - Large Card with Image */}
                <div className="md:col-span-1 space-y-6">
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="relative">
                            <img
                                src={events[0].image}
                                alt={events[0].title}
                                className="w-full h-56 object-cover"
                            />
                            <div className="absolute top-4 left-4 bg-[#f8d816] text-center text-[#97660c] px-3 py-2 rounded shadow-md font-bold text-sm">
                                <div className="text-xl">{events[0].date}</div>
                                <div className="uppercase text-xs">{events[0].month}</div>
                                <div className="text-xs">{events[0].year}</div>
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="font-bold text-lg text-gray-800 mb-2">
                                {events[0].title}
                            </h3>
                            <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                                <span className="flex items-center gap-1">
                                    <MapPin className="w-4 h-4 text-[#087521]" />
                                    Location: {events[0].location}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4 text-[#087521]" />
                                    Timings: {events[0].time}
                                </span>
                            </div>
                            <p className="text-gray-700 text-sm">{events[0].description}</p>
                        </div>
                    </div>
                </div>

                {/* Right Column - Smaller Text Cards */}
                <div className="md:col-span-2 space-y-6">
                    {events.slice(1).map((event, idx) => (
                        <div
                            key={idx}
                            className="flex items-start gap-4 bg-white border border-[#ccdcbc] rounded-lg p-4 shadow-sm hover:shadow-md transition"
                        >
                            <div className="bg-[#f8d816] text-center text-[#97660c] px-3 py-2 rounded font-bold text-sm shadow-md">
                                <div className="text-xl">{event.date}</div>
                                <div className="uppercase text-xs">{event.month}</div>
                                <div className="text-xs">{event.year}</div>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800 text-lg mb-1">
                                    {event.title}
                                </h4>
                                <div className="flex items-center gap-4 text-sm text-gray-600 mb-1">
                                    <span className="flex items-center gap-1">
                                        <MapPin className="w-4 h-4 text-[#087521]" />
                                        Location: {event.location}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-4 h-4 text-[#087521]" />
                                        Timings: {event.time}
                                    </span>
                                </div>
                                <p className="text-gray-700 text-sm">{event.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EventSection;
