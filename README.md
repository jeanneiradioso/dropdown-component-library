## Development
To run locally, install dependencies: 
```
npm intall
```
To run storybook locally:
```
npm run storybook
```
### Building

```
npm run build
```
### Test the component library in another project
In dropdown-component-library directory run:
```
npm link
```
In your project directory (react app) run:
```
npm link dynamic-select-dropdown
```
**NOTE**: To avoid duplicate dependencies when you link dynamic-select-dropdown to your project, you can remove .node_modules from /dropdown-component-library before running "npm link dynamic-select-dropdown"

