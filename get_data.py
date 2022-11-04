import config
import csv
from binance.client import Client

client = Client(config.API_KEY, config.SECRET_KEY)

#prices = client.get_all_tickers()

#print(prices)

candles = client.get_klines(symbol='BTCUSDT', interval=Client.KLINE_INTERVAL_15MINUTE)

csvfile = open('1dayago.csv', 'w', newline='')
candlestick_writer = csv.writer(csvfile, delimiter=',')                          
    

#for candlestick in candles:
    #print(candlestick)

    #candlestick_writer.writerow(candlestick)

#print(len(candles))

candlesticks = client.get_historical_klines("BTCUSDT", Client.KLINE_INTERVAL_5MINUTE, "1 day ago UTC")

for candlestick in candlesticks:
    candlestick_writer.writerow(candlestick)

csvfile.close()