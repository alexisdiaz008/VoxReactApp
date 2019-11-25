Rails.application.routes.draw do
  root 'app#index'
  post '/create_audio_clip', to: 'app#create_audio_clip'
  get '/show_audio_clip/:id', to: 'app#show_audio_clip'
end
