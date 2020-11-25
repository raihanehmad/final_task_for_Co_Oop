const mongoose = require('mongoose');
const User = mongoose.model('User');
const fetch = require('node-fetch');

exports.get_data = async (req, res) => {
try{
        let api_data_response = await fetch("http://dummy.restapiexample.com/api/v1/employees");
    if (api_data_response.ok) {
        let employee_json = await api_data_response.json();
        response.status(200).json(employee_json);
      } else {
        console.log("HTTP-Error: " + api_data_response.status);
      }
    }catch(e){
        console.log('Error is:');
        console.log(e);
    }
}
exports.get = async (request, response) => {
    const employees = await Employee.find({});
    return response.status(200).json(employees);

}

exports.create =  async (request, response)=>{
    let {id, employee_name, employee_salary, employee_age, profile_image} = request.body
    let employ = new Employee();
    employ.id = id;
    employ.employee_name = employee_name;
    employ.employee_age = employee_age;
    employ.employee_salary = employee_salary;
    employ.profile_image = profile_image;
    await employ.save();
    return response.status(201).json(employ);
}
exports.update = async (req, res) => {
try{
let user = await User.findById(req.params.id);
if(!user){
return res.status(404).json({error: 'Data not found'});
}
let {firstName, lastName, address, phone, age} = req.body;
employ.firstName = firstName;
employ.lastName = lastName;
employ.address = address;
employ.phone = phone;
employ.age = age;
await employ.save();
res.json({data: employ})
}catch(e) {
res.status(400).json({error: 'Bad Request'});
}
}

exports.destroy = async (request, response)=> {
    let employ = await Employee.findById(request.params.id);
    if(!employ){
        return response.status(204).json({'error': 'Employee Data not found'});
    }else{
        await employ.remove();
        return response.status(204).json(employ);
    }
}

exports.getUsingId = async (request, response) =>{
    let employ = await Employee.findById(request.params.id);
    return response.status(200).json(employ);
}