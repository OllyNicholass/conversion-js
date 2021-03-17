# Conversion Node.js console application

> A very basic 'data-driven' conversion application.

No need to edit the application to add more conversions, just need to ammend the conversions.json file.

The method of conversion this uses prevents the need to store formulas, instead each conversion type stores a comparable value, e.g. mm. And every measurement stores the value as the comparable value also. e.g. (1ft = 304.8mm)

Because of this approach, you can add countless conversion types and measurements, you just need to assign the comparable value or calculate the added measurement as the comparable value.

The structure of the JSON is as follows:

```json
[
  {
    "name": "length",
    "compareValue": "mm",
    "values": [
      ["mm", 1, 1],
      ["cm", 1, 10],
      ["feet", 1, 304.8]
    ]
  }
]
```

## License

MIT © [Olly Nicholass](https://ollynicholass.com)