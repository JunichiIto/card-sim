require 'opal'

desc "Build our app to dist/simulator.js"
task :build do
  Opal.append_path "src"
  File.binwrite "dist/simulator.js", Opal::Builder.build("simulator").to_s
end
task default: :build
