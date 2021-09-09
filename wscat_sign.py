import socket
import base64
import http.client
import json
import os
import sys
import logging
import time
import urllib.parse
logging.basicConfig(level=logging.INFO,format='%(message)s')
logger=logging.getLogger(__name__)
try:
 import requests
except Exception as e:
 logger.info(str(e)+"\n缺少requests模块, 请执行命令：pip3 install requests\n")
 sys.exit(1)
os.environ['no_proxy']='*'
requests.packages.urllib3.disable_warnings()
ver=905
def get_sign():
 sign_bool=False
 #url=str(base64.b64decode('aHR0cHM6Ly9oZWxsb2Rucy5jb2RpbmcubmV0L3Avc2lnbi9kL2pzaWduL2dpdC9yYXcvbWFzdGVyL3NpZ24=').decode())
 url='https://hellodns.coding.net/p/sign/d/jsign/git/raw/master/sign'
 for i in range(3):
  try:
   res=requests.get(url=url,verify=False,timeout=20)
  except requests.exceptions.ConnectTimeout:
   logger.info("\n获取Sign超时, 正在重试!"+str(i))
   time.sleep(1)
  except requests.exceptions.ReadTimeout:
   logger.info("\n获取Sign超时, 正在重试!"+str(i))
   time.sleep(1)
  except Exception as err:
   logger.info(str(err)+"\n未知错误, 退出脚本!")
   sys.exit(1)
  else:
   sign_bool=True
   break
 if sign_bool:
  sign_list=json.loads(res.text)
  print(sign_list)
  svv=sign_list['sv']
  stt=sign_list['st']
  suid=sign_list['uuid']
  jign=sign_list['sign']
  return svv,stt,suid,jign
 else:
  logger.info("\nSign_Bool值错误, 退出脚本!")

get_sign()
