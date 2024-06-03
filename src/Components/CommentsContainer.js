import React from 'react';

const commentsData = [
    {
      name: "Pranit Deshpande",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Pranit Deshpande",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [
        {
          name: "Pranit Deshpande",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [],
        },
        {
          name: "Pranit Deshpande",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [
            {
              name: "Pranit Deshpande",
              text: "Lorem ipsum dolor sit amet, consectetur adip",
              replies: [
                {
                  name: "Pranit Deshpande",
                  text: "Lorem ipsum dolor sit amet, consectetur adip",
                  replies: [
                    {
                      name: "Pranit Deshpande",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [
                        {
                          name: "Pranit Deshpande",
                          text: "Lorem ipsum dolor sit amet, consectetur adip",
                          replies: [],
                        },
                      ],
                    },
                    {
                      name: "Pranit Deshpande",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Pranit Deshpande",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Pranit Deshpande",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Pranit Deshpande",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Pranit Deshpande",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
];

const Comment = ({data}) => {
    const {name, text, replies} = data;
    return (
    <div className='flex shadow-sm p-2 rounded-lg py-2 box-border' style={{ maxWidth: '1200px' }}>
        <img  className='w-12 h-12' alt='user' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
        <div className='px-3'>
            <p className='font-bold'> {name}</p>
            <p> {text}</p>
        </div>
    </div>);
}

const CommentsList = ({comments}) => {
    return comments.map((comment, index) => (
        <div key={index} style={{ maxWidth: '1200px' }}>
            <Comment data={comment} />
            {comment.replies.length > 0 && (
                <div className='pl-3 ml-5 border-l-2 border-black' style={{ maxWidth: '1200px', boxSizing: 'border-box' }}>
                    <CommentsList comments={comment.replies} />
                </div>
            )}
        </div>
    ));
}

export const CommentsContainer = () => {
    return (
        <div style={{ maxWidth: '1200px' }}>
            <h1 className='text-2xl font-bold'> Comments: </h1>
            <CommentsList comments={commentsData} />
        </div>
    );
}

export default CommentsContainer;
