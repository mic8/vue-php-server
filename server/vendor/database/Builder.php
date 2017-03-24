<?php

namespace Vendor\Database;

class Builder
{
    public function __construct()
    {
        $this->db = new Connector();
    }

    private function toObject($resultSet)
    {
        $arr = [];

        while($result = $resultSet->fetch_assoc()) {
            array_push($arr, $result);
        }

        return $arr;
    }

    public function raw($query = '')
    {
        $result = $this->db->query($query);

        return $this->toObject($result);
    }
}