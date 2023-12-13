"use client"

export default function Button(props) {

  const deleteHandler = async () => {
    try {
      var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "id": props.id 
});

var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

 await fetch("http://localhost:3000/api/patients", requestOptions)
  alert("successfully deleted")
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <>
      <button className='bg-blue-500 text-white rounded-2xl py-2 px-6 hover:bg-blue-600' onClick={deleteHandler} >{props.btnText}</button>
    </>
  )
}
