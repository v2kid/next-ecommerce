'use client'
import React, { Component} from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

export default function FBmess () {
    return (
      <FacebookProvider appId="203972632317867" chatSupport>
        <CustomChat pageId="100898622963589" minimized={false}/>
      </FacebookProvider>    
    );
}