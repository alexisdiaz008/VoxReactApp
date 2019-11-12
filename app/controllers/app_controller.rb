# frozen_string_literal: true

class AppController < ApplicationController

  def index
    @hello_world_props = { name: "Stranger" }
  end

  def create_audio_clip
  	sleep(3)
  	p "testtestsetstest"

    # @audio_clip = AudioClip.new
  end
end
