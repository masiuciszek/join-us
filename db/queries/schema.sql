CREATE TABLE users
(
  email VARCHAR(255) PRIMARY KEY,
  created_at TIMESTAMP DEFAULT NOW()
)
--  1

SELECT
  DATE_FORMAT(MIN(created_at), "%M %D %Y") as earliest_date
FROM users;
--  2

SELECT *
FROM users
WHERE  created_at = (SELECT Min(created_at)
FROM users);
--  3

SELECT Monthname(created_at) AS month,
  Count(*)              AS count
FROM users
GROUP  BY month
ORDER  BY count DESC;
--  4

SELECT Count(*) AS yahoo_users
FROM users
WHERE  email LIKE '%@yahoo.com';
--  5

SELECT CASE
         WHEN email LIKE '%@gmail.com' THEN 'gmail'
         WHEN email LIKE '%@yahoo.com' THEN 'yahoo'
         WHEN email LIKE '%@hotmail.com' THEN 'hotmail'
         ELSE 'other'
       end      AS provider,
  Count(*) AS total_users
FROM users
GROUP  BY provider
ORDER  BY total_users