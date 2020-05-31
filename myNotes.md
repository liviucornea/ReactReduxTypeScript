# About importing css or scss files (there are 2 ways):

1. if you declare your functional component and than you create 
className.module.sass or .css than you can import those files in you component 
(see like example ToDoMain function based component that has a scss file or
Footer.tsx that has an footer.module.css file for css purpose.

2. you can put your code for css in scss file and than import it staright as it is in 
AppMenu.tsx that has _app-menu.scss file imported
See this fis file :
.....\node_modules\react-scripts\lib\react-app.d.ts 


# Router in react :
1. use attributes like exact OR strict to control routing ( see example in index.tsx where are defined the rotes for app)
2. To navigate while on diferent components, to diferent routes you can use 
Link or NavLink
