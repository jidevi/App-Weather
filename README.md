# AppWeather

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.


This project was referenced from QuickCodingTuts off youtube for the purpose of practicing the framework Angular.

# What I learned 
* angular CLI 
* interfaces 
* components
* dependency injection
* interpolation
* event binding
* two-way binding
* built-in attribute directives
* using an API from another website

# Challenges 
I had trouble organizing the files since the tutorial wasn't a one-to-one follow along. It was more of a, "here are some screen shots of the html and css". 
The original weather app on the tutorial was also just 3 files, the code for css, hmtl, and javascript. I had to translate the code to typescript and learn
how to use dependency injection in order to get information into different components that weren't related. It took me a while to wrap my head around that
since I was also not sure which method to use for communicating data across the components. I ended up sticking with a service since it looks a lot cleaner 
instead of input/output decorators. This is also the first time implementing an interface since most practice projects don't work with enough data to use it.
It helped me dip my feet with APIs, it was very handy with organizing the data from the calls.

# How to run
If you want to test it out head to https://www.weatherapi.com/ and make an account to gain a free key for the API. Clone the repository and in the file "src/app/services/api-w.service.ts" replace the (probably outdated) key with the new one. It should look like this "...key=(*your key*)&q=${location}`;". 
Then open a terminal in the folder and run ng s. Assuming your IDE aleady has npm and all the dependencies for angular it should run on your localhost:4200.
