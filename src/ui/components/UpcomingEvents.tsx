import { Button } from "@shadcn/ui/button";
import { Link } from "react-router-dom";
import { upcomingevents } from "../../data/eventData";

const UpcomingEvents = () => {
  return (
    <section className="font-bricolage-grotesque w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-indigo-600 dark:text-indigo-400">
          Upcoming Events
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {upcomingevents.map((event, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">{event.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{event.description}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Date: {event.date}</p>
                <Link to={event.link}>
                  <Button className="w-full">{event.buttonText}</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UpcomingEvents;
