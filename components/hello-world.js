import Image from 'next/image';
import parse from 'html-react-parser';

export default function HelloWorld() {
  const demo = (number) => {
    return number * 1000;
  };
  demo();
  return (
    <div>
      <Image
        loader={({ src }) => src}
        src="https://images.unsplash.com/photo-1673893821298-3ff6b49990a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
        width={1000}
        height={500}
        objectFit="cover"
        priority
      />
      {parse('<h1>List</h1>')}
      <ul>
        {parse(`
    <li>Item 1</li>
    <li>Item 2</li>
  `)}
      </ul>
    </div>
  );
}
