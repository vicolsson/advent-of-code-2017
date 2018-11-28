let removedGarbage = 0;

const solvePuzzle = (input) => {
  input = input.replace(/!.{1}/g, '');
  removeGarbage(input);
  return removedGarbage;
}

const removeGarbage = (input) => {
  let startGarbageIndex;
  for (let index in input) {
    index = parseInt(index);
    const char = input[index];
    
    if (!startGarbageIndex && char === '<') {
      startGarbageIndex = index;
    } else if (startGarbageIndex && char === '>') {
      input = input.substring(0, startGarbageIndex) + input.substring(index + 1, input.length);

      removedGarbage += index - (startGarbageIndex + 1);

      return removeGarbage(input);
    }
  }

  return input;
}

const result = solvePuzzle(`{{{{{<!!!>!>'!!!>!!!!!!!>u!!!!!>},<'>,<!>e{o!!!>!'>}},{{{<!!u<>},<!!!!!>!'!!a}!!!>,<!>!!!!!i!!,e!>,<i{o!>},<!!>}},{{},{{<e},!>},<!{"!!'e'>},<auu<oa{!!!>!i>},{<a!!,'<!>>,{<a}!!!>a>}}},{{{{<!!'!>,u!!,}!!!>!!"'!!!>,i!!e>},<!!}<!>},<!!!!'i!!!>ii{!>},<!>,<!!"!>">}},{<!!ua<!>},<{!!!>!>},<!<e''!!!>ou!!!!!>!"!!!!!!!>!!>,{<!>},<u!!a!>,<!><"ui!!,u'!>,<!!!>!!o!!a>}},{{<"!!<<!>,<!>},<o{<e!!!>!!"<!>},<o>}}}}},{{{{{{{{{<!>!>,<,>},{<!>,<,}!>},<!a"!!!>},<,!!!>,<!!!>!!!>'>}},{{<{}!!e!!!!>},{<e!!!><!!!!'!>,<ea!!u'i,e{!i>,<""a!!!>},<o>}},{<!>,<!u<!!!!au!!!>!eia'!>},<!>,<!<>,{}}},{<,oo>,{{<!>},<ei,{<oeo,!!'a!!!>!>},<''>,{<{e!!!>!!!>}>}},{{}}}},{{<i!!'}u!>>}}},{{{{<!>,<oe}'u<!>,<e"e!a>}},{{}},{{{{<!!!!!>o!!!>!!"o!!!>>}},{<'>}},{<e>}}},{{<!>,<!!o<<!>i>}},{}}},{{{<a!>!>},<!!!!{!a,!!!>{!"i!}oie>},{<e!!!!!>,<,">}}},{{{},{{{{{{<{uu{'!!>},{<>,<!aeoae>}},{{{<!!!>,<!<<!>,<!!!!i<!!!ue!>,<ui}o!!e>}},<!>,<!!e"i!!'{"'>}},{}}},<'i!!ueiu,!>},<!>},<!>!!<"}!!!>,<!>},<>}}}},{{{{<,!>},<',!!',ei!>!>},<!}!!!>i!!}ee,>,{{}}},{{{<'a'!!e!"i!>o!!!>!!!>!!!>{!!!>,<,>},<ei!<!!<!{e{ua>},{<!!!>,<{!!!!!>!!,!!!>>,{<,!!>}},{<!>,<!>!>}e!>},<!!!>}{'!!!>o>}},{}},{{{<!!!uu!!!!!!!i<>,{<,}"!>!!!>}o!>,<>}}},{{{{{<!>,<u!oo!>,<!!}a<>},{<!!!'!>o>}},<o!>,<!<!>,<<ii>}},{},{{<<!>,<>},{<i!>"o!!aue,>,<i!>},<!>},<<!!e!!i>}}},{<!>},<!!{"!>,<!o!}!>},<o,o'!>!!a,e!!!!!>,<>,{<u"!!!>!>},<!!>}}}},{{{{{<!>},<!!!>!>,<o>,{<!!!!!>!!!!o!>},<!>u!>,<!!!>i!o!>!e<!!!>''!>!>i>,{{<,u'!>i"o!!"}>}}}}},{<!!!!'}{>}},{<!>"}{!>},<!>},<i<!!!>,<i<>,<"!>,<"u>},{{}}},{{{{{<!!'e!!!!!>>,<!!a{o!>u,,o}"{>},{<!>,<<,!!!>,!>o!,!>,<!!!!'>}}},{{{<uo!!!>!>},<!>,<e>,{}},{<!!'a",!}!!!>!!i>,{{},{<!!!!!e!!"e!>},<'{<!!!>},<o!!u!!!!!>{{!>,<>}}}},{{<,<!,!!">},{{{}},<!"o<o!!}!>},<!>,<{!!!!!>"o!!<,e!o!!!!!>},<!>},<>},{<i!>},<>}},{{<'!>!>!>,<>},<"io!!!''!!!>!!o!!o!!!>,<<i<i!!!>!>,<>}},{}},{{{<'i!!!'}!!!>!>!!u!!!u!>oo!>},<>},{<!!,i!>,<!!a!>!>,<u!>},<ae>}}}},{{<{i!!iu!,!!'!!!!{"!!!>>,{<!a'>}},{{<",!>a{a!!{i!>,<!>},<}u!>,<!>!!oii>},{{<'u!!"!!!>}a!!e!aa!>,<i!!!>!!!>,<<>},<!>},<"}"!!!>i!>,<>}},{{<!!u!a',"{>,{<'}"!!!o!>},<!!'!!<a,,"!!,uo>}},{<e!>,<e{!!,}<!!<!!eu<<uui>,{<{!>,<"!>,<,!!,!!,e!!{{a,!!!!!>},<<a>}}}},{{<}!>'!!{,<!}!!"!!e!!u"e,!!i>,<!!!>e!>,<!>},<!!!!!>>},{{{{{{<!!""!!!a!u>}}},{}},{{<eio>}}}}}}},{{{{},<!!'<!!!>},<u!>!!!!i}e!!},!>,<{!>,<!!!>>},{<'!'''!>o"},!!e{!"o!>,<u!!!>{!>u>,{}}},{{{<!>,<u"o"{!!!>!>!!o!!}iou>}},{{{},<io<!!'"!>,<!>,<!!!>a<>},{<!>,<a!>},<<o!!!>{i!!o>,<!ao!>,<!!"!!u{!!{!!!!<!!e<!!a}{u}{!!!!a>}}}}},{{{{<!!!><!>},<!>},<a!"!>,<,!!!!!!,!!!>,<a!!e>}},{{<!!o<!u!!ee{>},{<!!!><<o<"e>,{<!>},<{!,!!u!!!!!!!!!>},<!!!>,!!!>i!!{<!>,<!!>}}},{<!!!!!>o!>'<!{<{!!{!!>,{<"!>!>!>},<!!!><'{o{e!>,<,a}!!i>}}},{{},{},{<!!!!a!>},<!!!}!>,<!!!>e!!!!!!!!e}!!!!a!!'}">}},{{{{<!>},<i!!!>!>},<uu<o{io>},<e<!!!>!!!>i}!>,<<>},{},{{{},{<i"!!a!!i!!!!}!>},<!}{<!'o!uu,>}},{<u!!eo!!{eo!>,<'!!!>{!!>}}},{{},{<!!!>'""!o!>,<>,<i<!>!!!>ue!!!>i{'!u<<!!!>,!,>},{{<e>}}},{{{},<!>,<!!!>,i}},!>,<!!e!!>},{{<!!!!}e!!i!'"!iu!>},<!!{!!u>},<u!>>}}},{{<"}<!!!>},<ou!o}!>,<>,<!!!>'!!!'u!!!!!u!!}>},{{<!!!>!>},<}>},<!!<!"!,'u!!!>!!,a','>},{{<u>,{}}}}},{{{{{{}}},{{{{{<aa,,!>!>,<>}},{{<oo>}}},{<}!>,<,{i!!}!>},<!!!>>},{{{{<a!!!>,<!'<!>"!!!>u<i!>},<a}'}!<ie>,{<!>,<o!!!!!>i"a}!!}a!>i<!>},<!!!>!!a!!!>>}}},{{},{}},{{{{<!>,<"u<!!}ui!!e<!a}u!>},<!!",>}},{}},{{{<">,<!>},<!!!>!!u>},{<!>,<{>,{{<"ie!}!>a!e>,{}}}},{<}i''ua{!>},<>}},{{},{<!>},<!>!>},<o},!!!>!>},<<!>,<u{,!>},<,a,>}}}}},{{},{{<,"u{>},{}}}}},{{<,!!i!!i!!!!"a"!!!>!>,<>,<e,a,}!>,<<!!!<>}},{<!!!!!>!!ou>,<<!>},<}u!!!!!>{!!,!>,<i!>,<>}},{{{<a!>{!>},<!>">},<a!o!!!>!i"!><!>,<"i}!>!>!>a>}}},{{{{<a>,<!!!>!>e!!>},{<!!a!!>},{{{},{<i>}},{}}},{{{<!>},<>,<"'<<!,">}},{{<e!!""!e!>"iaa,a>}}},{{{}},{{}},{}}},{{{},{<!i>}},{{}},{{{{<<!>},<{a!!!>!!!>}ua!!!!!>a>},{<ea!!{i!!,!!a"}!!}{u'!>ae!!!>'>}},{<>}},{{<!>},<!',!<<,!>,<>,<{,"ea>}},{<u,o!!u>,{{},<}!!{!>},<i!!!"<!!}!>},<ieo!>!>,<{!>},<!{!<!>,<!!u>}}}},{{<!!"',u"}u!>,<>}},{{{<u!>,<!a!!o>},{<!>},<!>{!>'!!u!!!!'!>,<!!<!>,<!!!>},<},!!!!'>}},{},{{{{<<ou!!e!>},<i>},{<}{!>},<!>,<!>"''!!!>a<!!!>o!!!>ue>,<!<,'!>,<<!>,<o}!!!>,<!!!>}o!!ea}>}},{{<!>eo,a!>!>},<<a!'!>},<"!u!{i!!!!e!>,<,!!u>},<{}>}}}}}},{{{}}}},{{{<,au'!>},<oo!>,<!i},}"!>},<>,<i!!!!!>},<{!!!>!>!!o'"!>!,"}!">}},{{<!!'ia!!o{e}'!>!>!!!>",!!!!!!!!!!!<!>},<>,{<!!""}!'<"{!!!>>}},{{{}}},{{<!!!>i!!!>!>},<!!!!!>!>e!!!>,<!>},<!!}eei<i!!!!uu>},{}}},{{<>},{{<!i<!!a}u!!!>"!>,<'!!!>,!>},<<!>},<ui!>,<>},<<!>o<"!!!!e}}!!!!}!!!>!!">},{{<,<!!!>e>,<!e!i!>i{<!}!>},<}!!!>>},{{<"e""!}u"!!!>!>,<!!">},{<!!!>!>},<oo!!!>'!!e!!!>!>,<!!!>,<{iau!>},<eo'>,<!>{u{e!!"}u!!<!'o>}},{}}}},{{{{{<!o!>},<>,{<o{ee!>}"!!!>},<!!o!>!!!!!>!!!>},<!>!>,<oa>}}}},{{{{<{i!!uu',",u>},<a!>,<"!!,i,!!a!>!!o!>,<!a!!e,!>},<>},<,o<!!!>!!!>o!>o>},{},{<'u!>,<!!!!>,{<i!!!>!>},<!!i!!""{!!e}u!>},<i}!!'e!!!>{'>}}}},{{{<e!>},<,!>>,{<""a'oa<!a}!!!>!>,<>,{<!>},<>}}},{<ou!!!>,!!!>,<>}},{{{<e{!!{!!!>!!!>a!!!o!!!>!!'e!>,<}o{!>},<!!">,<,'>},<!!!,!}i!>oa!>,<i"<!!<',!o>},{<i!>},<>}},{}},{{{{<,{!!o!>i>}},{<oe!>,<,"o!>},<a>}},{<i'!',!>,'>,<o<a!>},<<!>},<!!!>"!!!!o<a>},{}}}},{{{{{<a!iaou>},<!!!!!!!>ua,!>o"}e!>},<e,>},{{<,!!!>!!!><o!>,<!>,<<!>},<!>{a{i!>},<u>}}},{{{<>,{<!>,<u'i!o!>},<>}},{{}}},{{{<>}},{{<'!>,<!>},<",!!o}}{!>},<oo!!!>>},{{{{<'}!!!>,{a>},{}},{<!!!>o'!u"!!!>,<!!!!!>!a!!!>>}},{{<'!!!>,<'"}>}},{}},{{<!!!>e,o<uao>,{<<">}},{},{{{},{{<{e!!!>{!!!>},<"!"!!!>!>},<>},{<o'!!!>{>}}},{{{<'!>},<,!!e>}}}}}},{{<aioa!>{{!>,<",!>,<!!o!!a>,{{<}!>,<<!!!!!>!>},<,'{,}!>{uiu,!!i">},<!!!>u>}},{{<!!!>!!!!!!!!!>ae}'"!ua<i,!!!>,<oe!!!>>},<}!>},<!!!>}}ui!}u>},{{},{}}}},{{},{<!!!>,<!!!>o!!!!o'!!!!!>{u!>,<!>},<'i,!!}<!!,>}}},{{{<u'a,!!!>i>}},{{{{{<!!!>}e,""!{!!!!""!>!!!>ea>}}},<!!!!",'!!!>,<!!!>!!!>!<!!!>,<}>},{{<'!!!'!>ee!>,<>,<!!}!'>},<""!!!>},<i!o<!>,<eie!!",!>e>}},{<!!!>},<i!!!>'"!!!>!!<!>},<a!!,!>},<>}}},{{{{{<!>},<u!>,<!>,<!!{'!>},<!>},<<<>}},{<a!!!!!!!>!>},<<!o<"u<a'">,<!!!>,<'<!>},<!!!e!>},<!!!>oe,!!<>}},{{{{<u''!a",<io!>,<!>'a!!!>,<!!{"!!u'>},{<'!>},<!>,<!!a!>!>},<a!a!!,>}}},{{<!>},<oa>,{{{<!>},<!!o,>}},<i}u!>},<a!>},<<<!}!!!>!"e<!!!>!>},<}i>}}},{<{>,{<!>},<!>,<}{a!>,<u!>},<e!o>,{<!{e!!!>!>,<e!,!!o',>}}}},{{<'!<<i,a!!!!!o>},{{<<"}'!>},<<ao>},{<!!o!<!!!>>}},{{{},{{<!aoa{!>,<i!!e!{!!!!e!'ao!!!>,<}!>!!!>e!!{>}}},{},{{<i!>,<!>},<!>},<!>iaeo>},{{{{<!!u}!!!!,!!!!"uo!>,<<'o!>,<!>},<'i!!!>},<">},{<ii>}},<,>},{{<!>},<!>},<>,{<u>}},{<!>},<!!!!!!'"!!!>!>},<{!!!>i!>ao!>i>}},{{}}},{<i!!'!!!>e<{o"!!!!!>'>,{}}}}},{{{{<ou!{"!>},<!>},<>},<!!!>iauiui!>},<>},{<!!}e}e'!>,<!!!>>}}}}},{{{},{<!!!>}eoei!!!>u!>},<ie!!!>">,{{{<e!o!>},<}!>},<!>!!ie!,!!!i!oi!!!>},<!!!>>}}}}},{{<}!!e!iieu!!'>},{{<!>,<!!!!!>>,<}o!!!>>}},{{<!>!!u!!!>>}}},{{<!>},<<!>},<},,!!!<'u,!!o!!i<u{">,{<!>,<}!>,<!>!>,<!!!!!>!!!>!!!!}u"}i>}},{{{{<{e!>,<e{'i!oiu>},{{{{<>},{<"e!>},<ie">}}},<uu'<{<!>,<,}!!!>!!!!!>,<!!'o!!u'{>}}},{},{{},{<!!,'}!>!!!!!!!>,o!<!!!>'!>,<>,<o}!>!>,<{!!e!!,!>!!e!>,<!>i!!<{>},{}}}},{{{}},{{{<!!eu!!{o!!!>!>!!!!!!"!!!!>}},{},{<!!!>!!!!!>'oaii!!!>e!>,<!!!!!!!!!>!!!>o!>},<!!!>a>,<!!!>'!!i}u'{e!'!>e!>'!}!!>}},{{<!!!>!>},<o!!!}!!!>}'!!!>>,{}}}}}},{{{{{},{{<}u!!!!i<e!!a,i>}}}},{{<!!<}{<<u}u!>{ioe!!>,<''!!'e}!>>},{<u}eai>}},{{<'!,o>},{{}}},{{}}},{{{{{},<!!<u!!{o!}!!!>"<!>,<!,>},{{{},{}},{{<i,!>!>,<"<!}'!>,<!{>},{<!!!>}a!>ae!!!>o!!u!!"e!!<'o{>,<u<!{!>},<{>}},{{{<{}eeoua!!!>},<!!o"'{{>}},{<u!!!>!!}!!!!!>!u>},{{{<!!!>!>,<'a!>}!>!!<,u"!>!,{e<>},{{<!!eu!e!aa"'o'"!>u"'<!>>,<!>},<!!>}}},{<,eo'}o!'{>,<ia,!>i!!a"!!!>!>},<}!a!!!>!!!!!>,<ee>}}}}},{{{<!>u!!o'!!}!!!!!>!!!>>},<e<!>},<u!!>},{{<,!>!i!!<!>,<!>},<!>!>,<!!!!ao{<ae,,!>},<>,<<"e!>!>!>,<u!!!!u!!!!!>,o!>,<o!!!!!>},<a>},{{}}},{}}},{{{{},{},{<"!"<"!,!!!!!>eau!>,<,>}}}},{{{{{{}},<o<i!!!>,!>,<a,!!!>!!!>!!!>!<<<>},{<a{ue>,{<a!>!>"i!o,!!{!>},<a!!!!>}},{<"ia,i>,<'!>ioi!>},<>}},{{{<>},<!!<,e'au!!!!'>},{},{{<i',e!<!>,<'u,>}}}},{{{<o'i'!!<{!>,<a!!o!!e!!,!u!!o>},<,!>,<<o!>,i!>>},{{{<},}!!",!>!!!><>}}},{{},{{{<!!!'',u'a!<a!!!>},<ou!!!>!!a>},{{},{}}},<}a!!!,'a',!>u>},{{<!u!!!>ia{!!o!!!>},<!>,<!!<!>},<!!!>"!>,<!!!!}i>},{<!>,<!>!!,!>,!>>,{<}i>}},{{},{{<''!!e<!>},<a!!!>e{!e>}}}}}},{{{{{<"u!>!!!!>,<a!!o!>},<}!>},<!>i!}'>}}},{{{{{{<,,!eaa!u!!oie!<,!!!>!>},<!>,<!>{u{!!i>},{<"<i,!a"!!eo>,{}}},{{},{<!!!!e!>},<'!!!!,!!!>!!",>}}},{}}}},{{{<i{}'>},{<{!!!>,,!!e!>,<!!!!!>a"!u!!!!e!>,<{!!!!!',<>}},{{<!!u!!,!<}}<,<>},{<"!,!>},<{a!>},<}}>}},{{<<!!!>}!!"!>,<}!!i""'!!!>{>,<!!!>},<!>,<{!u!!'<io!o{>},{{{{{}},{<!!}!>!'u>,{<'u!!!>,<!eo<!>,<!!!>{>}}},{{<a{o!!!>"!!!>'}e!>,<}>},<!>,<}{!!!>!!!!"!"!>!!!!,}<<>}}}}}}},{{{},{{{{<,!!!>,!>},<!>,<!>},<>}}},{<!>},<>}},{}},{},{},{{},{{<u!>},<ieo!{!!<'"!u<!!!>!!!>,>,{}},{},{{{<o>},<,>},{<<i!a{{{<<!!!>!!!!o>,{<!!{<a!!!>u!>},<,!!!!oo!!!>!!u"!>}!>,<>}},{}}},{}}}},{{{{{{<<!!!!!>i!>!oi}oeuu>},{{<,{!>!>!!!>!!!>},<!!!>!!!>!!!>!!,'!},o!}>}}},{{<!>a!!iu{!e>},{{{<{!!{!!o!,!!!>>},{<!>},<!>},<"oi!"!!!>!>},<>}},{<!>},<i!!i}>},{<ue'!!a"uu{!>,<!>},<uuaa{!"!!!>>,<ee>}},{{},{{{},{}},{{<a!!!>!!!!!!{!"{e}e!!,!>ae!!'},!>},<!!!!o!>},<>}}}}},{{<!!!>},<>},{<u!!!>!><,!!!>},<!!!!<>}}},{{<{<e!<,!>},<'i!"{!>},<!>,<!>,<ie}>,<{,!{},!>e!!!!!!!>!","ua!}!!<'!!u'>},{{{{<!!!>!>,<!!e'u"'<"!"',,i!!i}<a>},<aoie}!>},<'}o,<>},{<'!a!!{"u!e!><i!!'!!"o!>,<>}},{<!>!!i!{{o!!!!!>,<!{!!i<e!!{">,<e!o'u,!!!!uu!!!}!>},<,!!}>},{{{{<!!!>,i""{!!!>},<!a,>,{}},{{<!}!!!>,o!>}"!!o,!!>},{<!>},<"u}!>"!ae!{!<>}},{{<oao}}a"i{!!!>,<o{>},{<o!!!><a!!!>u>}}},{{},{}}},{<!>!!!><",{}!>ee!>,<!'!!!eu!!!><!!>}}}}},{{{<e}!>},<!!!>!!o!!!!{{!!!>!>"a!>!!!!!!>},<!>!!!!!>!!!>e>},{{<!!a!!!>}!!{ie,!!<!>!!<e!}eo!>},<,}>,<!!!!}!>i!>,<,!!"!>},<}!>o!"oo'o!>},<>},{{<{{!!!>ua'ei'!!<>},{}}}}},{{{{{{}}}}},{{},{{<!>iu'!>>}},{{<!!ouo,!>},<i!ii!>},<o!!!>,<>},{}}},{{{{{<}<!!!>},<"}<oa!!''!>'!oe!>,<!>,<iu>},<{o<<a>}},{<!,<!!!>},<>,<>}},{{}},{{{{<!ua""<o{<!!!>!>},<'i<"!",>}},{<a{!!!>,!!i!",!>,<!!i{>},{{<a!>"{aia<!!!>!!!>,<u'!!u,>}}},{{<i!>},<!{!!!!!>},<,,!!}'!!!!ae"!>,<"i!>,<o}>,{{{<,!{o<!>},<!!a}}i>,<!!'!>!oi!!!>!u<'"e!!,{i>}},{<uu{!e!!!>}}a!,o!!a!{a>}}},{}},{{{<{!>,<!!}i!>,<}{!!!>!!!>,<i"!>,<oi"}'>},{<o!>,<!!!!!!!>,!>},<!<!"!!<!>!!!>e,>,{<!>},<!!<o!!'<}i!>!>,<u!>,<!>},<!>,<!>,<!a!>,>,{}}}},{{},<aee}}u!!<}!>i!>,<>},{{{{{},{<!!!>!!"'{!!,'}>}},{{},{<!!!<>}}},{{<'a"!>e!>},<',>},<io,,a!!!>!>,<i!e!!,!>,<,,eu!!!>!!u!>,<>},{{{{<,!}<!!!!{!>,<{!!!><ia}e!>},<{}e>}},{<!!!!!!{a,>}},{{{{<i,e!!{!!!>"o{uu!>},<>},<!>},<!>!!!'!!i!>!"a!!}!>,<"'!'!>>},<{!!!>,<!!!>a!!!!{""!>"!!"'u!!!!!><!!!>>}}}},{{<!!}!>,<!>},<'!!"!"<!!,<!!!!!>!>>},<!>{}!>!>},<}}"ao!!!!ua!!{!><">},{{<!!!!!!ou<!!'u!>!>},<!>,<{!>!><>}}}}}}},{{{{<'}u!>,<{!!,}!>},<'!"'{!>},<!>>}}},{{{<{a!!!>u!>!>!!!>ae}!>!>},<{!!ua>},{{}}},{{<,!!!>},<!>!!!>>},{<}!!!uu{,!!!!i!>},<{!!!>},<ie<!a"e>}},{{<ou{!>!!!>a!!}!!>},{{{{}},{<!,u'!!!>,<u!>,<ui,}u!!!'!!!>{a!>a>,<,,"!!a!!>}},{<!!!>!>},<o!!{!>oa!!{!!!>a}a!!{>},{{<!>},<a>,{<!!o!>,<!"}!!'!!a",!a!>,<i!!!>o!!e!>,>}},{<,!>},<"{}}}"<!>},<!!e!!!e!!!>,<!!!>,<<!>},<>,{}},{<!!iao!>},<}!!!ea{!!!>,<'uui>,<i"!!!>!>,<u!a"ea!!!>,<>}}}}}},{{{{{{{}},{<,!>},<a{!>},<eoei<<o>,<>}},{},{<i!!!>!>!!!>ii!>!'<!!!>"},},!!>}},{{{{{<,,!i,,ae{!!!,!>!!!>},<!,!!o!!}!!!>}>,{{<}!!!>!!!>'!!!>"!{{!>!!!>>}}},{<!!a!>,<{oia}ueue!!!>eai>}},{{<!>},<!}!!!>!!!!!!ei!io}!!!>!!ue>},{<}!!!>!>i}!!!>,<!>u!>,<!a!!!>!>,<"o!>,<!>,<a!>},<!>,<>}}},{{<!>eo,o!'!!!>'<!!e>}}},{{{{{<!e!>!>,<!!<!!!>!!!!!>}>}},<!>!>'}}!!!>!>!>,<!>!u>},{<!o!!!{>,<!>},<'''!>},<">}},{<<,iiu!'iu!><>,{<,!!{e!!!>o!ai'!!'!!!!{a!>>}},{{<a},!>},<!!!!!><,i{!>"}>},<'<ui<!!a!!''!aa!!!!!>!!!>u'ao!!<!'>}},{{{<!u<e!>,<'{"a'!>,<!>},<!!!>>,<!i'>},{}},{{<'!,e!>},<!!>},{},{{{<<euu!>,<!!,!e!>,<!!!!},!>},<a}!!!!!>a{>},{{<!<ee!>},<o<{i!!}!!!>'!u!>,<>},<}!!!!eai!!!>,<e!>!>!!!!!>>}},{<!!!!!u!!!>!!a{oo,i>}}},{{{}},{},{<!!!>,<{'a!!'a!!!>{<!<e!>},<!!'!io>}}},{{{<i!!,!!e!!aee!!!!!>},,!!'>},{{},<e"o!!u{!>,<{!>},<,>}},{<",!>,<'!>,<!!!>!!u!!{'{!>},<}!!{!oa!!!!e'!>>,{<!>,<!>},<!>,<uie!!,!>,<{!>!!!!!!!>>}},{{<>},{{<!>,<!!a!}!!o'!>!>,<>}}}}},{{{{{{<>}},<u{!>},<e'!>,<,!>},<>},{{},<>},{{<',!,ioe!>u>,{<!>}o!>},<}>}},{{<{a'e,i!>"u>},{{{<!>},<!!!>,i,eo!!!!!>},<eo!>>},{}}}}}}},{},{{},{{{{{},{<a!!a!!!>,<e{>}}},{{<>},{{{<!>},<>}},<<ea,},!!!>!>!!"{,uei!>},<}>}},{<!!',eu'"a}!>o'}!<!>!a!!o!eu>}},{<>,<!!!>>},{<!,!!o!!!>,!,u!!}'!{ee!!i!>,<!!!>!!!>!>>}}}},{{<uo!!">},{<!!u!a!!">,<!!!>!!,}o{>},{<iuoa{!}u',{!!,}'!>,<>,<!!!>!!a!>!!!>u!>,<!>},<!>,<!'!>,<!!!!!><!!!>},<!!<>}}},{{{<!!!>},<!e>,{}},{}},{}},{{{{<,e!!,!>,<!>},<,!!!>a!,!!'ie!>,<o!>},<>},{{<e!!'i!>},<!!!>,!e!!!>!!!e"}uu!>},<u!i'>},{{},{{{<o!><!!o<"!'!!!>,<!>},<!!!>!!!>e'u!!!>o!!u!>},<}>},{}}}},{{{<!i<!i>,<{'!!i!>,<>},{{}}},{}}},{{<>,<,<e!!!>,>},<{>}},{<!!!>,<e!>,<<!!,!<!!,ou>,<!!!>o'!!!!!!!>"a!!eeu!o,!>},<o<>},{{<!>},<!!,!!,o,>},{}}},{{<!>,<'o>},{{<aeei{o}i>},{}}}},{{{{},<>},{<{!>},<!!!!!!<!!'e!>'e>,{{}}}},{{{{{{<!>,<e!{!>,<i!u!!!!<!>,<!!!>>},{}},{<oo">}},{{},<',i!!"<>}},{{{<!>,<!!,u,u'}i<!>},<!!!>!!!>{!>},<!i>},{}},{{<!oe!>}'iou!{u!!!!!!}!<!>u<a>,{<{!!'oa}!!!>!!!!,ii!>,<oa!!i!!a>}},{{{<{a}o}!,!!!!!>,<'}{>}},{{{<!>!!i"eeeuo!>},<<aa!{!!!>!!!!!>!>,<>},<{!!'>},<!>,<<<a!!,{'!!<>}},{{<'!>ao!{u!!!>"!i{}i'u,},>,{<!!!>!!iuee!!!>'!!!>,<>}},<!!!>!>},<!o!>,<e!!!!"!>,'e'a<!!}>}},{{{<eou!>o}i!>!!u}>}}}}},{{{<!!}u!>o!>,<u!!u"u!!a",a!>,<>,{}},<}}"!>,<o!>,<!}'!>>}},{{<>,<!>!>'!!!>!>!>,<!!!ai!,>},{<}}!!!><!>!!!>!!!>},<!><!>!!{!{!!}o!}>,<}i!!"!!!>,<,,!!!!!>>},{{<!!!>'!!}!!!>!!!!!>>}}}}},{{{}},{{{{<!'i!>,<ae>}},<!aa!,">}}}},{{{<!!a,"!iu!!e!"'{>},{{{{<uu'i<!!!><!>!>}uieo!!!>!>,<"o>},<}!>}!>,<>}},{{<!!!>'<!>,<!>},<ua{!>},<i!i!}!!i>},{}}},{{<!!u}!!!><a{!u!>"o!!!>!!!>",e">,<{}i!!!>!!!,!!u!!,"}!>,<!>,<i>},{<!!'o!!!!{>},{{{{<!!!>a!}e!!e"!>},<!><!o>},{{<"a""!>},<!!!!,!>}!>},<}'!!u!!!!!>!>},<>}}},{{},<}>},{{<ioo!!u}!>},<<{"!!!!ui!!{>},<"!iui!!!>!!!>'"!!!!,!!o''!>},<}u!!!>{>}},{{},{<a!!oi>}}}}},{{<"o!>},<,!}!!!>"<ao'>,{<e!>,<eu>}},{{},{{<<}!!o!{!i<!!!>,<!!!>,!>},<o"!!!>!>},<!>,<>},{<!!"u!>,<!!oa"'!!!!>}},{<!>},<o!><<<,>,{{{<!!!>{!!'u!>,<!!{o}"!>},<!>,<>}},<!!!>!!>}}},{}},{{<!!!>},<,!>ei'!e!!!>},<u,u!!!>'aui>,{}}},{{{{{<!>,<"oia!!e!!!>!!{!!u!>,<>,<!!>},{<!'!i!!!>o!o{>}},{<',!!{",<>,{<o!!<}'ii!!!>!>},<''!!!>>}},{{}}},{{{},{<!!!>{{!!!!!!a,e!'<!>,<!!!>!!!>u"i!,i!e>},{{<{<}>},{<!>,<!>{>}}},{{},{<i!!},u}'!<>,<!><o!>>},{}},{{{<a!!!!!>{!>,<o>,{<!!!>!>},<!!'a!>ii!!!>u!!oa}}"">}},{<!ai!ua!!<!!!>,<<e}a!>>}},{<u!ea"ue,!!<!<,>,{{<!}"a!>>}}},{<oa!!!>,<{!>},<e!,!>!!!!<u!!i}!>>,{{<,{{"!>},<<!>,<!>u!>!>},<}'{!!!ao>},{<!!!>},<>}}}}}},{{{{<{o'oi!>,<o!>},<ue!>},<ao>},{<!>,<a!!ia!,i}{!>,<!!!>>}}},{{{<!!o!>,<o!>},<!>},<,,{!>},<i!>u!>,<i}>,<e!!!>,<!>,<'!><a<e!>,<!>},<e,",!{!!!>,<i>},{{<!>,<"!>},<!!}!!!!!!!>!!aa!!o'!>},<!>},<>,{{}}}}},{{{<<ea!!!!}!o!!,!!,!!!>!>i!>,<"''!>!!}>,{<,,!!!!!>},<"!>!!!!!>,<o>}}}},{{<!>},<u{!a<"!!>,{<}!>,<}'e!!"<!>},<>}},{{<a!!'}{!>},<{!!!>!!!>,oa"!>,<}''!!!>,<!!}u>}},{<!!'!!'a!>},<!!!>!!!!>,{<!!!>},<{a"u}!>},<!!,!>,<i>}}},{}},{{{}},{{<"!>},<!!,uii"a!>},<a!>>},<aa!>>},{{<!!'>},{<!>!>,<e!!a''!>"!!!>o>}}},{{{<!>},<u'<'!>,<o'"!>,<,"a!>,<!!a!{!>,<!!>},{{{}}}},{{},{{{{<}}}!!!!!>,<!iiue!!"!!>},{}},{<!>!!!!!><!!!!!>!a!!!>!!,<!>},<<aa'!!<u!>,<!">},{{},<>}},{{<e!!!>a<{!!!!'}!>oi!!<!!!!!}>,{{{{<!>}}a"!!,"!!!>!>,<e!!i!!!!!>a'!!e>,{<>,{<{ue!!!!!>!!}!!!>o>,{<!>,<!>}!>!<!>!>},<!!!!!oa!!!>!>},<!>},<}<'>}}}}},<!!"u>},{}}},{<>},{<ii}!!!>}i>}},{{},{<}!>,<!>},<<">,<!>{>},{{{<'>},<>}}},{{{<!{ia!>,<a!!<'!!!",<!}e>}},{},{{{<'u}>}},{<}i!>},<}<!!o}'a,}!>!}!>i<>}}}},{{{{<>},{<!i!!"!!!>},<"!!e}u!!!>},<'!!>,{{<o!>,<!!a"!!<!>,<'!>,<,}!!!!!{!>a!!!!ea>}}},{{<!>,<<!>},<{ao}>},<>}},{{{{<uo!>,<>},{<}<!!>}},{<,u!>},<!>,<}i>}},{{<a!>,<,!!!>o!>!>},<"{oa>,{{<o!>,<!!!>,!{!>},<"}i!!!o!!!>>}}},{<,o!!!i!a{<!>,<!!!!"!,!!!>>}}}},{{<e!!ai!e,!>>,<i{,e}e!>!>},<!!'!!a<>}},{{{<i!>},<!>,<!>},<!!o>,{<"!!!>!>,<>}}},{{},{<!>},<<i>,<<!>,<oi!!!!!>!a!>,<!'"!>,<!>},<"!!!>{>}}},{{<eao!>},<a{a<e"!>!>},<>},{{{{<!!!>!'!!!!!>e!>},<!!",>},<!o<!!!!!>,!!'!!!!,i!>o!!!!!>{!'"u}>}},{{},{{{{<i!<!!,!!!!!>!!!>>}},<!!!>!{}a!!!!!>},<i",>},{},{<>,<{!><o!o!!!!!!!>i"uo}o!!"!!{>}}}}}}},{{{{<,e!!}">},<!>},<e!>,<u!!!>,<'!>},<<!!u!>!!>},{{},{}}},{{<<!>,<{<!!!u>},{{<!,!,>},{<<!>},<}a!!{!><>,{<e!>!>},<,oai!>!>},<!{>}}},{{<"u!>,<<!>},<i!>,<i'<!>!!e!{!>},<!!i,>}}},{{<}!!<!>},<i!!!!<<!!!>,<!>,<!!i!!!!!>!>},<!!!>},<ao,!>},<>},{<i!!!>"a'!!}!!{"{>,{{<!!u!!"!>,<'>},{<!!""u!e!!!!u!>,<io!>,<"u!>,<{'">}}}}},{{<!>!!<oe!>!!!>'!!,<!!<!!!>}!>>,{{{}},<!!!>,!!!>!>"ii>}},{{{<'u!!!>!!!>,<>},<u>}}}}},{{{{<i!!!{,!"!!o"i}!>,<!!!{{>}},{{{}},{{{<ao!>,<!}'!}"e,o!!!!>},<!>!>,<a{e,a<!!!>",'oe<>},{<ae,!!oue}>,{<','a!!!>a!!<!iu!a!!u!!!i>,{<}!!,!>},<!!!>,a>}}},{{<}>}}},{{{},{<i!!o!!!>"!>!!ou!}i!!oo!>},<'!!!!!>>}}}},{<!>!!u}!>,!>i!!!!!!,"!!,!>},<u!!,'>,{<}a'ua!>o!>},<!}!>},<!!u>}}},{<!>,<!!!!!>},<!!e!o!>'!!"!>,<>,{<eu,e!uiioe{>}}},{{{}}}}}},{{{<>,{}},{<o!>},<'>}},{},{{{{{{}},{{<!>},<!!,'ii!>,<!!o,!>},<"!!i'"u}a!"e>}}},<!,<i>},{<!"!e"''!>,<iau!>!>},<i'>,{{}}},{{},<!!!>,<ea!>,<!a!'}<!!!>,<!!!>!>},<!!!!!!!,>}},{{{{<e<e>},{<>}},<!'au!>!!!!!>!>,<'!!',ea'!!o!}}!!}>},{{<!!!>a{!!,!!""oue{o"!>!!}>,{}},{}}},{{{},<a"!><a!!u!>!>,<u{!>!!">},{{{<!!o!>},<ao,o!!!>,<,i<i>}}}}}}}},{{{{{<"e}uu!!,!!i!!!>!>},<"!>>,{<}<!>!!!>!>,<i!!{!!",a<!>},<!>},<!o!>o>}}},{{{{<iuu>,{{{<,>},<!>},<e!>,<}!!!><o!>},<o!!!!}>},<{a>}}},{{<!!!>ie}i<!"a{!!i>}}},{<!>u!e,e!!!!!>e"e!!!!!>ue{{!!"!>},<u>},{{{<,!a!>!,!>},<,,e!!,!,<ui>},{{<auei!!!>{!!!!!!>},<!!!>'}!>,<a!!!>e'"o!>!>"{ou}}!!}>}}}},{{{<!>,<!!'u!u!>!!!>!>,<!!,!!!>i!>,<o"!>,<}>,{}},{<>}},{{{<a'o<!>,<i!'ia!!e!!!"!!!>u'!o>},{<}!!e!!!>>}}},{{<e!>!>},<>}}},{{{},{{{{<!!!!a!!!!!!<u>}}},<'!'<!au!!!>a!<'{e,,!!{a'!!}>}},{<,>,<!!!>!!>}}},{{{{},{<>},{{<!!!>},<"!}{!!'{!!!}e"o!>,<}!>!}ou,!!<>}}},{{<<}!>},<>},{{<!>!>,<!!!>o,""eu!!'u!!i>}}},{{<!>},<iu!>,<e>,<!>},<',o,,{a!!!!o<!<e!>,<>},{{<'!>,<o!>,<!>,<>},{}}}},{{{{}},{{<}!!e!!}!}}!!!>{{>}}},{{},{{{{{{<!>"iu!<!!,i!!!>>},{<u'>,{}}},{},{}},{{<o<}u'e!>,<!!u{a!>,<eaoa>}},{<!>},<{i!>},<o>,{<,!eo!!}>}}},{{{{<!!!!!!!!!><!!!>>},<!!!!!!e{}!>,<!>,<{!,e{}aoo!!{{}>},{<!>},<u!>},<!!!<'>}},{{{},{}}}},{<!!ue!>},<!!""}{!!!>,,{a!{{!!"!!!>,<e>,{<ou,,"}!!!>!!!>!!!""!>,<o,e!}"!!!>a>}}}},{<e!!!>!>},<!>},<u>,<u'!>},<"a"!!!>,!!!>>}},{{{},<eoeo'<eiaa!!,,>},{<!!,!!!>{!!!'!>},<{!>,<ou!}!!!>,'!!!!o>},{{<o!!aa!>!!!>!>,<"!'!!!>!!!!{"a!!!>io<!>},<!>},<>}}},{{{<o"!!!>!!!>},<e!>},<o!!a>,{<ieoie!>,<u!!a!>">}},{{<!!!>!!a!>,<a!!!,!>},<!>},<u!>u">}},{{{}},{<io!!i!>,<!!e{aa!>},<>,{{<!>},<!!!!ui!!,!>!!!!{o}}!>},<>},{{}}}}}},{{{<"!!!>!>,<!>},<,a!'}!!}!>},<u"}!!,>}}}}},{{{<a'"<>},{{<!>u!>{!!i>},{{<!>{!!!>},<o!o!!"!>},<e}i!!!>o>},{<aei<e{",!!>}}},{{{<!!!!!>!o!!!>!>!>},<u{<!!}i!!!>,<!!!!<"'ei>}},{<{e!>"!>,!a!!!>,<!!!{!!!>!!!>{<!>,<!!!>,<>}}}},{{{{{<}u>},<i"!<u}!!u,!>,<>},{<!!!>!>},<}{!!"oeu>}},{{<,"'u}!>!<{'o>,<{!!}!>,!!!!!!,!>,,"!>,<!eu!>},<!>},<<>},{<!>},<'!!!>!>!>},<}<!"!><oua!<'ou>}},{{{<>},<>}}},{{{{<ai!>,<}''!>},<o!"i!>>},{<{!>u!eu{!!!>}'e>}},{<,{!e!!}!!!>,<,i>}},{<!!"i{{>},{}}},{{{{<ui>},{}},{{{}},{{<<!>,<{!!a<!>},<!!!!"a!!!>},<e'!!>}}},{{<u!>},<i!">},{{<e,!}!aea!"!'!!ea>,{<a!>},<!>,<o!>},<!>,<!>>}},{}}}},{},{{{{},{<"!!e!!"!>},<"}!><{}"!>>,{{<!o!!!>uo!!,o!!!!io!!!>'>}}},{{{<a>}},{<e,,!>,,!!i<!}!!{!!!!!>!>e!>},<u>}}},{}},{{<!!!!!!">},{{{},{<uo<!>""!>,<!!}"!>!!!>i!>>}}},{{{<!>,<e!>o!!!>o!>{,'u}!!u',!>},<}>}},{}}}},{{{}},{{{<<!>!!!>,<!>>},<{i"<uu{a!!a!}!>},<!>},<!!!}}>},{{<oaa!>!>},<'>},<!!!!aie>},{<e!>,<u,}<!>},<{iu}'!>}!!<'i>,<oea!>},<!><!u}<a"!>{>}},{<>,{}}}}},{{{},{{{<e}e<u>},{{<a"!>!!!>!!!>'>,<{,'!>!!}!>u<}!!,!!i!!!ei}>},<a!"!!!>>}}}},{{<'!!!>!!o!>,<}',!>o<o!>},<!!i>,{<!>,!>},<>}},{<{!!,!!{<ouu>}},{{{{{<o!{!}!i!io!>!!!!e!!!>!>!>!!!>!>'>}},{}},{<!!!>>,<!!!u!>""!,!>},<i}!>},<ou!>!>{,!>'o>},{}},{{<ua>,{<!!!!!>a,!}!>,<!>iaa>}},{<>}},{{{}}}}},{{{{{<!!!>!>},<{e>},{<!>,<!>,,<i}!!!!!uu,!!!>>,{<!i">}}},{{<!,!u>},{{<!>},<"uoa<au!!!>a!!,}>}}},{<!!aa}!>,<!>,<au!!!<o>}},{{{<!>!,!!u!!!>'<!>,<,!>!!>},{<!!e!>uo!!'ai{a!>>,{}},{{<o{!><i{!!!>!!!>!>>}}},{{{{<!>!>},<a!}!a!!!!>}},<!>},<,<'o!!!!,uiu>},{<!!e}{"u!!!i!>},<!!a!>!!!!!}'>},{}}},{{<!!'!!!>,!""!!!>,'!>},<{o!!}!o<>,{<"o!!"!!uu>}},{},{{}}},{{},{{{<!>},<{!!!!,!>,<>,{}},{{<oie!!i!eo!!!>{!>},<<<>}},{{}}},{{<!>},<!>!!ae!>,<>},<!>,<!{!>!>!>},<'i!!>},{<i}!!!a!>u!<'>}},{{{<!!aee!!!>!>,<!!!>u"}!!"!!i!>!e,i!!{,>},<e'oa{!!e!!}'a!!!!!>>},{{}}},{{{<a!!e!>{,i"i!!!>}!!"!!!!!>},<uu!>},<">}},{<!>!>},<!"a}ee"!>,<{!>,<,oe!!!>!>!>,<!>>}}}},{{{{{<!>,<{!!o>,{<{,!>e}!e!>,<>}},{},{<!>},<<!>,!>u,!>,<!!!!!>ae'>,{<!>},<'!!o!>},<!!e}o}!!!>!>,<e!>},<'i{!!o>}}},{{{<"!!{}"!!,,!>},<i<"e}>,{<>,{}}}},{{<u'<!!'!>},<!!!>>}},{{<!>e!!!>},<!>,<!!!>i!>!>},<ae,{u!iu!!!>u}!!e>},{<!!!>a'i!!au!{u!>},<!>},<o},u>}}}}},{{{{{<!!!ee"!>},<!>,<a!>},<a!>a!>},<}<!!"!!!>>}},{{<!!!u{<",ao!!u,!>,<'!!!>},<!!!>u>},{<ueea}!!!>{!!!!!!!!!!!>!>},<!!>,{<!!!!!>o'>}}}}},{{{<'!!!>!>o{""<i"}!"!>},<!!e!!!>!>},<{>},{<!>!!u!>},<!!,'u!>},<!>"u!>"!}!>{a!!!>},<}>},{{<!>},<e!!!>}"i{>,{}},{{{<a'!>,<,o!!!>,<e'}>}},{<!!u'!!<,e{e!><i!!!>a<>}},{<o{!!'!!!>!!{}!!<{}!>!>,<!!}>}}},{{{}}},{<!>o"u!{u"{!>,<'!!!!!>!>!>},<>,<!,a<{!!!>!!,i!>!>},<e<<!>a>}},{{<,>,{}},{{<!!o"!!!>>},{{{}},<ea">}}}},{{},{{<!!eeou{!!!>ai!>,u!!!>,<!}'!>,<!<{>,{<!!!'!<e>}}},{},{{{{<u!!!>u!>,<!!'!>,<}a!!,!>},<i!>,<>},{}},{<i{!>,<!!!>{!>!>},<!>},<{a>,<oi!i{!>o!>!!{e!>,<}!!!>>}},{},{{{<>}},{{{<!!!'!,!>e!>o<e!>i!>,<>}},{}}}}},{{{{{{{{},<!>},<o!>,<!!'eo!!!>},<!!i!"!>,<!!!>!>ie"ae>},{<!!{au!{!!!i!}a!!!>,<o!u}}!!!>!!!>,<!!!>>}},<ui!!!"","'}!>,<,!!!>e!!,!>,<!>},<!!e!!!>,<!!!!i>},{{<!>!!}"e}{!oe!'}!>!>a,>},{<!{!!u!>},<>}},{<!!!,!>,<o!!!>'''!{!!!>'!!!!!>"!>},<!!>}},{<o!>,<o"i'!>!eo>,{{{<u!!!>,,!!!>!>!>,<!>,<>},<!}!!!>e!a}ao!i!>aau,!!!!!>e>},{<!ee!o,}!!!!!>>,{<!!">}}}}},{},{{},{<!!'a!{!!!>!!{,!>!!u}!!!>,<>}}}}}},{{{},{{{}}},{}},{{{{<uu!i{}!>,<'!i>},<{aa!>,<<e!>},<<!>a!>>},{{<<a<ue!>},<o!!!!!>},<{!!eea!>,<>},{}},{<!>},<"eo!!!!o,a!!"u!!>}},{{{<}}!>,<!!o!>},<e>},{<!!!!ao!>,<!!!!!!!!!>!>!'e<<<!!!,o,!!!>!>,<>}},{<}},'!>e!!!>!!!>!a}<!>,<!!!>e}!>},<!!!>>},{<,e>,{<!>,<eu}!!!!'e"!!"!i!!!>o!!i!>"!>>,{<'}o!!u<!!!>!>},<<a<!>},<!!i<{!>,<u>}}}},{{{{{{<!>!>},<"io>}},{<'!e{!>!>},<!>,<!>,<ii}>}}},<u!!"!!!!!>,<i'e!>},<'i!!!>i{>},{{{{<!>,<a<"<{>},<u!'!>},<!!!!}{!>!!!>!>},<o>}}}},{{{{},{{},<a!!!>!o!>},<i!!!>,<'"e<}!!>}},{{}}},{{<{,!!!,!!!>},<"!>!!!>},<!!!>"'"'!!!>!!!>!>,<>}},{{},{<!!>}}}}}},{{{{<aao!!!>,<'{u"u>},{<!>},<{!>},<i!>ii!>},<!>"a<i!!>}}},{{{{{}},{<"i!!{>,{{{<!><!>},<a,,!{!!!i,!!',,'ae>}},<euio!iu!!!>!!""!>a!>},<"oa>}},{{},{<!!'}!>,<<},!!u,,!!!>!!!!,!!!{',{!<!!o!!!>>,<e{!!>},{{<<!>},<}"">,<a'<!!ouo!>,">},{}}}},{{{<{{!!"!>},<""{!o!>},<!>,<!!!>!>i!!!>!>,<}>},{<!!,"!!!}uu>,{<i!!u<!>},<uo!>,<!!ia!>,<>}}},<!!<!!a<!!!>i<!!!!!a!!ouo!!!!!!!>e>},{<o!{o}o!!!>,!>},<aa!',!!>,{<!!"!!!>},<!>i{>}}},{{<!>!}!>a'>,{{<"a}'eo!!!>,!!!>,<{",!>!>>}}},{},{<!!i!>!!}>,{}}},{{{{{},{{}}},{{}},{{{{<!>>},<}ao!!,'!!u!>,<'}{!!!>o!>},<<!!"a>},{{<e!!i!!}'!!!!!!!>},<!!!!!!i{eiu!>},<!!!>!i!>},<<!>!!!!!>!>,<>}},{{{{},{}},{<!!uo!>,<"!!e!!!!!>,'!!}>}},{<!!}!!!>!>,<>}}},{<!!e"!uuu>},{{<,>},{{},{{}}}}}}},{{},{{<,{e!>},<!,!!ue>}}},{{{{<{!>},<>,{<}"!>!>,<!}"!>,<!!!!a!>},<ea!!!!{>}}},{<!!'o!!!>u<>,{<!i!{>}}},{{<'oa!>},<>},<iio!>!>,<!<!>,<!ie!!{"<}<!!!!!>!>},<!>>}},{{<!>,o!!oe!!{!>,<"e!!!>!>>}}}},{{{},<!>},<}!!a!!!>e!!,!!!>,!!!>!>},<<o!!i!>},<>},{<!i!!!>!>},<!!!!!!!>,<<!!"!!!!a!!!!!><u!>,<>,{{<'''>}}},{{{<!>o'!>i{!>},<!>},<a">},{{<!!e>},{{<>},{{{<"<!!iia!>,<a<a!>},<!i,!>!!!!o!>},<!!!>,<u">},{<}!!,!>ii<!>,<o}io>}}}}},{{<!'"!<"!!!>,<!>!>},<!}!!a!!"!e<u"oi!>,<>,<!!!>,!i!>},<'i>},{<<o!!'oiue!!!>!eiu}!>,<!>},<!>},<>}}},{{}},{{<!>},<!!!!!>>},{<!>,"!!!!!>!i!!!>!>!><{ae!!!>o!>},<>}}}},{{{<!!!!!>}!!!>u"o''"!ai!>,<!!!!>,{{<!!!>!!!!,!>},<{!>,<!>{<eo{,!!o!>},<'i!<'>},{<!!!>>}}},<!>,<!!!>i>},{{<!!!!!{,iu!a{!>!!!>"!>},<a!>a>}}}},{{{{{<!!!>,<!!!!"<"!!<!a!>,<'!>,<<u!>,<">},<!>,<!!!>},<!>,<e!!!>!!o!!o!!!!o!!!!>},{{<'u!>a!>,<>},<!!!>!i<o!a!!!><}aouu'<,>},{{{<!!!>"!!!>,}ea!!}!>!><!!'"!!<{>,<e!!!>!>!a<!!o!!!>i}!!}>},{{{<!>},<!">}},{<,!!!!!!!><>}},{{<!!!>},<'e>,<i!>,!i,!!!>ea>},{{<,>,<!!!>o!u,i!>u!!!!u!!!!!!!>},<}{!!>}},{{<}!>,,>}}}},{<i}}iu}{!>},<!>{<u!!!!!!o'>,<}<!!<<<,!>,<!<!!"u!>,<u>}}},{{{<!>},<!>},<!!'!>,<!!o!!oa!}!>!>!!!!"{>}},{}},{{{<<!>e!ooa!!!>},<<!!!>",!>},<!u{!!!!<e!!<>},{<}}u{!!"!>},<"!!o!!!><!<!!!>,<e!!!>u!!a!!!>},<>}},{{},<a!>'{"!>},<}!>,<!!!>"e>},{{<!>},<>,{<oe!!!>!!u>}},{<!!!!!>},<!>,<!>!!i!>,<!>}},!!!!e",>},{{<}!!!>!>},<!!a'oi<>,{{<"ou!!{{!>,<''euu>}}},{{<i<<o>},{}}}}}},{{{{<uu!!!>,<!>,<e!{,!>,<!!!!!>'!!>}},{{<o,>,{<{}oe}!o!>!!!!>}},{{}},{{<<o'!<!>,<{{,!!!>},<'e!!!!!!,!!!>!!!!!!!!>}}}},{{},{{}},{{<ai!>},<}!>,}<!!"e<!>,<!o>}}},{{{<<}o!!!>!}!}>},<"i"ei<}!!!!ae,!>,<!u!!i!>!!u>},{{{<!!!>"{o!!!>!!!>ii!!!!!}!!"!!u!!!>,<!!!>e!!<>},{<uu!>'ou!'""!"i!!!>,>}},<!o!>,<<!!!!<e!>},<"!>,<>}},{{}}}}},{{{{{},<'e!!'>},{{<!!,!>!e,!>},<,'!>},<!!!!!>!!!>},<,!!a,ie!!o!>},<!u>,{<a}"!a!>!!!!!>!>},<eao!>!!oi>}},{<!a!}!>o!!!>e!>,<!!!>,<!!!>,!!a"!!,{a,>}}},{{<!!!>a!!!!!>!!!>>},{{{<!!!>}!ueae!>!>{o!!!!!>!!"!!!>!>!ua>}},<!!!>}>}},{{{{<'u,!e!{"!!{!!{"''"a}{u!}>},<!!!oo'!>,<!!!>},<!!!!!!!>},<!!!>},<!>},<o!}!!!}>}},{{{<i!>,<!!!>ui!!!>!>}i<e>},{{{<!>,<!!e!>},<"!,'!!!!aa'!!!!,>}},{<u!!"!!!>!>},<!!!>{!!!!">}}},{{<'u!!{!}{>,<!e!>,<}e}!>},<>}},{<ea!!'!>!>,<o}<!!!!!!",e!!!'}>,{<>}}},{{<{!>},<o!!!>,<,>},{{{},{<u,e!!!>},<{u!>,<'au>}},{{<{a!o,!!{<!!!>{"!>!!!>!>},<'{'<>}}}},{}},{{{{<!>{!>,<<'ei!,!!!>iu!>e!!!>!!>}},<!>,<!>},<!!o'}}u!!!>,<!>!!!>},<eu>},{{<i<"{!"}!!!<o>},{<ao!!!i!!}!!!>!>!<oae<>}},{{{},{},{<}"!>,!!}'!>},<i!!!o}!!oo!!!>!!!>i!!>,{<<!!<e<!!!!!!eo!>},<!!o!a!!!>ei!!!>!>,<!!','<u>}}},{}}}}},{{{<}>},{<!!!>eu>,{<ui<!'!!{!!!>!!!>},<o!!!>o"u!!>,<}!!!>i!!!!!!!>!>},<!<uo<''!!,ii>}},{{},{<'e'!>!>},<!!!a!>!!i!!!>!!!!<!>"{<}>}}},{{<!>,<{i>,{{<a'!eu!>"!!!>>}}},{{<!>,<o!!!>,<o<!e}"!!!>!!!>"!},,e>}},{{{{<!>,<>},{<!!a!>,<u!!<,!!o"!'{>}},<!>!>,<o"<!!!,!><<!>u>},{},{{{<e!>,<o!>,<,!>,<!>,<>},{}},{}}}},{{{{<>},{<uo>,{{{<!!!>o!>},<}e}a"{e!!!>,<!>,<u<"!!"!>},<>}}}}}},{{{<,!{>}},{<o>}},{}}}},{{{{},{{<<!!{!!!>!!!!!!!>!>},<!>},<!!a!!!>},<,!!!>'!!!!!>,!!!>''">,{{},{<{}{'!>>}}}},{}},{{{}},{{{<>}},{<a"{!>},<>}}},{},{{{{},{<!!!>>}}},{{{<!"!>},<!!<<{!>,<!!a>},<{aoi'!!>}}}},{{{{{},{<'!>}!!!>,<!!!>i!o!!!>i!!!>},<"!>,!>!!{!>,<o>,<i<!>,<!!}",>},{<i!>},<a!>!!e>,{<<!}{!>},<!!!>!!!>!>,<!>},<!!!!!>!>!!>}}},{{<!!{"!!!{!!u!!!>'!!!>!!e!!!,'>}}},{{{}},{{{<!>},<>},<}e!'i>},{{{<!>ue!!!>},<{uu!!!>}!!{'>,{{<!!!>!e!>,<ooa}ou{!>''!}",!a'>}}},{{<i!!!<}u!!,}u!!!>"!!!>},<}{!!}>},{<!!'o,!>},<o}}',!>},<<!>},<!!,a"!>,<!"!>,<a>}}},{{<i{}o!!>,{<}i!!!>!>,<!!!>!!,!!!>{>,<!>},<!>,<!<!!'!!!"}!!!>e!>,<u<>}}}}},{<!!!u,!>!>,<u>,<e{!!!>u{eu!>},<!!<<!>,<u>}},{{{<!!}!>},<'!!'ii,"!!uu!>!'e>}}},{{{{<!a<'!>,<,>},<>},{<!!,}>}}}},{{<aoo,'!>!!,!>},<!i!!u>,{}},{{}}}},{{{<{!!'e!!!>!>},<!!!>"o!!,!>},<ooi!!!><>},{{<!!!!!>},<ee!!!>,<'!!!>a{!!,e!!!!!>a!>,!<!i!>,<>}}},{{{<ua}!>o>,{<!>,<!>'a{!!!>,<!>>}},{{{<,oiu{!!!!!!!>},<eo>},{<<e>}}}},{<!>},<""!!!>!>,<,ooe!!{!!!>},<!>,<>}},{{<i!!!><>},{},{{{<!!e{!>,<!!o!!!>,<e<!}!!"!!!>!>},<,>},{<!>},<!!oo}!a!!!>!!<'u>}},{{<e>},<>}}},{{<!}{a<!'}"a!>,<a!!o'i>,<!!!>},<!!!>i"!!!!{!!!!}ao!>},<}!!'i!!!!!!>},{{<!>},<!!,!>a!"!!u!!"a!!e>},<o,e!>,<!>,<}!!e!>},<!!'a,ii!o!>},<!!ai">},{{<o"!!!>!!!>}}!!!!!>i!>},<!>},<">,<!!!!!!!><{!!u!!,a'o{!>,<!">},{{<<a<>,<{>},{{{<!>o!>!>e}i">},{{<!!!!!>!>,<<!>},<!{a<a<!!>},{<!!'ue"e{ua>,<!>'!!}o!!!>!!!>a!>,<<!!!>!!!!!!{!>>}}},<{<a"!!"}o'io>},{<ue!>},<}e'e{>}},{{<'!>,<o!!!>},<!>!!!>oi'!!!>},<'o<>},{{{<!>!>!!!>!>},<!!!>},<u,!>,<!o}>},{}},{<!!!!}!u{!o!!ieea",u!!!!!>!!!>!><!!"">}},{<!>},<<}!!aa"!>},<"!>}a{!>},<!!!!!>!uo>}}}}}}},{{{{<{!}>},{{}},{}},{},{{<,!>"!!!>!>,<!!oo!!!>},<}i!'u'!!!>!>!>},<{a>,{<a!!!>!!!>!>,<!!!'!>!a",!>},<!!o!>},<a!!!!}}{>}},{<{u!>{,!>!!<!i>,<e<!>o!i!!!>!!!!"uo"!>,<u'"!>},<,!i>}}},{{{<<iee!!a"!>},<!>,<,>,<,!!!!!>}o!>,<oo!>!>,<"io!>},<}!',"!o>},{<}!!{'{!!!!<{!ai!!!>"!<ou!!a!{<!!">},{<!>},<!>,<i!e!!!>a!>,<!!o!>!>},<!>},<!!!>aa>,{<u"{<!>},<}!!o'"i!!u<}a>}}},{{{{{<>},{<<}uoa,'!e!!e!!!>!{o!!!i>}}},{<ai!!!>eou!!!>!a!!!ei}!{u!!!a!!!<!!ei>,<aue}!!!!}!>,<a{o!>,<!!!!>}},{{<!!o!!ieu!>,<!u',aeaia!!}">},{{{},{<!!'"<}i>}}}}}},{{},{{{{<'!!e!i!>u!><e,!">},{<!<<!>!!uu"!>},<!!u<iia!!}!">,{}}},{{}}},{{<a!!a<!>,<'!>,<!>,<,',!>,<>,{{{<!!!!!!!>e}"!!i<>}},<e!}'!>},<!>!>},<!!a!!'i>}},{<"!a',"a>}}},{{{<<,!>},<!>,<!o<!>},<<!!!>u>},{{{}},{<!!!!e<!!!!!>o!>,<o{!>!>,<>,<>},{}},{{},{<"!>,<!i>,{<>}}}},{{{<{!"!>i"!!<i"{}>}},{<>,<oi,i'>}},{{{<{!!!>oe!'!!!!!>!>!>},<!>,!!!e{a>}},{{<"!>,<!>u!!,!>a{<!!'a,>,{<i"!>},<u!>,<,,'!,!o!>},<!!!!i>}},<i!>},<io<!!a!!,!!!>}!"'"o!!o!>}>},{<!>'ue!!!>,<'ia}{!>},<!>,<{o<u!>,<>}},{{{{{<>}},<!o!!!>},<!!!>!>},<!!{ae!!e!!!!!!!!!!!>i>},{{},{{<o!>},<}{o!>,<!!!!!>!!!>,<!>!!!>!>,<u>}}},{{{<!>,a"!!i!>},<!!"!!"!!u}ue!!"o!!e>},{}},{<!>,<!!!>!!!>{ue!e,!>,<o<o{!>,<!>,<!!!>,<>}}},{{<!>},<i}!!<<!!e!>>}}}}},{{{<,>,<{!>},<{!,{,>},{<<e"}u}}!!!>!>!!!>a!>},<!>,<oea'u!!!>>,<i!>,o<!>!!"!>a!!!>,<!'!>!!!>>},{<{o{uuo<,o!!!>!!!>!!!>}>,{}}}},{{},{{{},{}},{{<i{ie"!o'{!!!>},<!a}!!!>},<>},<!!,e<e!>},<!>},<!!!>a!!e!>i>}},{{{{{{{{{<!>u!!!>!!!>!ui'{!>},<>}},{}},{}}},{<o!!!>>},{}},{{{{}},{{{<}ue<!!!!!>i!>},<!!a}a<!>,<!>,<>}},{{<!!{!>i!!!>},<a<!!!>!>},<!>},<u}{ao!!!!>},<o!>,<o!!!>!!!>i!!!><!>oe}!o>},{{{<!>!>,<!>ee!!!a!>!!!>>}}}},{{<a!!!>!!<<!!!!u!!e>,{}}},{{{<!>},<eu!>i!!'!>!!!!!>!>,<">},{{<'!!!!!>u!>,<ue"{,i!a}"{!!!>!!o!>,<>}},{{},{}}},{{{{},{{{<!>,<!'>}}},{<!i!>,<oe}!!o''<!>},<>}},{{{<ee!>!!>}},{<a{>,<!>!!{!>,<>}},{{{}},{{{{<!!a>},<>},<{!!!>,<o>},{{<{<<>},<!!!"!>,<!!!!!>!!e!!!>!>!!>}}},{{<!!,u{!!}"uie!!}!>,<o>},{{{<}!!!>!>,<!>},<a>}},{<!!!>!>,<<ea{"!>}aua}!>},<}!!!>!!!o'>,{<'",}"}>}}}}}},{{{<e!>},<!>>},{{<!>!>"'!!!<}!io!!!!u!!!>!><i!a!!!!!>>}}},{}},{{}}}},{{{<>},{{<!!!!!}!!i!><!!!>>}},{{<!!!!!>'>}}},{{{<{!!!><!!!>e!>!!!>e"!,}u>},{<!>}>,<!!!>'!"ae<a>},{{<i!>,<"!>},<!!!!!>},<ae!>>},{}}},{{{{<>}},{<o<!!!>e>,{{<oa!>,<"!}'u!>,<o'!>!"",!!!>>},{<!!a!>,<!!}!>},<!>},<!!!!!>,<u!>,<e<!!<a!{a!,!!!>!!!>>}}},{{<}'{!!a!!!>!!o!>!{!>},<!!!!!!""'>},{<{!!!>{>}}},{},{{{{{}},{{{<!!{"eu>},{}},{<!!'ia!}a''!>}>,{{<<},!>,<,ea!oi!!'a!!!"!!!>!>,<!!!>u>},<>}}}},{{<>}},{{{{<!>,<{!e!>,<au<,}>},{<!>!>},<"<e!>!"o',ua'"!>},<!!!{>}},{<!"!>},<!!}!!"e!!!>{{!!'u!e!>,<"!>,<>}},{{{<o!!!>!!"!"o!>!>,<!!!>>},<,a<!>},<!>,<!!o{ioo!"!>>},{{}},{{{<}'!!!!!>},<}{>}}}}}},{{<}e{!!ieia"a!>!eeu!!i!>>,{<!!!!!>"i>}},{{<'<,!'!!!>!>},<e>,<a!>>},{{<!!u<a'!!!><"!ou>,<!!!>!,!!>}}},{{<}u!o>},<!>!>,<ui>}}},{{<uu!i!<u!<u!!!>{!!!ii!!!>>},{<!!,,!<!{!>},<!!!>>,<<i!"}!!!>"oi}"o'!>!'!>!u>},{{<<i!!a!>!!"o!!i!!,e}{!!"i!!!><>},{}}}}},{{{{{},<a"!!!>!>'>}},{{<'>},{<,!!eie!>},<!!!>},<o!!!>!!!>'"!!!!<!>>,<o!>ou<>},{{<a!i!!io,>}}},{{{{<!!!>!>},<!!'!!,"!!!>!}"}!>},<}!!u>,<<a!!!>"!>,<"!!"o!>},<>},{{}}}}}},{{{<u!!!>"!>!!!>oi{!!!!<a!>},<i{!>!>"<}>},{{<}!!ee!>!!!!ea!!!!!!!><,!>>},<i!!!>,<u<i}"!!!>,iii{a}a!o>}},{<!>,<!>},<!!,}!!<!!!>'!!!>'!!!>},<!!!a>,{<!<}!>,<!!!>,!{{<o!>,<a!!!>!{u!>,<}!!!!!!,>}},{<o>}},{{{<!e!!!!!>,<,}a!!o!e}!!<i,a!!!!!>!>>}},{{<'!>},<!!<i!>!>a!><!>,<!!!>'>}}},{{{{<}!>,<!>},<>}},{<}!!!>!!!>!!e!>,<ooia!<>}},{{<}"i,i{!>,<<,}!>}!<!!}!!!!,{!!>},<<ii}!!!>!i>},{}}}},{{{<i,,a"!!oie!>,<u>}}}},{{{<>},{<!ua}>}}},{{},{},{{{},{<'!ou{>}},<!!!>!>!>},<{!>,<oeu>}}},{{<!!!!o!>!!"!!!>!>,<!"!>!!!>!>,<{u!!!>},<!!!>"!!>}},{{{<!>!},<!!{<>},<!>},<o}e!>,<}>},{{{},{{<aio{<!{!!u!>'{a,o!!ii">}},{<ei!>},<},!'<!!o'!!<!!{!>,<a!{>,{{}}}},{},{{<!!!>!>},<,!!!>}!>}!!ou!}ia'i>,<!e!!!!!!i!>},<!!!>!>!>},<!>,<!!!>},<e'!!'u!!!a{>},<u'i}!!!!}!>e">}},{<{!!auo!>,<e!>},<<i!!i!>,<'!!!>ie}"u>}}},{{<>,{{}}},{{{{<!!<a!!<,!!a!!!!!!e<>},<!>>},{<a}!!!>!>},<{!>},<u!>},<,!>},<'>}},{},{<"!!!!i!!{"o!!a}!o!!!>!>'>}}},{{<ou<!>,<>,{<!>,<!!,{'a,'!!,!>,<!!u!>,<!>!<<!>,<">}},{<<'>}}}}}}`);

console.log('--- Puzzle result ---\n');
console.log(result);
console.log(result === 10045 ? 'Test success' : 'Test fail');
console.log('\n---------------------');
