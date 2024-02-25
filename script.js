var marApiUrl =
  "https://www.dictionaryapi.com/api/v3/references/collegiate/json/";
var apiKey = "eb36528a-241a-49e3-bfbd-7a7ccdd8967e";

// list of the current words with their description.
var list = [
  {
    name: '',
    class: [],
    def: [],
  },
];

// function fetching data from the api of Marriam
async function fetchWord(word) {
  const response = await fetch(marApiUrl + word + "?key=" + apiKey);
  var data = await response.json();
  console.log(data)

  for(var i = 0; i < data.length; i++) {
    list.push({
      name: data[i]["hwi"]["hw"],
      class: data[i]['fl'],
      def: (data[i]["shortdef"])
    })
  }
  console.log(list)

  const container = document.getElementById("listContainer");
  container.innerHTML = "";
  for (var i = 0; i <= list.length; i++) {
    const ul = document.createElement('ul');
    const wordLabel = document.createElement("h3");
    const wordClass = document.createElement("span");
    container.appendChild(wordLabel);
    container.appendChild(wordClass)
    list.shift()
    const li = document.createElement("li");

    wordLabel.textContent = list[i]['name'];
    wordClass.textContent = list[i]['class'];
    li.textContent = list[i]["def"];
    container.appendChild(ul);
    ul.appendChild(li);
  }

  document.getElementById("word").value = "";
  console.log(data); 
  return data;
}

// clear the list of words already displayed
function clearList() {
  setTimeout(function(){
    list = [
      {
        name: '',
        class: [],
        def: [],
      },
    ];
    console.log('clear function is working!')
    return list
}, 1000); // 1000 milliseconds = 1 seconds
};
