// import Vue from 'vue';
// import { Button, Radio, RadioGroup, RadioButton } from 'element-ui';
// import lang from 'element-ui/lib/locale/lang/ja';
// import locale from 'element-ui/lib/locale';

// locale.use(lang);

// Vue.use(Button, Radio, RadioGroup, RadioButton);
import Vue from 'vue';
import Element from 'element-ui';
// import '../element-variables.scss';
import locale from 'element-ui/lib/locale/lang/ja';

Vue.use(Element, { locale });
