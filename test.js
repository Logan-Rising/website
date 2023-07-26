const fetchData = async () => {
    let repos = [];
      let res;
    res = await fetch(`https://api.github.com/repos/Logan-Rising/DiscordBot`)
    console.log('logging res')
    console.log(res)
  
      let data = await res.json();
      repos = repos.concat(data);
  
      console.log('logging repos')
      console.log(repos)
      const name = repos[0].name;
      const description = repos[0].description;
      const language = repos[0].language;
      const url = repos[0].html_url;
      console.log(repos[0].name);
      console.log(repos[0].description);
      console.log(repos[0].language);
      console.log(repos[0].html_url);
  }

  fetchData();