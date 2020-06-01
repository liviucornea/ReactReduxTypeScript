About importing css or scss files:

1. if you declare your functional component and than you create 
className.module.sass or .css than you can import those files in you component 
(see like example ToDoMain function based component that has a scss file or
Footer.tsx that has an footer.module.css file for css purpose.

2. you can put your code for css in scss file and tha import it staright as it is in 
AppMenu.tsx that has _app-menu.scss file imported
See this fis file :
.....\node_modules\react-scripts\lib\react-app.d.ts 

3. when not all .tsx files are debuggable in chrome, you need to run debugReactApp 
in webstorm and than it will start to work...strange...even sourceMap is set to true
in tsconfig....
