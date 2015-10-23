<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . '/controllers/CosRestController.php';
class Districts extends CosRestController
{
  public function index_get()
  {
	$this->load->database();
    $this->db->select('course_id AS id, course_name AS name');
    $this->db->distinct();
    $this->db->order_by("id", "asc");
    $this->response(array("data" => $this->db->get('course')->result()));
  }
}
?>