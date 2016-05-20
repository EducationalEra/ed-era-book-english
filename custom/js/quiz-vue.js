$(document).ready(function() {
  var initialText, correctText;

  initialText = "Me is sad because he is more clever than I.";
  correctText = "I am sad because he is more clever than me.";

  new Vue({
    el: "#pronouns",
    data: {
      text: initialText,
      correct: false
    },
    methods: {
      checkText: function () {
        var text;

        text = this.text.trim();

        this.correct = text === correctText;
      }
    }
  });
});
