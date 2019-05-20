<?php

class Person
{
    public $firstname;
}


$someOne = new Person ();
$someOne->firstname='Fred';
echo $someOne->firstname;
var_dump($someOne);