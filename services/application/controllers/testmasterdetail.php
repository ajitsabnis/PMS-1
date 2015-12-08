<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . '/controllers/CosRestController.php';

class testmasterdetail extends CosRestController
{
  public function index_get()
  {
    $this->load->database();
    $this->db->select('test_detail_id AS tid, test_id AS id, test_exam_type AS examtype, test_details AS testdetail, test_unit AS tunit, test_display_order AS order, test_min_ref AS minref, test_max_ref AS maxref, patient_min_age AS minage, patient_max_age AS maxage, patient_gender AS gender');  //csId
    $this->db->distinct();
    $this->response(array("data" => $this->db->get('test_detail_master')->result()));  //cosUsers
  }

  public function index_post()
  {
    $this->load->database();
    $this->load->helper('array');
    try {
			$data = array(
				'test_name' => $this->post('test_name'),
				'test_heading' => $this->post('test_heading'),
				'test_short_name' => $this->post('test_short_code'),
				'group_id' => $this->post('test_group'),
				'test_amount' => $this->post('test_charge'),
				'test_remark' => $this->post('test_remark'),
				'flag_id' => $this->post('flag_id'),
				'method_id' => $this->post('method_id'),
				'sample_id' => $this->post('sample_id'),
				'instrument_id' => $this->post('instrument_id'),
				'testIsOutsourced' => $this->post('testIsOutsourced'),
				'testIsOutsourcedLab'=>$this->post('testIsOutsourcedLab')
			);
			$productDetails=$this->post('productDetails');
        
			$this->db->where('test_name', element('test_name', $data));
			$query = $this->db->get('test_master');
			$count = $query->num_rows();
			if( $count === 0 ) {
				$this->db->insert('test_master', $data);
				if($this->db->affected_rows() > 0){
					$totalCount = $this->db->insert_id();			// get last inserted record Id
					for ($i=0; $i < count($productDetails); $i++) {
						$user = array(
							'test_id' => $totalCount,
							'test_exam_type' => $productDetails[$i]['examtype'],
							'test_details' => $productDetails[$i]['testdetails'],
							'test_unit' => $productDetails[$i]['tunit'],
							'test_display_order' => $productDetails[$i]['order'],
							'test_min_ref' => $productDetails[$i]['minref'],
							'test_max_ref' => $productDetails[$i]['maxref'],
							'patient_min_age' => $productDetails[$i]['minage'],
							'patient_max_age' => $productDetails[$i]['maxage'],
							'patient_gender' => $productDetails[$i]['gender']['name'],
							'test_ref_range' => $productDetails[$i]['refRange']
						);
						print_r($user);exit();
						$this->db->insert('test_detail_master', $user);
					}
					if($this->db->affected_rows() > 0){
						$this->response(array("data" => array(
							"status" => 201,
							"id" => element( 'test_name', $data ),
							"message" => "Test and Test Details added succefully"
						)));
					} else {
						$this->response(array("data" => array(
							"status" => 301,
							"message" => "This test details allready exists.",
							"query" => $this->db->last_query()
						)));
					}
				}else{
					$this->response(array("data" => array(
						"status" => 301,
						"message" => "Something went wrong please contact admin.",
						"query" => $this->db->last_query()
					)));
				}
			} else {
				$this->response(array("data" => array(
				  "status" => 301,
				  "message" => "This test allready exists.",
				  "query" => $this->db->last_query()
				)));
			}
		} catch(Exception $e) {
           $this->response(array("data" => array(
				"message" => "Some error occured. Please contact admin."
			)));
		}
	}
}
?>
