export interface HelloProps {
  name: string;
}

export const Hello = ({ name }: HelloProps) => {
  return (
    <p style={{margin:'0.1em'}}>
      Hello, {name}!
    </p>
  )
}