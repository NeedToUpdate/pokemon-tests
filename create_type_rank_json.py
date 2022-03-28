from pickle import FALSE
from bs4 import BeautifulSoup as soup
import json


all_types = ['Rock', 'Steel', 'Bug', 'Fire', 'Normal', 'Electric', 'Poison', 'Fighting', 'Fairy', 'Psychic', 'Flying', 'Ice', 'Ground', 'Dark', 'Grass', 'Water', 'Ghost', 'Dragon']
all_types = [x.lower() for x in all_types]
type_json = "{\"Bug\":{\"Bug\":1,\"Dark\":1,\"Dragon\":1,\"Electric\":1,\"Fairy\":1,\"Fighting\":0.5,\"Fire\":2,\"Flying\":2,\"Ghost\":1,\"Grass\":0.5,\"Ground\":0.5,\"Ice\":1,\"Normal\":1,\"Poison\":1,\"Psychic\":1,\"Rock\":2,\"Steel\":1,\"Water\":1},\"Dark\":{\"Bug\":2,\"Dark\":0.5,\"Dragon\":1,\"Electric\":1,\"Fairy\":2,\"Fighting\":2,\"Fire\":1,\"Flying\":1,\"Ghost\":0.5,\"Grass\":1,\"Ground\":1,\"Ice\":1,\"Normal\":1,\"Poison\":1,\"Psychic\":0,\"Rock\":1,\"Steel\":1,\"Water\":1},\"Dragon\":{\"Bug\":1,\"Dark\":1,\"Dragon\":2,\"Electric\":0.5,\"Fairy\":2,\"Fighting\":1,\"Fire\":0.5,\"Flying\":1,\"Ghost\":1,\"Grass\":0.5,\"Ground\":1,\"Ice\":2,\"Normal\":1,\"Poison\":1,\"Psychic\":1,\"Rock\":1,\"Steel\":1,\"Water\":0.5},\"Electric\":{\"Bug\":1,\"Dark\":1,\"Dragon\":1,\"Electric\":0.5,\"Fairy\":1,\"Fighting\":1,\"Fire\":1,\"Flying\":0.5,\"Ghost\":1,\"Grass\":1,\"Ground\":2,\"Ice\":1,\"Normal\":1,\"Poison\":1,\"Psychic\":1,\"Rock\":1,\"Steel\":0.5,\"Water\":1},\"Fairy\":{\"Bug\":0.5,\"Dark\":0.5,\"Dragon\":0,\"Electric\":1,\"Fairy\":1,\"Fighting\":0.5,\"Fire\":1,\"Flying\":1,\"Ghost\":1,\"Grass\":1,\"Ground\":1,\"Ice\":1,\"Normal\":1,\"Poison\":2,\"Psychic\":1,\"Rock\":1,\"Steel\":2,\"Water\":1},\"Fighting\":{\"Bug\":0.5,\"Dark\":0.5,\"Dragon\":1,\"Electric\":1,\"Fairy\":2,\"Fighting\":1,\"Fire\":1,\"Flying\":2,\"Ghost\":1,\"Grass\":1,\"Ground\":1,\"Ice\":1,\"Normal\":1,\"Poison\":1,\"Psychic\":2,\"Rock\":0.5,\"Steel\":1,\"Water\":1},\"Fire\":{\"Bug\":0.5,\"Dark\":1,\"Dragon\":1,\"Electric\":1,\"Fairy\":0.5,\"Fighting\":1,\"Fire\":0.5,\"Flying\":1,\"Ghost\":1,\"Grass\":0.5,\"Ground\":2,\"Ice\":0.5,\"Normal\":1,\"Poison\":1,\"Psychic\":1,\"Rock\":2,\"Steel\":0.5,\"Water\":2},\"Flying\":{\"Bug\":0.5,\"Dark\":1,\"Dragon\":1,\"Electric\":2,\"Fairy\":1,\"Fighting\":0.5,\"Fire\":1,\"Flying\":1,\"Ghost\":1,\"Grass\":0.5,\"Ground\":0,\"Ice\":2,\"Normal\":1,\"Poison\":1,\"Psychic\":1,\"Rock\":2,\"Steel\":1,\"Water\":1},\"Ghost\":{\"Bug\":0.5,\"Dark\":2,\"Dragon\":1,\"Electric\":1,\"Fairy\":1,\"Fighting\":0,\"Fire\":1,\"Flying\":1,\"Ghost\":2,\"Grass\":1,\"Ground\":1,\"Ice\":1,\"Normal\":0,\"Poison\":0.5,\"Psychic\":1,\"Rock\":1,\"Steel\":1,\"Water\":1},\"Grass\":{\"Bug\":2,\"Dark\":1,\"Dragon\":1,\"Electric\":0.5,\"Fairy\":1,\"Fighting\":1,\"Fire\":2,\"Flying\":2,\"Ghost\":1,\"Grass\":0.5,\"Ground\":0.5,\"Ice\":2,\"Normal\":1,\"Poison\":2,\"Psychic\":1,\"Rock\":1,\"Steel\":1,\"Water\":0.5},\"Ground\":{\"Bug\":1,\"Dark\":1,\"Dragon\":1,\"Electric\":0,\"Fairy\":1,\"Fighting\":1,\"Fire\":1,\"Flying\":1,\"Ghost\":1,\"Grass\":2,\"Ground\":1,\"Ice\":2,\"Normal\":1,\"Poison\":0.5,\"Psychic\":1,\"Rock\":0.5,\"Steel\":1,\"Water\":2},\"Ice\":{\"Bug\":1,\"Dark\":1,\"Dragon\":1,\"Electric\":1,\"Fairy\":1,\"Fighting\":2,\"Fire\":2,\"Flying\":1,\"Ghost\":1,\"Grass\":1,\"Ground\":1,\"Ice\":0.5,\"Normal\":1,\"Poison\":1,\"Psychic\":1,\"Rock\":2,\"Steel\":2,\"Water\":1},\"Normal\":{\"Bug\":1,\"Dark\":1,\"Dragon\":1,\"Electric\":1,\"Fairy\":1,\"Fighting\":2,\"Fire\":1,\"Flying\":1,\"Ghost\":0,\"Grass\":1,\"Ground\":1,\"Ice\":1,\"Normal\":1,\"Poison\":1,\"Psychic\":1,\"Rock\":1,\"Steel\":1,\"Water\":1},\"Poison\":{\"Bug\":0.5,\"Dark\":1,\"Dragon\":1,\"Electric\":1,\"Fairy\":0.5,\"Fighting\":0.5,\"Fire\":1,\"Flying\":1,\"Ghost\":1,\"Grass\":0.5,\"Ground\":2,\"Ice\":1,\"Normal\":1,\"Poison\":0.5,\"Psychic\":2,\"Rock\":1,\"Steel\":1,\"Water\":1},\"Psychic\":{\"Bug\":2,\"Dark\":2,\"Dragon\":1,\"Electric\":1,\"Fairy\":1,\"Fighting\":0.5,\"Fire\":1,\"Flying\":1,\"Ghost\":2,\"Grass\":1,\"Ground\":1,\"Ice\":1,\"Normal\":1,\"Poison\":1,\"Psychic\":0.5,\"Rock\":1,\"Steel\":1,\"Water\":1},\"Rock\":{\"Bug\":1,\"Dark\":1,\"Dragon\":1,\"Electric\":1,\"Fairy\":1,\"Fighting\":2,\"Fire\":0.5,\"Flying\":0.5,\"Ghost\":1,\"Grass\":2,\"Ground\":2,\"Ice\":1,\"Normal\":0.5,\"Poison\":0.5,\"Psychic\":1,\"Rock\":1,\"Steel\":2,\"Water\":2},\"Steel\":{\"Bug\":0.5,\"Dark\":1,\"Dragon\":0.5,\"Electric\":1,\"Fairy\":0.5,\"Fighting\":2,\"Fire\":2,\"Flying\":0.5,\"Ghost\":1,\"Grass\":0.5,\"Ground\":2,\"Ice\":0.5,\"Normal\":0.5,\"Poison\":0,\"Psychic\":0.5,\"Rock\":0.5,\"Steel\":0.5,\"Water\":1},\"Water\":{\"Bug\":1,\"Dark\":1,\"Dragon\":1,\"Electric\":2,\"Fairy\":1,\"Fighting\":1,\"Fire\":0.5,\"Flying\":1,\"Ghost\":1,\"Grass\":2,\"Ground\":1,\"Ice\":0.5,\"Normal\":1,\"Poison\":1,\"Psychic\":1,\"Rock\":1,\"Steel\":0.5,\"Water\":0.5}}"
all_types_data = json.loads(type_json.lower())

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

