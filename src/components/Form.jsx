import React from 'react';

const Form = () => {
	return (
		<div>
			<section className="bg-backg-light dark:bg-backg-dark text-t-dark dark:text-t-light body-font relative">
				<div className="container px-5 py-10 mx-auto">
					<div className="flex flex-row gap-4">
						<div className=" lg:w-4/6 md:w-2/3 ">
							<h1 className="sm:text-3xl text-2xl font-medium title-font mb-5 ">
								Test SMTP
							</h1>
							<div className="flex flex-wrap -m-2">
								<div className="p-2 w-full md:w-1/3 lg:w-1/3">
									<div className="relative">
										<label htmlFor="name" className="leading-7 text-sm">
											SMTP Server
										</label>
										<input
											placeholder="you.site.com"
											type="link"
											id="name"
											name="name"
											className="w-full bg-contact-light dark:bg-contact-dark rounded text-base outline-none text-t-dark dark:text-t-light py-3 px-5 leading-8  duration-200 ease-in-out"
										/>
									</div>
								</div>
								<div className="p-2 w-full md:w-1/3 lg:w-1/3">
									<div className="relative">
										<label htmlFor="email" className="leading-7 text-sm">
											Port
										</label>
										<input
											type="number"
											id="number"
											name="number"
											className="w-full bg-contact-light dark:bg-contact-dark rounded text-base outline-none text-t-dark dark:text-t-light py-3 px-5 leading-8  duration-200 ease-in-out"
										/>
									</div>
								</div>
								<div className="p-2 w-full md:w-1/3  lg:w-1/3">
									<div>
										<label className="leading-7  text-sm " htmlFor="grid-state">
											Authentication
										</label>
										<div className="relative">
											<select className="outline-none appearance-none w-full bg-contact-light dark:bg-contact-dark text-t-dark dark:text-t-light  py-3 px-5  rounded leading-8  duration-200 ease-in-out  ">
												<option>SSL</option>
												<option>TLS</option>
											</select>
											<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 text-xl">
												<i class="uil uil-angle-down"></i>
											</div>
										</div>
									</div>
								</div>
								<div className="p-2 w-full md:w-1/2 lg:w-1/2">
									<div className="relative">
										<label htmlFor="email" className="leading-7 text-sm">
											UserName
										</label>
										<input
											placeholder="Username"
											type="text"
											id="text"
											name="text"
											className="w-full bg-contact-light dark:bg-contact-dark rounded text-base outline-none text-t-dark dark:text-t-light py-3 px-5 leading-8  duration-200 ease-in-out"
										/>
									</div>
								</div>
								<div className="p-2 w-full md:w-1/2 lg:w-1/2">
									<div className="relative">
										<label htmlFor="email" className="leading-7 text-sm">
											Password
										</label>
										<input
											placeholder="***********"
											type="password"
											id="password"
											name="password"
											className="w-full bg-contact-light dark:bg-contact-dark rounded text-base outline-none text-t-dark dark:text-t-light py-3 px-5 leading-8  duration-200 ease-in-out"
										/>
									</div>
								</div>
								<div className="p-2 w-full md:w-1/2 lg:w-1/2">
									<div className="relative">
										<label htmlFor="email" className="leading-7 text-sm">
											From Email
										</label>
										<input
											placeholder="externdevops@gmail.com"
											type="email"
											id="email"
											name="email"
											className="w-full bg-contact-light dark:bg-contact-dark rounded text-base outline-none text-t-dark dark:text-t-light py-3 px-5 leading-8  duration-200 ease-in-out"
										/>
									</div>
								</div>
								<div className="p-2 w-full md:w-1/2 lg:w-1/2">
									<div className="relative">
										<label htmlFor="email" className="leading-7 text-sm">
											To Email
										</label>
										<input
											placeholder="externdevops@gmail.com"
											type="email"
											id="email"
											name="email"
											className="w-full bg-contact-light dark:bg-contact-dark rounded text-base outline-none text-t-dark dark:text-t-light py-3 px-5 leading-8  duration-200 ease-in-out"
										/>
									</div>
								</div>

								<div className="p-2 w-full">
									<div className="relative">
										<label htmlFor="message" className="leading-7 text-sm">
											Custom Message
										</label>
										<textarea
											id="message"
											name="message"
											className="w-full bg-contact-light dark:bg-contact-dark rounded text-base outline-none text-t-dark dark:text-t-light py-16 px-5 leading-8  duration-200 ease-in-out"
											defaultValue={''}
										/>
									</div>
								</div>
								<div className="p-2 w-full flex flex-wrap gap-2 ">
									<button className="flex justify-center btn btn-purple">
										Send Email{' '}
										<span className="text-base pl-2">
											<i class="uil uil-message"></i>
										</span>
									</button>
									<button className="flex justify-center btn btn-purple  ">
										Autofill Dummy{' '}
										<span className="text-base pl-2">
											<i class="uil uil-message"></i>
										</span>
									</button>
									<button className="flex justify-center btn btn-purple ">
										Clear Form{' '}
										<span className="text-base pl-2">
											<i class="uil uil-message"></i>
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Form;
