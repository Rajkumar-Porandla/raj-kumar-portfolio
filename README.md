# Raj Kumar Porandla - Portfolio

A focused, responsive personal portfolio for Raj Kumar Porandla, a B.Tech Computer Science and Engineering student working across machine learning, Android, and interactive software systems.

**Live portfolio:** [raj-kumar-portfolio-main.vercel.app](https://raj-kumar-portfolio-main.vercel.app)

## Highlights

- SMS Spam Classifier using the Firefly Algorithm: 95.55% accuracy, 0.9625 ROC-AUC, 20x feature reduction, and convergence in six iterations.
- FocusGuard: an Android focus utility that identifies and blocks short-form video interfaces using Accessibility Services and App Usage APIs.
- G-Maps Route Visualizer: an interactive pathfinding simulator for BFS, DFS, Dijkstra, and A* Search with a custom binary min-heap.

## Development

This site is dependency-free and deployable as a static site.

```bash
npm run build
npm start
```

Open `http://localhost:4173` while the local server is running.

## Structure

- `index.html` - semantic portfolio content and metadata
- `styles.css` - responsive visual system and project visuals
- `script.js` - active navigation state and dynamic copyright year
- `site-check.mjs` - lightweight content validation run by the build script

## Deployment

This site is deployed on Vercel at [raj-kumar-portfolio-main.vercel.app](https://raj-kumar-portfolio-main.vercel.app).

To deploy a new production version locally:

```bash
npx vercel --prod
```

The `vercel.json` configuration runs the site checks and serves the project root as a static site.
