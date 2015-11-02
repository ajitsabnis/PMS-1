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
    //$this->db->order_by("generic_NAme", "asc");
    $this->response(array("data" => $this->db->get('test_master')->result()));  //cosUsers
  }


/*  public function index_post() {
    $data = array(
      'test_name' => 'abc' ,
      
      ' test_heading' => 'Sample'

       'test_short_name ' => 'Sample'

        'test_remark' => 'Sample'

        'flag' => '2'

        'method' => '3'

        'sample' => '4'

        'instrumernt' => '5'

        'test_amount' => '100.00'




      
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
}*/

public function index_post()
 {
   try {
         $data = array(
             'name' => $this->post('test_name'),
             'heading' => $this->post('test_heading'),
             'shortname' => $this->post('test_short_name'),
             'remark' => $this->post('test_remark'),
             'flg' => $this->post('flag'),
             'mthd' => $this->post('method'),
             'smpl' => $this->post('sample'),
             'instrument' => $this->post('instrumernt'),
             'charges' => $this->post('test_amount')

         );
          $this->load->database();
          $this->load->helper('array');
          $this->db->insert('genric_category', $data);
          $this->response(array("data" => array(
             "message" => "User added succefully."
           )));
       } catch(Exception $e) {
           $this->response(array("data" => array(
           "message" => "Some error occured. Please contact admin."
       )));
       }
  }


  /*public function index_post()
  {
    try {
      // $fName = $this->input->post("firstName");
      // $fName = $_POST["firstName"];
      // $this->load->library('encrypt');

      $user = array(
        'csFirstName' => $this->post('firstName'),
        'csLastName' => $this->post('lastName'),
        'csPhone' => $this->post('phone'),
        'csGender' => $this->post('gender'),
        'csDistrict' => $this->post('district'),
        'csAboutMe' => $this->post('aboutMe'),
        'csEmail' => $this->post('email'),
        'isBlock' => 1,
        'csOtp'=> rand(pow(10, 3), pow(10, 4)-1),
        'csPassword' => MD5($this->post('password')),
        'ipAddress' => $this->input->ip_address(),
        'createdDateTime' => date("Y-m-d H:i:s")
      );

      $this->load->database();
      $this->load->helper('array');

      $this->db->where('csPhone',element( 'csPhone', $user ));
      $this->db->or_where('csEmail', element( 'csEmail', $user ));

      $query = $this->db->get('cosUsers');

      $count = $query->num_rows();
      if( $count === 0 ) {
        $this->db->insert('cosUsers', $user);
        $this->response(array("data" => array(
          "status" => 201,
          "id" => element( 'csPhone', $user ),
          "message" => "User added succefully."
        )));
      } else {
        $this->response(array("data" => array(
          "status" => 301,
          "message" => "Mobile number Or email allready exists.",
          "query" => $this->db->last_query()
        )));
      }
    } catch(Exception $e) {
      $this->response(array("data" => array(
        "status" => 501,
        "message" => "Some error occured. Please contact admin.",
        "query" => $this->db->last_query()
      )));
    }
  }

  public function authorise_post()
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
