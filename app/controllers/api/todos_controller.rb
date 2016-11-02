class Api::TodosController < ApplicationController
  def index
    @todos = Todo.all
  end
  def show
    @todo = Todo.find(params[:id])
  end

  def create
    @todo = Todo.new(todo_params)
    if(@todo.save)
      render :show
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def update
    @todo = Todo.find(params[:id])
    if(@todo.update(todo_params))
      render :show
    else
      render json: ["Todo not found"], status: 404
    end

  end

  def destroy
    @todo = Todo.find(params[:id])
    if(@todo)
      @todo.destroy
      render :show
    else
      render json: {base: ['Todo not found']}, status: 404
    end
  end

  def todo_params
    params.require(:todos).permit(:title, :body, :done)
  end
end
