import { useGetThemeClass } from "../../../hooks/global.hooks.tsx";
import PageHeader from "../../common/PageHeader/PageHeader.tsx";
import { useAppDispatch, useAppSelector } from "../../../hooks/store.hooks.ts";
import { useEffect, useState } from "react";
import { getAllFriends } from "../../../store/reducers/friends/friends.thunk.ts";
import Avatar from "../../controls/Avatar/Avatar.tsx";
import { CustomButton } from "../../controls/ButtonComponents";

import "./FriendsPage.styles.scss";
import Accordion from "../../controls/Accordion/Accordion.tsx";

const FriendsPage = () => {
  const themeClass = useGetThemeClass("b-friendsPage");
  const dispatch = useAppDispatch();
  const { tokenData } = useAppSelector((state) => state.user);
  const { friends } = useAppSelector((state) => state.friends);

  const [expandedListStates, setExpandedListStates] = useState({
    added: false,
    not_added: false,
  });

  useEffect(() => {
    if (tokenData) {
      dispatch(getAllFriends(tokenData.id));
    }
  }, [tokenData, dispatch]);

  return (
    <div className={themeClass}>
      <PageHeader title={"Friends"} />
      <div className={`${themeClass}_container`}>
        <Accordion
          isExpanded={expandedListStates.added}
          onExpand={(state) =>
            setExpandedListStates((prevState) => ({
              ...prevState,
              added: state,
            }))
          }
          title={"Added"}
          renderContent={() => (
            <ul className={`${themeClass}_friends`}>
              {friends.added.map((friend) => {
                return (
                  <li className={`${themeClass}_item`}>
                    <div className={`${themeClass}_item_left`}>
                      <Avatar
                        imagePath={friend.avatar?.path}
                        first_name={friend.first_name}
                        last_name={friend.last_name}
                        size={32}
                      />
                      <div className={`${themeClass}_item_col`}>
                        <span className={`${themeClass}_item_name`}>
                          {friend.first_name} {friend.last_name}
                        </span>
                        <span className={`${themeClass}_item_username`}>
                          #{friend.username}
                        </span>
                      </div>
                    </div>
                    <div className={`${themeClass}_item_controls`}>
                      <CustomButton
                        title={"Remove"}
                        size={"md"}
                        type={"secondary"}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        />
        <Accordion
          isExpanded={expandedListStates.not_added}
          onExpand={(state) =>
            setExpandedListStates((prevState) => ({
              ...prevState,
              not_added: state,
            }))
          }
          title={"Not added"}
          renderContent={() => (
            <ul className={`${themeClass}_friends`}>
              {friends.not_added.map((friend) => {
                return (
                  <li className={`${themeClass}_item`}>
                    <div className={`${themeClass}_item_left`}>
                      <Avatar
                        imagePath={friend.avatar?.path}
                        first_name={friend.first_name}
                        last_name={friend.last_name}
                        size={32}
                      />
                      <div className={`${themeClass}_item_col`}>
                        <span className={`${themeClass}_item_name`}>
                          {friend.first_name} {friend.last_name}
                        </span>
                        <span className={`${themeClass}_item_username`}>
                          #{friend.username}
                        </span>
                      </div>
                    </div>
                    <div className={`${themeClass}_item_controls`}>
                      <CustomButton
                        title={"Add"}
                        size={"md"}
                        type={"secondary"}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        />
      </div>
    </div>
  );
};
export default FriendsPage;
