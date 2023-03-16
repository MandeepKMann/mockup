const blogData = [
    {
    id:"blog1",
    title: "My Reflection",
    src: "https://placebear.com/1915/600",
    previewImg: "https://placebear.com/200/200",
    alt: "A placeholder of a bear",
    subtitle: "What did I learn?",
    previewText: "A reflection of things I learned throughout this project.",
    content: (
        <>
        <p><span className="bold">Dynamic Page Content:</span> My first idea was to use routing and subrouting, but I soon realised that the way I was thinking of doing this required me to write a lot of code. I would have to write a component for each blog post and all the structure for it. Sounds like a lot of repetitive code for something that I'm trying to make as dynamic as possible 🤔. I revisted some old projects where I had to make my content dynamic and that sort of solidified that I wanted to use useState. I created my own dataset (blogData.js) and used a clickHandler in BlogList.js to set state to the id of the blog link that was clicked. After that, over in Blog.js where I would dynamically display the content, I map through the dataset and check if it matches the id of the clicked link which is now stored in state. If there's a match, ta-da! You have your blog post. There was an issue where if you refreshed the page, the blog content would disappear of the page. With some of the knowledge from my Racoon Ranker project and some googling, I found that I should store state in localStorage as well, which we can then retrieve to setBlogLink() on refresh using useEffect.</p>
        <p><span className="bold">Carousel:</span> Frustrating simple to get the functionality down, and very challenging to style. There are so many ways to get this done and some are super creative. This section definitely required the use of a tutorial. It helped me get a lot of the styling done which felt very overwhelming at first. I learned that you can have a ternary statement in a className which absolutely blew my mind. For the functionality of the carousel, once I knew that I would be using useState again to hold the index of the array of images and related text (carouselContent.js), I paused the tutorial wrote the slideRight() and slideLeft() functions myself. It ended up slightly different than how the tutorial has it but I'm happy with it because I did it 😊. I did the same with linking the pagination once I saw that it could be linked through the index as well. The tutorial had a carousel that faded the images in and out, but I was interested in having the images slide in. I found a great blog post on sliding carousels and then came the challenge of mixing what I already had with what I was learning from the blog post. Perhaps using BEM and Sass would have made it easier to organize my css. Definitely something to try next time.</p>
        <p><span className="bold">Refactoring:</span> My list of blogs on the home page (BlogList.js) was initially hardcoded and so I decided to use map to display those on the page as well. I wanted to keep my blogs in sections of 2 so that they could stay in the same container and so I made a jagged array, mapped through it to have the 3 sections, and then mapped through those sections to display them on the page 😵. HORRIBLE, right? All of this just to keep them in the same container which I think I only did so that they could have a black border at the bottom. So I scrapped all that, mapped through all the blog posts normally, used calc to display them in rows of 2 and then just used some absolute positioned divs for the black underlines.</p>
        <p><span className="bold">Other Ideas:</span> One thing I didn't like about the way I did the dynamic blog posts was that they all share the same url. I was thinking about child routes and useParams but I think I would also need to have my data set in a JSON file and have a custom useFetch hook. It's something I would love to look into in the future.</p>
        </>
    ) 
    },    
    {
    id: "blog2",
    title: "Blog Two Title",
    src: "https://placebear.com/1915/600",
    previewImg: "https://placebear.com/200/200",
    alt: "A placeholder of a bear",
    subtitle: "Blog Two Subtitle",
    previewText: "Blog Two Content Lorem ipsum dolor sit amet consectetur, adipisicing elit.",    
    content: (
        <>
        <p>Blog Two Content Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, corporis et? Deserunt aspernatur esse omnis, iure eos quibusdam a nesciunt magnam debitis pariatur numquam quod! Dicta debitis aspernatur distinctio fugiat! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, corporis et? Deserunt aspernatur esse omnis, iure eos quibusdam a nesciunt magnam debitis pariatur numquam quod! Dicta debitis aspernatur distinctio fugiat!</p> 
        <p>Deserunt pariatur ullam, ut quod, eligendi fugiat impedit laudantium, iure cum nostrum accusantium illo! Autem quisquam maiores aliquid, quo consequatur iusto quod debitis cum aspernatur aliquam ducimus sunt culpa ab. Deserunt pariatur ullam, ut quod, eligendi fugiat impedit laudantium, iure cum nostrum accusantium illo! Autem quisquam maiores aliquid, quo consequatur iusto quod debitis cum aspernatur aliquam ducimus sunt culpa ab.</p>
        <p>A perferendis pariatur labore, accusantium ratione officiis fugiat possimus vel mollitia quasi ex, enim veniam illum cupiditate, quo cumque esse tempore consectetur magnam consequuntur ipsam! Praesentium ex maiores sequi veniam! A perferendis pariatur labore, accusantium ratione officiis fugiat possimus vel mollitia quasi ex, enim veniam illum cupiditate, quo cumque esse tempore consectetur magnam consequuntur ipsam! Praesentium ex maiores sequi veniam!</p>
        <p>Autem voluptatem quam, voluptas quas dicta vel hic officia odio necessitatibus! Nesciunt, at corporis! Officiis, consequuntur beatae. Ratione, iusto mollitia sed provident debitis quibusdam excepturi, ducimus itaque illum, atque necessitatibus. Autem voluptatem quam, voluptas quas dicta vel hic officia odio necessitatibus! Nesciunt, at corporis! Officiis, consequuntur beatae. Ratione, iusto mollitia sed provident debitis quibusdam excepturi, ducimus itaque illum, atque necessitatibus.</p>
        </>
    ) 
    },    
    {
    id: "blog3",
    title: "Blog Three Title",
    src: "https://placebear.com/1915/600",
    previewImg: "https://placebear.com/200/200",
    alt: "A placeholder of a bear",
    subtitle: "Blog Three Subtitle",
    previewText: "Blog Three Content Lorem ipsum dolor sit amet consectetur, adipisicing elit.",    
    content: (
        <>
        <p>Blog Three Content Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, corporis et? Deserunt aspernatur esse omnis, iure eos quibusdam a nesciunt magnam debitis pariatur numquam quod! Dicta debitis aspernatur distinctio fugiat! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, corporis et? Deserunt aspernatur esse omnis, iure eos quibusdam a nesciunt magnam debitis pariatur numquam quod! Dicta debitis aspernatur distinctio fugiat!</p> 
        <p>Deserunt pariatur ullam, ut quod, eligendi fugiat impedit laudantium, iure cum nostrum accusantium illo! Autem quisquam maiores aliquid, quo consequatur iusto quod debitis cum aspernatur aliquam ducimus sunt culpa ab. Deserunt pariatur ullam, ut quod, eligendi fugiat impedit laudantium, iure cum nostrum accusantium illo! Autem quisquam maiores aliquid, quo consequatur iusto quod debitis cum aspernatur aliquam ducimus sunt culpa ab.</p>
        <p>A perferendis pariatur labore, accusantium ratione officiis fugiat possimus vel mollitia quasi ex, enim veniam illum cupiditate, quo cumque esse tempore consectetur magnam consequuntur ipsam! Praesentium ex maiores sequi veniam! A perferendis pariatur labore, accusantium ratione officiis fugiat possimus vel mollitia quasi ex, enim veniam illum cupiditate, quo cumque esse tempore consectetur magnam consequuntur ipsam! Praesentium ex maiores sequi veniam!</p>
        <p>Autem voluptatem quam, voluptas quas dicta vel hic officia odio necessitatibus! Nesciunt, at corporis! Officiis, consequuntur beatae. Ratione, iusto mollitia sed provident debitis quibusdam excepturi, ducimus itaque illum, atque necessitatibus. Autem voluptatem quam, voluptas quas dicta vel hic officia odio necessitatibus! Nesciunt, at corporis! Officiis, consequuntur beatae. Ratione, iusto mollitia sed provident debitis quibusdam excepturi, ducimus itaque illum, atque necessitatibus.</p>
        </>
    ) 
    },    
    {
    id: "blog4",
    title: "Blog Four Title",
    src: "https://placebear.com/1915/600",
    previewImg: "https://placebear.com/200/200",
    alt: "A placeholder of a bear",
    subtitle: "Blog Four Subtitle",
    previewText: "Blog Four Content Lorem ipsum dolor sit amet consectetur, adipisicing elit.",    
    content: (
        <>
        <p>Blog Four Content Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, corporis et? Deserunt aspernatur esse omnis, iure eos quibusdam a nesciunt magnam debitis pariatur numquam quod! Dicta debitis aspernatur distinctio fugiat! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, corporis et? Deserunt aspernatur esse omnis, iure eos quibusdam a nesciunt magnam debitis pariatur numquam quod! Dicta debitis aspernatur distinctio fugiat!</p> 
        <p>Deserunt pariatur ullam, ut quod, eligendi fugiat impedit laudantium, iure cum nostrum accusantium illo! Autem quisquam maiores aliquid, quo consequatur iusto quod debitis cum aspernatur aliquam ducimus sunt culpa ab. Deserunt pariatur ullam, ut quod, eligendi fugiat impedit laudantium, iure cum nostrum accusantium illo! Autem quisquam maiores aliquid, quo consequatur iusto quod debitis cum aspernatur aliquam ducimus sunt culpa ab.</p>
        <p>A perferendis pariatur labore, accusantium ratione officiis fugiat possimus vel mollitia quasi ex, enim veniam illum cupiditate, quo cumque esse tempore consectetur magnam consequuntur ipsam! Praesentium ex maiores sequi veniam! A perferendis pariatur labore, accusantium ratione officiis fugiat possimus vel mollitia quasi ex, enim veniam illum cupiditate, quo cumque esse tempore consectetur magnam consequuntur ipsam! Praesentium ex maiores sequi veniam!</p>
        <p>Autem voluptatem quam, voluptas quas dicta vel hic officia odio necessitatibus! Nesciunt, at corporis! Officiis, consequuntur beatae. Ratione, iusto mollitia sed provident debitis quibusdam excepturi, ducimus itaque illum, atque necessitatibus. Autem voluptatem quam, voluptas quas dicta vel hic officia odio necessitatibus! Nesciunt, at corporis! Officiis, consequuntur beatae. Ratione, iusto mollitia sed provident debitis quibusdam excepturi, ducimus itaque illum, atque necessitatibus.</p>
        </>
    ) 
    },    
    {
    id: "blog5",
    title: "Blog Five Title",
    src: "https://placebear.com/1915/600",
    previewImg: "https://placebear.com/200/200",
    alt: "A placeholder of a bear",
    subtitle: "Blog Five Subtitle",
    previewText: "Blog Five Content Lorem ipsum dolor sit amet consectetur, adipisicing elit.",    
    content: (
        <>
        <p>Blog Five Content Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, corporis et? Deserunt aspernatur esse omnis, iure eos quibusdam a nesciunt magnam debitis pariatur numquam quod! Dicta debitis aspernatur distinctio fugiat! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, corporis et? Deserunt aspernatur esse omnis, iure eos quibusdam a nesciunt magnam debitis pariatur numquam quod! Dicta debitis aspernatur distinctio fugiat!</p> 
        <p>Deserunt pariatur ullam, ut quod, eligendi fugiat impedit laudantium, iure cum nostrum accusantium illo! Autem quisquam maiores aliquid, quo consequatur iusto quod debitis cum aspernatur aliquam ducimus sunt culpa ab. Deserunt pariatur ullam, ut quod, eligendi fugiat impedit laudantium, iure cum nostrum accusantium illo! Autem quisquam maiores aliquid, quo consequatur iusto quod debitis cum aspernatur aliquam ducimus sunt culpa ab.</p>
        <p>A perferendis pariatur labore, accusantium ratione officiis fugiat possimus vel mollitia quasi ex, enim veniam illum cupiditate, quo cumque esse tempore consectetur magnam consequuntur ipsam! Praesentium ex maiores sequi veniam! A perferendis pariatur labore, accusantium ratione officiis fugiat possimus vel mollitia quasi ex, enim veniam illum cupiditate, quo cumque esse tempore consectetur magnam consequuntur ipsam! Praesentium ex maiores sequi veniam!</p>
        <p>Autem voluptatem quam, voluptas quas dicta vel hic officia odio necessitatibus! Nesciunt, at corporis! Officiis, consequuntur beatae. Ratione, iusto mollitia sed provident debitis quibusdam excepturi, ducimus itaque illum, atque necessitatibus. Autem voluptatem quam, voluptas quas dicta vel hic officia odio necessitatibus! Nesciunt, at corporis! Officiis, consequuntur beatae. Ratione, iusto mollitia sed provident debitis quibusdam excepturi, ducimus itaque illum, atque necessitatibus.</p>
        </>
    ) 
    },
    {    
    id: "blog6",
    title: "Blog Six Title",
    src: "https://placebear.com/1915/600",
    previewImg: "https://placebear.com/200/200",
    alt: "A placeholder of a bear",
    subtitle: "Blog Six Subtitle",
    previewText: "Blog Six Content Lorem ipsum dolor sit amet consectetur, adipisicing elit.",    
    content: (
        <>
        <p>Blog Six Content Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, corporis et? Deserunt aspernatur esse omnis, iure eos quibusdam a nesciunt magnam debitis pariatur numquam quod! Dicta debitis aspernatur distinctio fugiat! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, corporis et? Deserunt aspernatur esse omnis, iure eos quibusdam a nesciunt magnam debitis pariatur numquam quod! Dicta debitis aspernatur distinctio fugiat!</p> 
        <p>Deserunt pariatur ullam, ut quod, eligendi fugiat impedit laudantium, iure cum nostrum accusantium illo! Autem quisquam maiores aliquid, quo consequatur iusto quod debitis cum aspernatur aliquam ducimus sunt culpa ab. Deserunt pariatur ullam, ut quod, eligendi fugiat impedit laudantium, iure cum nostrum accusantium illo! Autem quisquam maiores aliquid, quo consequatur iusto quod debitis cum aspernatur aliquam ducimus sunt culpa ab.</p>
        <p>A perferendis pariatur labore, accusantium ratione officiis fugiat possimus vel mollitia quasi ex, enim veniam illum cupiditate, quo cumque esse tempore consectetur magnam consequuntur ipsam! Praesentium ex maiores sequi veniam! A perferendis pariatur labore, accusantium ratione officiis fugiat possimus vel mollitia quasi ex, enim veniam illum cupiditate, quo cumque esse tempore consectetur magnam consequuntur ipsam! Praesentium ex maiores sequi veniam!</p>
        <p>Autem voluptatem quam, voluptas quas dicta vel hic officia odio necessitatibus! Nesciunt, at corporis! Officiis, consequuntur beatae. Ratione, iusto mollitia sed provident debitis quibusdam excepturi, ducimus itaque illum, atque necessitatibus. Autem voluptatem quam, voluptas quas dicta vel hic officia odio necessitatibus! Nesciunt, at corporis! Officiis, consequuntur beatae. Ratione, iusto mollitia sed provident debitis quibusdam excepturi, ducimus itaque illum, atque necessitatibus.</p>
        </>
    ) 
    }             
]

export default blogData;