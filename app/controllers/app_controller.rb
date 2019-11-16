# frozen_string_literal: true

class AppController < ApplicationController

  def index
  	@audio_clips = AudioClip.all
    @props = { 
    	name: "Test File",
    	audio_clip: AudioClip.last.clip
     }
  end

  def create_audio_clip
  	# sleep(1)
  	p params
  	# p JSON.parse("#{params}")
    @audio_clip = AudioClip.create(audio_clip_params)
    p @audio_clip
  end

  def audio_clip_params
  	params.require(:audio_clip).permit(:name, :clip)
  end
end
