// This file is loaded first, when the data is fetched with axios is not used any more

const mockData = {
  "bpi": {
    "2019-01-01": 3869.47,
    "2019-01-02": 3941.2167,
    "2019-01-03": 3832.155,
    "2019-01-04": 3863.6267,
    "2019-01-05": 3835.5983,
    "2019-01-06": 4083.165,
    "2019-01-07": 4041.4583,
    "2019-01-08": 4029.9917,
    "2019-01-09": 4028.2917,
    "2019-01-10": 3669.5825,
    "2019-01-11": 3660.9583,
    "2019-01-12": 3658.6725,
    "2019-01-13": 3540.1583,
    "2019-01-14": 3706.1725,
    "2019-01-15": 3604.1333,
    "2019-01-16": 3630.2567,
    "2019-01-17": 3665.41,
    "2019-01-18": 3630.785,
    "2019-01-19": 3708.9633,
    "2019-01-20": 3552.8933,
    "2019-01-21": 3548.69,
    "2019-01-22": 3598.2183,
    "2019-01-23": 3576.01,
    "2019-01-24": 3598.2717,
    "2019-01-25": 3582.2,
    "2019-01-26": 3580.775,
    "2019-01-27": 3553.0133,
    "2019-01-28": 3454.48,
    "2019-01-29": 3421.12,
    "2019-01-30": 3482.3,
    "2019-01-31": 3441.985,
    "2019-02-01": 3468.2517,
    "2019-02-02": 3466.2175,
    "2019-02-03": 3443.1667,
    "2019-02-04": 3451.115,
    "2019-02-05": 3472.035,
    "2019-02-06": 3393.6717,
    "2019-02-07": 3385.97,
    "2019-02-08": 3657.4017,
    "2019-02-09": 3654.3,
    "2019-02-10": 3681.0517,
    "2019-02-11": 3621.0283,
    "2019-02-12": 3622.7133,
    "2019-02-13": 3605.3133,
    "2019-02-14": 3592.91,
    "2019-02-15": 3601.0583,
    "2019-02-16": 3611.975,
    "2019-02-17": 3661.7417,
    "2019-02-18": 3905.7433,
    "2019-02-19": 3922.0983,
    "2019-02-20": 3976.79,
    "2019-02-21": 3936.34,
    "2019-02-22": 3979.995,
    "2019-02-23": 4145.4383,
    "2019-02-24": 3767.305,
    "2019-02-25": 3852.16,
    "2019-02-26": 3830.6733,
    "2019-02-27": 3832.26,
    "2019-02-28": 3826.0233,
    "2019-03-01": 3850.0717,
    "2019-03-02": 3845.1133,
    "2019-03-03": 3820.1467,
    "2019-03-04": 3732.5733,
    "2019-03-05": 3880.8,
    "2019-03-06": 3884.9983,
    "2019-03-07": 3891.7317,
    "2019-03-08": 3875.47,
    "2019-03-09": 3950.61,
    "2019-03-10": 3932.0433,
    "2019-03-11": 3882.615,
    "2019-03-12": 3891.3467,
    "2019-03-13": 3882.8017,
    "2019-03-14": 3885.9883,
    "2019-03-15": 3935.415,
    "2019-03-16": 4022.5383,
    "2019-03-17": 3999.6617,
    "2019-03-18": 4004.8117,
    "2019-03-19": 4033.7183,
    "2019-03-20": 4064.0867,
    "2019-03-21": 3999.3233,
    "2019-03-22": 4003.55,
    "2019-03-23": 4009.4683,
    "2019-03-24": 3994.0283,
    "2019-03-25": 3929.3083,
    "2019-03-26": 3945.325,
    "2019-03-27": 4051.9033,
    "2019-03-28": 4039.0017,
    "2019-03-29": 4119.0183,
    "2019-03-30": 4117.8483,
    "2019-03-31": 4117.51,
    "2019-04-01": 4156.39,
    "2019-04-02": 4908.6883,
    "2019-04-03": 4977.0017,
    "2019-04-04": 4917.8467,
    "2019-04-05": 5053.72,
    "2019-04-06": 5058.34,
    "2019-04-07": 5208.02,
    "2019-04-08": 5296.9317,
    "2019-04-09": 5196.985,
    "2019-04-10": 5319.705,
    "2019-04-11": 5046.865,
    "2019-04-12": 5088.7483,
    "2019-04-13": 5077.7183,
    "2019-04-14": 5172.4517,
    "2019-04-15": 5033.095,
    "2019-04-16": 5214.55,
    "2019-04-17": 5237.38,
    "2019-04-18": 5290.7433,
    "2019-04-19": 5297.5667,
    "2019-04-20": 5326.9383,
    "2019-04-21": 5305.9967,
    "2019-04-22": 5396.5783,
    "2019-04-23": 5540.1117,
    "2019-04-24": 5454.4483,
    "2019-04-25": 5160.64,
    "2019-04-26": 5241.025,
    "2019-04-27": 5247.24,
    "2019-04-28": 5266.3467,
    "2019-04-29": 5259.6267,
    "2019-04-30": 5378.6183,
    "2019-05-01": 5423.66,
    "2019-05-02": 5503.3017,
    "2019-05-03": 5775.8817,
    "2019-05-04": 5876.01,
    "2019-05-05": 5823.795,
    "2019-05-06": 5799.6167,
    "2019-05-07": 5861.5917,
    "2019-05-08": 6029.08,
    "2019-05-09": 6187.28,
    "2019-05-10": 6375.5617,
    "2019-05-11": 7184.64,
    "2019-05-12": 6979.1317,
    "2019-05-13": 7801.2967,
    "2019-05-14": 7978.01,
    "2019-05-15": 8180.425,
    "2019-05-16": 7875.1633,
    "2019-05-17": 7376.8533,
    "2019-05-18": 7259.5067,
    "2019-05-19": 8189.3767,
    "2019-05-20": 7995.965,
    "2019-05-21": 7945.045,
    "2019-05-22": 7623.5133,
    "2019-05-23": 7875.9967,
    "2019-05-24": 7998.22,
    "2019-05-25": 8063.9483,
    "2019-05-26": 8738.18,
    "2019-05-27": 8783.0683,
    "2019-05-28": 8724.455,
    "2019-05-29": 8670.265,
    "2019-05-30": 8273.0117,
    "2019-05-31": 8544.97,
    "2019-06-01": 8553.1267,
    "2019-06-02": 8737.3617,
    "2019-06-03": 8105.13,
    "2019-06-04": 7677.3983,
    "2019-06-05": 7785.985,
    "2019-06-06": 7806.715,
    "2019-06-07": 8001.2767,
    "2019-06-08": 7928.5417,
    "2019-06-09": 7634.6483,
    "2019-06-10": 8016.6917,
    "2019-06-11": 7913.8933,
    "2019-06-12": 8173.3567,
    "2019-06-13": 8232.7533,
    "2019-06-14": 8693.765,
    "2019-06-15": 8857.0783,
    "2019-06-16": 8976.5367,
    "2019-06-17": 9340.25,
    "2019-06-18": 9083.8167,
    "2019-06-19": 9288.5367,
    "2019-06-20": 9539.7883,
    "2019-06-21": 10232.9167,
    "2019-06-22": 10695.3683,
    "2019-06-23": 10860.8233,
    "2019-06-24": 11041.8533,
    "2019-06-25": 11752.6783,
    "2019-06-26": 12907.135,
    "2019-06-27": 11170.885,
    "2019-06-28": 12356.2783,
    "2019-06-29": 11882.5083,
    "2019-06-30": 10769.4217,
    "2019-07-01": 10599.3267,
    "2019-07-02": 10850.4,
    "2019-07-03": 11976.6317,
    "2019-07-04": 11151.9183,
    "2019-07-05": 10996.4267,
    "2019-07-06": 11252.4533,
    "2019-07-07": 11476.4083,
    "2019-07-08": 12294.6567,
    "2019-07-09": 12563.215,
    "2019-07-10": 12096.6533,
    "2019-07-11": 11345.7717,
    "2019-07-12": 11789.3367,
    "2019-07-13": 11350.6283,
    "2019-07-14": 10194.21,
    "2019-07-15": 10842.4517,
    "2019-07-16": 9422.4517,
    "2019-07-17": 9692.7067,
    "2019-07-18": 10636.91,
    "2019-07-19": 10526.3917,
    "2019-07-20": 10754.29,
    "2019-07-21": 10586.2433,
    "2019-07-22": 10325.825,
    "2019-07-23": 9849.82,
    "2019-07-24": 9771.5667,
    "2019-07-25": 9882.1,
    "2019-07-26": 9844.5583,
    "2019-07-27": 9466.2717,
    "2019-07-28": 9527.7717,
    "2019-07-29": 9501.0317,
    "2019-07-30": 9588.6033,
    "2019-07-31": 10090.535,
    "2019-08-01": 10405.2067,
    "2019-08-02": 10526.2167,
    "2019-08-03": 10818.6983,
    "2019-08-04": 10979.3133,
    "2019-08-05": 11802.0167,
    "2019-08-06": 11467.1983,
    "2019-08-07": 11981.1517,
    "2019-08-08": 12010.8983,
    "2019-08-09": 11868.7533,
    "2019-08-10": 11289.49,
    "2019-08-11": 11561.71,
    "2019-08-12": 11396.5433,
    "2019-08-13": 10875.3483,
    "2019-08-14": 10036.1867,
    "2019-08-15": 10307.895,
    "2019-08-16": 10358.7683,
    "2019-08-17": 10220.6033,
    "2019-08-18": 10321.7317,
    "2019-08-19": 10924.965,
    "2019-08-20": 10776.9083,
    "2019-08-21": 10133.3483,
    "2019-08-22": 10113.2,
    "2019-08-23": 10406.7433,
    "2019-08-24": 10147.7633,
    "2019-08-25": 10138.6683,
    "2019-08-26": 10365.1783,
    "2019-08-27": 10177.9267,
    "2019-08-28": 9723.805,
    "2019-08-29": 9500.6367,
    "2019-08-30": 9588.0717,
    "2019-08-31": 9608.6467,
    "2019-09-01": 9773.3417,
    "2019-09-02": 10386.915,
    "2019-09-03": 10634.6433,
    "2019-09-04": 10583.6617,
    "2019-09-05": 10580.27,
    "2019-09-06": 10308.0367,
    "2019-09-07": 10488.41,
    "2019-09-08": 10404.6433,
    "2019-09-09": 10314.9717,
    "2019-09-10": 10107.7217,
    "2019-09-11": 10164.0867,
    "2019-09-12": 10433.5567,
    "2019-09-13": 10372.5533,
    "2019-09-14": 10365.4467,
    "2019-09-15": 10312.6683,
    "2019-09-16": 10271.015,
    "2019-09-17": 10199.905,
    "2019-09-18": 10165.3267,
    "2019-09-19": 10282.6567,
    "2019-09-20": 10179.955,
    "2019-09-21": 9989.755,
    "2019-09-22": 10036.7067,
    "2019-09-23": 9694.5067,
    "2019-09-24": 8538.105,
    "2019-09-25": 8449.9167,
    "2019-09-26": 8075.9667,
    "2019-09-27": 8200.2833,
    "2019-09-28": 8221.3783,
    "2019-09-29": 8067.2683,
    "2019-09-30": 8316.8767,
    "2019-10-01": 8326.58,
    "2019-10-02": 8395.2183,
    "2019-10-03": 8246.5417,
    "2019-10-04": 8161.3483,
    "2019-10-05": 8153.9767,
    "2019-10-06": 7868.34,
    "2019-10-07": 8217.6333,
    "2019-10-08": 8191.0717,
    "2019-10-09": 8596.4533,
    "2019-10-10": 8590.3733,
    "2019-10-11": 8272.395,
    "2019-10-12": 8311.8117,
    "2019-10-13": 8290.9717,
    "2019-10-14": 8362.0733,
    "2019-10-15": 8171.27,
    "2019-10-16": 8002.8483,
    "2019-10-17": 8081.3133,
    "2019-10-18": 7966.2667,
    "2019-10-19": 7974.0883,
    "2019-10-20": 8242.8633,
    "2019-10-21": 8221.3733,
    "2019-10-22": 8034.545,
    "2019-10-23": 7478.905,
    "2019-10-24": 7435.8467,
    "2019-10-25": 8671.5083,
    "2019-10-26": 9261.9983,
    "2019-10-27": 9555.305,
    "2019-10-28": 9223.2067,
    "2019-10-29": 9437.585,
    "2019-10-30": 9170.285,
    "2019-10-31": 9164.365,
    "2019-11-01": 9265.4317,
    "2019-11-02": 9312.36,
    "2019-11-03": 9211.6,
    "2019-11-04": 9424.185,
    "2019-11-05": 9326.6033,
    "2019-11-06": 9345.69,
    "2019-11-07": 9205.8083,
    "2019-11-08": 8770.3617,
    "2019-11-09": 8813.3567,
    "2019-11-10": 9044.7817,
    "2019-11-11": 8726.36,
    "2019-11-12": 8820.2333,
    "2019-11-13": 8775.1017,
    "2019-11-14": 8639.1833,
    "2019-11-15": 8471.2783,
    "2019-11-16": 8496.6,
    "2019-11-17": 8516.08,
    "2019-11-18": 8191.0667,
    "2019-11-19": 8136.2767,
    "2019-11-20": 8098.3183,
    "2019-11-21": 7633.95,
    "2019-11-22": 7292.74,
    "2019-11-23": 7335.3217,
    "2019-11-24": 6924.8483,
    "2019-11-25": 7136.7617,
    "2019-11-26": 7175.5267,
    "2019-11-27": 7531.8283,
    "2019-11-28": 7442.2967,
    "2019-11-29": 7770.54,
    "2019-11-30": 7571.4083,
    "2019-12-01": 7420.8417,
    "2019-12-02": 7320.8167,
    "2019-12-03": 7312.8833,
    "2019-12-04": 7211.35,
    "2019-12-05": 7404.4033,
    "2019-12-06": 7556.8817,
    "2019-12-07": 7517.2,
    "2019-12-08": 7539.52,
    "2019-12-09": 7351.3367,
    "2019-12-10": 7232.8433,
    "2019-12-11": 7213.4767,
    "2019-12-12": 7199.51,
    "2019-12-13": 7263.045,
    "2019-12-14": 7077.1517,
    "2019-12-15": 7125.8167,
    "2019-12-16": 6893.2367,
    "2019-12-17": 6633.3717,
    "2019-12-18": 7299.7367,
    "2019-12-19": 7161.965,
    "2019-12-20": 7198.785,
    "2019-12-21": 7150.9133,
    "2019-12-22": 7520.0433,
    "2019-12-23": 7324.495,
    "2019-12-24": 7261.025,
    "2019-12-25": 7204.0217,
    "2019-12-26": 7205.8033,
    "2019-12-27": 7259.67,
    "2019-12-28": 7313.6933,
    "2019-12-29": 7397.535,
    "2019-12-30": 7234.615,
    "2019-12-31": 7182.4017
  },
  "disclaimer": "This data was produced from the CoinDesk Bitcoin Price Index. BPI value data returned as USD.",
  "time": {
    "updated": "Jan 1, 2020 00:03:00 UTC",
    "updatedISO": "2020-01-01T00:03:00+00:00"
  }
}

const fetchData = (data = mockData) => {
  let arrOfData = []

  Object.entries(data.bpi).map((key) => {

    arrOfData.push(
      {
        date: key[0],
        price: key[1],
        name: 'BTC'
      }
    )
  });

  return arrOfData
}

const updateData = (data = {}) => {
  let newData = []

  Object.entries(data.bpi).map((key) => {

    newData.push(
      {
        date: key[0],
        price: key[1],
        name: 'BTC'
      }
    )
  })

  return newData
}

const mockTableData = fetchData()

export { mockData, mockTableData, updateData };

