# Development

### Link to Deployed Website
If you used the stencil code, this is https://umkvfl6hssq7hfks.github.io/my-anime-list/

### Goal and Value of the Application
The goal of this application is to be able to sort and filter through animes as well as being able to add them to your "Favorites"; additionally, there is an aggregator athat counts up the total number of seasons across all of the shows in your "Favorites" list (ie. if you have two shows that are 1 and 3 seasons respectively, the total number in the aggregator is 4 seasons). The value of this application is that it allows you to sort through 12 animes by the genre and subcategories they fall under (which is useful for me personally as well for keeping track of my shows!).

### Usability Principles Considered
In terms of usability, I was focused on 1) having an easy to follow layout and 2) having clear buttons so that users can intuitively understand what each button is meant to do (ie. sorting/filtering versus adding to favorites).

### Organization of Components
I have three components: Aggregator.js, ShowItem.js, and App.js. Aggregator.js is my aggregator component; it shows the total number of seasons across all shows in the "Favorites" list. The ShowItem.js component is the card component that shows the show name, cover phoot, genre, subcategory, and number of seasons. Additionally, it has an "Add to Favorites"/"Remove from Favorites" button (depending upon whether or not the anime has been added to the "Favorites" list or not. Lastly, the App.js component has the filtering and sorting methods. You can filter by genre and subcategory (the filters stack so that you can filter for something like "Shonen" and "Action" -- this will result in animes that fall under both categories; if you filter by two subcategories or two genres, items that fall into both will appear -- ie. if you filter by "Shonen" and "Josei", shows that are either "Shonen" or "Josei" will show up). You can reset the filtering by unclicking the button you had clicked to filter. There is also a sorting option that allows you to sort alphabetical ascension/descension. You can reset the sort filter by clicking the "Reset" button. Sorting also works when filtering is applied. App.js also has the general layout of the website page. 

If I were to improve this product, I would probably make the filtering and sorting their own components; I think this would make it easier to read through the code and make changes on. 

### How Data is Passed Down Through Components
In the Aggregator component, "total" is passed through which we defined in App.js; "total" is "favSeasonTotal" which is initially set at 0 and is then incremented by an X number of seasons (determined by the itemInfo.Seasons) depending on if an anime has been added to the "Favorites" list. 
In ShowItem, each piece of data from our data.js is passed through along with "cart" (which is an empty array and changes as animes are added to the "Favorites" list).  setFavorites, addCart, and removeCart are also passed through the ShowItem componenet in order to adjust the "Favorites" list. Although the previously mentioned are not data, I wanted to mention them to provide color.
Lastly, in terms of App.js, no data is passed in as a prop. 

### How the User Triggers State Changes
The user triggers state changes by clicking buttons (ie. "Add to Favorites"/"Remove from Favorites", filtering, and sorting buttons). When the user presses "Add to Favorites", this adds the ShowItem to the "Favorites" array; pressing "Remove from Favorites" removes the ShowItem from the "Favorites" array. Additionally, pressing this button changes the text of the button to indicate to the user whether or not the ShowItem is in their "Favorites" list. When users press the filter and sort buttons, they ultimately change the filtered list and the website renders the filtered list of cards on the page.
