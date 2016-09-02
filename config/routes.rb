Rails.application.routes.draw do

  root "application#index"
  
  devise_for :users
  
  resources :courses do 
    resources :chapters
  end

  namespace :api do 
    namespace :v1 do 
      resources :schools 
      resources :courses
    end
  end

  #Subscriptions
  post   "/subscriptions" => "subscriptions#create"
  put    "/subscriptions" => "subscriptions#update"
  delete "/subscriptions" => "subscriptions#delete"

  #Progresses
  get "chapters/read" => "progresses#show"
  post "chapters/mark_as_complete" => "progresses#create"
  delete "chapters/mark_as_incomplete" => "progresses#delete"

  # Users
  get "/my_current_user" => "users#my_current_user"
  get "/subscribers" => "users#subscribers"
  match 'users/:id' => 'users#update_user', via: [:patch]
  get '/send_password' => "users#reset_password"
  
end
