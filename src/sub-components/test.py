n=input()
s=input()
c=0

for i in range(0,len(n)):
    
    if n[i]==s[i]:
        pass
    elif n[i]=='?' and s[i].isalpha():
        pass
    elif n[i].isalpha() and s[i]=='?':
        pass
    else:
        c=c+1

m=0
for i in range(0,len(n)):
    if n[i]!=s[i]:
        m=m+1
    elif n[i].isalpha() and s[i]=='?':
        m=m+1
    elif n[i]=='?'and s[i].isalpha():
        m=m+1
    elif n[i]=='?'and s[i]=='?':
        m=m+1
    elif n[i].isalpha() and s[i].isalpha():
        if n[i]==s[i]:
            pass

print(c,m)