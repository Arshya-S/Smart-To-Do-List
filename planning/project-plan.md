### USER STORIES

1) As a user, I want to be able to see all my lists, because I want to review and edit them later.

2) As a user, I want to be able to make more lists, because I want to review and edit them later.

3) As a user, I want to be able to mark the event that is completed, because I have completed that event.

4) As a user, I want my list items to be categorized automatically, because that's the main feature.

5) As a user, I want to be able to edit the category of a list item, because of an error.

6) As a user, I want to be able to edit my profile, because some things changed.



---------------
### USER SCENARIOS


1) Given that I'm logged in, when I click my lists, then I want to be able to view my lists.

2) Given that I'm logged in, when click "create new", then I'm given a form to create a new list.

3) Given that I'm logged in, when click "complete", then the event is marked as complete.

4) Given that I'm logged in, when inputted event, then the event is categorized.

5) Given that I'm logged in, once event is made, then category is changable.

6) Given that I'm logged in, when in the edit profile,  I can edit my profile.

7) Given that I made a list, when the list is created, I want the date/time to show up upon creation.


Stretch: once all items are complete list is complete (moved to the bottom). -> add new table for completed and not completed ?

Stretch:  Given that I'm logged in, when I complete a list, then the list goes to a completed section.

Stretch: Users can share lists to other users


----

### ROUTES  

- BROWSE  GET     /lists
- READ    GET     /lists/:id
- EDIT    PATCH   /lists/:id
- ADD     POST    /lists/:id
- DELETE  DELETE  /lists/:id
- EDIT    PATCH   /profile/:id


---

### WIREFRAMES


![Mock Style](https://github.com/Arshya-S/Smart-TODO-List/blob/master/planning/Main-Page.png?raw=true)

![Mock Style](https://github.com/Arshya-S/Smart-TODO-List/blob/master/planning/Main-Page-Sketch.png?raw=true)




---

ERD

![Mock Style](https://github.com/Arshya-S/Smart-TODO-List/blob/master/planning/new-ERD.png?raw=true)








