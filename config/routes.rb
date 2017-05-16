Rails.application.routes.draw do
  get 'waypoint/waypoint'
  
  root 'waypoint#waypoint'
end
