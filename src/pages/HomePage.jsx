import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HobbyList from '../components/Home/HobbyList';
import { addNewHobby, setActiveHobby } from '../actions/hobby';

const randomId = () => {
  return 1000 + Math.trunc(Math.random() * 9000);
};

function HomePage(props) {
  // strict comparison ===
  // shallow comparison: {a,b} {a,b} => compare each key shallowEqual
  const hobbyList = useSelector(state => state.hobby.list);
  const activeId = useSelector(state => state.hobby.activeId);

  const dispatch = useDispatch();
  console.log(`hobbyList:`, hobbyList);

  const handleAddHobby = () => {
    // Random a hobby object: id + title
    const newId = randomId();
    const newHobby = {
      id: newId,
      title: `Hobby ${newId}`,
    };
    // Dispatch action to add a new hobby to redux store
    dispatch(addNewHobby(newHobby));
  };

  const onHobbyClick = hobby => {
    dispatch(setActiveHobby(hobby));
  };

  return (
    <div>
      <h1>REDUX HOOK - Home page</h1>
      <button onClick={handleAddHobby}>Random Hobby</button>
      <HobbyList hobbyList={hobbyList} activeId={activeId} onHobbyClick={onHobbyClick} />
    </div>
  );
}

export default HomePage;
