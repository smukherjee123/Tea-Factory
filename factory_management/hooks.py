# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from . import __version__ as app_version

app_name = "factory_management"
app_title = "Factory"
app_publisher = "frappe"
app_description = "Tea Production & Despatch"
app_icon = "octicon octicon-file-directory"
app_color = "grey"
app_email = "info@frappe.io"
app_license = "MIT"

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/factory_management/css/factory_management.css"
# app_include_js = "/assets/factory_management/js/factory_management.js"

# include js, css files in header of web template
# web_include_css = "/assets/factory_management/css/factory_management.css"
# web_include_js = "/assets/factory_management/js/factory_management.js"

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Website user home page (by function)
# get_website_user_home_page = "factory_management.utils.get_home_page"

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Installation
# ------------

# before_install = "factory_management.install.before_install"
# after_install = "factory_management.install.after_install"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "factory_management.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
#	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"factory_management.tasks.all"
# 	],
# 	"daily": [
# 		"factory_management.tasks.daily"
# 	],
# 	"hourly": [
# 		"factory_management.tasks.hourly"
# 	],
# 	"weekly": [
# 		"factory_management.tasks.weekly"
# 	]
# 	"monthly": [
# 		"factory_management.tasks.monthly"
# 	]
# }

# Testing
# -------

# before_tests = "factory_management.install.before_tests"

# Overriding Whitelisted Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "factory_management.event.get_events"
# }

