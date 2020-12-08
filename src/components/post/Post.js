import React, {Component} from 'react';


class Post extends Component{
render(){
    let {item, onSelectedOne} = this.props;
  return(
    <div>
        {item.id} - {item.title};
        <button onClick={() => onSelectedOne(item.id)}>chose</button>
     
    </div>
  )
}

}
export default Post;
