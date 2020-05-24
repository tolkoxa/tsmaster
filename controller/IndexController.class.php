<?php
class IndexController extends Controller {
    public $title = '';
    public $mainTitle;
    public $pageId;
    public $pageName = 'ТехСервис Мастер';

    public function __construct() {
        parent::__construct();
        $this->mainTitle .= 'main';
    } 

	public function index($data) {
        $this->pageId = 1;

        // $catTitle = 'Число';
        // $randomData = $this->randomType->getRandomData($catTitle);
        
        $arrayContent = [
            'pageId' => $this->pageId,
            'title' => '',
        ];
        return $arrayContent;
	}

    public function washing_machine($data) {
        $this->pageId = 2;
        $this->view = 'page2';
        
        $arrayContent = [
            'pageId' => $this->pageId,
            'title' => '',
        ];
        return $arrayContent;
    }
	
}