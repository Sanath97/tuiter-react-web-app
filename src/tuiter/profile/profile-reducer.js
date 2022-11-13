import { createSlice } from "@reduxjs/toolkit";

const profile = {
    userName: "Jose Annunziato",
    handle: "@jannunzi",
    profilePicture: "/images/tesla.jpg",
    bannerPicture:"/images/react.jpg",
    bio: "Faculty, Software Engineer, AI, Space, and renewable enthusiast.Retuits and likes are not endorsements.",
    website: "youtube.com/webdevtv",
    location: "Boston, MA",
    dateOfBirth: "7/7/1968",
    dateJoined: "4/2009",
    numberOfTweets: "6,114",
    followingCount: 340,
    followersCount: 223
}


const profileSlice = createSlice({
                                     name: "profile",
                                     initialState: profile,
                                     reducers: {
                                         updateProfile(state, action) {
                                             return action.payload
                                         },


                                     }
                                 });

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;
