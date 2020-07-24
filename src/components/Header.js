import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <NavLink exact to="/" className="item">홈</NavLink>
            <NavLink to="/About/yunho" className="item">소개</NavLink>
            <NavLink to="/posts" className="item">포스트</NavLink>
            {/*<NavLink to="/mypage" className="item">마이페이지</NavLink>
            <NavLink to="/login" className="item">로그인</NavLink>
            <NavLink to="/search" className="item">검색</NavLink>*/}
            <NavLink to="/chat" className="item">채팅</NavLink>
        </div>
    );
};

export default Header;