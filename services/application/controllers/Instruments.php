<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . '/controllers/CosRestController.php';

class Instruments extends CosRestController
{
  public function index_get() /**/
  {
    //echo $id;
    //$user = $this->rest->get('user', array('id' => $id), 'json');
     
    //echo $user->name;
    $this->load->database();
    $this->db->select('instrument_id AS id, instrument_name AS name,  generic_id as G_id');  
    $this->db->distinct();
    $this->db->order_by("instrument_name", "asc");
    /*if(empty($id))
    {
     $this->db->where("generic_id", $id);
    }*/
    $this->response(array("data" => $this->db->get('instrumentnames')->result()));  //cosUser
  }

  public function category_get($id)
  {
    // $this->load->database();
    // $this->response( $this->db->get('district')->result() );

    // $data = array('returned: '. $this->get('id'));
    // $this->response($data);

    $this->load->database();
    // $this->db->select('districtID, districtName');
    // $sql = $this->db->get_compiled_select( 'districts' );
    // $this->response( $sql );

    $this->db->select('instrument_id AS id, instrument_name AS name, generic_id AS G_id');
    $this->db->distinct();
    $this->db->order_by("instrument_name", "asc");
    $this->db->where('generic_id', $id);
    //$this->db->where_not_in('stream', 'N/A');

    $this->response(array("data" => $this->db->get('instrumentnames')->result()));
  }

 /* public function generic_get($id)
  {
    // $this->load->database();
    // $this->response( $this->db->get('district')->result() );

    // $data = array('returned: '. $this->get('id'));
    // $this->response($data);

    $this->load->database();
    // $this->db->select('districtID, districtName');
    // $sql = $this->db->get_compiled_select( 'districts' );
    // $this->response( $sql );

    $this->db->select('instrument_name AS name, instrument_id AS value');
    //$this->db->select('generic_id');
    $this->db->distinct();
    $this->db->order_by("instrument_name", "asc");
    $this->db->where("generic_id", $id);
    //$this->db->where("district", $district);
    //$this->db->where_not_in('branch', 'N/A');
    $this->response(array("data" => $this->db->get('instrumentnames')->result()));
  }*/

  public function index_post()
  {
    try {
      // $fName = $this->input->post("firstName");
      // $fName = $_POST["firstName"];
      // $this->load->library('encrypt');
      //$_POST["instrument_id"] = 2;
      //$_POST["instrument_name"] = "Instruments-2";
      //$_POST["generic_id"] = 1;
       $field_id ="";
       $field_name ="";
       $generic="";   //$this->post('generic_id');
       $this->load->database();
       $this->load->helper('array');
       //$query = "";
      // $user ="";
       switch ($this->post('generic_id')) {
         case 1:
                  $user = array(
                                 'instrument_id'=> $this->post('instrument_id'),
                                 'instrument_name'=> $this->post('instrument_name'),
                                 'generic_id'=> $this->post('generic_id')
                                /*'csFirstName' => $this->post('firstName'),
                                'csLastName' => $this->instrument_idpost('lastName'),
                                'csPhone' => $this->post('phone'),
                                'csGender' => $this->post('gender'),
                                'csDistrict' => $this->post('district'),
                                'csAboutMe' => $this->post('aboutMe'),
                                'csEmail' => $this->post('email'),
                                'isBlock' => 1,
                                'csOtp'=> rand(pow(10, 3), pow(10, 4)-1),
                                'csPassword' => MD5($this->post('password')),
                                'ipAddress' => $this->input->ip_address(),
                                'createdDateTime' => date("Y-m-d H:i:s")*/
                              );
                    print_r($user);
                    $this->db->where('instrument_id', element($field_id, $user));
                    //$this->db->or_where('csEmail', element( 'csEmail', $user ));
                    $query = $this->db->get('instrumentnames');
                   // print_r($query);
                    $count = $query->num_rows();
                    if( $count === 0 ) {
                      $this->db->insert('instrumentnames', $user);
                      $this->response(array("data" => array(
                        "status" => 200,
                        "id" => element( $field_id, $user ),
                        "message" => "User added succefully."
                      )));
                    } else {
                      $this->response(array("data" => array(
                        "status" => 301,
                        "message" => "Mobile number Or email allready exists.",
                        "query" => $this->db->last_query()
                      )));
                    }

           break;
         
         default:
           # code...
           break;
       }
      //$user = array(
         //$field_id=> $this->post('instrument_id'),
         //$field_name=> $this->post('instrument_name'),
         //$generic=> $this->post('generic_id'),
        /*'csFirstName' => $this->post('firstName'),
        'csLastName' => $this->instrument_idpost('lastName'),
        'csPhone' => $this->post('phone'),
        'csGender' => $this->post('gender'),
        'csDistrict' => $this->post('district'),
        'csAboutMe' => $this->post('aboutMe'),
        'csEmail' => $this->post('email'),
        'isBlock' => 1,
        'csOtp'=> rand(pow(10, 3), pow(10, 4)-1),
        'csPassword' => MD5($this->post('password')),
        'ipAddress' => $this->input->ip_address(),
        'createdDateTime' => date("Y-m-d H:i:s")*/
      //);
      //print_r($user);
      //$this->load->database();
      //$this->load->helper('array');

      //$this->db->where('instrument_id',element( $field_id, $user ));
      //$this->db->or_where('csEmail', element( 'csEmail', $user ));

      //$query = $this->db->get('instrumentnames');
    
      /*$count = $query->num_rows();
      if( $count === 0 ) {
        $this->db->insert('instrumentnames', $user);
        $this->response(array("data" => array(
          "status" => 200,
          "id" => element( $field_id, $user ),
          "message" => "User added succefully."
        )));
      } else {
        $this->response(array("data" => array(
          "status" => 301,
          "message" => "Mobile number Or email allready exists.",
          "query" => $this->db->last_query()
        )));
      }*/
    } catch(Exception $e) {
      $this->response(array("data" => array(
        "status" => 501,
        "message" => "Some error occured. Please contact admin.",
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
