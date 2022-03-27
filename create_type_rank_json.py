from bs4 import BeautifulSoup as soup
import json
all_types = ['Rock', 'Steel', 'Bug', 'Fire', 'Normal', 'Electric', 'Poison', 'Fighting', 'Fairy', 'Psychic', 'Flying', 'Ice', 'Ground', 'Dark', 'Grass', 'Water', 'Ghost', 'Dragon']
all_types = [x.lower() for x in all_types]
type_json = "{\"Bug\":{\"Bug\":1,\"Dark\":1,\"Dragon\":1,\"Electric\":1,\"Fairy\":1,\"Fighting\":0.5,\"Fire\":2,\"Flying\":2,\"Ghost\":1,\"Grass\":0.5,\"Ground\":0.5,\"Ice\":1,\"Normal\":1,\"Poison\":1,\"Psychic\":1,\"Rock\":2,\"Steel\":1,\"Water\":1},\"Dark\":{\"Bug\":2,\"Dark\":0.5,\"Dragon\":1,\"Electric\":1,\"Fairy\":2,\"Fighting\":2,\"Fire\":1,\"Flying\":1,\"Ghost\":0.5,\"Grass\":1,\"Ground\":1,\"Ice\":1,\"Normal\":1,\"Poison\":1,\"Psychic\":0,\"Rock\":1,\"Steel\":1,\"Water\":1},\"Dragon\":{\"Bug\":1,\"Dark\":1,\"Dragon\":2,\"Electric\":0.5,\"Fairy\":2,\"Fighting\":1,\"Fire\":0.5,\"Flying\":1,\"Ghost\":1,\"Grass\":0.5,\"Ground\":1,\"Ice\":2,\"Normal\":1,\"Poison\":1,\"Psychic\":1,\"Rock\":1,\"Steel\":1,\"Water\":0.5},\"Electric\":{\"Bug\":1,\"Dark\":1,\"Dragon\":1,\"Electric\":0.5,\"Fairy\":1,\"Fighting\":1,\"Fire\":1,\"Flying\":0.5,\"Ghost\":1,\"Grass\":1,\"Ground\":2,\"Ice\":1,\"Normal\":1,\"Poison\":1,\"Psychic\":1,\"Rock\":1,\"Steel\":0.5,\"Water\":1},\"Fairy\":{\"Bug\":0.5,\"Dark\":0.5,\"Dragon\":0,\"Electric\":1,\"Fairy\":1,\"Fighting\":0.5,\"Fire\":1,\"Flying\":1,\"Ghost\":1,\"Grass\":1,\"Ground\":1,\"Ice\":1,\"Normal\":1,\"Poison\":2,\"Psychic\":1,\"Rock\":1,\"Steel\":2,\"Water\":1},\"Fighting\":{\"Bug\":0.5,\"Dark\":0.5,\"Dragon\":1,\"Electric\":1,\"Fairy\":2,\"Fighting\":1,\"Fire\":1,\"Flying\":2,\"Ghost\":1,\"Grass\":1,\"Ground\":1,\"Ice\":1,\"Normal\":1,\"Poison\":1,\"Psychic\":2,\"Rock\":0.5,\"Steel\":1,\"Water\":1},\"Fire\":{\"Bug\":0.5,\"Dark\":1,\"Dragon\":1,\"Electric\":1,\"Fairy\":0.5,\"Fighting\":1,\"Fire\":0.5,\"Flying\":1,\"Ghost\":1,\"Grass\":0.5,\"Ground\":2,\"Ice\":0.5,\"Normal\":1,\"Poison\":1,\"Psychic\":1,\"Rock\":2,\"Steel\":0.5,\"Water\":2},\"Flying\":{\"Bug\":0.5,\"Dark\":1,\"Dragon\":1,\"Electric\":2,\"Fairy\":1,\"Fighting\":0.5,\"Fire\":1,\"Flying\":1,\"Ghost\":1,\"Grass\":0.5,\"Ground\":0,\"Ice\":2,\"Normal\":1,\"Poison\":1,\"Psychic\":1,\"Rock\":2,\"Steel\":1,\"Water\":1},\"Ghost\":{\"Bug\":0.5,\"Dark\":2,\"Dragon\":1,\"Electric\":1,\"Fairy\":1,\"Fighting\":0,\"Fire\":1,\"Flying\":1,\"Ghost\":2,\"Grass\":1,\"Ground\":1,\"Ice\":1,\"Normal\":0,\"Poison\":0.5,\"Psychic\":1,\"Rock\":1,\"Steel\":1,\"Water\":1},\"Grass\":{\"Bug\":2,\"Dark\":1,\"Dragon\":1,\"Electric\":0.5,\"Fairy\":1,\"Fighting\":1,\"Fire\":2,\"Flying\":2,\"Ghost\":1,\"Grass\":0.5,\"Ground\":0.5,\"Ice\":2,\"Normal\":1,\"Poison\":2,\"Psychic\":1,\"Rock\":1,\"Steel\":1,\"Water\":0.5},\"Ground\":{\"Bug\":1,\"Dark\":1,\"Dragon\":1,\"Electric\":0,\"Fairy\":1,\"Fighting\":1,\"Fire\":1,\"Flying\":1,\"Ghost\":1,\"Grass\":2,\"Ground\":1,\"Ice\":2,\"Normal\":1,\"Poison\":0.5,\"Psychic\":1,\"Rock\":0.5,\"Steel\":1,\"Water\":2},\"Ice\":{\"Bug\":1,\"Dark\":1,\"Dragon\":1,\"Electric\":1,\"Fairy\":1,\"Fighting\":2,\"Fire\":2,\"Flying\":1,\"Ghost\":1,\"Grass\":1,\"Ground\":1,\"Ice\":0.5,\"Normal\":1,\"Poison\":1,\"Psychic\":1,\"Rock\":2,\"Steel\":2,\"Water\":1},\"Normal\":{\"Bug\":1,\"Dark\":1,\"Dragon\":1,\"Electric\":1,\"Fairy\":1,\"Fighting\":2,\"Fire\":1,\"Flying\":1,\"Ghost\":0,\"Grass\":1,\"Ground\":1,\"Ice\":1,\"Normal\":1,\"Poison\":1,\"Psychic\":1,\"Rock\":1,\"Steel\":1,\"Water\":1},\"Poison\":{\"Bug\":0.5,\"Dark\":1,\"Dragon\":1,\"Electric\":1,\"Fairy\":0.5,\"Fighting\":0.5,\"Fire\":1,\"Flying\":1,\"Ghost\":1,\"Grass\":0.5,\"Ground\":2,\"Ice\":1,\"Normal\":1,\"Poison\":0.5,\"Psychic\":2,\"Rock\":1,\"Steel\":1,\"Water\":1},\"Psychic\":{\"Bug\":2,\"Dark\":2,\"Dragon\":1,\"Electric\":1,\"Fairy\":1,\"Fighting\":0.5,\"Fire\":1,\"Flying\":1,\"Ghost\":2,\"Grass\":1,\"Ground\":1,\"Ice\":1,\"Normal\":1,\"Poison\":1,\"Psychic\":0.5,\"Rock\":1,\"Steel\":1,\"Water\":1},\"Rock\":{\"Bug\":1,\"Dark\":1,\"Dragon\":1,\"Electric\":1,\"Fairy\":1,\"Fighting\":2,\"Fire\":0.5,\"Flying\":0.5,\"Ghost\":1,\"Grass\":2,\"Ground\":2,\"Ice\":1,\"Normal\":0.5,\"Poison\":0.5,\"Psychic\":1,\"Rock\":1,\"Steel\":2,\"Water\":2},\"Steel\":{\"Bug\":0.5,\"Dark\":1,\"Dragon\":0.5,\"Electric\":1,\"Fairy\":0.5,\"Fighting\":2,\"Fire\":2,\"Flying\":0.5,\"Ghost\":1,\"Grass\":0.5,\"Ground\":2,\"Ice\":0.5,\"Normal\":0.5,\"Poison\":0,\"Psychic\":0.5,\"Rock\":0.5,\"Steel\":0.5,\"Water\":1},\"Water\":{\"Bug\":1,\"Dark\":1,\"Dragon\":1,\"Electric\":2,\"Fairy\":1,\"Fighting\":1,\"Fire\":0.5,\"Flying\":1,\"Ghost\":1,\"Grass\":2,\"Ground\":1,\"Ice\":0.5,\"Normal\":1,\"Poison\":1,\"Psychic\":1,\"Rock\":1,\"Steel\":0.5,\"Water\":0.5}}"
all_types_data = json.loads(type_json)

