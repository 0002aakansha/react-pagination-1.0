# React pagination

React pagination is a simple and customizable notification component for React applications.

![React-pagination](https://github.com/0002aakansha/react-pagination-1.0.git)

## Installation

You can install React pagination via npm:

```jsx
npm install react-custom-pagination
```

## Usage

To use React pagination in your React application, follow these steps:

Import the useFetchData hook and necessary styles in your component:

```jsx
import useFetchData from "react-pagination";
```

Initialize the useFetchData hook with your preferred position:

```jsx
const { items,
        pagnatedData,
        onClickNext,
        onClickPrev } =
  useFetchData({url: "url", totalItems: 10});
```
## API

```jsx
useFetchData({url: "url", totalItems: 10});
```

## Example

Here's a basic example of how to use React pagination:

```jsx
import useFetchData from "react-custom-pagination1.0"
import endpoints from "../config"

export default function Posts() {
    const { pagnatedData, onClickNext, onClickPrev } = useFetchData({ url: "", totalItems: 10 })
    return <div>
        <ul>
            {
                pagnatedData?.map(item => <li style={{listStyle: "none"}}>{item.id + ": " + item.title}</li>)
            }
        </ul>
        <div style={{
            display: "flex",
            gap: "12px"
        }}>
            <button onClick={onClickPrev}>Prev</button>
            <button onClick={onClickNext}>Next</button>
        </div>
    </div>
}
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
