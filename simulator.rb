require 'opal'
require './lib/jquery.js'
require 'opal-jquery'

class Simulator
  def simulate(total_count)
    table = Hash.new {|h, k| h[k] = 0}
    all_cards = (1..total_count).to_a
    count = 0
    results = []
    while table.keys.count < total_count
      this_time = all_cards.sample
      result = !table.key?(this_time)
      table[this_time] += 1
      count += 1
      results << {count: count, this_time: this_time, result: result, current_count: table.keys.count}
    end

    results
  end
end
