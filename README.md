# Hunza Valley Explorer

I am uploading a reference image of the exact visual design I want for the NorthVerse 3D Journey experience.

CRITICAL INSTRUCTION

The uploaded image is the visual source of truth.

Do not reinterpret the design.

Do not create a generic 3D map.

Do not turn this into a normal destination page with a small map card.

I want you to recreate the visual composition, hierarchy, proportions, positioning, styling and overall cinematic feeling of the uploaded reference image as closely as possible.

The goal of this task is primarily to reproduce the UI/UX design shown in the image.



1. CREATE A DEDICATED FULL-SCREEN 3D JOURNEY EXPERIENCE

The NorthVerse 3D Journey should behave visually like an immersive travel experience.

The entire viewport should be dominated by the Hunza Valley 3D/terrain world.

The interface elements should float above the terrain.

Think:

cinematic travel visualization + interactive map + guided journey

NOT:

destination webpage + map widget

The terrain/world must be the dominant visual element.



2. USE THE UPLOADED IMAGE AS THE DESIGN REFERENCE

Analyze the uploaded image carefully before implementing anything.

Match:

Overall composition

UI placement

Relative proportions

Spacing

Panel dimensions

Typography hierarchy

Rounded corners

Transparency

Shadows

Glows

Button sizes

Marker styling

Journey-stop layout

Bottom controls

Right-side controls

Color balance

Visual hierarchy

Do not simply use the image as one giant screenshot.

Instead, recreate the interface as actual HTML/CSS/React components wherever practical.

The terrain/background can remain an image layer.

The UI must be composed of editable/functional elements.



3. WORLD / TERRAIN

The largest element of the screen should be the Hunza Valley world.

The reference shows:

Snow-covered Karakoram mountains

Rakaposhi

Ultar Sar

Green Hunza Valley

Hunza River

Roads

Villages

Baltit Fort

Altit Fort

Attabad Lake

Passu Cones

Hussaini Bridge

Khunjerab Pass

Warm glowing points of interest

Cinematic atmospheric lighting

Do not use the current simplistic geometric placeholder terrain.

The terrain should visually resemble the uploaded reference as closely as possible.

If an actual 3D terrain engine is not available in this isolated prototype, use the uploaded/reference terrain artwork as the background layer and build the complete interactive UI over it.

The important thing is to establish the correct visual experience first.



4. TOP-LEFT

Overlay on the terrain:

NorthVerse 3D Journey

Underneath:

Explore Hunza Valley like never before

Next to the title, add a small blue pill:

3D

The title should be white and clean.

It should feel like an overlay belonging to the world, not a normal webpage heading.



5. TOP-RIGHT

Create a floating dark translucent button:

Map View

with a map icon.

It should have:

Rounded corners

Slight transparency

Subtle border

Subtle blur

White icon/text

This switches to the conventional map experience later.

For this prototype, the button can simply demonstrate the intended interaction/state.



6. LEFT JOURNEY STOPS PANEL

Create a floating dark glass panel on the left side.

Approximately 280–320px wide.

It should contain:

Journey Stops

7 Places

Then this exact sequence:

Baltit Fort
Starting Point

Karimabad
Village

Altit Fort
Historic Fort

Attabad Lake
Lake

Passu Cones
Viewpoint

Hussaini Bridge
Bridge

Khunjerab Pass
Mountain Pass

Create a vertical visual connection between the seven stops.

Each stop should contain:

Number

Destination name

Small descriptor

Active/inactive state

Baltit Fort is the initial active destination.

Its row should have a blue highlighted state similar to the reference.

The panel should look like a journey controller, not a normal navigation sidebar.



7. FLOATING DESTINATION MARKERS

Place floating labels over the terrain.

They should visually appear to be positioned in the world.

Create labels for:

Baltit Fort

Karimabad

Altit Fort

Attabad Lake

Passu Cones

Hussaini Bridge

Khunjerab Pass

Use small contextual icons where appropriate.

The labels should be dark translucent pills with white text and subtle glow.

They should NOT look like generic Google Maps pins.

They should feel like a cinematic 3D travel interface.



8. MOUNTAIN LABELS

Add geographic mountain labels similar to the reference.

Rakaposhi

7,788 m

Ultar Sar

7,388 m

Also show:

Passu Cones

These labels should sit naturally over the corresponding mountain/landscape areas.

They should be smaller and more subtle than destination labels.



9. JOURNEY ROUTE

Show a visually understandable journey route connecting the stops.

Sequence:

Baltit Fort
→ Karimabad
→ Altit Fort
→ Attabad Lake
→ Passu Cones
→ Hussaini Bridge
→ Khunjerab Pass

Use a subtle glowing route/path.

The route should visually belong to the terrain rather than looking like a normal 2D map line.



10. BOTTOM-LEFT JOURNEY PLAYER

Create a floating dark translucent journey player.

It should contain:

Small destination thumbnail

Baltit Fort

Starting Point

Play/pause control

Previous control

Next control

Progress bar

Time/progress indicator

It should resemble a cinematic media player controlling the journey.

Initial state:

Baltit Fort — Starting Point



