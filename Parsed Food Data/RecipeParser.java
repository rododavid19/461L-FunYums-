import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.*;
import java.util.Arrays;

import org.json.*;


public class RecipeParser {
	static String search = "pasta";
	
	static String name = "";
	static String course = "";
	static int time;
	static String imageURL = "";
	static String [] ingredients;
	static String ID = "";
	
	public static void main(String[] args) throws Exception {
		URL url = new URL("http://api.yummly.com/v1/api/recipes?_app_id=dae14cbd&_app_key=993954829f8356d54ca793f29ea9a14b&q=" + search + "&requirePictures=true");
		HttpURLConnection connection = (HttpURLConnection) url.openConnection();
		connection.connect();
		InputStream stream = connection.getInputStream();
		BufferedReader reader = new BufferedReader(new InputStreamReader(stream));
		
		StringBuilder sb = new StringBuilder();
		String line = "";

        while((line = reader.readLine()) != null){
            sb.append(line + " ");
        }
        String json = sb.toString();		
        	
        JSONObject jsonObject = new JSONObject(json);
        JSONArray matches = jsonObject.getJSONArray("matches");
        JSONObject first = matches.getJSONObject(0);
        name = first.getString("recipeName");
        course = first.getJSONObject("attributes").getJSONArray("course").getString(0);
        time = first.getInt("totalTimeInSeconds");
        imageURL = first.getJSONArray("smallImageUrls").getString(0);
        ID = first.getString("id");
        //////////////////////////////////////////////////////////////////////////////////
		url = new URL("http://api.yummly.com/v1/api/recipe/" + ID + "?_app_id=dae14cbd&_app_key=993954829f8356d54ca793f29ea9a14b");
		connection = (HttpURLConnection) url.openConnection();
		connection.connect();
		stream = connection.getInputStream();
		reader = new BufferedReader(new InputStreamReader(stream));
		
		sb = new StringBuilder();
		line = "";

        while((line = reader.readLine()) != null){
            sb.append(line + " ");
        }
        json = sb.toString();
        jsonObject = new JSONObject(json);
        JSONArray ingredientLines = jsonObject.getJSONArray("ingredientLines");
        
        
        ingredients = new String[ingredientLines.length()];
        
        
        for(int i = 0; i < ingredientLines.length(); i++) {
        	ingredients[i] = new String(ingredientLines.getString(i));
        }
        
        
        
        PrintWriter writer = new PrintWriter(name, "UTF-8");
        writer.println("Name: " + name);
        writer.println("Course: " + course);
        writer.println("time: " + time);
        writer.println("imageURL: " + imageURL);
        writer.println("Ingredients: " + Arrays.toString(ingredients));
        writer.close();
        
        System.out.println(name);
        //System.out.println(course);
        //System.out.println(time);
        //System.out.println(imageURL);
        //System.out.println(Arrays.toString(ingredients));
        System.out.println(ID);

	}

}
