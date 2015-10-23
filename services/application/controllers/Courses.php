<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH. '/controllers/CosRestController.php';
class Courses extends CosRestController {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see http://codeigniter.com/user_guide/general/urls.html
	 */
	
	public function index_post()
	{
		$this->load->database();
		//$this->db->select('course_id AS id, course_name AS name');
		//$this->db->distinct();
		//$this->response(array("data" => $this->db->get('course') ->result()));
		
		$data = array(
			'course_id' => '3' ,
			'course_name' => 'BE Civil' 
		);

		$this->db->insert('course', $data); 
		$this->response(array("data" => array(
        "status" => 301,
        "message" => "User not authorised. Please try agin.",
        "query" => $this->db->last_query()
      )));
	}
}
