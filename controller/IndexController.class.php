<?php
class IndexController extends Controller {
    public $title = '';
    public $mainTitle;
    public $pageId;
    public $jsonDb;
    public $json;
    public $pageName = 'ТехСервис Мастер';

    public function __construct() {
        parent::__construct();
        $this->json = new JsonFileParse();
        $this->jsonDb = $this->json->getArrayFromFile();
        $this->mainTitle = $this->jsonDb['site_name'];
    } 

	public function index($data) {
        $this->pageId = 1;

        // $catTitle = 'Число';
        // $randomData = $this->randomType->getRandomData($catTitle);
        // echo '<pre>'; 
        // print_r($this->jsonDb['site_name']);
        // echo '</pre>';
        // exit;
        $arrayContent = [
            'jsonDb' => $this->jsonDb,
            'pageId' => $this->pageId,
            'siteName' => $this->mainTitle,
        ];
        return $arrayContent;
	}

    public function page404($data) {
        $this->view = '404';
        
        $arrayContent = [
            'siteName' => $this->mainTitle,
        ];
        return $arrayContent;
    }

    public function washing_machine($data) {
        $this->pageId = 2;
        $this->view = 'page2';
        
        $arrayContent = [
            'jsonDb' => $this->jsonDb,
            'pageId' => $this->pageId,
            'siteName' => $this->mainTitle,
        ];
        return $arrayContent;
    }
	
}