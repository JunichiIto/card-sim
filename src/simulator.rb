require 'opal'
require 'native'

class Simulator
  def self.simulate(number_of_types)
    table = Hash.new(0)
    all_cards = [*1..number_of_types]
    results = []
    while table.keys.count < number_of_types
      you_get = all_cards.sample
      first_get = !table.key?(you_get)
      table[you_get] += 1
      results << { count_total: results.size.succ, you_get: you_get, first_get: first_get, count_distinct: table.keys.count }
    end
    results
  end
end
