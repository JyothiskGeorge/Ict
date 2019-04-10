import pickle
n=int(input("Enter the limit"))
f=open("test.dat","w")
for i in range(n):
	r=int(input("Enter the number"))
	pickle.dump(r,f)
f.close()
f=open("test.dat","r")
for i in range(n):
	print (pickle.load(f))

