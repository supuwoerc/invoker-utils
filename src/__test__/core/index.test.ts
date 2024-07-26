import {
    getQueryParam,
    getQueryParams,
    generateUUID,
    getCookie,
    setCookie,
    clearAllCookie,
    uniq,
    uniqueBy,
    getArrayItem,
    moveArrayItem,
    swapArrayItem,
    removeArrayItem,
    saveFile,
    ensurePrefix,
    ensureSuffix,
    flowFunc,
} from '../../core'
import { UniqueByTestDomain } from './types'

beforeAll(() => {
    delete (window as any).location
    const url = 'https://jest.mock.cn?param1=val1&param2=val2&param3=val3_1&param3=val3_2'
    window.location = new URL(url) as unknown as Location
})

describe('getQueryParams', () => {
    test('an error was thrown when the wrong url was passed', () => {
        expect(() => getQueryParams('')).toThrow(/Invalid URL/)
    })
})

describe('getQueryParam', () => {
    test('an error was thrown when the wrong url was passed', () => {
        expect(() => getQueryParam('', '')).toThrow(/Invalid URL/)
    })
    test('returns null if the query parameter does not exist', () => {
        expect(getQueryParam('nonexistence')).toBeNull()
    })
    test('returns the correct query parameter value', () => {
        expect(getQueryParam('param1')).toBe('val1')
        expect(getQueryParam('param2')).toBe('val2')
        expect(getQueryParam('param3')).toBe('val3_1')
    })
})

describe('generateUUID', () => {
    test('generates a unique string', () => {
        const uuid1 = generateUUID()
        const uuid2 = generateUUID()
        expect(generateUUID()).toEqual(expect.any(String))
        expect(uuid1 === uuid2).toBeFalsy()
    })
})

describe('getCookie', () => {
    beforeEach(() => {
        clearAllCookie()
        document.cookie = 'expectCookie=abc'
        document.cookie = 'anotherCookie=zxc'
    })
    afterEach(() => {
        clearAllCookie()
    })
    test('should return the cookie value if the cookie exists', () => {
        expect(getCookie('expectCookie')).toBe('abc')
        expect(getCookie('anotherCookie')).toBe('zxc')
    })
    test('should return null if the cookie does not exist', () => {
        expect(getCookie('nonExistentCookie')).toBeNull()
    })
})

describe('setCookie', () => {
    beforeEach(() => {
        clearAllCookie()
        jest.clearAllTimers()
    })
    afterEach(() => {
        clearAllCookie()
        jest.clearAllTimers()
    })
    test('should set the cookie with the specified name, value, and expiration', () => {
        const cookieName = 'myCookie'
        const cookieValue = 'cookieValue'
        const expirationMilliseconds = 24 * 60 * 60 * 1000 // 24 hours
        setCookie(cookieName, cookieValue, expirationMilliseconds)
        expect(document.cookie).toBe(`${cookieName}=${encodeURIComponent(cookieValue)}`)
    })
    test('should not set the cookie if expirationMilliseconds < 0', () => {
        const cookieName = 'myCookie'
        const cookieValue = 'cookieValue'
        const expirationMilliseconds = -1
        setCookie(cookieName, cookieValue, expirationMilliseconds)
        expect(document.cookie).toBe('')
    })
})

describe('clearAllCookie', () => {
    beforeEach(() => {
        clearAllCookie()
    })
    test('should clear all cookie', () => {
        const cookieName = 'myCookie'
        const cookieValue = 'cookieValue'
        const expirationMilliseconds = 60 * 60
        setCookie(cookieName, cookieValue, expirationMilliseconds)
        expect(document.cookie).toBe('myCookie=cookieValue')
        clearAllCookie()
        expect(document.cookie).toBe('')
    })
})

describe('uniq', () => {
    test('a result with no duplicate elements should be returned', () => {
        const source = [1, 2, 3, 4, 5, 5, 6, 6, 7, 7, 9, 10, 10, 8]
        expect(uniq(source)).toEqual([1, 2, 3, 4, 5, 6, 7, 9, 10, 8])
    })
    test('param should not be affected', () => {
        const source = [1, 2, 3, 4, 5, 5, 6, 6, 7, 7, 9, 10, 10, 8]
        expect(uniq(source)).toEqual([1, 2, 3, 4, 5, 6, 7, 9, 10, 8])
        expect(source).toEqual([1, 2, 3, 4, 5, 5, 6, 6, 7, 7, 9, 10, 10, 8])
    })
})

