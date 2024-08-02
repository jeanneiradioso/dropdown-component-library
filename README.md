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
### Installation
```
npm i dynamic-select-dropdown
```

## Usage

This is the basic usage of dynamic-select-dropdwon
```Javascript
import { Dropdown } from 'dynamic-select-dropdwon'

  const options = [
    { id: "1", value: "opt", label: "Option 1", },
    { id: "2", value: "opt", label: "Option 1", },
  ];
   <Dropdown
        options={options}
        onChange={(value) => console.log(value)}
      />
  ```

For Multi-Level Dropdown

```JavaScript
 const options = [
    { id: "1", value: "opt", label: "Option 1", },
    { id: "2", value: "opt", label: "Option 1", },
  ];
```

**Multi-Select the Dropdown**

```JavaScript
<Dropdown
       multiple
       options={options}
       onChange={(value) => console.log(value)}     />
```

**Display search bar to search for options**
```JavaScript
 <Dropdown
       multiple
       search
       options={options}
       onChange={(value) => console.log(value)}     />
```
**Add selected options**

```JavaScript
 <Dropdown
       multiple
       search
       options={options}
       selectedOptions={["1"]}
       onChange={(value) => console.log(value)}     />
```
Note: Only pass Ids of options


