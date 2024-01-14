<?php

$conn = 'mysql:host=localhost;dbname=toucandb';
$username = 'root';

try {
    $db = new PDO($conn, $username);
    // echo "DB Connected!";
} catch (PDOException $e) {
   $error = "Database connection error:";
   $error .= $e->getMessage();
   exit();
}