import sys
import requests
import re
import os
import time

headers = {'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36'}
name = input('您要爬取什么图片')
num = 0
num_1 = 0
num_2 = 0
x = sys.argv[1]
fn=open(os.path.join(os.getcwd(),'fn.txt'),'w')
list_1 = []
for i in range(int(x)):
    name_1 = os.getcwd()
    name_2 = os.path.join(name_1,'pics')
    url = 'https://image.baidu.com/search/flip?tn=baiduimage&ie=utf-8&word=' + name + '&pn=' + str(i * 30)
    # url = 'https://image.baidu.com/search/flip?tn=baiduimage&ps=1&ct=201326592&lm=-1&cl=2&nc=1&ie=utf-8&dyTabStr=MCwzLDEsNiwyLDQsNSw4LDcsOQ%3D%3D&word=%E5%B9%BF%E5%91%8A%E5%9B%BE%E7%89%87'
    res = requests.get(url,headers=headers)
    htlm_1 = res.content.decode()
    a = re.findall('"objURL":"(.*?)",',htlm_1)
    if not os.path.exists(name_2):
        os.makedirs(name_2)
    for b in a:
        try:
            b_1 = re.findall('https:(.*?)&',b)

            b_2 = ''.join(b_1)
            if b_2 not in list_1:

                img = requests.get(b)
                if img.content==b'GIF89a\x04\x00\x08\x00\x91\x02\x00\xff\xff\xff\x00\x00\x00\xff\xff\xff\x00\x00\x00!\xf9\x04\x01\x00\x00\x02\x00,\x00\x00\x00\x00\x04\x00\x08\x00\x00\x02\x05\x94\x8f\xa9\x8b\x05\x00;':
                    continue
                num = num +1
                f = open(os.path.join(name_1,'pics',str(num)+'.jpg'),'ab')
                print('---------正在下载第'+str(num)+'张图片----------')
                f.write(img.content)
                f.close()
                list_1.append(b_2)
            elif b_2 in list_1:
                num_1 = num_1 + 1
                continue
        except Exception as e:
            print(e)
            print('---------第'+str(num)+'张图片无法下载----------')
            num_2 = num_2 +1
            continue
print('下载完成,总共下载{}张,成功下载:{}张,重复下载:{}张,下载失败:{}张'.format(num+num_1+num_2,num,num_1,num_2))
fn.write(str(num))