"use strict";(self.webpackChunkkeeptrack_space=self.webpackChunkkeeptrack_space||[]).push([[351],{1351:(e,r,o)=>{function t(e={}){let r;if(e.repoUrl)r=e.repoUrl;else{if(!e.user||!e.repo)throw new Error("You need to specify either the `repoUrl` option or both the `user` and `repo` options");r=`https://github.com/${e.user}/${e.repo}`}const o=new URL(`${r}/issues/new`),t=["body","title","labels","template","milestone","assignee","projects"];for(const r of t){let t=e[r];if(void 0!==t){if("labels"===r||"projects"===r){if(!Array.isArray(t))throw new TypeError(`The \`${r}\` option should be an array`);t=t.join(",")}o.searchParams.set(r,t)}}return o.toString()}o.r(r),o.d(r,{default:()=>t})}}]);