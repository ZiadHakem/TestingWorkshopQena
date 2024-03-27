const { capitalizeTextFirstChar, createArray, random, stringReverse } = require("../lab1")

describe("Test The First Character is Capital", () => {
    it("String Return ?", () => { expect(typeof capitalizeTextFirstChar("zyad mohamed")).toBe("string")
    })
    it("Capital ?", () => { expect(capitalizeTextFirstChar("zyad mohamed")).toBe("Zyad Mohamed")
    })
    it("don't take numbers", () => { expect(() => { capitalizeTextFirstChar(23432) }).toThrowError("parameter should be string")
    })
})


describe("test create array fun", () => {
    it("type of array", () => { expect(createArray(3)).toEqual(jasmine.any(Array))
    })
    it("Size", () => { expect(createArray(2)).toHaveSize(2)
    })
    it("Number not in array", () => { expect(createArray(3)).not.toContain(3)
    })
})


describe("Test Random Function", () => {
    it("type of: if (return number)", () => { expect(typeof random(3)).toBe("number")
    })
    it("functionality", () => {
                        let x = random(5, 7)
                        expect(x).toBeGreaterThanOrEqual(5)
                        expect(x).toBeLessThanOrEqual(7)
    })
    it("need 2 parameters", () => { expect(random(3)).toEqual(NaN)
    })
})


describe("test text reversing fun", () => {
    it("type of return is string", () => { expect(typeof stringReverse("asdsa sadsd sdad")).toBe("string")
    })
    it("reversing", () => { expect(stringReverse("hello")).toBe("olleh")
    })
    it("the same length", () => { expect(stringReverse("zyad")).toHaveSize("zyad".length)
    })
})