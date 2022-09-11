"use strict";
class View {
    constructor() {
    }
    render(data) {
        this.renderFriends(data.users.users);
        this.renderMainUser(data.users.users[0]);
        this.renderAboutMe(data.aboutMe);
        this.renderQuote(data.quote);
        this.renderPokemon(data.pokemon);
    }
    renderFriends(users) {
        const friends = users.slice(1);
        $("#friends-container").empty();
        const source = $("#freinds-template").html();
        const templateFriends = Handlebars.compile(source);
        $("#friends-container").append(templateFriends({ friends }));
    }
    renderMainUser(mainUser) {
        $("#user-container").empty();
        const source = $("#main-user-template").html();
        const templateMainUser = Handlebars.compile(source);
        $("#user-container").append(templateMainUser({
            img: mainUser.getPicture(),
            fullName: `${mainUser.getFirstName()} ${mainUser.getLastName()}`,
            fullAddress: `${mainUser.getAddress().getCity()} ${mainUser.getAddress().getState()}`
        }));
    }
    renderAboutMe(aboutMe) {
        $("#meat-container").empty();
        const source = $("#meat-template").html();
        const templateMeat = Handlebars.compile(source);
        $("#meat-container").append(templateMeat({ aboutMe: aboutMe.aboutMe }));
    }
    renderQuote(quote) {
        $("#quote-container").empty();
        const source = $("#quote-template").html();
        const templateQuoute = Handlebars.compile(source);
        $("#quote-container").append(templateQuoute({ quote: quote.quote }));
    }
    renderPokemon(pokemon) {
        $("#pokemon-container").empty();
        const source = $("#pokemon-template").html();
        const templatePokemon = Handlebars.compile(source);
        console.log(pokemon.name, pokemon.img);
        $("#pokemon-container").append(templatePokemon({
            name: pokemon.name,
            img: pokemon.img
        }));
    }
}