describe('uniqueBy', () => {
    const obj1 = {
        name: 'supuwoerc',
        age: 25,
    }
    const obj2 = {
        name: 'moss',
        age: 18,
    }
    const obj3 = {
        name: 'supuwoerc',
        age: 28,
    }
    const sourceArray: Array<UniqueByTestDomain> = [obj1, obj2, obj3, obj1]
    const copyArray: Array<UniqueByTestDomain> = [obj1, obj2, obj3, obj1]
    const func = (a: UniqueByTestDomain, b: UniqueByTestDomain) => {
        return a.name === b.name && a.age === b.age
    }
    test('a result with no duplicate elements should be returned', () => {
        expect(uniqueBy(sourceArray, func)).toHaveLength(3)
        expect(uniqueBy(sourceArray, func)).toEqual(
            expect.arrayContaining([
                // https://stackoverflow.com/questions/45692456/whats-the-difference-between-tomatchobject-and-objectcontaining
                expect.objectContaining(obj1),
                expect.objectContaining(obj2),
                expect.objectContaining(obj3),
            ])
        )
    })
    test('param should not be affected', () => {
        uniqueBy(sourceArray, func)
        expect(sourceArray).toEqual(copyArray)
    })
})

describe('getArrayItem', () => {
    test('should return the item at the specified positive index', () => {
        const array = [1, 2, 3, 4, 5]
        const index = 2
        const result = getArrayItem(array, index)
        expect(result).toBe(3)
    })
    test('should return undefined if the array is empty', () => {
        const array: number[] = []
        const index = 0
        const result = getArrayItem(array, index)
        expect(result).toBeUndefined()
    })
    test('should return undefined if the index is out of range', () => {
        const array = [1, 2, 3, 4, 5]
        const index = 10
        const result = getArrayItem(array, index)
        expect(result).toBeUndefined()
    })
    test('should return the item if the index < 0', () => {
        const array = [1, 2, 3, 4, 5]
        const index = -2
        const result = getArrayItem(array, index)
        expect(result).toBe(4)
    })
})

describe('moveArrayItem', () => {
    test('should move array item from old index to new index', () => {
        const arr = [1, 2, 3, 4, 5]
        moveArrayItem(arr, 1, 3)
        expect(arr).toEqual([1, 3, 4, 2, 5])
    })
    test('should handle moving item to the beginning of the array', () => {
        const arr = [1, 2, 3, 4, 5]
        moveArrayItem(arr, 4, 0)
        expect(arr).toEqual([5, 1, 2, 3, 4])
    })
    test('should handle moving item to the end of the array', () => {
        const arr = [1, 2, 3, 4, 5]
        moveArrayItem(arr, 0, 4)
        expect(arr).toEqual([2, 3, 4, 5, 1])
    })
    test('should throw an error for invalid indices', () => {
        const arr = [1, 2, 3, 4, 5]
        expect(() => moveArrayItem(arr, -1, 3)).toThrow('Invalid index')
        expect(() => moveArrayItem(arr, 2, 10)).toThrow('Invalid index')
    })
})

describe('swapArrayItem', () => {
    test('should swap array items at the specified indices', () => {
        const arr = ['a', 'b', 'c', 'd']
        swapArrayItem(arr, 1, 3)
        expect(arr).toEqual(['a', 'd', 'c', 'b'])
    })
    test('should handle swapping item with itself', () => {
        const arr = ['a', 'b', 'c', 'd']
        swapArrayItem(arr, 2, 2)
        expect(arr).toEqual(['a', 'b', 'c', 'd'])
    })
    test('should throw an error for invalid indices', () => {
        const arr = ['a', 'b', 'c', 'd']
        expect(() => swapArrayItem(arr, -1, 3)).toThrow('Invalid index')
        expect(() => swapArrayItem(arr, 2, 10)).toThrow('Invalid index')
    })
})

