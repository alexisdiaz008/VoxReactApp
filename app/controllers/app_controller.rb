# frozen_string_literal: true

class AppController < ApplicationController

  def index
    @hello_world_props = { name: "Stranger" }
    @audio_clip = AudioClip.new
  end

  def create_audio_clip
  end
end
