// fahrenheit to celsius
// [23, 140 ,212, 41] => [-5, 60, 100, 5]
// formula   (32°F − 32) × 5/9 = 0°C

const fahrenheit = [23, 140, 212, 41];

export function getCelsius(fahrenheitNum) {
    return fahrenheit.map(item => (item - 32) * 5 / 9)
}
