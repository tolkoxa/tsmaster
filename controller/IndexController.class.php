<?php
class IndexController extends Controller {
    public $title = '';
    public $mainTitle;
    public $pageName = 'ТехСервис Мастер';
    public $randomType;
    public $history;

    public function __construct() {
        parent::__construct();
        $this->mainTitle .= '';
    } 

	public function index($data) {
        $this->mainTitle .= '';
        // $catTitle = 'Число';
        // $randomData = $this->randomType->getRandomData($catTitle);
        
        $arrayContent = [
            'categoryTitle' => $catTitle,
        ];
        return $arrayContent;
	}
	
}