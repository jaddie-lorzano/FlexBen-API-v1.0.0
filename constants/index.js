export const EMPLOYEE = {
    CUT_OFF: 15,
}

export const FLEX_BEN = {
    TAX: 0,
}

export const ADMIN = {
    
}

// # DATABASE TABLES AND COLUMNS

export const DB_TABLE = {
    EMPLOYEES : 'employees',
    EMPLOYEE_COLUMN: {
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
    ACCOUNTS : 'accounts',
    ACCOUNT_COLUMN: {
        ACCOUNT_ID: 'account_id',
        EMPLOYEE_ID: 'employee_id',
        PASSWORD: 'password',
        IS_ACTIVE: 'is_active',
        DATE_UPDATED: 'date_updated'
    },
    CATEGORIES : 'categories',
    CATEGORY_COLUMN: {
        CATEGORY_ID: 'category_id',
        CODE: 'code',
        NAME: 'name',
        DESCRIPTION: 'description',
        DATE_ADDED: 'date_added',
        ADDED_BY: 'added_by',
        UPDATED_DATE: 'updated_date',
        UPDATED_BY: 'updated_by',
    },
    COMPANIES : 'companies',
    COMPANY_COLUMN: {
        COMPANY_ID: 'company_id',
        CODE: 'code',
        NAME: 'name',
        DESCRIPTION: 'description',
        LOGO: 'logo'
    },
    ROLES : 'roles',
    ROLES_COLUMN: {
        ROLE_ID: 'role_id',
        NAME: 'name',
        DESCRIPTION: 'description',
    },
    FLEX_REIMBURSEMENTS : 'flex_reimbursements',
    FLEX_REIMBURSEMENT_COLUMN: {
        FLEX_REIMBURSEMENT_ID: 'flex_reimbursement_id',
        EMPLOYEE_ID: 'employee_id',
        FLEX_CUT_OFF_ID: 'flex_cut_off_id',
        TOTAL_REIMBURSEMENT_AMOUNT: 'total_reimbursements_amount',
        DATE_SUBMITTED: 'date_submitted',
        STATUS: 'status',
        DATE_UPDATED: 'date_updated',
        TRANSACTION_NUMBER: 'transaction_number'
    },
    FLEX_REIMBURSEMENT_DETAILS : 'flex_reimbursements_details',
    FLEX_REIMBURSEMENT_DETAIL_COLUMN : {
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
    FLEX_CYCLE_CUT_OFFS : 'flex_cycle_cut_off',
    FLEX_CYCLE_CUT_OFF_COLUMN: {
        FLEX_CYCLE_CUT_OFF_ID: 'flex_cycle_cut_off_id',
        FLEX_CYCLE_ID: 'flex_cycle_id',
        START_DATE: 'start_date',
        END_DATE: 'end_date',
        IS_ACTIVE: 'is_active',
        CUT_OFF_CAP_AMOUNT: 'cut_off_cap_amount',
        CUT_OFF_DESCRIPTION: 'cut_off_description',
    }
}