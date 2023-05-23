*** Settings ***
// Suite Setup — Teardown
// Test Setup — Teardown
// import library


*** Variables ***
// declar variable


*** Keywords ***
Click add todo button
    Element Should Be Visible    ${btn}
    Click Element        ${add_btn}

Add todo 
    Click Element        ${add_textbox}
    Input Text       ${xpath_todo}       ${todo}

Check dark screen
    ${elem}    Get Webelement    css=.post-tag
    ${bg color}    Call Method    ${elem}    value_of_css_property    black

Check white screen
    ${elem}    Get Webelement    css=.post-tag
    ${bg color}    Call Method    ${elem}    value_of_css_property    white


*** Test Cases ***
//--------------------- Validate todo in dark(black) screen---------------------
Open Browser in dark screen
    Open Browser    https://www.stackoverflow.com    gc
    Check dark screen

Add todo
    Open Browser    about:blank    chrome
    Click add todo button
    Add todo in textbox
    Check dark screen

Add todo list
    Open Browser    about:blank    chrome
    Click add todo button
    Add todo in textbox 
    Click add todo button
    Add todo in textbox
    Check dark screen

Notification todo
    Display notification
    Check dark screen

Reminder date and time
    Open Browser    about:blank    chrome
    Click to add date
    Click to add time
    Check dark screen

Reminder Snooze time
    Add todo 
    Add snooze time
    Check dark screen

//------------------- Validate todo in light(white) screen---------------------
Open Browser in dark screen
    Open Browser    https://www.stackoverflow.com    gc
    Check white screen

Add todo
    Open Browser    about:blank    chrome
    Click add todo button
    Add todo in textbox
    Check white screen

Add todo list
    Open Browser    about:blank    chrome
    Click add todo button
    Add todo in textbox 
    Click add todo button
    Add todo in textbox
    Check white screen

Notification todo
    Display notification
    Check white screen

Reminder date and time
    Open Browser    about:blank    chrome
    Click to add date
    Click to add time
    Check white screen

Reminder Snooze time
    Add todo // second test case
    Add snooze time
    Check white screen








