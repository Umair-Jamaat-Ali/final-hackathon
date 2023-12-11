

export default function Button(props) {
  return (
    <>
      <button className='bg-blue-500 text-white rounded-2xl py-2 px-6 hover:bg-blue-600'>{props.btnText}</button>
    </>
  )
}
