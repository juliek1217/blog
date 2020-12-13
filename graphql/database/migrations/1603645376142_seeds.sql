INSERT INTO roles(title)
VALUES
('admin'),
('blogger');

INSERT INTO permissions(action)
VALUES
('post'),
('manage-users');

INSERT INTO role_permissions (role_id, permission_id)
VALUES
(1, 1),
(1, 2),
(2, 1);

INSERT INTO users (role_id, email, first_name, last_name)
VALUES
(1, 'juliek1217@gmail.com', 'Juhee', 'Kim');


INSERT INTO blog_categories (label, description)
VALUES
('JavaScript', 'Category description here.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  '),
('React', 'Category description here.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  '),
('Vue', 'Category description here.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  '),
('Tech Culture', 'Category description here.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  '),
('Tech News', 'Category description here.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  '),
('Brain Health', 'Category description here.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  '),
('Cloud Services', 'Category description here.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  ');


INSERT INTO blog_posts (author_id, title, description, text, image, active, keyword1, keyword2, bg_src, bg_type)
VALUES
(1, 'Can anyone code?', 'Category description here','','wifi.jpg', 1, 'Functional programming', 'ES6', 'umwics1.png', 'Image'),
(1, 'Using AWS', 'Category description here','','vr1.jpg', 1, 'Functional programming', 'ES6', 'vr1.jpg', 'Image'),
(1, 'Popular laugage', 'Category description here','','startup1.jpg', 1, 'Functional programming', 'ES6', 'startup1.jpg', 'Image'),
(1, 'Brain Hacks', 'Category description here','','startup.jpg', 1, 'Functional programming', 'ES6', 'startup.jpg', 'Image'),
(1, 'Software Engineer salary', 'Category description here','','cat.jpg', 1, 'Functional programming', 'ES6', 'cat.jpg', 'Image'),
(1, 'GraphQL vs REST', 'Category description here','','umwics1.png', 1, 'Functional programming', 'ES6', 'umwics1.png', 'Image'),
(1, 'A day in the life of a programmer', 'Category description here','','vr1.jpg', 1, 'Functional programming', 'ES6', 'vr1.jpg', 'Image'),
(1, 'Brain Hacks for Learning to Program', 'Category description here','','startup1.jpg', 1, 'Functional programming', 'ES6', 'startup1.jpg', 'Image'),
(1, 'React Vs Vue', 'Category description here','','umwics1.png', 1, 'Functional programming', 'ES6', 'umwics1.png', 'Image');


INSERT INTO blog_post_comments (post_id, author_id, comment)
VALUES
(1, 1, 'Totally Broo!'),
(1, 1, 'Friggin awesome');


INSERT INTO blog_post_categories (post_id, category_id)
VALUES
(1, 4),
(2, 5),
(3, 7),
(4, 4),
(5, 5),
(6, 6),
(7, 4),
(8, 1),
(8, 2),
(8, 4),
(8, 6),
(9, 2),
(9, 3);