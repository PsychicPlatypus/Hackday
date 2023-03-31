import { testFunction } from "./index";

describe("test describe", () => {
    it("test case", () => {
        expect(testFunction()).toEqual(1);
    });
});

//     describe("Create method", () => {
//         it("should create and return an object of ingredient details", async () => {
//             const payload = {
//                 name: "Pasta",
//                 slug: "pasta",
//                 description: "abcd make some pasta",
//             };

//             const ingredient = await ingredientDal.create(payload);
//             expect(ingredient).not.toBeNull();
//         });
//     });

//     describe("findOrCreate method", () => {
//         beforeAll(async () => {
//             await Ingredient.create({
//                 name: "Brown Rice",
//                 slug: "brown-rice",
//             });
//         });
//         it("should create a new entry when none with matching name exists", async () => {
//             const payload = {
//                 name: "Rice",
//                 slug: "rice",
//             };
//             await ingredientDal.findOrCreate(payload);
//             const ingredientsFound = await Ingredient.findAll({
//                 where: { name: "Rice" },
//             });
//             expect(ingredientsFound.length).toEqual(1);
//             //                 ld return an existing entry where one with same name exists without updating it", async () => {
//                 t payload = {
//                 name: "Brown Rice",
//                 slug: "brownrice",
// //                 description: "test",
// //             };
//             await ingredientDal.findOrCreate(payload);
// //             const ingredientsFound = await Ingredient.findAll({
// //                 where: { name: "Brown Rice" },
// //             });
// //         // //             expect(ingredientsFound.length).toEqual(1);
//             expect(ingredientsFound[0].slug).toEqual("brown-rice");
// //             expect(ingredientsFound[0].description).toBeNull();
// //         });
// //             // //                 // //             ("Update method", () => {
// //             should update a specific existing Ingredient entry", async () => {
// //             await ingredientDal.update(ingredientId, {
// //                 description: "A legume",
// //             });
// //             const ingredient = await Ingredient.findByPk(ingredientId);
//             expect(ingredient?.description).toEqual("A legume");
//         });
//     });
// });
