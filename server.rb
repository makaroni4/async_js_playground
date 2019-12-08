require "sinatra"
require "json"
require "byebug"

request_count = 0

def delay!(params)
  sleep(params[:duration].to_f / 1000)
end

def throw_error!(params)
  error_probability = params[:error_probability].to_f / 100

  if error_probability > 0 && rand() < error_probability
    raise "Error #{request_count}"
  end
end

get "/timeout" do
  delay!(params)
  throw_error!(params)

  request_count += 1

  content_type :json

  {
    request_number: "Response #{request_count}"
  }.to_json
end
