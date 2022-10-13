// # DATABASE TABLES AND COLUMNS
const DB_TABLE = {
    EMPLOYEES : {
        TABLE_NAME: 'employees',
        EMPLOYEE_ID: 'employee_id',
        COMPANY_ID: 'company_id',
        ROLE_ID: 'role_id',
        EMPLOYEE_NUMBER: 'employee_number',
        FIRST_NAME: 'firstname',
        LAST_NAME: 'lastname',
        EMAIL: 'email',
        IS_ACTIVE: 'is_active',
        DATE_ADDED: 'date_added'
    },
    ACCOUNTS : {
        TABLE_NAME: 'accounts',
        ACCOUNT_ID: 'account_id',
        EMPLOYEE_ID: 'employee_id',
        PASSWORD: 'password',
        IS_ACTIVE: 'is_active',
        DATE_UPDATED: 'date_updated'
    },
    CATEGORIES: {
        TABLE_NAME: 'categories',
        CATEGORY_ID: 'category_id',
        CODE: 'code',
        NAME: 'name',
        DESCRIPTION: 'description',
        DATE_ADDED: 'date_added',
        ADDED_BY: 'added_by',
        UPDATED_DATE: 'updated_date',
        UPDATED_BY: 'updated_by',
    },
    COMPANIES : {
        TABLE_NAME: 'companies',
        COMPANY_ID: 'company_id',
        CODE: 'code',
        NAME: 'name',
        DESCRIPTION: 'description',
        LOGO: 'logo'
    },
    ROLES: {
        TABLE_NAME : 'roles',
        ROLE_ID: 'role_id',
        NAME: 'name',
        DESCRIPTION: 'description',
    },
    FLEX_REIMBURSEMENTS : {
        TABLE_NAME: 'flex_reimbursements',
        FLEX_REIMBURSEMENT_ID: 'flex_reimbursement_id',
        EMPLOYEE_ID: 'employee_id',
        FLEX_CUT_OFF_ID: 'flex_cut_off_id',
        TOTAL_REIMBURSEMENT_AMOUNT: 'total_reimbursements_amount',
        DATE_SUBMITTED: 'date_submitted',
        STATUS: 'status',
        DATE_UPDATED: 'date_updated',
        TRANSACTION_NUMBER: 'transaction_number'
    },
    FLEX_REIMBURSEMENT_DETAILS : {
        TABLE_NAME: 'flex_reimbursement_details',
        FLEX_REIMBURSEMENT_DETAIL_ID: 'flex_reimbursement_detail_id',
        FLEX_REIMBURSEMENT_ID: 'flex_reimbursement_id',
        CATEGORY_ID: 'category_id',
        OR_NUMBER: 'or_number',
        NAME_OF_ESTABLISHMENT: 'name_of_establishment',
        TIN_OF_ESTABLISHMENT: 'tin_of_establishment',
        AMOUNT: 'amount',
        STATUS: 'status',
        DATE_ADDED: 'date_added',
    },
    FLEX_CYCLE_CUT_OFFS : {
        TABLE_NAME: 'flex_cycle_cut_offs',
        FLEX_CYCLE_CUT_OFF_ID: 'flex_cycle_cut_off_id',
        FLEX_CYCLE_ID: 'flex_cycle_id',
        START_DATE: 'start_date',
        END_DATE: 'end_date',
        IS_ACTIVE: 'is_active',
        CUT_OFF_CAP_AMOUNT: 'cut_off_cap_amount',
        CUT_OFF_DESCRIPTION: 'cut_off_description',
    }
}
export default DB_TABLE