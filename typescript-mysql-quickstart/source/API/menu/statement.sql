-- GetAllMenus
DELIMITER $$
 
DROP PROCEDURE IF EXISTS `Menu_GetAllMenus`$$
 
CREATE PROCEDURE `Menu_GetAllMenus`()
BEGIN
   SELECT *  FROM menu;
END$$
 
DELIMITER ;
-- End GetAllMenus

-- SaveMenu
DELIMITER $$
 
DROP PROCEDURE IF EXISTS `Menu_SaveMenu`$$

-- GetMenuInfo
DELIMITER $$
 
DROP PROCEDURE IF EXISTS `Menu_GetMenuInfo`$$
 
CREATE PROCEDURE `Menu_GetMenuInfo`(
	IN id INT
)
BEGIN
   SELECT *  FROM menu WHERE id_menu = id;
END$$
 
DELIMITER ;
-- End GetMenuInfo

-- SaveMenu
DELIMITER $$
 
DROP PROCEDURE IF EXISTS `Menu_SaveMenu`$$
 
CREATE PROCEDURE `Menu_SaveMenu`(
	IN id_menu INT,
    IN name_product VARCHAR(50),
    IN description VARCHAR(100),
	IN id_category INT,
	IN sold INT,
	IN create_at DateTime,
	IN priceM INT,
	IN priceL INT,
    OUT result INT
)
BEGIN
    SET result = 1
    CASE 
        WHEN id_menu > 0
        THEN
            CASE
                WHEN SELECT EXISTS (SELECT id_menu FROM menu WHERE id_menu = id_menu) = 1
                THEN 
                    UPDATE menu SET name_product = name_product, description = description, id_category = id_category, sold = sold, create_at = create_at, priceM = priceM, priceL = priceL WHERE id_menu = id_menu
                ELSE 
                    SET result = 0
            END
        ELSE 
            INSERT INTO menu SET name_product = name_product, description = description, id_category = id_category, sold = sold, create_at = create_at, priceM = priceM, priceL = priceL
    END
    SELECT result
END$$
 
DELIMITER ;
-- End SaveMenu

-- Delete
DELIMITER $$
 
DROP PROCEDURE IF EXISTS `Menu_Delete`$$
 
CREATE PROCEDURE `Menu_Delete`(
	IN ids VARCHAR LONGTEXT
)
BEGIN
   DELETE FROM menu WHERE FIND_IN_SET(id_menu, ids);
END$$
 
DELIMITER ;
-- End Delete