def damageFrom(from_types, to_types):
    def _damageFrom(from_type, to_type):
        return all_types_data[to_type.lower()][from_type.lower()]
    from_t = from_types
    to_t = to_types
    if not isinstance(from_types, list):
        from_t = [from_types]
    if not isinstance(to_types, list):
        to_t = [to_types]
    multiplier = 1
    for t1 in from_t:
        for t2 in to_t:
            multiplier *= _damageFrom(t1,t2)
    return multiplier

def pad(text, override=None):
    max_len = override or max(map(lambda x: len(x),all_types)) +2
    new_text =  ' ' + str(text)
    front = False
    while(len(new_text)<max_len):
        if front:
            new_text = ' ' + new_text
            front = False
        else:
            new_text += ' '
            front = True
    return new_text

def print_type_chart():
    print(pad('test',18) + ''.join([pad(x) for x in all_types]))
    for t1 in all_types:
        for t2 in all_types:
            string = pad((t1 + '+' + t2 if t1 != t2 else t1), 18)
            for t3 in all_types:
                string += pad(damageFrom(t3,[t1,t2] if t1 != t2 else t1))
            print(string)


def create_type_rank_dict(INCLUDE_SINGLE_TYPES = False):
    all_stats = {}
    types_done = []
    for t1 in all_types:
        for t2 in all_types:
            for t3 in all_types:
                for t4 in all_types:
                    if not INCLUDE_SINGLE_TYPES and (t1==t2 or t3==t4):
                        continue
                    if t1 == t2:
                        t2 = 'none'
                    if t3 == t4:
                        t4 = 'none'
                    if (t2,t1)  in types_done:
                        continue
                    if not (t1,t2) in types_done:
                        types_done.append((t1,t2))
                    name = (t1 + ',' + t2) if t1!=t2 else t1
                    if name not in all_stats:
                        all_stats[name] = {
                            "offensive_total": 0,
                            "defensive_total": 0,
                            "types_done": [],
                            "does_damage_to": {},
                            "takes_damage_from": {},
                        }
                    if (t4,t3) in all_stats[name]['types_done']:
                        continue
                    if not (t3,t4) in all_stats[name]['types_done']:
                        all_stats[name]['types_done'].append((t3,t4))
                    t1dmg = damageFrom(t1, [t3,t4] if t4!= 'none' else t3)
                    all_stats[name]["offensive_total"] += t1dmg
                    if t3 not in all_stats[name]["does_damage_to"]:
                        all_stats[name]["does_damage_to"][t3] = {}
                    all_stats[name]["does_damage_to"][t3][t4] = {t1: t1dmg}
                    if t2 != 'none':
                        all_stats[name]["does_damage_to"][t3][t4] = {t1: t1dmg, t2:t2dmg, 'sum':t1dmg+t2dmg, 'product': t1dmg*t2dmg }
                        t2dmg = damageFrom(t2, [t3,t4] if t4!= 'none' else t3)
                        all_stats[name]["offensive_total"] += t2dmg
                        if t4 not in all_stats[name]["does_damage_to"]:
                            all_stats[name]["does_damage_to"][t4] = {}
                        all_stats[name]["does_damage_to"][t4][t3] = {t1: t1dmg, t2:t2dmg, 'sum':t1dmg+t2dmg, 'product': t1dmg*t2dmg }
                    t3def = damageFrom(t3, [t1,t2] if t2!= 'none' else t1)
                    all_stats[name]["defensive_total"] += t3def
                    if t3 not in all_stats[name]["takes_damage_from"]:
                        all_stats[name]["takes_damage_from"][t3] = {}
                    all_stats[name]["takes_damage_from"][t3][t4] = {t3: t3def}
                    if t4 != 'none':
                        all_stats[name]["takes_damage_from"][t3][t4] = {t3: t3def, t4:t4def, 'sum':t3def+t4def, 'product': t3def*t4def }
                        t4def = damageFrom(t4, [t1,t2] if t2!= 'none' else t1)
                        all_stats[name]["defensive_total"] += t4def
                        if t4 not in all_stats[name]["takes_damage_from"]:
                            all_stats[name]["takes_damage_from"][t4] = {}
                        all_stats[name]["takes_damage_from"][t4][t3] = {t3: t3def, t4:t4def, 'sum':t3def+t4def, 'product': t3def*t4def }

    for key in all_stats.keys():
        del all_stats[key]['types_done']

    worst_off_score = min([score for (name, score) in [(name,stats['offensive_total']) for (name, stats) in all_stats.items()]])
    worst_def_score = max([score for (name, score) in [(name,stats['defensive_total']) for (name, stats) in all_stats.items()]])
    print(f'worst defensive score: {worst_def_score}')
    print(f'worst offensive score: {worst_off_score}')

    offensiveness = [(name,stats['offensive_total']- worst_off_score) for (name, stats) in all_stats.items()]
    defensiveness = [(name, (worst_def_score- stats['defensive_total'])) for (name, stats) in all_stats.items()]

    best_off_score = sorted(offensiveness, key=lambda item: item[1], reverse=True)[0][1]
    best_def_score = sorted(defensiveness, key=lambda item: item[1], reverse=True)[0][1]
    defensiveness = [(key, round((x/best_def_score)*best_off_score,2)) for (key,x) in defensiveness]

    print(dict(sorted(offensiveness, key=lambda item: item[1], reverse=True)))
    print(dict(sorted(defensiveness, key=lambda item: item[1], reverse=True)))

    final_scores = [(key, round(score + dict(defensiveness)[key],2)) for (key,score) in offensiveness]
    print(dict(sorted(final_scores, key=lambda item: item[1], reverse=True)))
    for i, item in enumerate(sorted(offensiveness, key=lambda item: item[1], reverse=True)):
        all_stats[item[0]]['offensive_score'] = item[1]
        all_stats[item[0]]['offensive_score_placement'] = i  +1
    for i,item in enumerate(sorted(defensiveness, key=lambda item: item[1], reverse=True)):
        all_stats[item[0]]['defensive_score'] = item[1]
        all_stats[item[0]]['defensive_score_placement'] = i+1
    for i,item in enumerate(sorted(final_scores, key=lambda item: item[1], reverse=True)):
        all_stats[item[0]]['total_score'] = item[1]
        all_stats[item[0]]['total_score_placement'] = i+1
    final_json = {}
    for t1 in all_types:
        if t1 not in final_json:
            final_json[t1.lower()] = {}
        for t2 in all_types + (['none'] if INCLUDE_SINGLE_TYPES else []):
            if t1 == t2:
                continue
            data = all_stats.get((t1+ ',' + t2),all_stats.get(t2 + ',' + t1,None))
            final_json[t1.lower()][t2.lower()] = data
    final_json['offensive_ranks'] = {}
    final_json['defensive_ranks'] = {}
    final_json['total_ranks'] = {}
    for i, item in enumerate(sorted(offensiveness, key=lambda item: item[1], reverse=True)):
        final_json['offensive_ranks'][i] = item[0]
    for i,item in enumerate(sorted(defensiveness, key=lambda item: item[1], reverse=True)):
        final_json['defensive_ranks'][i] = item[0]
    for i,item in enumerate(sorted(final_scores, key=lambda item: item[1], reverse=True)):
        final_json['total_ranks'][i] = item[0]
    return final_json

def save_json(final_json):
    with open('./all_types.json','w') as f:
        f.write(json.dumps(final_json))