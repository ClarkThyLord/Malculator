export default {

    trapezoide: function (a, b, n, f) {
        let res = f(a) + f(b)
        let h = (b - a) / n
        let x = a

        for (var i = 1; i < n; i++) {
            x += h
            res += (2 * (f(x)))
        }
        return (h / 2) * res
    },

    simpson_1_3: function (a, b, n, f) {
        let res = f(a) + f(b)
        let h = (b - a) / n

        for (var i = 1; i < n; i++) {
            let x = a + i * h

            if (i % 2 == 0) {
                res += (2 * f(x))
            } else {
                res += (4 * f((x)))
            }
        }
        return (h / 3) * res
    },

    simpson_3_8: function (a, b, n, f) {
        let res = f(a) + f(b)
        let h = (b - a) / n

        for (var i = 1; i < n; i++) {
            let x = a + i * h

            if (i % 3 == 0) {
                res += (2 * f(x))
            } else {
                res += (3 * f((x)))
            }
        }
        return ((3 * h) / 8) * res
    }

}