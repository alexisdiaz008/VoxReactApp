# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Generate audioclips

audio_clip = AudioClip.create(name:"Test clip")
file = File.open(File.join(Rails.root, "/public/Bloch_Prayer.mp3"))
audio_clip.clip.attach(io: file, filename: "application/mp3", content_type: "application/mp3")