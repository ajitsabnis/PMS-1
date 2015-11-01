<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . '/controllers/CosRestController.php';

class Generics extends CosRestController
{
  public function index_get()
  {
    $this->load->database();
<<<<<<< HEAD
    $this->db->select('generic_cate_id AS id, generic_cate AS name');  //csId
    $this->db->distinct();
    $this->db->order_by("generic_cate", "asc");
    $this->response(array("data" => $this->db->get('generic_category')->result()));  //cosUsers
=======
    $this->db->select('generic_id AS id, generic_Name AS name');  //csId
    //$this->db->select('stateName AS stateName'); //csFirstName
    //$this->db->select('lName AS lastName'); //csLastName
    //$this->db->select('mNumber AS phone');  //csPhone
    //$this->db->select('email AS Email')
    //$this->db->select('csGender AS gender');
    //$this->db->select('csDistrict AS district');
    //$this->db->select('csAboutMe AS aboutMe');
     $this->db->distinct();
    $this->db->order_by("generic_Name", "asc");
    $this->response(array("data" => $this->db->get('genericmaster')->result()));  //cosUsers
>>>>>>> 1a98c2122a4f7e5626438f39971aad57c0fa1efd
  }
}
?>
