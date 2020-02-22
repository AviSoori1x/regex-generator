if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'regex-generator-web'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'regex-generator-web'.");
}
this['regex-generator-web'] = function (_, Kotlin) {
  'use strict';
  var throwCCE = Kotlin.throwCCE;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var ClassCastException = Kotlin.kotlin.ClassCastException;
  var clear = Kotlin.kotlin.dom.clear_asww5s$;
  var max = Kotlin.kotlin.collections.max_exjks8$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var Unit = Kotlin.kotlin.Unit;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var hasClass = Kotlin.kotlin.dom.hasClass_46n0ku$;
  var removeClass = Kotlin.kotlin.dom.removeClass_hhb33f$;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var intersect = Kotlin.kotlin.collections.intersect_q4559j$;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var Collection = Kotlin.kotlin.collections.Collection;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var step = Kotlin.kotlin.ranges.step_xsgg7u$;
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var wrapFunction = Kotlin.wrapFunction;
  var Comparator = Kotlin.kotlin.Comparator;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  var map = Kotlin.kotlin.sequences.map_z5avom$;
  var toList_0 = Kotlin.kotlin.sequences.toList_veqyi0$;
  var compareBy = Kotlin.kotlin.comparisons.compareBy_bvgy4j$;
  var MatchNamedGroupCollection = Kotlin.kotlin.text.MatchNamedGroupCollection;
  var toString = Kotlin.toString;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var Exception = Kotlin.kotlin.Exception;
  function Configuration(recognizers, mainGroupName, mainGroupIndex) {
    Configuration$Companion_getInstance();
    if (mainGroupName === void 0)
      mainGroupName = null;
    if (mainGroupIndex === void 0)
      mainGroupIndex = 1;
    this.recognizers = recognizers;
    this.mainGroupName = mainGroupName;
    this.mainGroupIndex = mainGroupIndex;
  }
  function Configuration$Companion() {
    Configuration$Companion_instance = this;
    this.default = new Configuration(listOf([new Recognizer('number', '[0-9]+'), new Recognizer('date', '[0-9]{4}-[0-9]{2}-[0-9]{2}'), new Recognizer('real', '[0-9]*\\.[0-9]+'), new Recognizer('day', '(0?[1-9]|[12][0-9]|3[01])', void 0, '(?:^|\\D)(%s)($|\\D)'), new Recognizer('month', '(0?[1-9]|[1][0-2])', void 0, '(?:^|\\D)(%s)($|\\D)'), new Recognizer('time', '[0-9]{2}:[0-9]{2}:[0-9]{2}(\\.[0-9]{1,3})?'), new Recognizer('ISO8601', '[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\\.[0-9]{1,3})?'), new Recognizer('String 1', "'([^']|\\\\')*'"), new Recognizer('String 2', '"([^"]|\\\\\')*"'), new Recognizer('Hashtag', "\\B#([a-z0-9]{2,})(?![~!@#$%^&*()=+_`\\-\\|\\/'\\[\\]\\{\\}]|[?.,]*\\w)"), new Recognizer('loglevel', '(TRACE|DEBUG|INFO|NOTICE|WARN|ERROR|SEVERE|FATAL)')]));
  }
  Configuration$Companion.prototype.fromCopy_za3rmp$ = function (configuration) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var $receiver = Kotlin.isArray(tmp$ = configuration.recognizers) ? tmp$ : throwCCE();
    var destination = ArrayList_init($receiver.length);
    var tmp$_3;
    for (tmp$_3 = 0; tmp$_3 !== $receiver.length; ++tmp$_3) {
      var item = $receiver[tmp$_3];
      destination.add_11rb$(new Recognizer(item.name, item.outputPattern, item.description, item.searchPattern, item.active));
    }
    tmp$_1 = (tmp$_0 = configuration.mainGroupIndex) == null || typeof tmp$_0 === 'number' ? tmp$_0 : throwCCE();
    return new Configuration(destination, (tmp$_2 = configuration.mainGroupName) == null || typeof tmp$_2 === 'string' ? tmp$_2 : throwCCE(), tmp$_1);
  };
  Configuration$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Configuration$Companion_instance = null;
  function Configuration$Companion_getInstance() {
    if (Configuration$Companion_instance === null) {
      new Configuration$Companion();
    }
    return Configuration$Companion_instance;
  }
  Configuration.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Configuration',
    interfaces: []
  };
  Configuration.prototype.component1 = function () {
    return this.recognizers;
  };
  Configuration.prototype.component2 = function () {
    return this.mainGroupName;
  };
  Configuration.prototype.component3 = function () {
    return this.mainGroupIndex;
  };
  Configuration.prototype.copy_61doip$ = function (recognizers, mainGroupName, mainGroupIndex) {
    return new Configuration(recognizers === void 0 ? this.recognizers : recognizers, mainGroupName === void 0 ? this.mainGroupName : mainGroupName, mainGroupIndex === void 0 ? this.mainGroupIndex : mainGroupIndex);
  };
  Configuration.prototype.toString = function () {
    return 'Configuration(recognizers=' + Kotlin.toString(this.recognizers) + (', mainGroupName=' + Kotlin.toString(this.mainGroupName)) + (', mainGroupIndex=' + Kotlin.toString(this.mainGroupIndex)) + ')';
  };
  Configuration.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.recognizers) | 0;
    result = result * 31 + Kotlin.hashCode(this.mainGroupName) | 0;
    result = result * 31 + Kotlin.hashCode(this.mainGroupIndex) | 0;
    return result;
  };
  Configuration.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.recognizers, other.recognizers) && Kotlin.equals(this.mainGroupName, other.mainGroupName) && Kotlin.equals(this.mainGroupIndex, other.mainGroupIndex)))));
  };
  var CLASS_HIDDEN;
  var CLASS_MATCH_ROW;
  var CLASS_MATCH_ITEM;
  var CLASS_ITEM_SELECTED;
  var CLASS_ITEM_NOT_AVAILABLE;
  var ELEMENT_DIV;
  var EVENT_CLICK;
  var EVENT_INPUT;
  var ID_INPUT_ELEMENT;
  var ID_TEXT_DISPLAY;
  var ID_RESULT_DISPLAY;
  var ID_ROW_CONTAINER;
  var ID_CONTAINER_INPUT;
  var ID_CONTAINER_PATTERN_SELECTION;
  var ID_CONTAINER_RESULT;
  var ID_CHECK_ONLY_MATCHES;
  var ID_CHECK_CASE_INSENSITIVE;
  var ID_CHECK_DOT_MATCHES_LINE_BRAKES;
  var ID_CHECK_MULTILINE;
  var ID_BUTTON_COPY;
  function get_characterUnits($receiver) {
    return $receiver.toString() + 'ch';
  }
  function DisplayContract() {
  }
  function DisplayContract$View() {
  }
  DisplayContract$View.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'View',
    interfaces: []
  };
  function DisplayContract$Presenter() {
  }
  DisplayContract$Presenter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Presenter',
    interfaces: []
  };
  DisplayContract.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DisplayContract',
    interfaces: []
  };
  function DisplayPage(presenter) {
    this.presenter_0 = presenter;
    this.textInput_0 = this.getInputById_0(ID_INPUT_ELEMENT);
    this.textDisplay_0 = this.getDivById_0(ID_TEXT_DISPLAY);
    this.rowContainer_0 = this.getDivById_0(ID_ROW_CONTAINER);
    this.inputContainer_0 = this.getDivById_0(ID_CONTAINER_INPUT);
    this.patternSelectionContainer_0 = this.getDivById_0(ID_CONTAINER_PATTERN_SELECTION);
    this.resultContainer_0 = this.getDivById_0(ID_CONTAINER_RESULT);
    this.resultDisplay_0 = this.getDivById_0(ID_RESULT_DISPLAY);
    this.buttonCopy_0 = this.getButtonById_0(ID_BUTTON_COPY);
    this.checkOnlyMatches_0 = this.getInputById_0(ID_CHECK_ONLY_MATCHES);
    this.checkCaseInsensitive_0 = this.getInputById_0(ID_CHECK_CASE_INSENSITIVE);
    this.checkDotAll_0 = this.getInputById_0(ID_CHECK_DOT_MATCHES_LINE_BRAKES);
    this.checkMultiline_0 = this.getInputById_0(ID_CHECK_MULTILINE);
    this.recognizerMatchToRow_0 = LinkedHashMap_init();
    this.recognizerMatchToElements_0 = LinkedHashMap_init();
    this.textInput_0.addEventListener(EVENT_INPUT, DisplayPage_init$lambda(this));
    this.buttonCopy_0.addEventListener(EVENT_CLICK, DisplayPage_init$lambda_0(this));
    this.checkCaseInsensitive_0.addEventListener(EVENT_INPUT, DisplayPage_init$lambda_1(this));
    this.checkDotAll_0.addEventListener(EVENT_INPUT, DisplayPage_init$lambda_2(this));
    this.checkMultiline_0.addEventListener(EVENT_INPUT, DisplayPage_init$lambda_3(this));
    this.checkOnlyMatches_0.addEventListener(EVENT_INPUT, DisplayPage_init$lambda_4(this));
  }
  DisplayPage.prototype.get_row_0 = function ($receiver) {
    return this.recognizerMatchToRow_0.get_11rb$($receiver);
  };
  DisplayPage.prototype.get_div_0 = function ($receiver) {
    return this.recognizerMatchToElements_0.get_11rb$($receiver);
  };
  DisplayPage.prototype.getDivById_0 = function (id) {
    var tmp$;
    try {
      return Kotlin.isType(tmp$ = document.getElementById(id), HTMLDivElement) ? tmp$ : throwCCE();
    }
     catch (e) {
      if (Kotlin.isType(e, ClassCastException)) {
        throw new RuntimeException("Unable to find div with id '" + id + "'.", e);
      }
       else
        throw e;
    }
  };
  DisplayPage.prototype.getInputById_0 = function (id) {
    var tmp$;
    try {
      return Kotlin.isType(tmp$ = document.getElementById(id), HTMLInputElement) ? tmp$ : throwCCE();
    }
     catch (e) {
      if (Kotlin.isType(e, ClassCastException)) {
        throw new RuntimeException("Unable to find input with id '" + id + "'.", e);
      }
       else
        throw e;
    }
  };
  DisplayPage.prototype.getButtonById_0 = function (id) {
    var tmp$;
    try {
      return Kotlin.isType(tmp$ = document.getElementById(id), HTMLButtonElement) ? tmp$ : throwCCE();
    }
     catch (e) {
      if (Kotlin.isType(e, ClassCastException)) {
        throw new RuntimeException("Unable to find button with id '" + id + "'.", e);
      }
       else
        throw e;
    }
  };
  DisplayPage.prototype.getTextInput = function () {
    return this.textInput_0.value;
  };
  DisplayPage.prototype.showText_61zpoe$ = function (text) {
    this.textDisplay_0.innerText = text;
  };
  Object.defineProperty(DisplayPage.prototype, 'resultText', {
    get: function () {
      return this.resultDisplay_0.innerText;
    },
    set: function (value) {
      this.resultDisplay_0.innerText = value;
    }
  });
  function DisplayPage$showResults$getCssClass(closure$classes, closure$index) {
    return function () {
      var tmp$;
      return 'bg-' + closure$classes.get_za3lpa$((tmp$ = closure$index.v, closure$index.v = tmp$ + 1 | 0, tmp$) % closure$classes.size);
    };
  }
  function DisplayPage$showResults$getElementTitle(match) {
    return match.recognizer.name + ' (' + match.inputPart + ')';
  }
  function DisplayPage$showResults$lambda$lambda(this$DisplayPage, closure$match) {
    return function (it) {
      this$DisplayPage.presenter_0.onSuggestionClick_bjzz55$(closure$match);
      return Unit;
    };
  }
  DisplayPage.prototype.showResults_7xv3ay$ = function (matches) {
    var tmp$;
    var index = {v: 0};
    var classes = listOf(['primary', 'success', 'danger', 'warning']);
    var getCssClass = DisplayPage$showResults$getCssClass(classes, index);
    var getElementTitle = DisplayPage$showResults$getElementTitle;
    clear(this.rowContainer_0);
    this.recognizerMatchToRow_0.clear();
    this.recognizerMatchToElements_0.clear();
    this.recognizerMatchToRow_0.putAll_a2k3zr$(this.distributeToRows_0(matches));
    var $receiver = new IntRange(0, (tmp$ = max(this.recognizerMatchToRow_0.values)) != null ? tmp$ : 0);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(this.createRowElement_0());
    }
    var rowElements = toList(destination);
    var tmp$_1;
    tmp$_1 = matches.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      var rowElement = rowElements.get_za3lpa$(ensureNotNull(this.get_row_0(element)));
      var element_0 = this.createMatchElement_0(rowElement);
      this.recognizerMatchToElements_0.put_xwzc9p$(element, element_0);
      addClass(element_0, [getCssClass()]);
      element_0.style.width = get_characterUnits(element.inputPart.length);
      element_0.style.left = get_characterUnits(element.range.first);
      element_0.title = getElementTitle(element);
      element_0.addEventListener(EVENT_CLICK, DisplayPage$showResults$lambda$lambda(this, element));
    }
  };
  DisplayPage.prototype.distributeToRows_0 = function (matches) {
    var lines = ArrayList_init_0();
    var destination = ArrayList_init(collectionSizeOrDefault(matches, 10));
    var tmp$;
    tmp$ = matches.iterator();
    loop_label: while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var tmp$_1;
      var indexOfFirst$result;
      indexOfFirst$break: do {
        var tmp$_2;
        var index = 0;
        tmp$_2 = lines.iterator();
        while (tmp$_2.hasNext()) {
          var item_0 = tmp$_2.next();
          if (item_0 <= item.range.first) {
            indexOfFirst$result = index;
            break indexOfFirst$break;
          }
          index = index + 1 | 0;
        }
        indexOfFirst$result = -1;
      }
       while (false);
      var indexOfFreeLine = indexOfFirst$result;
      if (indexOfFreeLine >= 0)
        tmp$_1 = indexOfFreeLine;
      else {
        lines.add_11rb$(0);
        tmp$_1 = lines.size - 1 | 0;
      }
      var line = tmp$_1;
      lines.set_wxm5ur$(line, item.range.last + 1 | 0);
      tmp$_0.call(destination, to(item, line));
    }
    return toMap(destination);
  };
  DisplayPage.prototype.createRowElement_0 = function () {
    return this.createDivElement_0(this.rowContainer_0, [CLASS_MATCH_ROW]);
  };
  DisplayPage.prototype.createMatchElement_0 = function (parent) {
    return this.createDivElement_0(parent, [CLASS_MATCH_ITEM]);
  };
  DisplayPage.prototype.createDivElement_0 = function (parent, classNames) {
    var tmp$;
    var element = Kotlin.isType(tmp$ = document.createElement(ELEMENT_DIV), HTMLDivElement) ? tmp$ : throwCCE();
    addClass(element, classNames.slice());
    parent.appendChild(element);
    return element;
  };
  Object.defineProperty(DisplayPage.prototype, 'inputContainerVisible', {
    get: function () {
      return hasClass(this.inputContainer_0, CLASS_HIDDEN);
    },
    set: function (value) {
      this.toggleClass_0(this.inputContainer_0, !value, CLASS_HIDDEN);
    }
  });
  Object.defineProperty(DisplayPage.prototype, 'patternSelectionContainerVisible', {
    get: function () {
      return hasClass(this.patternSelectionContainer_0, CLASS_HIDDEN);
    },
    set: function (value) {
      this.toggleClass_0(this.patternSelectionContainer_0, !value, CLASS_HIDDEN);
    }
  });
  Object.defineProperty(DisplayPage.prototype, 'resultVisible', {
    get: function () {
      return hasClass(this.resultContainer_0, CLASS_HIDDEN);
    },
    set: function (value) {
      this.toggleClass_0(this.resultContainer_0, !value, CLASS_HIDDEN);
    }
  });
  DisplayPage.prototype.select_svqy28$ = function (match, selected) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.get_div_0(match)) != null) {
      this.toggleClass_0(tmp$, selected, CLASS_ITEM_SELECTED);
      tmp$_0 = Unit;
    }
     else
      tmp$_0 = null;
    ensureNotNull(tmp$_0);
  };
  DisplayPage.prototype.disable_svqy28$ = function (match, disabled) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.get_div_0(match)) != null) {
      this.toggleClass_0(tmp$, disabled, CLASS_ITEM_NOT_AVAILABLE);
      tmp$_0 = Unit;
    }
     else
      tmp$_0 = null;
    ensureNotNull(tmp$_0);
  };
  DisplayPage.prototype.toggleClass_0 = function (element, selected, className) {
    if (selected)
      addClass(element, [className]);
    else
      removeClass(element, [className]);
  };
  Object.defineProperty(DisplayPage.prototype, 'options', {
    get: function () {
      return new RecognizerCombiner$Options(this.checkOnlyMatches_0.checked, this.checkCaseInsensitive_0.checked, this.checkDotAll_0.checked, this.checkMultiline_0.checked);
    }
  });
  function DisplayPage_init$lambda(this$DisplayPage) {
    return function (it) {
      this$DisplayPage.presenter_0.onInputChanges_61zpoe$(this$DisplayPage.getTextInput());
      return Unit;
    };
  }
  function DisplayPage_init$lambda_0(this$DisplayPage) {
    return function (it) {
      this$DisplayPage.presenter_0.onButtonCopyClick();
      return Unit;
    };
  }
  function DisplayPage_init$lambda_1(this$DisplayPage) {
    return function (it) {
      this$DisplayPage.presenter_0.onOptionsChange_j832gf$(this$DisplayPage.options);
      return Unit;
    };
  }
  function DisplayPage_init$lambda_2(this$DisplayPage) {
    return function (it) {
      this$DisplayPage.presenter_0.onOptionsChange_j832gf$(this$DisplayPage.options);
      return Unit;
    };
  }
  function DisplayPage_init$lambda_3(this$DisplayPage) {
    return function (it) {
      this$DisplayPage.presenter_0.onOptionsChange_j832gf$(this$DisplayPage.options);
      return Unit;
    };
  }
  function DisplayPage_init$lambda_4(this$DisplayPage) {
    return function (it) {
      this$DisplayPage.presenter_0.onOptionsChange_j832gf$(this$DisplayPage.options);
      return Unit;
    };
  }
  DisplayPage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DisplayPage',
    interfaces: [DisplayContract$View]
  };
  function SimplePresenter() {
    this.view_0 = new DisplayPage(this);
    this.matches_0 = LinkedHashMap_init();
  }
  SimplePresenter.prototype.recognizeMatches = function () {
    this.view_0.patternSelectionContainerVisible = false;
    this.view_0.resultVisible = false;
    this.view_0.resultText = '';
    this.onInputChanges_61zpoe$(this.view_0.getTextInput());
  };
  SimplePresenter.prototype.onButtonCopyClick = function () {
    copyTextToClipboard(this.view_0.resultText);
  };
  SimplePresenter.prototype.onInputChanges_61zpoe$ = function (newInput) {
    this.matches_0.clear();
    if (isBlank(newInput)) {
      this.view_0.patternSelectionContainerVisible = false;
      this.view_0.resultVisible = false;
      this.view_0.resultText = '';
    }
     else {
      var tmp$ = this.matches_0;
      var $receiver = RecognizerMatch$Companion_getInstance().recognize_sjii3m$(newInput);
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination.add_11rb$(to(item, false));
      }
      tmp$.putAll_a2k3zr$(toMap(destination));
      this.view_0.showText_61zpoe$(newInput);
      this.view_0.showResults_7xv3ay$(this.matches_0.keys);
      this.view_0.patternSelectionContainerVisible = true;
      this.view_0.resultVisible = false;
      this.view_0.resultText = '';
    }
  };
  SimplePresenter.prototype.onSuggestionClick_bjzz55$ = function (match) {
    var tmp$, tmp$_0;
    if (this.deactivatedMatches_0.contains_11rb$(match)) {
      return;
    }
    var $receiver = this.matches_0;
    var value = !((tmp$ = this.matches_0.get_11rb$(match)) != null ? tmp$ : false);
    $receiver.put_xwzc9p$(match, value);
    this.view_0.select_svqy28$(match, (tmp$_0 = this.matches_0.get_11rb$(match)) != null ? tmp$_0 : false);
    var disabledMatches = this.deactivatedMatches_0;
    var tmp$_1;
    tmp$_1 = this.matches_0.keys.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      this.view_0.disable_svqy28$(element, disabledMatches.contains_11rb$(element));
    }
    this.computeOutputPattern_0();
  };
  SimplePresenter.prototype.onOptionsChange_j832gf$ = function (options) {
    this.computeOutputPattern_0();
  };
  SimplePresenter.prototype.computeOutputPattern_0 = function () {
    var tmp$ = this.view_0;
    var $receiver = this.matches_0.values;
    var any$result;
    any$break: do {
      var tmp$_0;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        any$result = false;
        break any$break;
      }
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        if (element) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    tmp$.resultVisible = any$result;
    var tmp$_1 = RecognizerCombiner$Companion_getInstance();
    var tmp$_2 = this.view_0.getTextInput();
    var $receiver_0 = this.matches_0;
    var destination = LinkedHashMap_init();
    var tmp$_3;
    tmp$_3 = $receiver_0.entries.iterator();
    while (tmp$_3.hasNext()) {
      var element_0 = tmp$_3.next();
      if (element_0.value) {
        destination.put_xwzc9p$(element_0.key, element_0.value);
      }
    }
    var destination_0 = ArrayList_init(destination.size);
    var tmp$_4;
    tmp$_4 = destination.entries.iterator();
    while (tmp$_4.hasNext()) {
      var item = tmp$_4.next();
      destination_0.add_11rb$(item.key);
    }
    var result = tmp$_1.combine_t86t5b$(tmp$_2, toList(destination_0), this.view_0.options);
    this.view_0.resultText = result.pattern;
  };
  Object.defineProperty(SimplePresenter.prototype, 'deactivatedMatches_0', {
    get: function () {
      var $receiver = this.matches_0;
      var destination = LinkedHashMap_init();
      var tmp$;
      tmp$ = $receiver.entries.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element.value) {
          destination.put_xwzc9p$(element.key, element.value);
        }
      }
      var destination_0 = ArrayList_init(destination.size);
      var tmp$_0;
      tmp$_0 = destination.entries.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination_0.add_11rb$(item.key);
      }
      var selectedMatches = toList(destination_0);
      var $receiver_0 = this.matches_0.keys;
      var destination_1 = ArrayList_init_0();
      var tmp$_1;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var element_0 = tmp$_1.next();
        if (!selectedMatches.contains_11rb$(element_0))
          destination_1.add_11rb$(element_0);
      }
      var destination_2 = ArrayList_init_0();
      var tmp$_2;
      tmp$_2 = destination_1.iterator();
      loop_label: while (tmp$_2.hasNext()) {
        var element_1 = tmp$_2.next();
        var any$result;
        any$break: do {
          var tmp$_3;
          if (Kotlin.isType(selectedMatches, Collection) && selectedMatches.isEmpty()) {
            any$result = false;
            break any$break;
          }
          tmp$_3 = selectedMatches.iterator();
          while (tmp$_3.hasNext()) {
            var element_2 = tmp$_3.next();
            if (!intersect(element_2.range, element_1.range).isEmpty()) {
              any$result = true;
              break any$break;
            }
          }
          any$result = false;
        }
         while (false);
        if (any$result)
          destination_2.add_11rb$(element_1);
      }
      return toSet(destination_2);
    }
  });
  SimplePresenter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimplePresenter',
    interfaces: [DisplayContract$Presenter]
  };
  function Recognizer(name, outputPattern, description, searchPattern, active) {
    if (description === void 0)
      description = null;
    if (searchPattern === void 0)
      searchPattern = null;
    if (active === void 0)
      active = true;
    this.name = name;
    this.outputPattern = outputPattern;
    this.description = description;
    this.searchPattern = searchPattern;
    this.active = active;
    this.searchRegex_23pksb$_0 = lazy(Recognizer$searchRegex$lambda(this));
  }
  Object.defineProperty(Recognizer.prototype, 'searchRegex', {
    get: function () {
      return this.searchRegex_23pksb$_0.value;
    }
  });
  function Recognizer$searchRegex$lambda(this$Recognizer) {
    return function () {
      var tmp$;
      return Regex_init((tmp$ = this$Recognizer.searchPattern) != null ? tmp$ : '(' + this$Recognizer.outputPattern + ')');
    };
  }
  Recognizer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Recognizer',
    interfaces: []
  };
  Recognizer.prototype.component1 = function () {
    return this.name;
  };
  Recognizer.prototype.component2 = function () {
    return this.outputPattern;
  };
  Recognizer.prototype.component3 = function () {
    return this.description;
  };
  Recognizer.prototype.component4 = function () {
    return this.searchPattern;
  };
  Recognizer.prototype.component5 = function () {
    return this.active;
  };
  Recognizer.prototype.copy_l76g9$ = function (name, outputPattern, description, searchPattern, active) {
    return new Recognizer(name === void 0 ? this.name : name, outputPattern === void 0 ? this.outputPattern : outputPattern, description === void 0 ? this.description : description, searchPattern === void 0 ? this.searchPattern : searchPattern, active === void 0 ? this.active : active);
  };
  Recognizer.prototype.toString = function () {
    return 'Recognizer(name=' + Kotlin.toString(this.name) + (', outputPattern=' + Kotlin.toString(this.outputPattern)) + (', description=' + Kotlin.toString(this.description)) + (', searchPattern=' + Kotlin.toString(this.searchPattern)) + (', active=' + Kotlin.toString(this.active)) + ')';
  };
  Recognizer.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.outputPattern) | 0;
    result = result * 31 + Kotlin.hashCode(this.description) | 0;
    result = result * 31 + Kotlin.hashCode(this.searchPattern) | 0;
    result = result * 31 + Kotlin.hashCode(this.active) | 0;
    return result;
  };
  Recognizer.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.outputPattern, other.outputPattern) && Kotlin.equals(this.description, other.description) && Kotlin.equals(this.searchPattern, other.searchPattern) && Kotlin.equals(this.active, other.active)))));
  };
  function Comparator$ObjectLiteral(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  var compareBy$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function RecognizerCombiner() {
    RecognizerCombiner$Companion_getInstance();
  }
  function RecognizerCombiner$Companion() {
    RecognizerCombiner$Companion_instance = this;
  }
  function RecognizerCombiner$Companion$combine$lambda(it) {
    return it.range.first;
  }
  RecognizerCombiner$Companion.prototype.combine_t86t5b$ = function (inputText, selectedMatches, options) {
    if (options === void 0)
      options = new RecognizerCombiner$Options();
    var orderedMatches = sortedWith(selectedMatches, new Comparator$ObjectLiteral(compareBy$lambda(RecognizerCombiner$Companion$combine$lambda)));
    var indices = mutableListOf([0]);
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = orderedMatches.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var list = listOf([element.range.first, element.range.last + 1 | 0]);
      addAll(destination, list);
    }
    indices.addAll_brywnq$(destination);
    indices.add_11rb$(inputText.length);
    var $receiver = step(until(0, indices.size), 2);
    var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination_0.add_11rb$(to(indices.get_za3lpa$(item), indices.get_za3lpa$(item + 1 | 0)));
    }
    var destination_1 = ArrayList_init(collectionSizeOrDefault(destination_0, 10));
    var tmp$_1;
    tmp$_1 = destination_0.iterator();
    while (tmp$_1.hasNext()) {
      var item_0 = tmp$_1.next();
      var tmp$_2 = destination_1.add_11rb$;
      var startIndex = item_0.first;
      var endIndex = item_0.second;
      tmp$_2.call(destination_1, inputText.substring(startIndex, endIndex));
    }
    var destination_2 = ArrayList_init(collectionSizeOrDefault(destination_1, 10));
    var tmp$_3;
    tmp$_3 = destination_1.iterator();
    while (tmp$_3.hasNext()) {
      var item_1 = tmp$_3.next();
      destination_2.add_11rb$(this.escapeRegex_0(item_1));
    }
    var destination_3 = ArrayList_init(collectionSizeOrDefault(destination_2, 10));
    var tmp$_4;
    tmp$_4 = destination_2.iterator();
    while (tmp$_4.hasNext()) {
      var item_2 = tmp$_4.next();
      var tmp$_5 = destination_3.add_11rb$;
      var tmp$_6 = options.onlyPatterns;
      if (tmp$_6) {
        tmp$_6 = item_2.length > 0;
      }
      tmp$_5.call(destination_3, tmp$_6 ? '.*' : item_2);
    }
    var staticValues = destination_3;
    var tmp$_7;
    var iterator = staticValues.iterator();
    if (!iterator.hasNext())
      throw UnsupportedOperationException_init("Empty collection can't be reduced.");
    var index = 1;
    var accumulator = iterator.next();
    while (iterator.hasNext()) {
      var index_0 = checkIndexOverflow((tmp$_7 = index, index = tmp$_7 + 1 | 0, tmp$_7));
      var acc = accumulator;
      var s = iterator.next();
      accumulator = acc + ((index_0 - 1 | 0) < orderedMatches.size ? orderedMatches.get_za3lpa$(index_0 - 1 | 0).recognizer.outputPattern : '') + s;
    }
    var pattern = accumulator;
    return new RecognizerCombiner$RegularExpression('^' + pattern + '$');
  };
  RecognizerCombiner$Companion.prototype.escapeRegex_0 = function (input) {
    return Regex_init('([.\\\\^$\\[\\]{}()*?+])').replace_x2uqeu$(input, '\\$1');
  };
  RecognizerCombiner$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RecognizerCombiner$Companion_instance = null;
  function RecognizerCombiner$Companion_getInstance() {
    if (RecognizerCombiner$Companion_instance === null) {
      new RecognizerCombiner$Companion();
    }
    return RecognizerCombiner$Companion_instance;
  }
  function RecognizerCombiner$Options(onlyPatterns, caseSensitive, dotMatchesLineBreaks, multiline) {
    if (onlyPatterns === void 0)
      onlyPatterns = false;
    if (caseSensitive === void 0)
      caseSensitive = true;
    if (dotMatchesLineBreaks === void 0)
      dotMatchesLineBreaks = false;
    if (multiline === void 0)
      multiline = false;
    this.onlyPatterns = onlyPatterns;
    this.caseSensitive = caseSensitive;
    this.dotMatchesLineBreaks = dotMatchesLineBreaks;
    this.multiline = multiline;
  }
  RecognizerCombiner$Options.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Options',
    interfaces: []
  };
  RecognizerCombiner$Options.prototype.component1 = function () {
    return this.onlyPatterns;
  };
  RecognizerCombiner$Options.prototype.component2 = function () {
    return this.caseSensitive;
  };
  RecognizerCombiner$Options.prototype.component3 = function () {
    return this.dotMatchesLineBreaks;
  };
  RecognizerCombiner$Options.prototype.component4 = function () {
    return this.multiline;
  };
  RecognizerCombiner$Options.prototype.copy_nyyhg$ = function (onlyPatterns, caseSensitive, dotMatchesLineBreaks, multiline) {
    return new RecognizerCombiner$Options(onlyPatterns === void 0 ? this.onlyPatterns : onlyPatterns, caseSensitive === void 0 ? this.caseSensitive : caseSensitive, dotMatchesLineBreaks === void 0 ? this.dotMatchesLineBreaks : dotMatchesLineBreaks, multiline === void 0 ? this.multiline : multiline);
  };
  RecognizerCombiner$Options.prototype.toString = function () {
    return 'Options(onlyPatterns=' + Kotlin.toString(this.onlyPatterns) + (', caseSensitive=' + Kotlin.toString(this.caseSensitive)) + (', dotMatchesLineBreaks=' + Kotlin.toString(this.dotMatchesLineBreaks)) + (', multiline=' + Kotlin.toString(this.multiline)) + ')';
  };
  RecognizerCombiner$Options.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.onlyPatterns) | 0;
    result = result * 31 + Kotlin.hashCode(this.caseSensitive) | 0;
    result = result * 31 + Kotlin.hashCode(this.dotMatchesLineBreaks) | 0;
    result = result * 31 + Kotlin.hashCode(this.multiline) | 0;
    return result;
  };
  RecognizerCombiner$Options.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.onlyPatterns, other.onlyPatterns) && Kotlin.equals(this.caseSensitive, other.caseSensitive) && Kotlin.equals(this.dotMatchesLineBreaks, other.dotMatchesLineBreaks) && Kotlin.equals(this.multiline, other.multiline)))));
  };
  function RecognizerCombiner$RegularExpression(pattern) {
    this.pattern = pattern;
    this.regex_xyx2vu$_0 = lazy(RecognizerCombiner$RegularExpression$regex$lambda(this));
  }
  Object.defineProperty(RecognizerCombiner$RegularExpression.prototype, 'regex', {
    get: function () {
      return this.regex_xyx2vu$_0.value;
    }
  });
  function RecognizerCombiner$RegularExpression$regex$lambda(this$RegularExpression) {
    return function () {
      return Regex_init(this$RegularExpression.pattern);
    };
  }
  RecognizerCombiner$RegularExpression.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RegularExpression',
    interfaces: []
  };
  RecognizerCombiner$RegularExpression.prototype.component1 = function () {
    return this.pattern;
  };
  RecognizerCombiner$RegularExpression.prototype.copy_61zpoe$ = function (pattern) {
    return new RecognizerCombiner$RegularExpression(pattern === void 0 ? this.pattern : pattern);
  };
  RecognizerCombiner$RegularExpression.prototype.toString = function () {
    return 'RegularExpression(pattern=' + Kotlin.toString(this.pattern) + ')';
  };
  RecognizerCombiner$RegularExpression.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.pattern) | 0;
    return result;
  };
  RecognizerCombiner$RegularExpression.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.pattern, other.pattern))));
  };
  RecognizerCombiner.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RecognizerCombiner',
    interfaces: []
  };
  function RecognizerMatch(range, inputPart, recognizer) {
    RecognizerMatch$Companion_getInstance();
    this.range = range;
    this.inputPart = inputPart;
    this.recognizer = recognizer;
  }
  function RecognizerMatch$Companion() {
    RecognizerMatch$Companion_instance = this;
  }
  function RecognizerMatch$Companion$recognize$lambda$lambda(closure$config, this$RecognizerMatch$, closure$recognizer) {
    return function (mr) {
      return new RecognizerMatch(mr.range, this$RecognizerMatch$.getMainGroup_0(mr, closure$config), closure$recognizer);
    };
  }
  function RecognizerMatch$Companion$recognize$lambda(it) {
    return it.range.first;
  }
  function RecognizerMatch$Companion$recognize$lambda_0(it) {
    return 0 - (it.range.last - it.range.first) | 0;
  }
  function RecognizerMatch$Companion$recognize$lambda_1(it) {
    return it.recognizer.name;
  }
  RecognizerMatch$Companion.prototype.recognize_sjii3m$ = function (input, config) {
    if (config === void 0)
      config = Configuration$Companion_getInstance().default;
    var $receiver = config.recognizers;
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.active)
        destination.add_11rb$(element);
    }
    var destination_0 = ArrayList_init_0();
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      var list = toList_0(map(element_0.searchRegex.findAll_905azu$(input), RecognizerMatch$Companion$recognize$lambda$lambda(config, this, element_0)));
      addAll(destination_0, list);
    }
    return sortedWith(destination_0, compareBy([RecognizerMatch$Companion$recognize$lambda, RecognizerMatch$Companion$recognize$lambda_0, RecognizerMatch$Companion$recognize$lambda_1]));
  };
  RecognizerMatch$Companion.prototype.getMainGroup_0 = function ($receiver, config) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if (config.mainGroupName != null) {
      tmp$_1 = (tmp$_0 = (Kotlin.isType(tmp$ = $receiver.groups, MatchNamedGroupCollection) ? tmp$ : throwCCE()).get_61zpoe$(config.mainGroupName)) != null ? tmp$_0.value : null;
      if (tmp$_1 == null) {
        throw Exception_init("Unable to find group '" + toString(config.mainGroupName) + "'");
      }
      return tmp$_1;
    }
     else if (config.mainGroupIndex != null) {
      tmp$_3 = (tmp$_2 = $receiver.groups.get_za3lpa$(config.mainGroupIndex)) != null ? tmp$_2.value : null;
      if (tmp$_3 == null) {
        throw Exception_init('Unable to find group with index ' + toString(config.mainGroupIndex) + '.');
      }
      return tmp$_3;
    }
     else
      return $receiver.value;
  };
  RecognizerMatch$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RecognizerMatch$Companion_instance = null;
  function RecognizerMatch$Companion_getInstance() {
    if (RecognizerMatch$Companion_instance === null) {
      new RecognizerMatch$Companion();
    }
    return RecognizerMatch$Companion_instance;
  }
  RecognizerMatch.prototype.toString = function () {
    return '[' + this.range.first + '+' + (this.range.last - this.range.first | 0) + '] (' + this.recognizer.name + ': ' + this.recognizer.outputPattern + ') ' + this.inputPart;
  };
  RecognizerMatch.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RecognizerMatch',
    interfaces: []
  };
  RecognizerMatch.prototype.component1 = function () {
    return this.range;
  };
  RecognizerMatch.prototype.component2 = function () {
    return this.inputPart;
  };
  RecognizerMatch.prototype.component3 = function () {
    return this.recognizer;
  };
  RecognizerMatch.prototype.copy_re2nrl$ = function (range, inputPart, recognizer) {
    return new RecognizerMatch(range === void 0 ? this.range : range, inputPart === void 0 ? this.inputPart : inputPart, recognizer === void 0 ? this.recognizer : recognizer);
  };
  RecognizerMatch.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.range) | 0;
    result = result * 31 + Kotlin.hashCode(this.inputPart) | 0;
    result = result * 31 + Kotlin.hashCode(this.recognizer) | 0;
    return result;
  };
  RecognizerMatch.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.range, other.range) && Kotlin.equals(this.inputPart, other.inputPart) && Kotlin.equals(this.recognizer, other.recognizer)))));
  };
  var TEST_INPUT;
  function main() {
    initRegexGenerator();
  }
  function initRegexGenerator() {
    try {
      (new SimplePresenter()).recognizeMatches();
    }
     catch (exception) {
      if (Kotlin.isType(exception, Exception)) {
        console.error(exception);
        window.alert('Unable to initialize RegexGenerator: ' + toString(exception.message));
      }
       else
        throw exception;
    }
  }
  Object.defineProperty(Configuration, 'Companion', {
    get: Configuration$Companion_getInstance
  });
  var package$org = _.org || (_.org = {});
  var package$olafneumann = package$org.olafneumann || (package$org.olafneumann = {});
  var package$regex = package$olafneumann.regex || (package$olafneumann.regex = {});
  var package$generator = package$regex.generator || (package$regex.generator = {});
  package$generator.Configuration = Configuration;
  Object.defineProperty(package$generator, 'CLASS_HIDDEN', {
    get: function () {
      return CLASS_HIDDEN;
    }
  });
  Object.defineProperty(package$generator, 'CLASS_MATCH_ROW', {
    get: function () {
      return CLASS_MATCH_ROW;
    }
  });
  Object.defineProperty(package$generator, 'CLASS_MATCH_ITEM', {
    get: function () {
      return CLASS_MATCH_ITEM;
    }
  });
  Object.defineProperty(package$generator, 'CLASS_ITEM_SELECTED', {
    get: function () {
      return CLASS_ITEM_SELECTED;
    }
  });
  Object.defineProperty(package$generator, 'CLASS_ITEM_NOT_AVAILABLE', {
    get: function () {
      return CLASS_ITEM_NOT_AVAILABLE;
    }
  });
  Object.defineProperty(package$generator, 'ELEMENT_DIV', {
    get: function () {
      return ELEMENT_DIV;
    }
  });
  Object.defineProperty(package$generator, 'EVENT_CLICK', {
    get: function () {
      return EVENT_CLICK;
    }
  });
  Object.defineProperty(package$generator, 'EVENT_INPUT', {
    get: function () {
      return EVENT_INPUT;
    }
  });
  Object.defineProperty(package$generator, 'ID_INPUT_ELEMENT', {
    get: function () {
      return ID_INPUT_ELEMENT;
    }
  });
  Object.defineProperty(package$generator, 'ID_TEXT_DISPLAY', {
    get: function () {
      return ID_TEXT_DISPLAY;
    }
  });
  Object.defineProperty(package$generator, 'ID_RESULT_DISPLAY', {
    get: function () {
      return ID_RESULT_DISPLAY;
    }
  });
  Object.defineProperty(package$generator, 'ID_ROW_CONTAINER', {
    get: function () {
      return ID_ROW_CONTAINER;
    }
  });
  Object.defineProperty(package$generator, 'ID_CONTAINER_INPUT', {
    get: function () {
      return ID_CONTAINER_INPUT;
    }
  });
  Object.defineProperty(package$generator, 'ID_CONTAINER_PATTERN_SELECTION', {
    get: function () {
      return ID_CONTAINER_PATTERN_SELECTION;
    }
  });
  Object.defineProperty(package$generator, 'ID_CONTAINER_RESULT', {
    get: function () {
      return ID_CONTAINER_RESULT;
    }
  });
  Object.defineProperty(package$generator, 'ID_CHECK_ONLY_MATCHES', {
    get: function () {
      return ID_CHECK_ONLY_MATCHES;
    }
  });
  Object.defineProperty(package$generator, 'ID_CHECK_CASE_INSENSITIVE', {
    get: function () {
      return ID_CHECK_CASE_INSENSITIVE;
    }
  });
  Object.defineProperty(package$generator, 'ID_CHECK_DOT_MATCHES_LINE_BRAKES', {
    get: function () {
      return ID_CHECK_DOT_MATCHES_LINE_BRAKES;
    }
  });
  Object.defineProperty(package$generator, 'ID_CHECK_MULTILINE', {
    get: function () {
      return ID_CHECK_MULTILINE;
    }
  });
  Object.defineProperty(package$generator, 'ID_BUTTON_COPY', {
    get: function () {
      return ID_BUTTON_COPY;
    }
  });
  DisplayContract.View = DisplayContract$View;
  DisplayContract.Presenter = DisplayContract$Presenter;
  package$generator.DisplayContract = DisplayContract;
  package$generator.DisplayPage = DisplayPage;
  package$generator.SimplePresenter = SimplePresenter;
  package$generator.Recognizer = Recognizer;
  Object.defineProperty(RecognizerCombiner, 'Companion', {
    get: RecognizerCombiner$Companion_getInstance
  });
  RecognizerCombiner.Options = RecognizerCombiner$Options;
  RecognizerCombiner.RegularExpression = RecognizerCombiner$RegularExpression;
  package$generator.RecognizerCombiner = RecognizerCombiner;
  Object.defineProperty(RecognizerMatch, 'Companion', {
    get: RecognizerMatch$Companion_getInstance
  });
  package$generator.RecognizerMatch = RecognizerMatch;
  Object.defineProperty(package$generator, 'TEST_INPUT', {
    get: function () {
      return TEST_INPUT;
    }
  });
  package$generator.main = main;
  CLASS_HIDDEN = 'rg-hidden';
  CLASS_MATCH_ROW = 'rg-match-row';
  CLASS_MATCH_ITEM = 'rg-match-item';
  CLASS_ITEM_SELECTED = 'rg-item-selected';
  CLASS_ITEM_NOT_AVAILABLE = 'rg-item-not-available';
  ELEMENT_DIV = 'div';
  EVENT_CLICK = 'click';
  EVENT_INPUT = 'input';
  ID_INPUT_ELEMENT = 'rg_raw_input_text';
  ID_TEXT_DISPLAY = 'rg_text_display';
  ID_RESULT_DISPLAY = 'rg_result_display';
  ID_ROW_CONTAINER = 'rg_row_container';
  ID_CONTAINER_INPUT = 'rg_input_container';
  ID_CONTAINER_PATTERN_SELECTION = 'rg_pattern_selection_container';
  ID_CONTAINER_RESULT = 'rg_regex_result_container';
  ID_CHECK_ONLY_MATCHES = 'rg_onlymatches';
  ID_CHECK_CASE_INSENSITIVE = 'rg_caseinsensitive';
  ID_CHECK_DOT_MATCHES_LINE_BRAKES = 'rg_dotmatcheslinebreakes';
  ID_CHECK_MULTILINE = 'rg_dotmatcheslinebreakes';
  ID_BUTTON_COPY = 'rg_button_copy';
  TEST_INPUT = "2020-03-12T13:34:56.123+1 WARN  [org.somepackage.test.Test]: This is #simple. A line with a 'string' in the text";
  main();
  Kotlin.defineModule('regex-generator-web', _);
  return _;
}(typeof this['regex-generator-web'] === 'undefined' ? {} : this['regex-generator-web'], kotlin);

//# sourceMappingURL=regex-generator-web.js.map