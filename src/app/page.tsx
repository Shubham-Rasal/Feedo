import Image from "next/image";
import Logo from "./logo";
import Logo1 from "./logo1";
import Logo2 from "./logo2";
import Logo3 from "./logo3";
import Logo4 from "./logo4";
import Logo5 from "./logo5";

export default function Home() {
  return (
    <main className="p-6">
      <section className="hero mt-24 h-full">
        <div className="offer m-4  px-4 p-2 rounded-2xl text-sm  w-fit bg-teal-200">
          <span className="font-semibold">Limited time offer</span>: Get 50% off
          your first month of Feedo Pro
        </div>
        <div className="text-4xl tracking-tight  mx-4 md:my-6 md:text-5xl font-extrabold">
          Collect feedback from your users
        </div>

        <p className="text-xl mx-4 md:my-6 md:text-xl text-slate-500">
          Feedo is a customer feedback tool that helps you collect feedback from
          your customers. Set up in one click.
        </p>

        <div className="email flex flex-col md:flex-row gap-4 mx-4 md:my-6 mt-4">
          <input
            type="email"
            className="p-3 rounded-md border border-gray-300 w-full md:w-1/3
            focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-transparent animation duration-300 ease-in-out
            "
            placeholder="Enter your email"
          />
          <button
            className="p-2 rounded-md bg-slate-900 text-white font-semibold
              flex justify-center items-center w-full md:w-fit px-4"
            type="button"
          >
            <span className="px-3 font-bold">Try Now -</span>
            <span className=" font-md">it&apos;s free</span>
          </button>
        </div>

        <div className="shadow-2xl shadow-slate-600 rounded-md bg-slate-50 border border-slate-900 h-64 md:h-[440px]  m-8 md:m-32 ">
          <iframe
            className="w-full h-full"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/1-TZqOsVCNM?si=TrJJTxP3BmcwOn7I"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </section>
      <hr />
      <section className="features">
        <div className="title m-8">
          <h2 className="text-4xl tracking-tight font-bold text-slate-900 my-4">
            All the features you need.
          </h2>
          <div className="text-xl font-normal text-slate-500">
            Everything you need to collect feedback from your users.
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 w-full p-8 gap-4">
          {[
            {
              title: "Feedback Boards",
              description: "Create boards to collect feedback from your users",
              image: <Logo2 />,
            },
            {
              title: "User Segmentation",
              description:
                "Efficiently categorize and analyze feedback based on user segments for targeted insights",
              image: <Logo3 />,
            },
            {
              title: "Customizable Surveys",
              description:
                "Design personalized surveys with various question types to gather specific feedback data",
              image: <Logo4 />,
            },
            {
              title: "Real-time Analytics",
              description:
                "Access instant analytics and visualizations for quick assessment of feedback trends",
              image: <Logo5/>,
            },
            {
              title: "Commenting & Discussion",
              description:
                "Facilitate team collaboration with commenting and discussion features on feedback items",
              image: <Logo3 />,
            },
            {
              title: "Automated Notifications",
              description:
                "Set up automated alerts and notifications for timely responses to critical feedback",
              image: <Logo5 />,
            },
          ].map((feature, index) => (
            <div 
            key={index}
            className="feature w-fit bg-slate-0 p-6 flex flex-col items-center">
              <div className="image">{feature.image}</div>
              <div className="description text-center text-slate-500 text-md">
                {feature.description}
              </div>
            </div>
          ))}
        </div>
      </section>
      <hr />
      <section className="pricing mb-8">
        <div className="title m-8">
          <h2 className="text-4xl tracking-tight font-bold text-slate-900 my-4">
            Get everything. One-time Payment.
          </h2>
          <div className="text-xl font-normal text-slate-500">
            Everything you need to collect feedback from your users.
          </div>
        </div>

        <div className=" p-2 mx-4 grid md:grid-cols-3 md:grid-rows-1">
          <div className="card  p-2 border border-slate-300 rounded-lg  shadow-sm">
            <div className="text p-4 m-2 flex items-center w-full justify-between">
              <div className="">
                <div className="title text-2xl font-bold text-slate-900">
                  Basic
                </div>
                <div className="description text-slate-500">
                  For small teams
                </div>
              </div>
              <div className="price text-sm font-bold text-slate-900 items-center text-center h-fit p-1 px-2 flex rounded-xl bg-teal-300">
                LIFETIME
              </div>
            </div>
            <div className="box p-8 shadow m-4 gap-4 flex items-center justify-center border">
              <div className="price text-4xl font-bold tracking-tighter">
                $12
              </div>
              <p className="">One time price (GST included)</p>
            </div>
            <div className="feature list p-6 px-8 w-full ">
              <ul className="text-md text-slate-900">
                <li className="flex items-center justify-start gap-3">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    focusable="false"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                  </svg>
                  Embedable component
                </li>
                <li className="flex items-center justify-start gap-3">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    focusable="false"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                  </svg>
                  Collect User data
                </li>
                <li className="flex items-center justify-start gap-3">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    focusable="false"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                  </svg>
                  Analysis Tools for anonymous data
                </li>
                <li className="flex items-center justify-start gap-3">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    focusable="false"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                  </svg>
                  Embedable component
                </li>
                <li className="flex items-center justify-start gap-3">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    focusable="false"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                  </svg>
                  Collect User data
                </li>
                <li className="flex items-center justify-start gap-3">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    focusable="false"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                  </svg>
                  Analysis Tools for anonymous data
                </li>
              </ul>
              <button
                className="p-2 rounded-md bg-slate-900 text-white font-semibold
              flex justify-center items-center w-full mt-4 px-4"
                type="button"
              >
                <span className="px-3 font-bold">Try Now -</span>
                <span className=" font-md">it&apos;s free</span>
              </button>
            </div>
          </div>

          <div className="faq md:col-span-2 p-12">
            <div className="my-8">
              <div className="font-bold text-xl py-2">
                What are the limits of the Free plan?
              </div>
              <div className="">
                The free plan gives you access to the templates library and
                personal templates. You cannot build custom templates on the
                free plan.
              </div>
            </div>
            <div className="my-8">
              <div className="font-bold text-xl py-2">
                What&apos;s the difference between the Pro and the Free plan?
              </div>
              <div className="">
                The Pro plan gives you access to the templates library and
                personal templates. You also get full access to the designer
                tools to design your custom posts from scratch.
              </div>
            </div>
            <div className="my-8">
              <div className="font-bold text-xl py-2">
                What are the limits of the Free plan?
              </div>
              <div className="">
                The free plan gives you access to the templates library and
                personal templates. You cannot build custom templates on the
                free plan.
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <footer className="flex justify-between p-4 m-2">
        <span className="font-bold">Feedo</span>
        <div className="text-sm">© 2024 Feedo. — Terms & Privacy</div>
      </footer>
    </main>
  );
}
