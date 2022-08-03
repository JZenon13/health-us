Rails.application.routes.draw do
  resources :posts, only:[:index, :show, :update, :create, :destroy]
  resources :exercises, only:[:index, :show, :create]
  resources :workouts, only:[:index, :create]
  resources :comments, only:[:index, :show, :update]
  resources :friends, only:[:index]
  resource :user, only:[:index]

  get "/users", to: "users#index"
  get "/friends/:user_id", to: "friends#show"
  get "/postcomments", to: "postcomments#index"
  post "/posts/:post_id/comments", to: "comments#create"
  get "/workouts/:user_id", to: "workouts#show"
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

end
