/*
This file demonstrates Microsoft T-SQL commands crafted using Copilot.
*/

-- If database 'hr' exists, drop it
IF EXISTS (SELECT * FROM sys.databases WHERE name = 'hr')
    DROP DATABASE hr;
GO

-- Create a new database named 'hr'
CREATE DATABASE hr;
GO

-- Use the database
USE hr;
GO