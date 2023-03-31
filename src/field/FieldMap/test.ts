import FieldMap from "./index";

describe("FieldMap", () => {
    it("should work correctly with different object links but similar content of coordinate value", () => {
        const testCoordinate = { x: 1, y: 2 };
        const fieldMap = new FieldMap();
        fieldMap.set(testCoordinate, false);

        expect(fieldMap.get({ ...testCoordinate })).toEqual(false);
    });
});
