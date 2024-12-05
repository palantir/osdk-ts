Currently, we only have one benchmark.

```
cd tests/primary
pnpm exec turbo bundle
pnpm run benchmark
cat build/benchmark/results.json
```

example output:

```
{
  "tests": {
    "import.createClient.esbuild.js": {
      "runs": [
        {
          "type": "result",
          "time": 14.41,
          "heapUsed": 1362704,
          "rss": 1884160
        },
        ...,
        {
          "type": "result",
          "time": 14.66,
          "heapUsed": 1362680,
          "rss": 2392064
        }
      ],
      "stats": {
        "time": {
          "std": 0.6165480967090525,
          "mean": 14.905333333333335,
          "min": 14.41,
          "max": 16.7
        },
        "heapUsed": {
          "std": 41.845429857990474,
          "mean": 1362665.6,
          "min": 1362632,
          "max": 1362752
        },
        "rss": {
          "std": 243298.56906823127,
          "mean": 2170333.8666666667,
          "min": 1818624,
          "max": 2506752
        }
      }
    },
    "import.createClient.js": {
      "runs": [
        {
          "type": "result",
          "time": 36.3,
          "heapUsed": 2090960,
          "rss": 5619712
        },
        ...,
        {
          "type": "result",
          "time": 38.81,
          "heapUsed": 2094352,
          "rss": 5996544
        }
      ],
      "stats": {
        "time": {
          "std": 1.561981078274923,
          "mean": 38.35466666666668,
          "min": 36.3,
          "max": 41.92
        },
        "heapUsed": {
          "std": 1157.6154494860928,
          "mean": 2092049.0666666667,
          "min": 2090744,
          "max": 2094352
        },
        "rss": {
          "std": 326074.07364803203,
          "mean": 5936469.333333333,
          "min": 5505024,
          "max": 6602752
        }
      }
    },
    "noop.js": {
      "runs": [
        {
          "type": "result",
          "time": 0.01,
          "heapUsed": 1368,
          "rss": 81920
        },
        ...,
        {
          "type": "result",
          "time": 0.01,
          "heapUsed": 1368,
          "rss": 49152
        }
      ],
      "stats": {
        "time": {
          "std": 0.012220201853215573,
          "mean": 0.018000000000000002,
          "min": 0.01,
          "max": 0.06
        },
        "heapUsed": {
          "std": 0,
          "mean": 1368,
          "min": 1368,
          "max": 1368
        },
        "rss": {
          "std": 50410.207135724675,
          "mean": 32768,
          "min": 0,
          "max": 180224
        }
      }
    }
  },
  "sizes": {
    "esbuild/bundle.js": 128543
  }
}
```