 
 let arrPic = [
    {
        dp: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D", story: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvcnRyYWl0fGVufDB8fDB8fHww"        
    },
    {
        dp: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBvcnRyYWl0fGVufDB8fDB8fHww", story: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHBvcnRyYWl0fGVufDB8fDB8fHww"        
    },
    {
        dp: "https://images.unsplash.com/photo-1614204424926-196a80bf0be8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHBvcnRyYWl0fGVufDB8fDB8fHww", story: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fHBvcnRyYWl0fGVufDB8fDB8fHww"        
    },
    {
        dp: "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHBvcnRyYWl0fGVufDB8fDB8fHww", story: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fHBvcnRyYWl0fGVufDB8fDB8fHww"        
    },
    {
        dp: "https://images.unsplash.com/photo-1543357530-d91dab30fa97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fHBvcnRyYWl0fGVufDB8fDB8fHww", story: "https://images.unsplash.com/photo-1542596594-649edbc13630?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D"        
    }
 ]

 let storiyan = document.querySelector('#storiyan')
 let store = ""; 

 arrPic.forEach( (ele , idx) => {
    // console.log("jello");
    store += `<div class="story">
                <img id = "${idx}" src="${ele.dp}" alt="" srcset="">
            </div>`
 })
 storiyan.innerHTML = store;

 let showStory = document.querySelector('#full-screen');

 storiyan.addEventListener('click', (e) => {
    // console.log(arrPic[e.target.id].story);  // target index
    showStory.style.display = "block";
    showStory.style.backgroundImage = `url(${arrPic[e.target.id].story})`  // 

    setTimeout( () => {
        showStory.style.display = "none";
    }, 2000)
 })