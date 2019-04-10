#import numpy as np
#a=np.array([[2,4,3],[5,6,7]])
#b=np.array([[5,4,7],[3,1,8]])
#c=a+b
#print(c)

x=[1,2,3]
  [4,5,6]
  [7,8,9]

y=[4,2,1]
  [8,6,0]
  [5,3,2]

result=[0,0,0]
       [0,0,0]
       [0,0,0]


for i in range(len(x)):
	for j in range(len(x[0])):
		result[i][j]=x[i][j]+y[i][j]
		for r in result:
			print r 


