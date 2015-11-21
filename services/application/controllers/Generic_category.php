<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . '/controllers/CosRestController.php';

class Generic_category extends CosRestController
{
  public function index_get()
  {
    $this->load->database();
    $this->db->select('category_id AS cid, category_name AS name, genric_id AS id');  //csId
     $this->db->distinct();
	 
    $this->response(array("data" => $this->db->get('genric_category')->result()));  //cosUsers
  }

  public function index_post() {
		$data = array(
			'category_id' => '4' ,
			
			'category_name' => 'Sample'
			
		);
		$query = $this->db->insert('genric_category', $data); 
		$count = num_rows($query);
		
		if($count === 1 ) {
		  $this->response(array("data" => array(
			"status" => 201,
			"message" => "Record added successfully.",
			"query" => $this->db->last_query()
		  )));
		} else {
		  $this->response(array("data" => array(
			"status" => 301,
			"message" => "There is something wrong in this. Record not added",
			"query" => $this->db->last_query()
		  )));
		}
	}
  

  /*public function authorise_post()
  {
    $phone = $this->post('phone');
    $otp = $this->post('otp');

    $this->load->database();
    $this->load->helper('array');

    $this->db->where('csPhone',$phone );
    $this->db->where('csOtp', $otp );
    $this->db->where('isBlock', 1 );

    $query = $this->db->get('cosUsers');

    $count = $query->num_rows();

    if($count === 1 ) {
      $data = array(
        'isBlock' => 0
      );

      $this->db->where('csPhone',$phone );
      $this->db->where('csOtp', $otp );
      $this->db->update('cosUsers', $data);

      $this->response(array("data" => array(
        "status" => 201,
        "message" => "User is authorised.",
        "otp" => $otp,
        "query" => $this->db->last_query()
      )));
    } else {
      $this->response(array("data" => array(
        "status" => 301,
        "message" => "You entered incorrect OTP. Please try agin.",
        "otp" => $otp,
        "query" => $this->db->last_query()
      )));
    }
  }


  public function login_post()
  {
    // $this->load->library('encrypt');

    $phone = $this->post('phone');
    $password = MD5($this->post('password'));

    $this->load->database();
    $this->load->helper('array');

    $this->db->where('csPhone',$phone );
    $this->db->where('csPassword', $password );
    $this->db->where('isBlock', 0 );

    $query = $this->db->get('cosUsers');

    $count = $query->num_rows();

    if($count === 1 ) {
      $this->response(array("data" => array(
        "status" => 201,
        "message" => "Login successful.",
        "query" => $this->db->last_query()
      )));
    } else {
      $this->response(array("data" => array(
        "status" => 301,
        "message" => "User not authorised. Please try agin.",
        "query" => $this->db->last_query()
      )));
    }
  }

  public function demo_post() {
    $this->response(array("data" => array(
      "status" => 301,
      "message" => $this->post('firstName'),
      "query" => md5('demo'),
      "query1" => md5('demo'),
      "query2" => md5('demo')
    )));
    // if( count($this->input->post()) > 0 )
    // {
    //     echo "Wroking";
    // }
    // else
    // {
    //   echo $this->post('firstName');
    // }
  }*/
}
?>
