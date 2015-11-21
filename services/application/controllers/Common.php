<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . '/controllers/CosRestController.php';
class Common extends CosRestController
{


 public function __construct() {
        parent::__construct();
          $this->load->database();
        $this->load->model('common_model');
   }

    public function searchPatient_get() {

	 $searchString =$this->get('searchString');
	$result=array();
	$result=$this->common_model->searchPatient($searchString);
	if(!empty($result))
	{
	$response=array("status" => "success","messege" => "ok","list" => $result);
	}
	else
	{
$response=array("status" => "success","messege" => "ok","list" => $result);
	} 
	    $this->response($response);
	}
	
	
	
	 public function getTestType_get() {

	$tblName='test_type';
	$result=array();
	$result=$this->common_model->getTableAllData($tblName,$optColumnName='',$optColumnVal='');
	if(!empty($result))
	{
	$response=array("status" => "success","messege" => "ok","list" => $result);
	}
	else
	{
$response=array("status" => "success","messege" => "ok","list" => $result);
	} 
	    $this->response($response);
	}
	
	
	
    public function getTestTypeDetails_get() { 

    $test_type_ID =$this->get('test_type_ID');

	$tblName='test_type';
	$columnName='test_type_ID';
	$columnVal=$test_type_ID;
	$resultRow=$this->common_model->getTableRowData($tblName,$columnName,$columnVal);
	if(!empty($resultRow))
	{
	
		$listArr=array();
		$testTypeDetailsArr=array();
		$row['test_type']= trim($resultRow->test_type);
		
		$resultDet= $this->common_model->getTestTypeDetails($test_type_ID);
		foreach($resultDet as $rowDet)
		{
		 $testTypeDetailsArr[]= $rowDet;
		}
		
		
		$row['testTypeDetails']= $testTypeDetailsArr;
		$listArr=$row;
	
	$response=array("status" => "success","messege" => "ok","list" => $listArr);
	}
	else
	{
$response=array("status" => "success","messege" => "ok","list" => $result);
	} 
	    $this->response($response);
	}
	
	public function doDelete_post() { 

    $action = trim($this->post('action'));
	$id = trim($this->post('id'));

	if($action !='' && $id > 0)
	{
		if($action =='generic_instrument')
		{
		$dataArr=array("is_delete" => "1");
		$whereArr=array("generic_instrument_id" => $id);
	    $tblName='generic_instrument_master';
		}
		$this->common_model->updateData($tblName,$dataArr,$whereArr);
		
	
	$response=array("status" => "success","messege" => "ok");
	}
	else
	{
$response=array("status" => "error","messege" => "Insufficiant Parameter");
	} 
	    $this->response($response);
	}
  
}
?>