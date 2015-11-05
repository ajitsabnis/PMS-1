<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . '/controllers/CosRestController.php';

class test extends CosRestController
{
  public function index_get()
  {
    $this->load->database();
    $this->db->select('test_id AS id, test_name AS name, test_heading AS heading, test_short_name AS shortname, test_remark AS remark, flag AS flg, method AS mthd, sample AS smpl, instrumernt AS instrument, test_amount AS charges, groups AS grp');  //csId
    $this->db->distinct();
    $this->response(array("data" => $this->db->get('test_master')->result()));  //cosUsers
  }


  public function index_post()
  {
    
    /*try {*/
         $data = array(
             'test_name' => $this->post('name'),
             'test_heading' => $this->post('heading'),
             'test_short_name' => $this->post('shortname'),
             'test_remark' => $this->post('remark'),
             'flag' => $this->post('flg'),
             'method' => $this->post('mthd'),
             'sample' => $this->post('smpl'),
             'instrumernt' => $this->post('instrument'),
             'test_amount' => $this->post('charges')
         );
        $this->load->database();
        $this->load->helper('array');
        $this->db->insert('test_master', $data);
        $this->response(array("data" => array(
           "message" => "User added succefully."
        )));
       /*} catch(Exception $e) {
           $this->response(array("data" => array(
           "message" => "Some error occured. Please contact admin."
       )));
       }*/
  }
}
?>
