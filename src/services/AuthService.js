export async function login(LoginDetails){
 const response = await fetch("http://localhost:8000/login",
      {
        method: "POST", headers: { "content-Type": "application/json" },
        body: JSON.stringify(LoginDetails)
      });
    const data = await response.json(); 

    if(data.accessToken)
    {
      sessionStorage.setItem("token",JSON.stringify(data.accessToken));
      sessionStorage.setItem("cbid",JSON.stringify(data.user.id));
    }
    return data;
}

export async function register(authDetails) {
      const input = {
      method: "POST", headers: { "content-Type": "application/json" },
      body: JSON.stringify(authDetails)
    }
    const response = await fetch(`${process.env.REACT_APP_HOST}/register`, input);
    const data = await response.json();
   
    if (data.accessToken) {
      sessionStorage.setItem("token", JSON.stringify(data.accessToken));
      sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
    }
    return data;
}

export function logout()
{
  sessionStorage.removeItem("token");
   sessionStorage.removeItem("cbid");
}