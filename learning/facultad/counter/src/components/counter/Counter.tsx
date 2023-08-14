import { Button, Typography, Card, CardContent } from '@mui/material'
import { useState } from 'react'
import "./Counter.css"

export interface CounterProps {
  default_number: number;
}

export const Counter = ({ default_number }: CounterProps) => {
  const [count, setCount] = useState(default_number)

  const restar = () => {
    setCount((prev) => prev - 1)
  }

  const sumar = () => {
    setCount((prev) => prev + 1)
  }

  return (
    <Card>
      <CardContent>
        <Typography variant='h4' align='center'>Contador</Typography>
        <section data-testid='countValue' className='counter'>{count}</section>
        <section className='buttonbar'>
          <Button variant="contained" size='medium' color='secondary' onClick={restar} data-testid='sub'>-</Button>
          <Button variant="contained" size='medium' onClick={sumar} data-testid='add'>+</Button>
        </section>       
      </CardContent>
    </Card>
  )
}