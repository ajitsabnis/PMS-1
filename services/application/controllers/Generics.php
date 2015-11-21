<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . '/controllers/CosRestController.php';

class Generics extends CosRestController
{
	public function __construct() {
        parent::__construct();
        $this->load->database();
        //$this->load->model('user_model');
   }
  public function index_get()
  {
    //$this->load->database();
    $this->db->select('generic_cate_id AS id, generic_cate AS name');  //csId
    $this->db->distinct();
    $this->db->order_by("generic_cate", "asc");
    $this->response(array("data" => $this->db->get('generic_category')->result()));  //cosUsers
  }

  public function generic_post()
  {
    
  }
}
?>
