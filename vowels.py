a=raw_input("Enter a string")
n=0
p=0
k=0
j=0
for i in a:
	if i in "aeiouAEIOU":
		n=n+1
	elif i in "bcdfghjklmnopqrstvwxyzBCDFGHJKLMNOPQRSTVWXYZ":
		p=p+1
	elif i in " ":
		k=k+1
	elif i in "?":
		j=j+1
print("The number of vowels is",n)
print("The number of consonants is",p)
print("The number of words is",k+1)
print("The number of questionmark is",j)
	
