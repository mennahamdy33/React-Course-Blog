import { useLocation } from "react-router";

export function Author(props){
    let data = useLocation();

    console.log(data.state.value);
    return (<>
    <h1>Author Page: {data.state.value.name} </h1>
    <p>Author email: {data.state.value.email} </p>
    <p>Author phone: {data.state.value.phone} </p>
    <p>Author website: {data.state.value.website} </p>    
    <p>Author company: {data.state.value.company.name} </p>
    </>
    );
    }