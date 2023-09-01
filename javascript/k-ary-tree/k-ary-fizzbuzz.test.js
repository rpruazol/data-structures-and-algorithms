const { kAryFizzbuzz, Node } = require('./k-ary-fizzbuzz'); // Adjust the path

describe('FizzBuzz Tree', () => {
    test('Transforms tree values correctly', () => {
        const originalRoot = new Node(1);
        originalRoot.children = [
            new Node(2),
            new Node(3),
            new Node(4),
            new Node(5),
            new Node(6)
        ];

        const fizzBuzzRoot = kAryFizzbuzz(originalRoot);

        // Define a helper function to traverse the tree and collect values
        function collectValues(node) {
            if (!node) {
                return [];
            }
            const values = [node.value];
            for (const child of node.children) {
                values.push(...collectValues(child));
            }
            return values;
        }

        const transformedValues = collectValues(fizzBuzzRoot);
        const expectedValues = ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz'];
        expect(transformedValues).toEqual(expectedValues);
    });
});