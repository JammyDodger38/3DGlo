import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import valid from './modules/valid'
import tabs from './modules/tabs'
import slider from './modules/slider'
import calc from './modules/calc'
import send from './modules/sendForm'

timer('1 march 2022')
menu()
modal()
valid()
tabs()
slider('.portfolio-content', '.portfolio-item')
calc(100)
send({formId: 'form1',})
send({formId: 'form2',})
send({formId: 'form3',})