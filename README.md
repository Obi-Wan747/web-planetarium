# [Project Title]

## MVP

Project Use Case: 
To provide accurate and personalized night sky predictions and simulations usable by stargazing amateurs. Also includes some features helpful for astrophotography planning. 

USP from other projects with the same use case:
Simulations are highly personalized to include various visibility-impeding properties of the specified location, such as light pollution, air pollution, cloud cover, moonlight glare, and more.
Also enables DSO target query actions by catalog.

Bare minimum features needed to satisfy use case:
- Mobile-first PWA
- Select location (restrict to current time)
- 360˚ WebGL view
- View solar system objects and naked-eye visible stars
- View surrounding elevation(?)

## Roadmap

### Phase 1: Building a House
*Setup a server that:*
  - *Serves a basic html file with a WebGL canvas saying "hello" in 3D*
  - *Exposes a basic GraphQL endpoint returning "hello"*
- [ ] Create a DJango web server
- [ ] Initialize a GraphQL endpoint & return some nonsense
- [ ] Write a thin SDK on the frontend to execute API calls
- [ ] Successfully incorporate nonsense from API in the rendering
- [ ] Setup a database solution & store some nonsense in it
- [ ] Return that nonsense through the API

### Phase 2: Going Grocery Shopping
*Collect the necessary data from free resources that would be needed for the MVP (for example, what stars can we see from where)*
- [ ] Store star catalog information in database
- [ ] Store solar system objects in database
- [ ] Store bortle location data in database
- [ ] Store elevation data in database / get from somewhere
      
### Phase 3: Learning to Cook
*Backend: Given a location, accurately determine and communicate the visible things in the sky* \
*Frontend: Communicate a specific hard-coded location to server and accurately display what it spits back*
- [ ] Todo items for this phase, in order

### Phase 4: Open a Catering Business

