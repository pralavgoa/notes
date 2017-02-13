/*
* Codify my Life
*
*/
class Life{
	private static enum DAY_OF_WEEK {Monday,Tuesday,Wednesday,Thursday,Friday};
	private static final String[] BIRTHDAY = {"1955","01","01"};
	public static void main(String[] args){
		System.out.println("This is my life");
		//Read the day of week from the args, else ask the user for the day of week
		for(int i=0;i<3;i++){
			switch(i){
				case 0: System.out.println("Year: "+BIRTHDAY[i]);
				break;
				case 1: System.out.println("Month: "+BIRTHDAY[i]);
				break;
				case 2: System.out.println("Day: "+BIRTHDAY[i]);
				break;
				default: System.out.println("Birthday is not correct");
			}
			
		}

	}
}