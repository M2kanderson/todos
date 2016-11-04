class Api::StepsController < ApplicationController

  def index
    @steps = Step.all
  end

  def create
    @step = Step.new(step_params)
    if(@step.save)
      render :show
    else
      render json: @step.errors.full_messages, status: 422
    end
  end

  def update
    @step = Step.find(params[:id])
    if(@step.update(step_params))
      render :show
    else
      render json: ["Todo not found"], status: 404
    end

  end

  def destroy
    @step = Step.find(params[:id])
    if(@step)
      @step.destroy
      render :show
    else
      render json: {base: ['Step not found']}, status: 404
    end
  end

  def step_params
    params.require(:step).permit(:title, :todo_id, :body, :done)
  end
end