def getAllTypes():
    html = soup(open('./pokmondb.html'), 'lxml')
    all_pokemon = []
    for el in html.find_all('tr'):
        if(len(el.find_all('td'))!=10):
            continue
        mon = {}
        all_a = el.find_all('a')
        # mon['name'] = all_a[0].get_text()
        # mon['types'] = list(map(lambda x:x.get_text(),all_a[1:]))
        # mon['dex'] = int(el.td['data-sort-value'])
        # if(mon['dex'] not in map(lambda x: x['dex'],all_pokemon)):
        types = list(map(lambda x:x.get_text().lower(),all_a[1:]))
        if len(types) == 1:
            types += ['none']
        all_pokemon.append(tuple(types))
    return all_pokemon
    


def create_type_rank_dict(INCLUDE_SINGLE_TYPES = False, MAKE_4X_IMPORANT=False, SINGLE_TYPES_HIT_TWICE = False, GIVE_BONUS_TO_ABILITIES=False, INCLUDE_PREVALENCE=False, ONLY_USE_BEST_MOVE=False):
    all_stats = {}
    types_done = []
    every_type = getAllTypes()
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
                            "does_4x":0,
                            "does_2x":0,
                            "does_neutral":0,
                            "does_0.5x":0,
                            "does_0.25x":0,
                            "does_0":0,
                        }
                    if (t4,t3) in all_stats[name]['types_done'] or (t3,t4) in all_stats[name]['types_done']:
                        continue
                    if not (t3,t4) in all_stats[name]['types_done']:
                        all_stats[name]['types_done'].append((t3,t4))

                    prevalence = 0
                    if INCLUDE_PREVALENCE:
                        prevalence = every_type.count((t3,t4)) + every_type.count((t4,t3))
                        prevalence = (prevalence/len(every_type))*100
                        self_prevalence = every_type.count((t1,t2)) + every_type.count((t2,t1))
                        self_prevalence = (self_prevalence/len(every_type))*100
                        all_stats[name]['prevalence'] = str(round(self_prevalence,2)) + '%'
                    #offensive
                    
                    t1dmg = damageFrom(t1, [t3,t4] if t4!= 'none' else t3)

                    def recordDmg(dmg):
                        if dmg == 4:
                            all_stats[name]['does_4x'] += 1
                        if dmg == 2:
                            all_stats[name]["does_2x"] += 1
                        if dmg == 1:
                            all_stats[name]["does_neutral"] += 1
                        if dmg == 0.5:
                            all_stats[name]["does_0.5x"] += 1
                        if dmg == 0.25:
                            all_stats[name]["does_0.25x"] += 1
                        if dmg == 0:
                            all_stats[name]["does_0"] += 1
                    recordDmg(t1dmg)

                    def applyFiltersOff(input):
                        num = input
                        if MAKE_4X_IMPORANT:
                            num = num**2
                        if GIVE_BONUS_TO_ABILITIES:
                            if set([t1,t2]) & set(['water','fire']):
                                num +=0.10 
                        if t2 == 'none' and SINGLE_TYPES_HIT_TWICE and not ONLY_USE_BEST_MOVE:
                            num *=1.5
                        if INCLUDE_PREVALENCE:
                            num*= prevalence
                        return num

                    def bestHitExplained(t1,t2,use):
                        if not use:
                            return t1
                        if t1 > t2:
                            return str(t1) + ' (used)'
                        elif t1 < t2:
                            return str(t1) + ' (not used)'
                        else:
                            return str(t1) + ' (equal)'
                    

                    if t3 not in all_stats[name]["does_damage_to"]:
                        all_stats[name]["does_damage_to"][t3] = {}
                    all_stats[name]["does_damage_to"][t3][t4] = {t1: t1dmg}
                    
                    
                    t1dmg_filt = applyFiltersOff(t1dmg)


                    if t2 != 'none':
                        t2dmg = damageFrom(t2, [t3,t4] if t4!= 'none' else t3)
                        recordDmg(t2dmg)
                        all_stats[name]["does_damage_to"][t3][t4] = {t1: bestHitExplained(t1dmg,t2dmg,ONLY_USE_BEST_MOVE), t2:bestHitExplained(t2dmg,t1dmg,ONLY_USE_BEST_MOVE) }
                        if t4 not in all_stats[name]["does_damage_to"]:
                            all_stats[name]["does_damage_to"][t4] = {}
                        all_stats[name]["does_damage_to"][t4][t3] = {t1: bestHitExplained(t1dmg,t2dmg,ONLY_USE_BEST_MOVE), t2:bestHitExplained(t2dmg,t1dmg,ONLY_USE_BEST_MOVE) }
                        t2dmg = applyFiltersOff(t2dmg)
                        if ONLY_USE_BEST_MOVE:
                            t2dmg = max(t1dmg_filt,t2dmg)
                            t1dmg_filt = 0
                        all_stats[name]["offensive_total"] += t2dmg
                    all_stats[name]["offensive_total"] += t1dmg_filt
                   

                    #defensive

                    t3def = damageFrom(t3, [t1,t2] if t2!= 'none' else t1)
                    if t3 not in all_stats[name]["takes_damage_from"]:
                        all_stats[name]["takes_damage_from"][t3] = {}
                    all_stats[name]["takes_damage_from"][t3][t4] = {t3: t3def}
                    
                    def applyFilters(input):
                        num = input
                        if MAKE_4X_IMPORANT:
                            num = num**2 if num!= 0 else -2
                        if GIVE_BONUS_TO_ABILITIES:
                            if 'grass' in [t1,t2] and 'grass' in [t3,t4]:
                                #arbitrary, for powder move resistance
                                num -= 0.2
                            if 'dark' in [t1,t2] and 'dark' in [t3,t4]:
                                #arbitrary, for prankster resistance
                                num -= 0.2
                            if 'fire' in [t1,t2] and 'fire' in [t3,t4]:
                                #arbitrary, for powder move resistance
                                num -= 0.2
                            if 'electric' in [t1,t2] and 'electric' in [t3,t4]:
                                #arbitrary, for prankster resistance
                                num -= 0.2
                            if set(['rock','ground','steel']) & set([t1,t2]):
                                #arbitrary, for sandstorm defensive boost
                                num -= 0.1
                        if t4 == 'none' and SINGLE_TYPES_HIT_TWICE and not ONLY_USE_BEST_MOVE:
                            num*=1.5
                        if INCLUDE_PREVALENCE:
                            num*= prevalence
                        return num
                    t3def_filt = applyFilters(t3def)
                    
                 

                    if t4 != 'none':
                        t4def = damageFrom(t4, [t1,t2] if t2!= 'none' else t1)
                        all_stats[name]["takes_damage_from"][t3][t4] = {t3: bestHitExplained(t3def,t4def,ONLY_USE_BEST_MOVE), t4:bestHitExplained(t4def,t3def,ONLY_USE_BEST_MOVE) }
                        if t4 not in all_stats[name]["takes_damage_from"]:
                            all_stats[name]["takes_damage_from"][t4] = {}
                        all_stats[name]["takes_damage_from"][t4][t3] = {t3: bestHitExplained(t3def,t4def,ONLY_USE_BEST_MOVE), t4:bestHitExplained(t4def,t3def,ONLY_USE_BEST_MOVE) }
                        t4def = applyFilters(t4def)
                        if ONLY_USE_BEST_MOVE:
                            t4def = max(t3def_filt,t4def)
                            t3def_filt = 0
                        all_stats[name]["defensive_total"] += t4def

                    all_stats[name]["defensive_total"] += t3def_filt

    for key in all_stats.keys():
        del all_stats[key]['types_done']


    worst_off_score = min([score for (name, score) in [(name,stats['offensive_total']) for (name, stats) in all_stats.items()]])
    worst_def_score = max([score for (name, score) in [(name,stats['defensive_total']) for (name, stats) in all_stats.items()]])
    

    offensiveness = [(name,stats['offensive_total']- worst_off_score) for (name, stats) in all_stats.items()]
    defensiveness = [(name, (worst_def_score- stats['defensive_total'])) for (name, stats) in all_stats.items()]

    best_off_score = sorted(offensiveness, key=lambda item: item[1], reverse=True)[0][1]
    best_def_score = sorted(defensiveness, key=lambda item: item[1], reverse=True)[0][1]
    defensiveness = [(key, round((x/best_def_score)*best_off_score,2)) for (key,x) in defensiveness]
    final_scores = [(key, round(score + dict(defensiveness)[key],2)) for (key,score) in offensiveness]

    
    for key in all_stats.keys():
        all_stats[key]['offensive_total'] = round(all_stats[key]['offensive_total'],2)
        all_stats[key]['defensive_total'] = round(all_stats[key]['defensive_total'],2)


    for i, item in enumerate(sorted(offensiveness, key=lambda item: item[1], reverse=True)):
        all_stats[item[0]]['offensive_score'] = round(item[1],2)
        all_stats[item[0]]['offensive_score_placement'] = i  +1
    for i,item in enumerate(sorted(defensiveness, key=lambda item: item[1], reverse=True)):
        all_stats[item[0]]['defensive_score'] = round(item[1],2)
        all_stats[item[0]]['defensive_score_placement'] = i+1
    for i,item in enumerate(sorted(final_scores, key=lambda item: item[1], reverse=True)):
        all_stats[item[0]]['total_score'] = round(item[1],2)
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

def save_json(final_json, name):
    with open(name,'w') as f:
        f.write(json.dumps(final_json))

def title(a,b,c,d,e,f):
    string = './all_types'
    if a:
        string += '_wsing'
    if b:
        string += '_4x'
    if c:
        string += '_singx2'
    if d:
        string += '_abil'
    if e:
        string += '_prev'
    if f: 
        string += '_1mov'
    string += '.json'
    return string 

import itertools
def createAllPermutations():
    #really terrible way of doing this. but idc just wanna do this in 15 min nobody cares
    for permutation in itertools.product([True,False], repeat=6):
        name = title(*permutation)
        print(name)
        data = create_type_rank_dict(*permutation)
        save_json(data, name)

createAllPermutations()
# all = getAllTypes()
# print((all.count(('rock','fire'))+ all.count(('fire','rock')))/len(all))