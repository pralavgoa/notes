class Life:
	@staticmethod
	def run():
		TODAY="Monday"
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
		Life.checkIfWeekend(TODAY)

	@staticmethod
	def checkIfWeekend(today):
		IS_WEEKEND = {"Saturday":True, "Sunday":True}
		if today in IS_WEEKEND:
			if IS_WEEKEND[today] == True:
				print("Today is a weekend")
		else:
			print("Today is a weekday")

Life.run()
