package com.xwkj.recommend.dao;

import com.xwkj.common.hibernate.BaseDao;
import com.xwkj.recommend.domain.Worker;

public interface WorkerDao extends BaseDao<Worker> {

    /**
     * Get a work by his number.
     *
     * @param number
     * @return
     */
    Worker getByNumber(String number);
}
