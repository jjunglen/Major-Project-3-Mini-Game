# Memory Master

An interactive memory card matching game built with React, featuring multiple difficulty levels, themes, and a leaderboard.

## Live Demo

[Play Memory Master](https://github.com/jjunglen/Major-Project-3-Mini-Game)

## How to Play

1. Choose your difficulty — Easy, Medium, or Legendary
2. Choose a theme for your cards
3. Click Start Game
4. Flip two cards at a time to find matching pairs
5. Match all pairs before the timer or moves run out to win

## Scoring

- 5 points per card flip
- Time bonus on win — seconds remaining × 10
- Top 5 scores saved to leaderboard

## Difficulty

| Level | Pairs | Time | Moves |

------------

| Easy | 6 | 120s | 60 Moves |

| Medium | 8 | 90s | 50 Moves |

| Legendary | 12 | 45s | 40 Moves |

## Technologies Used

- React 18
- React Router DOM
- Context API
- Tailwind CSS
- Vite

## API Used

- **Lorem Picsum** (picsum.photos)
  - Free random photos, no API key required
  - Used for card images

## Setup Instructions

1. Clone the repository:

```bash
   git https://github.com/jjunglen/Major-Project-3-Mini-Game
   cd mastering-react
   cd src
```

2. Install dependencies:

```bash
   npm install
```

3. Start the development server:

```bash
   npm run dev
```

4. Open http://localhost:5173 in your browser
