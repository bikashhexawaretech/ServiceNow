var inc = require('./app.js');
inc.statusIncident('INC0000002',function(err,resu){
    var json2=JSON.parse(resu);
    var json={
        "result": {
            "parent": "",
            "made_sla": "true",
            "u_feedback": "",
            "caused_by": "",
            "watch_list": "",
            "upon_reject": "cancel",
            "sys_updated_on": "2018-02-06 15:28:44",
            "child_incidents": "0",
            "hold_reason": "",
            "approval_history": "",
            "skills": "",
            "number": "INC0011076",
            "resolved_by": "",
            "sys_updated_by": "33238",
            "opened_by": {
                "link": "https://dev18442.service-now.com/api/now/v1/table/sys_user/a76af9dd4f1312008a812ed18110c78e",
                "value": "a76af9dd4f1312008a812ed18110c78e"
            },
            "user_input": "",
            "sys_created_on": "2018-02-06 15:28:44",
            "u_fcr": "false",
            "sys_domain": {
                "link": "https://dev18442.service-now.com/api/now/v1/table/sys_user_group/global",
                "value": "global"
            },
            "state": "1",
            "sys_created_by": "33238",
            "knowledge": "false",
            "order": "",
            "calendar_stc": "",
            "closed_at": "",
            "cmdb_ci": "",
            "delivery_plan": "",
            "contract": "",
            "impact": "3",
            "active": "true",
            "work_notes_list": "",
            "business_service": "",
            "priority": "5",
            "sys_domain_path": "/",
            "rfc": "",
            "time_worked": "",
            "expected_start": "",
            "opened_at": "2018-02-06 15:28:44",
            "business_duration": "",
            "group_list": "",
            "work_end": "",
            "caller_id": "",
            "resolved_at": "",
            "approval_set": "",
            "subcategory": "",
            "work_notes": "",
            "short_description": "",
            "close_code": "",
            "correlation_display": "",
            "delivery_task": "",
            "work_start": "",
            "assignment_group": "",
            "additional_assignee_list": "",
            "business_stc": "",
            "description": "",
            "calendar_duration": "",
            "close_notes": "",
            "notify": "1",
            "sys_class_name": "incident",
            "closed_by": "",
            "follow_up": "",
            "parent_incident": "",
            "sys_id": "ca07f0364f8413008a812ed18110c70d",
            "contact_type": "",
            "incident_state": "1",
            "urgency": "3",
            "problem_id": "",
            "company": "",
            "reassignment_count": "0",
            "activity_due": "",
            "assigned_to": "",
            "severity": "3",
            "comments": "",
            "approval": "not requested",
            "sla_due": "",
            "comments_and_work_notes": "",
            "due_date": "",
            "sys_mod_count": "0",
            "reopen_count": "0",
            "sys_tags": "",
            "escalation": "0",
            "upon_approval": "proceed",
            "correlation_id": "",
            "location": "",
            "category": "inquiry"
        }
    };
     console.log("Result Check2 "+json.hasOwnProperty("result"));
    console.log("Result Check "+json2.hasOwnProperty("result"));
    console.log(json2.result[0].category);
    var flag=false;
    
      var output='Incorrect Incident number: ';
      if(resu.hasOwnProperty("result"))
      {
          output="Incident number has been found";
      }
      
   
});
