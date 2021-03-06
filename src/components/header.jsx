import React from 'react'
import PropTypes from 'prop-types'
import style from './header.module.scss'
//Props
//pullClass 处于下拉状态时的额外用户自定义类名，设置下拉状态时的样式，默认提供过渡效果
//mode 模式,可为fixed,不填则为正常文档流

class Header extends React.Component {
  state = {
    pulldown: false
  }
  componentDidMount() {
    setInterval(() => {
      if (document.documentElement.scrollTop > 150) {
        this.setState({
          pulldown: true
        })
      } else {
        this.setState({
          pulldown: false
        })
      }
    }, 250)
  }
  render() {
    let { mode, pulldownClass, children } = this.props

    return (
      <header
        className={(style.default + ' ' +
          (this.state.pulldown && mode && pulldownClass ? pulldownClass : '') +
            ' ' +
            (mode ? style[mode] : '')
        ).trim()}
      >
        {children}
      </header>
    )
  }
}

Header.propTypes = {
  pulldownClass: PropTypes.string,
  mode: PropTypes.oneOf(['fixed'])
}

Header.defaultProps = {
  mode: '',
  pulldownClass: ''
}

export default Header
