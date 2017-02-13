class Life:
	@staticmethod
	def run():
		DAYS = ("Mon","Tue","Wed","Thu","Fri")
		BIRTHDAY = ("1955","01","01")
		print("This is my life")
		print("Today is " + DAYS[0])

		for i in range(0,3):
			if i==0 :
				print("Year is "+ BIRTHDAY[i])
			elif i==1:
				print("Month is "+ BIRTHDAY[i])
			elif i==2:
				print("Day is "+ BIRTHDAY[i])

Life.run()