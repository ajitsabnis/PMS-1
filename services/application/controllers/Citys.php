<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . '/controllers/CosRestController.php';
class Citys extends CosRestController
{
  public function index_get()
  {
    // $this->load->database();
    // $this->response( $this->db->get('district')->result() );
    // $data = array('returned: '. $this->get('id'));
    // $this->response($data);
    $this->load->database();
    // $this->db->select('districtID, districtName');
    // $sql = $this->db->get_compiled_select( 'districts' );
    // $this->response( $sql );
    $this->db->select('city_id AS city_id, city_name AS city_name');
    $this->db->distinct();
    $this->db->order_by("city_name", "asc");
    $this->response(array("data" =>$this->db->get('city_master')->result()));
  }

  public function district_get($id)
  {
    $this->load->database();
    $this->db->select('city_id AS city_id, city_name AS city_name');
    $this->db->distinct();
    $this->db->order_by("city_name", "asc");
    $this->db->where('district_id', $id);
    $this->response(array("data" => $this->db->get('city_master')->result()));
  }

public function index_post()
  {
    try {
      
      $user = array(
        'district_id' => $this->post('district_id'),
        'city_name' => $this->post('city_name'),
      );

      $this->load->database();
      $this->load->helper('array');

      $this->db->where('city_name',element( 'city_name', $user ));
      $this->db->where('district_id', element( 'district_id', $user ));

      $query = $this->db->get('district_master');

      $count = $query->num_rows();
      if( $count === 0 ) {
        $this->db->insert('district_master', $user);
        $this->response(array("data" => array(
          "status" => 201,
          "id" => element( 'district_name', $user ),
          "message" => "District added succefully."
        )));
      } else {
        $this->response(array("data" => array(
          "status" => 301,
          "message" => "District And State allready exists.",
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
}
?>