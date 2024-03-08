import FormInput from "./FormInput"
import ItemList from "./ItemList"

function Form({form , setForm}) {

  const changHandler = (e) => {
    const {name , value} = e.target;
    setForm({...form , [name]:value})
  }
  return (
    <div>
      <FormInput name="name" type="text" label="Name" value={form.name} onChange={changHandler} />
      <FormInput name="lastName" type="text" label="Last Name" value={form.lastName} onChange={changHandler} />
      <FormInput name="email" type="text" label="Email" value={form.email} onChange={changHandler} />
      <FormInput name="phone" type="tel" label="Phone" value={form.phone} onChange={changHandler} />
      <FormInput name="address" type="text" label="Address" value={form.address} onChange={changHandler} />
      <FormInput name="postalCode" type="text" label="Postal Code" value={form.postalCode} onChange={changHandler} />
      <FormInput name="date" type="date" label="Date" value={form.date} onChange={changHandler} />
      <ItemList form={form} setForm={setForm} />
    </div>
  )
}

export default Form
