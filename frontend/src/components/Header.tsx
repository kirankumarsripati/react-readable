import React from 'react'
import {
  Container,
  Icon,
  Menu,
} from 'semantic-ui-react'
import { ICategory } from '../models/category';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

interface HeaderProps {
  categories: ICategory[],
}

const Header: React.FC<HeaderProps> = ({ categories }) => {
  return (
    <Menu borderless>
      <Container>
        <Menu.Item as={NavLink} to='/' exact >
          <Icon name='blogger b' /> Readable
        </Menu.Item>
        {categories.map(category => (
          <Menu.Item
            key={category.path}
            as={NavLink}
            to={'/' + category.path}>
            {category.name}
          </Menu.Item>
        ))}
        <Menu.Menu position='right'>
          <Menu.Item>
            <NavLink to='/post/new'>
              <Icon name='plus' />New Post
            </NavLink>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  )
}

export default connect((state: any) => ({
  categories: state.categories
}))(Header);
