<?php

namespace App\Http\Controllers;

use Vendor\Database\Builder;

class UserController extends Controller
{
    private $db;

    public function __construct()
    {
        $this->db = new Builder();
    }

    public function index()
    {
        $data = $this->db->raw('SELECT * FROM users');

        return $this->response()->json($data, 200);
    }
}