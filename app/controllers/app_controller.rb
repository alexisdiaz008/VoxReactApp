class AppController < ApplicationController

  def index
    audio_clips = AudioClip.all.pluck(:id)
    @props = { 
    	name: "Test File",
    	audio_clips: polymorphic_url(AudioClip.all.last.clip)
     }
  end

  def create_audio_clip
  	# sleep(1)
  	p params
  	# p JSON.parse("#{params}")
    @audio_clip = AudioClip.create(audio_clip_params)
    p @audio_clip
  end

private
  def audio_clip_params
  	params.require(:audio_clip).permit(:name, :clip)
  end
end
