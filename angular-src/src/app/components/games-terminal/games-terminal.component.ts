import { Component, OnInit } from '@angular/core'
import { Http } from '@angular/http'
declare var $: any;
@Component({
  selector: 'app-games-terminal',
  templateUrl: './games-terminal.component.html',
  styleUrls: ['./games-terminal.component.css']
})
export class GamesTerminalComponent implements OnInit {

  constructor(
    private _http:Http
    ) { 
    
  }

  ngOnInit() {
    
  }
  ngAfterViewInit() {
    let _http = this._http
      $(function($, undefined) {
        // Greetings ASCii art a like...
        let greeting = `
        Loading game system ##########\n
        *******************************
        *                             *
        *   WELCOME TO Playit'17      *
        *        GAME CONSOLE         *
        *                             *
        *******************************
        `
        // Help list with available system commands
        let help = `List of commandos available:
- Help              [List all available commands]
- ?                 [Same as help]
- Clear             [Clear the console window]
- Documanetation    [Open documentation of this site]
- Games             [List of games that you can play]
- Games Load 'NAME' [Load games. how-to load game: games load digger]
- GOTO              [Go to page. Ex. goto games]
- Guide             [Same as documantentaion]
- Pixelman          [Show Pixelman]
                    `
        let pixelman = `
           +MMMMMMMMMMMMMMMMMMMMMy                
           +MMMMMMMMMMMo+++++++++:                
           +MMMMMMMMMMM-.........'                
           +MMMMMMMMMMMMNNNNNNNNNy                
           +MMMMMMMMMMMMMMMMMMMMMmo.              
   :/hhhhhhmMMMMMMMMMMMMMMMMMMMMMNs.              
 ::oshhhhhhmMMMMMMMMMMMMMMMMMMMMMy                
'MMMd      oMMMMMMMMMMMMMMMMMMMMMy      odd-      
 ---.      +MMMMMMMMMMMMMMMMMMMMMd//////syy-      
           +MMMMMMMMMMMMMMMMMMMMMMMMMMMM/         
           +MMMMMMMMMMMMMMMMMMMMMmyyyyyy-         
           +MMMMMMMMMMMMMMMMMMMMMy                
           +MMMMMMMMMMMMMMMMMMMMMy                
           +MMMMMMMMMMMMMMMMMMMMMy                
           +MMMMMMMMMMMMMMMMMMMMMy                
........   +MMMMMMMMMMMMMMMMMMMMMy                
/NNNNNNh.  +MMMMMMMMMMMMMMMMMMMMMy                
 mmmmMMNo  +MMMMMMMMMMMMMMMMMMMMMy                
    -MMh   oMMMMMMMMMMMMMMMMMMMMMy                
    '::+hhhmMMMMMMMMMMMMMMMMMMMMMy                
       -hhhhhhhhhhhhhhhhhhhhhhhhhs::.             
                                 NNo'          
                                 --oddd:         
                                    :yyyo///  ///
                                        yMMh.  mMM
                                        /sso+++sss
                                           hMMM.  

        `

        function loadGame(url:string){
          /*
          * Load function to get data (HTML, CSS, JS) from express server where the games are stored
          * Simple ajax call, and add the return data to game window
          **/
            $.ajax({
                type: 'GET',
                url: url,
                
                cache: false
            }).done((dataReturn) => {
                //const data = JSON.parse(dataReturn)
              //console.log('Data: ', dataReturn)
              
            $('#gameWindow').html(dataReturn)
            $('#gameWindow').append('<a href="#" id="btnOverlayClose">Luk vindue</a>')
            $("#gameWindow a").on('click', () => {$('#overlay').hide()})
            $('#overlay').show()
                
            }).fail((xhrErr) => {
                return 'Error: ' + xhrErr
            })
        }
        
        $('#terminalGame').terminal(function(command, term) {
            if (command !== '') {
            let cmdArg = $.terminal.parse_command(command)
                    //console.log(cmdArg)

                switch(cmdArg.name){
                  case 'help':
                    term.echo(help)
                    break
                  case '?':
                    term.echo(help)
                    break
                  case 'clear': 
                    term.clear()
                    break
                  
                 case 'games':
                  //Output message to terminal with info about games
                  term.echo(`
        *****************************************
        *                                       *
        *         GAMES AVAILABLE TO PLAY       *
        *                                       *
        *****************************************
        # Asteroids
        # Digger
        
        - Load a game with command "GAMES LOAD [NAME]
                  `)
                    if(cmdArg.args[0] === 'load'){
                      //if the arg. after games if load, echo info
                      term.echo('Load command need 1 more aurgument.')
                        if(cmdArg.args[1] !== undefined){
                          //if 2 arg. after games command is set check if the game is on the list
                          
                          term.echo('Loading game ' + cmdArg.args[1])
                          cmdArg.args[1].toLowerCase() === 'asteroids' ? loadGame('http://localhost:4000/games/asteroids') : ''
                          cmdArg.args[1].toLowerCase() === 'digger' ? loadGame('http://localhost:4000/games/digger') : ''
                        }
                    }
                    break
                  case 'goto':
                    if(cmdArg.args[0] !== undefined){
                      window.location.href = '/' + cmdArg.args[0]
                    }else{
                      term.echo('Argument missing. command syntax GOTO [PAGE] | ex. GOTO HIME')
                    }
                    break
                  case 'pixelman':
                    term.echo(pixelman)
                    break
                  default:
                    //If none of the above commands where trigged, echo out that the command is not found in the system
                    term.echo('Unknown commando. Use "help"')
                    console.log($.terminal.parse_command(command))
                    break
                }
            }
        }, {
            greetings: greeting,
            name: 'playIt_gameConsole',
            height: 450,
            prompt: 'gamer@PlayIt# '
        })
    })
  }

}
