// // ExampleComponent.js
// import React, { useEffect } from 'react';
// import UseFetch from './useFetch';

// const ExampleComponent = () => {
//     const { data: data1, loading: loading1, error: error1, get: get1 } = UseFetch();
//     const { data: data2, loading: loading2, error: error2, get: get2 } = UseFetch();

//     useEffect(() => {
//         get1('https://api.example.com/data1');
//         get2('https://api.example.com/data2');
//     }, [get1, get2]);

//     if (loading1 || loading2) return <p>Loading...</p>;
//     if (error1) return <p>Error: {error1.message}</p>;
//     if (error2) return <p>Error: {error2.message}</p>;

//     return (
//         <div>
//             <h1>Data from API 1</h1>
//             <pre>{JSON.stringify(data1, null, 2)}</pre>
//             <h1>Data from API 2</h1>
//             <pre>{JSON.stringify(data2, null, 2)}</pre>
//         </div>
//     );
// };

// export default ExampleComponent;