describe('removeArrayItem', () => {
    test('should remove the specified value from the array', () => {
        const arr = [1, 2, 3, 4]
        removeArrayItem(arr, 2)
        expect(arr).toEqual([1, 3, 4])
    })

    test('should handle removing non-existing value from the array', () => {
        const arr = [1, 2, 3, 4]
        removeArrayItem(arr, 5)
        expect(arr).toEqual([1, 2, 3, 4])
    })

    test('should handle removing value from an empty array', () => {
        const arr: number[] = []
        removeArrayItem(arr, 1)
        expect(arr).toEqual([])
    })
})

describe('saveFile', () => {
    const mockCreateElement = jest.fn(() => {
        return {
            href: '',
            download: '',
            click: jest.fn(),
        } as any
    })
    const mockCreateObjectURL = jest.fn(() => 'blobUrl')
    const mockRevokeObjectURL = jest.fn()
    const createElementOG = document.createElement.bind(document)
    const createObjectURLOG = URL.createObjectURL
    const revokeObjectURLOG = URL.revokeObjectURL
    beforeAll(() => {
        globalThis.document.createElement = mockCreateElement
        globalThis.URL.createObjectURL = mockCreateObjectURL
        globalThis.URL.revokeObjectURL = mockRevokeObjectURL
    })
    afterAll(() => {
        globalThis.document.createElement = createElementOG
        globalThis.URL.createObjectURL = createObjectURLOG
        globalThis.URL.revokeObjectURL = revokeObjectURLOG
    })
    test('should save a file', () => {
        saveFile('hello world!', 'hello.txt', 'text/plain')
        expect(mockCreateElement).toBeCalledWith('a')
        expect(mockCreateObjectURL).toBeCalledWith(expect.any(Blob))
        const mockA = mockCreateElement.mock.results[0].value
        expect(mockA.href).toBe('blobUrl')
        expect(mockA.download).toBe('hello.txt')
        expect(mockA.click).toBeCalled()
        expect(mockRevokeObjectURL).toBeCalledWith('blobUrl')
    })
})

describe('ensurePrefix', () => {
    test('should add prefix when not present', () => {
        expect(ensurePrefix('https://', 'example.com')).toBe('https://example.com')
        expect(ensurePrefix('abc', 'def')).toBe('abcdef')
    })
    test('should not modify string when prefix already present', () => {
        expect(ensurePrefix('https://', 'https://example.com')).toBe('https://example.com')
        expect(ensurePrefix('abc', 'abcdef')).toBe('abcdef')
    })
})

describe('ensureSuffix', () => {
    test('should add suffix when not present', () => {
        expect(ensureSuffix('.com', 'example')).toBe('example.com')
        expect(ensureSuffix('def', 'abc')).toBe('abcdef')
    })
    test('should not modify string when suffix already present', () => {
        expect(ensureSuffix('.com', 'example.com')).toBe('example.com')
        expect(ensureSuffix('def', 'abcdef')).toBe('abcdef')
    })
})

describe('flowFunc', () => {
    it('should correctly compose functions from left to right', () => {
        const add = (a: number, b: number) => a + b
        const square = (x: number) => x * x
        const toString = (x: number) => x.toString()

        const composedFunc = flowFunc(add, square, toString)

        expect(composedFunc(2, 3)).toBe('25')
    })

    it('should return the initial argument if no functions are provided', () => {
        const composedFunc = flowFunc()

        expect(composedFunc(42)).toBe(42)
    })

    it('should throw a TypeError if any argument is not a function', () => {
        expect(() => flowFunc(() => {}, 'not a function' as any)).toThrow(TypeError)
    })

    it('should handle a single function correctly', () => {
        const double = (x: number) => x * 2

        const composedFunc = flowFunc(double)

        expect(composedFunc(5)).toBe(10)
    })

    it('should correctly handle functions with different types of arguments', () => {
        const add = (a: number, b: number) => a + b
        const concat = (x: string, y: string) => x + y

        const composedFunc = flowFunc(add, concat)

        expect(composedFunc(1, 2, 'foo', 'bar')).toBe(NaN)
    })

    it('should maintain the context of `this`', () => {
        const obj = {
            value: 2,
            double() {
                return this.value * 2
            },
            triple() {
                return this.value * 3
            },
        }

        const composedFunc = flowFunc(obj.double, obj.triple)

        expect(composedFunc.call(obj)).toBe(6)
    })
})
