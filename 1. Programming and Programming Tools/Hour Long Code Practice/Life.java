/*
* Codify my Life
*
*/

import java.util.Map;
import java.util.Set;
import java.util.HashMap;
import java.util.HashSet;

class Life{
	private static final String TODAY = "Monday";
	private static enum DAY_OF_WEEK {Monday,Tuesday,Wednesday,Thursday,Friday};
	private static final String[] BIRTHDAY = {"1955","01","01"};
	private static final Map<String,Boolean> IS_WEEKEND= new HashMap<>();
	private static final Set<String> IS_VEGETARIAN_DAY = new HashSet<>();
	
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
		checkIfWeekend(TODAY);

		IS_VEGETARIAN_DAY.add("Monday");
		checkIfVegetarian(TODAY);
	}


	public static void checkIfWeekend(String today){
		IS_WEEKEND.put("Saturday",true);
		IS_WEEKEND.put("Sunday",true);

		if(IS_WEEKEND.containsKey(TODAY)){
			if(IS_WEEKEND.get(TODAY)){
				System.out.println("Yay today is weekend");
			}
		}else{
			System.out.println("Today is a weekday");
		}
	}

	public static void checkIfVegetarian(String today){
		if(IS_VEGETARIAN_DAY.contains(today)){
			System.out.println("Today is vegetarian");
		}else{
			System.out.println("Today is non vegetarian");
		}
	}
}