11. BOTTOM CONTROLS

Near the bottom of the screen create:

Pause

Restart

Explore

The buttons should float over the terrain.

Explore should be slightly more prominent.

They should not be placed inside a large card.



12. RIGHT-SIDE CONTROLS

Create a vertical floating control group:

Reset / recenter

Zoom +

Zoom -

Compass

Use dark translucent controls with subtle borders and shadows.

Keep them visually secondary.



13. START JOURNEY

The initial experience should have a prominent:

Start Journey

button toward the bottom area, matching the visual language of the reference.

When clicked:

Journey begins at Baltit Fort

Baltit Fort becomes active

Journey progress begins

The bottom player becomes active



14. INTERACTION PROTOTYPE

This prototype should actually demonstrate the intended experience.

When clicking a journey stop:

Example:

Click Attabad Lake

Then:

Attabad Lake becomes active in the Journey Stops panel

Attabad Lake marker becomes highlighted

Bottom player updates to Attabad Lake

Progress indicator updates

Camera/world view should visually transition toward Attabad Lake if technically feasible

Clicking:

Pause

pauses the journey state.

Clicking:

Restart

returns to Baltit Fort.

Clicking:

Explore

switches from guided journey mode to free exploration mode.

If actual 3D camera movement cannot be implemented in this prototype, create a convincing visual transition/state change rather than abandoning the interaction.



15. VISUAL STYLE

Match the uploaded reference.

Use:

Dark navy/black translucent glass

White typography

NorthVerse blue accents

Subtle blue glow

Soft shadows

Backdrop blur

Rounded corners

Minimal UI

Cinematic presentation

High contrast

Elegant spacing

Avoid:

Generic SaaS dashboard appearance

Excessive white cards

Flat vector-map appearance

Bright excessive colors

Heavy borders

Generic Google Maps styling

Conventional website navigation dominating the screen



16. VERY IMPORTANT — DO NOT RECREATE THE CURRENT HUNZA PAGE

This is a separate experience.

Do NOT place:

About section

Highlights

“More to Explore”

Destination cards

Large white content area

Destination information sections

inside this experience.

The user enters:

NorthVerse 3D Journey

and gets an immersive full-screen experience.

Conceptually:

Normal Destination Page
↓
3D Journey
↓
FULL-SCREEN CINEMATIC WORLD

The 3D Journey should feel like entering another mode of NorthVerse.



17. RESPONSIVE DESIGN

Build the design responsively.

Desktop/tablet:

Full-screen terrain

Left journey panel

Floating labels

Bottom player

Bottom controls

Right controls

Mobile:

Do not simply shrink the desktop UI.

Instead:

Keep terrain dominant

Convert Journey Stops into a collapsible drawer

Keep essential controls accessible

Keep bottom player compact

Scale geographic labels

Prevent UI from covering the important terrain



18. COMPONENT STRUCTURE

Build this as reusable components rather than one huge component.

Suggested structure:

JourneyWorld

JourneyHeader

JourneyStops

JourneyStop

DestinationMarker

MountainLabel

JourneyRoute

JourneyPlayer

JourneyControls

MapControls

StartJourneyButton

Keep journey data separate from visual components.

The journey should be data-driven so another region can eventually use the same system.



19. DO NOT MODIFY THE REST OF NORTHVERSE

This is extremely important.

For this task, focus on creating/reworking only the NorthVerse 3D Journey experience.

Do not redesign:

Dashboard

Destinations page

Hotels

Restaurants

Travel Packages

Car Rentals

Tourist Guides

Account

Settings

Other NorthVerse navigation

Do not break existing functionality.

If a 3D Journey component already exists, replace/rework the visual implementation rather than creating a competing duplicate.



20. FIRST PRIORITY: VISUAL FIDELITY

Before adding sophisticated functionality, make the screen visually match the uploaded reference.

The first test is:

If I put your implementation next to the uploaded image, does the overall composition immediately look like the same product?

Specifically compare:

Terrain dominance

Left panel

Top-left title

Top-right Map View

Floating destination labels

Mountain labels

Route

Bottom player

Bottom controls

Right controls

Overall dark cinematic appearance

If it does not look sufficiently similar, refine the visual design before adding more functionality.



21. IMPORTANT IMPLEMENTATION PRINCIPLE

Separate the experience into:

WORLD

The Hunza terrain/background.

UI OVERLAY

All controls, panels, markers and labels.

This separation is intentional.

Eventually the static terrain artwork can be replaced with a true interactive 3D terrain/map renderer without redesigning the entire interface.



FINAL INSTRUCTION

Study the uploaded reference image first.

Then build the NorthVerse 3D Journey prototype around it.

Do not improvise a different design.

Do not interpret it as a normal destination page.

Do not make the 3D world a small card.

The desired result is:

A full-screen cinematic Hunza world with the NorthVerse journey interface floating elegantly on top of it.

Build the visual prototype first, then make the interactions functional.

After implementation, show me the finished 3D Journey screen so I can compare it directly against the uploaded reference.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/6079f5a4-64bc-4315-8bc8-2c5ab85c9076).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
