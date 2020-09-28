var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
var token = "6a163a6866643fcb8a9c1daac2b42fef8d633d74";

    $("#address").suggestions({
        token: "6a163a6866643fcb8a9c1daac2b42fef8d633d74",
        type: "ADDRESS",
        constraints: {
            locations: { country: "*" },
          },
          language: "ru",
    });
