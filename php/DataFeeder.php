<?php

require('ConfigHelper.php');	

class DataFeeder {

	const DOMAIN = 'http://api.sportradar.us/';

	private $data;

	public function getData($id) {

		$configHelper = new ConfigHelper();
		$apiKey = $configHelper->getApiKey();

		$url = self::DOMAIN . 'mlb-t5/players/' . $id . '/profile.json?api_key=' . $apiKey;
		$ch = curl_init($url);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		$this->data = curl_exec($ch);

		curl_close($ch);
		return $this->data;
	}
}

$dataFeeder = new DataFeeder();
$id = $_GET['id'];
echo $dataFeeder->getData($id);