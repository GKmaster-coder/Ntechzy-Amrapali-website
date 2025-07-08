// src/components/EventsSection.jsx
export default function Events() {
  const events = [
    {
      date: "15 Aug 2025",
      title: "Independence Day Celebration",
      description: "Cultural performances, flag hoisting & speech by the Dean followed by community lunch.",
    },
    {
      date: "21 Jun 2025",
      title: "International Yoga Day",
      description: "Students and faculty participate in a guided Yoga session promoting holistic wellness.",
    },
    {
      date: "10 May 2025",
      title: "Ayurveda Awareness Drive",
      description: "A campaign to promote Ayurveda practices in nearby villages organized by interns.",
    },
    {
      date: "28 Apr 2025",
      title: "Guest Lecture on Naturopathy",
      description: "Lecture by Dr. Anil Verma on 'Integrating Naturopathy in Modern Medicine'.",
    },
  ];

  return (
    <section id="events" className="py-16 bg-[#fffef3]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#97660c] mb-4">Upcoming Events</h2>
        <p className="text-gray-600 mb-12 text-sm md:text-base">
          Explore the latest events happening at Amrapali Ayurvedic Medical College.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-[#f8d816] hover:shadow-2xl transition duration-300"
            >
              <div className="text-[#97660c] font-bold text-sm mb-2">{event.date}</div>
              <h3 className="text-xl font-semibold text-[#333] mb-2">{event.title}</h3>
              <p className="text-gray-600 text-sm">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
