---
title: "Playground"
date: 2022-10-09T11:12:00+07:00
draft: false
enablecomments: false
categories:
  - 'Test Category'
  - 'Yet Another test Category'
tags:
  - 'test'
  - 'tset'
---

# H1
## H2
### H3
#### H4
##### H5
###### H6

**bold text**

*italicized text*

> blockquote

1. First
2. Second
3. Third

- First
- Second
- Third

---

[some link](https://randomanga.net/)

I really hate the anime community. [^1]

![](https://s4.anilist.co/file/anilistcdn/media/anime/banner/120377-c15oLS8CA31s.jpg)

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec ornare velit. Phasellus molestie leo sit amet diam placerat, ac tempor nunc feugiat. Mauris vel metus porta, hendrerit leo ut, suscipit tortor. Aenean in est vitae diam ultrices accumsan et ut orci. Vivamus leo libero, finibus vel magna sed, blandit maximus orci. Proin hendrerit sem ex, at vulputate nibh pulvinar a. Fusce imperdiet maximus felis at porta. Curabitur non diam tempor, pretium est at, malesuada metus. Nulla facilisi. Suspendisse elementum eros et felis rutrum luctus.

Cras finibus purus turpis, faucibus pharetra odio sagittis nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis orci condimentum, vestibulum dolor eu, interdum tellus. Etiam lacus sapien, faucibus eget tempor vel, convallis ac erat. Etiam vitae aliquet ex, sit amet elementum lectus. Praesent eleifend efficitur augue volutpat finibus. Fusce lacinia leo scelerisque ante dapibus gravida. Nulla facilisi. Mauris tincidunt lacus faucibus, euismod enim a, convallis sem.

Praesent non nunc dignissim, aliquam elit egestas, laoreet est. Sed pharetra, orci et blandit pretium, ipsum dolor mollis diam, eu convallis felis nisi ut mauris. Pellentesque ultrices sapien ac egestas sodales. Nullam varius dolor in justo imperdiet ullamcorper. Proin viverra orci massa, a faucibus ante pulvinar eget. Pellentesque tincidunt euismod enim eu finibus. Etiam dictum augue scelerisque est imperdiet maximus. Aenean mollis mattis eleifend. Vivamus augue mauris, ultricies in egestas non, porttitor id purus. Proin quis urna ultricies, aliquet sem non, suscipit urna.

Nulla tempus commodo diam, non semper arcu. Suspendisse gravida tortor sed interdum congue. Vivamus mattis metus vel accumsan cursus. Duis fringilla massa sed semper facilisis. In laoreet dictum tristique. Aliquam vel risus magna. Cras dui nulla, elementum in posuere at, porttitor et sapien. Fusce euismod sem in bibendum auctor.

Duis euismod libero ut ligula consectetur rutrum. Nulla vel mi sit amet mauris hendrerit feugiat. Suspendisse vehicula ultrices magna, sed accumsan sapien lacinia id. Curabitur sed lacinia justo. Vivamus condimentum pretium scelerisque. Nam a suscipit ex, tempus malesuada augue. Maecenas aliquam dolor vel nulla sagittis, a rhoncus leo malesuada. Duis varius cursus sollicitudin. Etiam tempus leo in eleifend finibus. Duis ornare justo vitae elit aliquet, sit amet egestas felis porttitor. Etiam efficitur ipsum a tellus laoreet aliquam. Nulla porta fringilla tellus sit amet laoreet. Aliquam viverra neque eu dolor mollis accumsan. Vestibulum fermentum odio ipsum, id iaculis magna volutpat id. Pellentesque sed lectus leo. Quisque mattis metus placerat lorem fermentum iaculis. 

| Table       | Test       |
| ----------- | ---------- |
| yo          | what's up? |
| Sample Text | lmao       |

### An awesome heading {#frbro}

```php
function renderUserGifts(int $user): void
{
    $this->assertUserLoggedIn();
    
    $user = $this->users->get($user);
    if(!$user)
        $this->notFound();
    
    $this->template->user     = $user;
    $this->template->page     = $page = (int) ($this->queryParam("p") ?? 1);
    $this->template->count    = $user->getGiftCount();
    $this->template->iterator = $user->getGifts($page);
    $this->template->hideInfo = $this->user->id !== $user->getId();
}
```

Ubuntu
: Ubuntu is an ancient african word, meaning "I can't configure Debian" [^2]

~~Panda Eyes sucks.~~

- [x] Make a Playground
- [ ] John Madden!
- [ ] Football

I bought FL Studio the next day :trollface:

https://www.markdownguide.org/cheat-sheet

[^1]: https://anilist.co/forum/thread/1696/comment/42561
[^2]: https://www.urbandictionary.com/define.php?term=ubuntu
