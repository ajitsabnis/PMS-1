<?php
	defined('BASEPATH') OR exit('No direct script access allowed');
	require APPPATH . '/controllers/CosRestController.php';
	class User extends CosRestController
	{
		public function __construct() {
        	parent::__construct();
          	$this->load->database();
        	$this->load->model('user_model');
   		}
         
	public function todaysPatientTest_get() {
			
			$listArr=array();
			$result=$this->user_model->getTodaysPatient();
			if(count($result) > 0)
			{
				foreach($result as $row)
				{
					$resultTest=$this->user_model->getTodaysPatientTest($row->patient_id);
					if(count($resultTest) > 0)
			{
			$row->patient_test=array();
					foreach($resultTest as $rowTest)
					{
					
						$listArrTest[]=$rowTest;
					}
					}
					$row->patient_test=$listArrTest;
					$listArr[]=$row;
					
				}

			}
			$response=array("status" => "success","messege" => "ok","patient_detail" => $listArr);
	    	$this->response($response);
	
    	}
		
		
    	public function index_post() {
		
		
			$user_login_name=trim($this->post('user_login_name'));
			$password=$this->post('password');
			$user_id=$this->user_model->chechUserExist($user_login_name,$password);
			$listArr=array();
			if($user_id > 0)
			{
				$resultRow=$this->user_model->getUserInfo($user_id);
				$listArr['user_name']=trim($resultRow->user_name);
				$listArr['modules']=$this->user_model->getUserModuleAndTrackAccess($user_id);
			
				$response=array("status" => "success","messege" => "ok","user_detail" => $listArr);
	
			}
			else
			{
				$response=array("status" => "error","messege" => "Invalid Login","user_detail" => $listArr);
			} 
	    	$this->response($response);
	
    	}
		
		/*********start Not in Use***********/
		public function indexold_post() {
			$user_login_name=trim($this->post('user_login_name'));
			$password=$this->post('password');
			$user_id=$this->user_model->chechUserExist($user_login_name,$password);
			$listArr=array();
			if($user_id > 0)
			{
				$resultRow=$this->user_model->getUserInfo($user_id);
				$listArr['user_name']=trim($resultRow->user_name);
				$listArr['modules']=$this->user_model->getUserAssignedModule($user_id);
				//$listArr['access']=$this->user_model->getUserAssignedModuleAssigned($user_id);
	
				$result=$this->user_model->getUserAssignedModuleAssigned($user_id);

				$listArrModulesAccess=array();
				foreach($result as $row)
				{
					$listArrModulesFinal[$row->module_name]=$row;
				}

	
				$listArr['access']=$listArrModulesFinal; 
				$response=array("status" => "success","messege" => "ok","user_detail" => $listArr);
	
			}
			else
			{
				$response=array("status" => "error","messege" => "Invalid Login","user_detail" => $listArr);
			} 
	    	$this->response($response);
	
    	}
	
		
	
		
			/*********end Not in Use***********/
  
	}
?>