Spree::Core::Engine.add_routes do
  post '/mercury', :to => "mercury#express", :as => :mercury_express
  get '/mercury/confirm', :to => "mercury#confirm", :as => :confirm_mercury
  get '/mercury/cancel', :to => "mercury#cancel", :as => :cancel_mercury
  get '/mercury/notify', :to => "mercury#notify", :as => :notify_mercury

  namespace :admin do
    # Using :only here so it doesn't redraw those routes
    resources :orders, :only => [] do
      resources :payments, :only => [] do
        member do
          get 'mercury_refund'
          post 'mercury_refund'
        end
      end
    end
  end
end