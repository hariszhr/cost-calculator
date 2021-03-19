const { expect } = require('@jest/globals')
const app = require('./cost-calculator2')

test('test provided example1', ()=>{
    expect(app.calculate(500, 1.00, "ON")).toBe(565.00)
})

test('test provided example2', ()=>{
    expect(app.calculate(3600, 2.25, "MI")).toBe(7984.98)
})

test('test provide wrong province name', ()=>{
    expect(()=>{app.calculate(5, 2.25, "MIM")}).toThrowError(TypeError)
})

test('test provide number instead of province name', ()=>{
    expect(()=>{app.calculate(5, 2.25, 12345)}).toThrowError(TypeError)
})

test('test provide text instead of num_of_items', ()=>{
    expect(()=>{app.calculate("hello", 2.25, "MI")}).toThrowError(TypeError)
})

test('test provide text instead of cost_per_item', ()=>{
    expect(()=>{app.calculate(5, "def", "MI")}).toThrowError(TypeError)
})

test('test provide all three arguments wrong type', ()=>{
    expect(()=>{app.calculate("abc", "def", [1,2])}).toThrowError(TypeError)
})

test('test negative values - 1', ()=>{
    expect(()=>{app.calculate(-1.0, 2.2, "ON")}).toThrowError(TypeError)
})

test('test negative values - 2', ()=>{
    expect(()=>{app.calculate(500, -10000, "ON")}).toThrowError(TypeError)
})

test('test negative values - 3', ()=>{
    expect(()=>{app.calculate(-10000.9087333, -190034324.23423432, "ON")}).toThrowError(TypeError)
})


test('test very large numbers - 1', ()=>{
    expect(()=>{app.calculate(10000000000000000000000000000000, 2.50, "ON")}).toThrowError(TypeError)
})

test('test very large numbers - 2', ()=>{
    expect(()=>{app.calculate(100, 1000000000000000000000000000000, "ON")}).toThrowError(TypeError)
})

test('test very large province name text', ()=>{
    expect(()=>{app.calculate(-10000.9087333, -190034324.23423432, "sadadlnaioasndoasndoasdnoasdasidnasdoisandoasndassa")}).toThrowError(TypeError)
})

test('test special chars in province text', ()=>{
    expect(()=>{app.calculate(100.0, 1.0, "的是わたし")}).toThrowError(TypeError)
})

// test('test try updating discount rate map', ()=>{
//     expect().toThrowError(TypeError)
// })
// test('test provide wrong province name', ()=>{
//     expect(app.calculate("hello", 2.25, 123)).toThrow(TypeError);
// })


