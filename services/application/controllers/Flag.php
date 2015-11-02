<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . '/controllers/CosRestController.php';

class Flag extends CosRestController
{
  public function index_get()
  {
    $this->load->database();
    $this->db->select('flag_name AS name, percent AS percent, amount AS amount');  
    $this->db->distinct();
    $this->response(array("data" => $this->db->get('flag_master')->result()));
  }

  public function index_post()
  {
    try {
          $data = array(
              'short_code' => $this->post('short_code'),
              'description' => $this->post('description'),
          );
           $this->load->database();
           $this->load->helper('array');
           $this->db->insert('snippet_master', $data);
           $this->response(array("data" => array(
              "message" => "User added succefully."
            )));
        } catch(Exception $e) {
            $this->response(array("data" => array(
            "message" => "Some error occured. Please contact admin."
        )));
        }
   }
}
?>
