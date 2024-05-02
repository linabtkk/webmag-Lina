function getData() {
  fetch('data.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      // Traitez les données comme vous le souhaitez
      console.log('Données récupérées du fichier JSON :', data);
      /// ON ECRIT LE CODE ICI !

     function afficherTitre(){
     let nomJournal = data.journal.nomJournal;
     console.log(nomJournal);
     let nomJournalRemplacement = document.querySelector('.title-nav');
     nomJournalRemplacement.textContent = nomJournal;
     }


      function afficherArticlePrincipal() {
      let titre = data.journal.articlePrincipal.titre;
      console.log(titre);
      let titreRemplacement = document.querySelector('.titre-art');
      titreRemplacement.textContent = titre;
     let articlePrincipalTheme = data.journal.articlePrincipal.theme;
     console.log(articlePrincipalTheme);
     let articlePrincipalDate = data.journal.articlePrincipal.date;
     console.log(articlePrincipalDate);
     let articlePrincipalThemeDateRemplacement = document.querySelector('.theme-date');
     articlePrincipalThemeDateRemplacement.textContent = `${articlePrincipalTheme} - ${articlePrincipalDate}`;
     let description = data.journal.articlePrincipal.description;
      console.log(description);
      let descriptionRemplacement = document.querySelector('.description');
      descriptionRemplacement.textContent = description;
     }

     function afficherPhraseAccroche() {
     let phraseAccroche = data.journal.phraseAccroche;
     console.log(phraseAccroche);
     let phraseAccrocheRemplacement = document.querySelector('.phrase-accroche');
     phraseAccrocheRemplacement.textContent = phraseAccroche;
     }

     function afficherTexteAppelAction() {
     let texteAppelAction = data.journal.texteAppelAction;
     console.log(texteAppelAction);
     let texteAppelActionRemplacement = document.querySelector('.newsletter');
     texteAppelActionRemplacement.textContent = texteAppelAction;
     }

     function afficherListArticles () {
      const articles = document.getElementById('articles');
      let listArticles = data.journal.articles;
       console.log(articles);
       listArticles.forEach(article => {
           let image_url = article.image_url;
           let titre = article.titre;
           let date = article.date;
           let theme = article.theme
           let card = `<div class="articles">
               <img class="articles-image" src="${image_url}" alt="${titre} ">
               <div class"texte-articles">
               <ul class="ul-articles">
               <li><h2>${titre}</li>
               <li><h4>${date}• ${theme}</h4></li>
               <li><button class="button-lire"><a href="#">Lire l'article</a></button></li>
               </ul>
               </div>
           </div>`;
         articles.insertAdjacentHTML("beforeend", card );
       });
     }

     function afficherListAuteurs () {
     const auteurs = document.getElementById('prenom');
     let listAuteurs = data.journal.auteurs;
     console.log(listAuteurs);
       listAuteurs.forEach(auteur => {
           let image = auteur.image;
           let prenom = auteur.prenom;
           let typeExperience = auteur.typeExperience;
           let presentation = auteur.presentation;
           console.log(listAuteurs);
           let cardNom = `<div class="prenom">
           <img class="image-zoom" src="${image}">
           <h4>${prenom}</h4>
           <p>${typeExperience}<br>${presentation}</p>
           </div>`
         auteurs.insertAdjacentHTML("beforeend", cardNom );
       });
       }
       
     function afficherListThemes() {
       const themes = document.getElementById('themes');
      let listThemes = data.journal.themes;
       console.log(listThemes);
       listThemes.forEach(theme => {
           let nom = theme.nom;
           let description = theme.description;
           console.log(listThemes);
           let cardThemes = `<div class="themes">
        <h4>${nom}</h4>
        <p>${description}</p>
      </div>`
         themes.insertAdjacentHTML("beforeend", cardThemes );
       });
     }
       afficherTitre();
       afficherArticlePrincipal();
       afficherPhraseAccroche();
       afficherListArticles();
       afficherListAuteurs();
       afficherListThemes();
       afficherTexteAppelAction();
      /// FIN DU CODE
    })
    .catch((error) => console.error('Erreur lors de la lecture des données :', error));
}
getData();
