
import LangConfig from './langConfig.json';

const I18n = (keyword, placeHolder, value ) => {
    const lang = localStorage.getItem('lang') || "en";
    const text = LangConfig[lang][keyword];
    
    if (placeHolder && value){
        return text.replace(placeHolder, value)
    }
    else {
        return text
    }
    
}

export default I18n