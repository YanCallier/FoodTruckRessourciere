var timer =  {
    data: function () {
      return {
          seconds: 0,
      }
    },
    computed:{
        timeBarWidth: function () {
            return ((1/data.timesUp)*100)*this.seconds + '%'
          }
    },
    methods:{
      tic: function(){
          this.seconds ++;
          this.seconds > data.timesUp ? this.$parent.endGame() : setTimeout(() => {this.tic()}, 1000);
      },
      timeForward: function (seconds) {
          this.seconds += seconds;
      },
      giveMeTime: function() {
          return (this.seconds);
      }
    },
}

var app = new Vue({
    el: '#app',
    components: {
        'timer': timer,
      },
    data: {
        message:"",
        waitingSpeech:null,
        messageCallBack:null,
        iaSpeeking: false,
        qcmMessage:null,
        currentScreen: "intro",
        introImage: data.introImage,
        enigmes: data.enigmes,
        currentEnigme:null,
        currentQuestion: 0,
        timesMalus:0,
        endTime:0,
        score:0,
    },
    mounted: function () {
        this.checkLandScape();
        for (enigme of this.enigmes){
            enigme.currentQuestion = 0;
        }
    },
    updated: function () {
        // console.log("yolo");
        // this.$emit('myEvent')
        // timer.options.methods.timeForward();
        
    },

    methods:{

        iaSpeech : function (speech) {
            this.message = speech.shift();
            this.waitingSpeech = speech.length > 0 ? speech : null
            this.iaSpeeking = true;
        },

        okMessage : function () {
            this.iaSpeeking = false;

            if (this.messageCallBack){
                let callBack = this.messageCallBack;
                this.messageCallBack = null
                callBack();
            }
        },

        nextMessage : function () {
            this.iaSpeech(this.waitingSpeech);
        },

        checkLandScape: function () {
            if (window.innerWidth < window.innerHeight) {
                this.iaSpeech([data.landscapeMessage]);
                return false;
            }
            return true;
        },

        letsPlay : function () {
            if (this.checkLandScape()) {
                this.currentScreen = 'board';
                this.$refs.timer.tic();
            }
        },

        // chooseEnigme : function (enigme) {
        //     this.currentScreen = "enigme";
        //     this.currentEnigme = enigme;
        //     this.displayEnigme();
        // },

        displayEnigme : function (enigme) {
            this.currentEnigme = enigme;
            this.iaSpeech([enigme.welcomeMessage, enigme.questions[enigme.currentQuestion].questionImage])
            this.currentScreen = "enigme";
        },
        
        // nextStep : function () {
        //     if (this.currentQuestion >= data.questions.length) {
        //         this.currentQuestion = 0;
        //     }
        // },

        resolve : function (answer) {
            const question = this.currentEnigme.questions[this.currentEnigme.currentQuestion];

            if (answer === question.answerImage){
                this.qcmMessage = question.qcm;
                return this.iaSpeech(["Bien joué !"]);
            }

            if (answer === question.qcm.answer){
                this.qcmMessage = null;
                this.iaSpeech(["Bien joué !", question.qcm.correction])
                return this.endEnigme();
            }

            this.iaSpeech(["Mauvaise Réponse :/", "Tu viens de perdre " + data.timesMalus  + "secondes"]);
            this.$refs.timer.timeForward(data.timesMalus);
        },

        endEnigme : function (){
            this.currentEnigme.currentQuestion ++;
            const nextQuestion = this.currentEnigme.questions[this.currentEnigme.currentQuestion];

            if (nextQuestion){
                return this.messageCallBack = () => {
                    this.iaSpeech(["Question suivante : " + nextQuestion.questionImage]);
                }
            }

            // this.currentEnigme = null;
            for (enigme of this.enigmes){
                if (enigme.currentQuestion < enigme.questions.length){
                    return this.messageCallBack = () => { this.currentScreen = "board"};
                }
            }

            this.endGame();
        },

        endGame : function (){
            const seconds = this.$refs.timer.giveMeTime();
            this.endTime = new Date(seconds * 1000).toISOString().substr(11, 8);
            this.score = Math.round(100 - ((1/data.timesUp)*100)*seconds);
            if (this.score <0) this.score = 0;
            this.currentScreen = "endGame";
        }
    },
});