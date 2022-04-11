class Api::UsersController < ApplicationController


    def update_image
        puts '--------params -----'
        puts params

        # params[:fileYo]
        render json: params

    end
end
