import React from 'react'
import './SearchContact.scss';
import { HiChatAlt, HiGlobeAlt, HiUserGroup, HiOutlineDotsVertical, HiOutlineSearch } from "react-icons/hi";

export default function SearchContact() {

  return (
    <>
      				<section className="left">
						<div className="profile">
								<img src="" />
								<div className="icons">
                  <i title='Сообщества'><HiUserGroup /></i>
                  <i title='Статус'><HiGlobeAlt /></i>
                  <i title='Новый чат'><HiChatAlt /></i>
                  <i title='Меню'><HiOutlineDotsVertical/></i>
								</div>
						</div>
						<div className="wrap-search">
								<div className="search">
										<i aria-hidden="true"><HiOutlineSearch/></i>
										<input type="text" className="input-search" placeholder="Поиск контактов..." />
								</div>
						</div>
						<div className="contact-list">
              
            </div>
				</section>
    </>
  )
}
