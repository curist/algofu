task :default => [:test]

desc "test"
task :test do
  sh "mocha -R spec"
end

desc "watch file changes and running tests all over again"
task :watch do
  sh "mocha -wbR min"
end

desc "run benchmark for sorting implementations"
task :benchmark do
  sh "node benchmarking.js"
end
