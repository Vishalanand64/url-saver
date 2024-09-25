

const Home = () => {

    const handleAdd = () => {
        const url = document.querySelector('.url').value;
        
       
        
     
        const desc = document.querySelector('.desc').value;
       
        if (!url || !desc) return; // Prevent adding empty entries

        const container = document.createElement('div');
        container.className = 'flex  justify-between items-center w-[95%] mb-2 border border-white rounded-md p-2';

        const p = document.createElement('p');
        // p.textContent = `${url} -->  ${desc}`;

        const urlSpan = document.createElement('span');
        urlSpan.textContent = url;
        urlSpan.className = 'text-blue-500 cursor-pointer text-sm block';
        urlSpan.onclick = function() {
            window.open(url, '_blank');
        };

        p.innerHTML = '';
        p.appendChild(urlSpan);
        p.appendChild(document.createTextNode( desc));
        

        p.className = 'w-[90%] break-words';

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'bg-red-500 text-white px-2 py-1 rounded ml-2';
        deleteBtn.onclick = function() {
            container.remove();
        };

        container.appendChild(p);
        container.appendChild(deleteBtn);

        document.querySelector('.data').appendChild(container);

        // Clear input fields after adding
        document.querySelector('.url').value = '';
        document.querySelector('.desc').value = '';
        
      
        
    }

  return (
    <div className="w-full h-auto min-h-[100vh] flex flex-col items-center  bg-[#111]">
      <h1 className="text-white  text-[2.5vh] uppercase font-semibold my-4">URL Saver</h1>
      <div className="main min-w-[90%] w-[50%] h-[80%] bg-slate-800 rounded-md p-2 ">
        <div className="input min-w-[90%] h-auto bg-slate-700 rounded-md flex  items-center justify-center   py-4" >
            <div className="w-[90%] mx-4">
            <input type="text" className="url w-[100%] p-2 rounded-md outline-none my-2" placeholder="Enter URL" />
            <input type="text" className="desc w-[100%] p-2 rounded-md outline-none my-2" placeholder="Enter Description" />
            </div>
            <button onClick={handleAdd} className="btn bg-slate-600 text-white p-4 rounded-md">ADD</button>
        </div>

        <div className="data min-w-[90%] h-auto  rounded-md flex flex-col   justify-center my-8 mx-4  py-4 text-white text-xl" >

        </div>
      </div>
    </div>
  )
}

export default Home
