import decorate from "./decorate";

export default function hello(name: string): string {
  return `Hello, ${decorate(name)}!`
}
