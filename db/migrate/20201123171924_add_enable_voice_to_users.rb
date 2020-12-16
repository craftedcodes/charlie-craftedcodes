class AddEnableVoiceToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :voice, :boolean, default: false
  end
end
