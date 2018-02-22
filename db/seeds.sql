use giphyshare;

insert into users (id, username, firstName, lastName, createdAt, updatedAt)
values ('1', 'brian.cocherell@gmail.com', 'Brian', 'Cocherell', now(), now()),
('2', 'peterburnshicks@gmail.com', 'Peter', 'Burns', now(), now()),
('3', 'mockbee1000@gmail.com', 'Jon', 'Mockbee', now(), now()),
('4', 'joemalov@gmail.com', 'Joe', 'Malovasic', now(), now());

insert into followers (userId, followerId, createdAt, updatedAt)
values ('1', '2', now(), now()),
('1', '3', now(), now()),
('2', '1', now(), now()),
('2', '4', now(), now()),
('3', '2', now(), now()),
('3', '4', now(), now()),
('4', '1', now(), now()),
('4', '2', now(), now());

insert into posts (userId, url, urlStill, urlOriginal, urlOriginalStill, comment, title, createdAt, updatedAt)
values ('1',
'https://media3.giphy.com/media/mCRJDo24UvJMA/200w.gif',
'https://media3.giphy.com/media/mCRJDo24UvJMA/200w_s.gif',
'https://media3.giphy.com/media/mCRJDo24UvJMA/giphy.gif',
'https://media3.giphy.com/media/mCRJDo24UvJMA/giphy_s.gif',
'Post 1', 'Post 1', now(), now()),
('1',
'https://media3.giphy.com/media/xThtadSLoInlcD1UmA/200w.gif',
'https://media3.giphy.com/media/xThtadSLoInlcD1UmA/200w_s.gif',
'https://media3.giphy.com/media/xThtadSLoInlcD1UmA/giphy.gif',
'https://media3.giphy.com/media/xThtadSLoInlcD1UmA/giphy_s.gif',
'Post 2', 'Post 2', now(), now()),
('2',
'https://media3.giphy.com/media/dTJd5ygpxkzWo/200w.gif',
'https://media3.giphy.com/media/dTJd5ygpxkzWo/200w_s.gif',
'https://media3.giphy.com/media/dTJd5ygpxkzWo/giphy.gif',
'https://media3.giphy.com/media/dTJd5ygpxkzWo/giphy_s.gif',
'Post 1', 'Post 1', now(), now()),
('2',
'https://media3.giphy.com/media/wjK3YnjoQf0go/200w.gif',
'https://media3.giphy.com/media/wjK3YnjoQf0go/200w_s.gif',
'https://media3.giphy.com/media/wjK3YnjoQf0go/giphy.gif',
'https://media3.giphy.com/media/wjK3YnjoQf0go/giphy_s.gif',
'Post 2', 'Post 2', now(), now()),
('3',
'https://media3.giphy.com/media/nrN8fUJ4EZn5m/200w.gif',
'https://media3.giphy.com/media/nrN8fUJ4EZn5m/200w_s.gif',
'https://media3.giphy.com/media/nrN8fUJ4EZn5m/giphy.gif',
'https://media3.giphy.com/media/nrN8fUJ4EZn5m/giphy_s.gif',
'Post 1', 'Post 1', now(), now()),
('3',
'https://media3.giphy.com/media/BdhtvnPILhdYs/200w.gif',
'https://media3.giphy.com/media/BdhtvnPILhdYs/200w_s.gif',
'https://media3.giphy.com/media/BdhtvnPILhdYs/giphy.gif',
'https://media3.giphy.com/media/BdhtvnPILhdYs/giphy_s.gif',
'Post 2', 'Post 2', now(), now()),
('4',
'https://media3.giphy.com/media/naXyAp2VYMR4k/200w.gif',
'https://media3.giphy.com/media/naXyAp2VYMR4k/200w_s.gif',
'https://media3.giphy.com/media/naXyAp2VYMR4k/giphy.gif',
'https://media3.giphy.com/media/naXyAp2VYMR4k/giphy_s.gif',
'Post 1', 'Post 1', now(), now()),
('4',
'https://media3.giphy.com/media/oDLDbBgf0dkis/200w.gif',
'https://media3.giphy.com/media/oDLDbBgf0dkis/200w_s.gif',
'https://media3.giphy.com/media/oDLDbBgf0dkis/giphy.gif',
'https://media3.giphy.com/media/oDLDbBgf0dkis/giphy_s.gif',
'Post 2', 'Post 2', now(), now());

insert into subposts (userId, postId, url, urlStill, urlOriginal, urlOriginalStill, comment, title, createdAt, updatedAt)
values ('2', 1,
'https://media3.giphy.com/media/xUA7aQaXbhnkX4znm8/200w.gif',
'https://media3.giphy.com/media/xUA7aQaXbhnkX4znm8/200w_s.gif',
'https://media3.giphy.com/media/xUA7aQaXbhnkX4znm8/giphy.gif',
'https://media3.giphy.com/media/xUA7aQaXbhnkX4znm8/giphy_s.gif',
'Subpost 1', 'Subpost 1', now(), now()),
('1', 3,
'https://media3.giphy.com/media/d3erWmTEGXoiYVgY/200w.gif',
'https://media3.giphy.com/media/d3erWmTEGXoiYVgY/200w_s.gif',
'https://media3.giphy.com/media/d3erWmTEGXoiYVgY/giphy.gif',
'https://media3.giphy.com/media/d3erWmTEGXoiYVgY/giphy_s.gif',
'Subpost 1', 'Subpost 2', now(), now());

insert into likes (userId, postId, createdAt, updatedAt)
values ('1', 2, now(), now()),
('1', 5, now(), now()),
('2', 1, now(), now()),
('2', 7, now(), now()),
('3', 3, now(), now()),
('3', 8, now(), now()),
('4', 1, now(), now()),
('4', 3, now(), now());