# Doggy Care App

  An app dedicated to caring for our dogs and pets at home. Scheduled tasks, daily training tips, dog profiles and walking records! Also tracking pet health and diet. Will be using react along with react-pages to create an expendable profile page which updates according to the animal that is clicked.

  Will also try to implement a gps setting for phone users to track their dogs walks in km/mi. Could also potentially show weather. Random daily training tips, links to resources and help Q/A for those tough walkers.
 
 ## Diffilculties as of now
 Pioneering in react, setting local storage is really difficult. As react reloads upon refresh, including the local storage. I made the add dog form to send info as json strings to local storage but getting those strings parsed and into a newer key in local storage to finalize the list of new additions or deletions has proven difficult. So far the only way it works is if I sterlize a new setitem then delete it and never refresh the page, but people cant add keys automatically on their side for that to work. So I need to work with state hook and effect to make that happen, thats where I suffer a lot of weakness in.
