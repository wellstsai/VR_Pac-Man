class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pacFlag: 0,
      choice: 0,
      legend: 0,
      maze: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],

      default1: [[1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1],
                 [1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 2, 1],
                 [1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 2, 1],
                 [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
                 [1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1],
                 [1, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 1],
                 [1, 1, 1, 1, 2, 1, 1, 1, 0, 1, 0, 1, 1, 1, 2, 1],
                 [1, 1, 1, 1, 2, 1, 3, 0, 0, 0, 0, 0, 0, 1, 2, 1],
                 [1, 0, 0, 0, 2, 0, 0, 1, 1, 0, 1, 1, 0, 0, 2, 1],
                 [1, 1, 1, 1, 2, 1, 0, 1, 0, 0, 0, 1, 0, 1, 2, 1],
                 [1, 1, 1, 1, 2, 1, 0, 1, 1, 1, 1, 1, 0, 1, 2, 1],
                 [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
                 [1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1],
                 [1, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 1],
                 [1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1],
                 [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1]]

    };
    this.amaze = this.amaze.bind(this);
    this.clickLevel = this.clickLevel.bind(this);
    this.clickLegend = this.clickLegend.bind(this);
  }
  amaze() {
    console.log('Fetching pet status...');
    this.setState({
      choice: !this.state.choice
    });

    // fetch('http://localhost:3000/api/pet', {method: 'GET'})
    //   .then(function(parse) {
    //   parse.json()
    //     .then(function (data) {
    // });
  }
  clickLevel (arr, e) {

    for (var i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(3) !== -1) {
        this.setState({pacFlag: 1});
      }
    }
    this.setState({
      maze: arr.map(function(arr) {
        return arr.slice();
      })
    });
  }
  clickLegend (num, e) {
    this.setState({legend: num});

  }
  click(indy, index, e) {
    var curr = this.state.maze;
    if (this.state.legend === 1) {
      curr[indy][index] = 0;
    } else if (this.state.legend === 2) {
      curr[indy][index] = 1;
    } else if (this.state.legend === 3) {
      curr[indy][index] = 2;
    } else {
      if (curr[indy][index] === 0) {
        curr[indy][index] = 1;
      } else if (curr[indy][index] === 1) {
        curr[indy][index] = 2;
      } else if (curr[indy][index] === 2 && this.state.pacFlag === 0) {
        curr[indy][index] = 3;
        this.setState({pacFlag: 1});
      } else if (curr[indy][index] === 3) {
        curr[indy][index] = 0;
        this.setState({pacFlag: 0});
      } else if (curr[indy][index] === 2 && this.state.pacFlag === 1) {
        curr[indy][index] = 0;
      }
    }
    this.setState({
      maze: curr
    });

  }

  saveMaze() {
    // convert maze to string
    var currentMaze = this.state.maze;
    var mazeData = '';
    for (var i = 0; i < currentMaze.length; i++) {
      for (var j = 0; j < currentMaze[i].length; j++) {
        mazeData += currentMaze[i][j];
      }
    }
    console.log('mapData', mazeData);
    var data = {
      mapData: mazeData,
      shareable: true,
      username: window.username
    }
    $.ajax({
      type: 'POST',
      url: '/maps',
      data: data,
      success: function() {
        console.log('success post to /maps');
      }
    })
  }

  render() {
    return (
      <div className="maze">
      { this.state.choice ?
        <MazeRunner maze={this.state.maze} />
        : <MazeEditor clickLegend={this.clickLegend} def={this.state.default1} clickLevel={this.clickLevel.bind(this)} click={this.click.bind(this)} maze={this.state.maze} amaze={this.amaze.bind(this)} saveMaze={this.saveMaze.bind(this)}/>
      }
      </div>
    );
  }
}

window.App = App;