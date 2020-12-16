require 'opal'
require 'native'

class Simulator
  def simulate(total_count)
    table = Hash.new(0)
    all_cards = [*1..total_count]
    results = []
    while table.keys.count < total_count
      this_time = all_cards.sample
      result = !table.key?(this_time)
      table[this_time] += 1
      results << { count: results.size.succ, this_time: this_time, result: result, current_count: table.keys.count }
    end
    results
  end
end
