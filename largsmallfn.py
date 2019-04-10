a=[]
num=int(input("Enter the limit:"))
for n in range(num):
	no=int(input("Enter the numbers:"))
	a.append(no)
print ("Maximum number is:",max(a))
print ("Minimum number is:",min(a))
