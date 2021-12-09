DROP DATABASE IF EXISTS curso_lead;
CREATE DATABASE curso_lead;
USE curso_lead;

CREATE TABLE tbStore
(store_id INT AUTO_INCREMENT,
store_name VARCHAR(100) NOT NULL,
store_owner VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL,
password VARCHAR(100) NOT NULL,
PRIMARY KEY (store_id)
);

CREATE TABLE tbSection
(section_id INT AUTO_INCREMENT,
section_name VARCHAR(100) NOT NULL,

store_id INT NOT NULL,
PRIMARY KEY (section_id),

CONSTRAINT fk_tbStore_tbSection FOREIGN KEY (store_id)
REFERENCES tbStore (store_id) ON DELETE CASCADE
ON UPDATE CASCADE
);

CREATE TABLE tbProduct
(product_id INT AUTO_INCREMENT, 
product_name VARCHAR(100) NOT NULL,
product_image VARCHAR(300),
minimum_quantity INT,
current_quantity INT,

section_id INT,
store_id INT,
PRIMARY KEY (product_id),

CONSTRAINT fk_tbSection_tbProduct FOREIGN KEY (section_id)
REFERENCES tbSection (section_id) ON DELETE CASCADE
ON UPDATE CASCADE,

CONSTRAINT fk_tbStore_tbProduct FOREIGN KEY (store_id)
REFERENCES tbStore (store_id) ON DELETE CASCADE
ON UPDATE CASCADE
);