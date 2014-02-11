require 'sinatra'

get '/' do
  erb :index
end

get '/about' do
	erb :about
end

get '/founders' do
	erb :founders
end

get '/beer' do
	erb :beer
end

get '/contact' do
	erb :contact
end