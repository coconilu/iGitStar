<template>
  <section class="star-card animated">
    <article class="star-card-main">
      <img :src="img_url" alt="logo">
      <header class="star-card-header">
        <div class="star-card-header-title"><a :href="repository_url">{{title | separationPath}}</a></div>
        <div class="star-card-header-buttons">
          <slot>
            <button title="collect" @click="collectRepository"><svg  viewBox="0 0 1024 1024" version="1.1" width="30" height="30"><path d="M875.157333 521.386667l74.709334-85.461334c26.090667-29.824 13.866667-67.52-24.768-76.309333L681.728 304.213333l-127.786667-214.677333c-20.288-34.069333-59.946667-34.090667-80.213333 0l-127.786667 214.677333-243.392 55.381334c-38.442667 8.746667-50.837333 46.506667-24.768 76.309333l164.394667 188.053333-22.613333 248.917334c-3.605333 39.466667 28.437333 62.805333 64.874666 47.146666l229.376-98.432-16.810666-39.210666-229.397334 98.453333c-6.698667 2.88-6.229333 3.221333-5.546666-4.096l24.256-267.093333-176.426667-201.813334c-4.757333-5.461333-4.885333-5.034667 2.133333-6.634666l261.205334-59.434667 137.173333-230.4c3.733333-6.293333 3.114667-6.293333 6.869333 0l137.152 230.4 261.205334 59.434667c7.125333 1.621333 6.954667 1.088 2.133333 6.613333l-74.709333 85.482667 32.106666 28.074666z m0 0l74.709334-85.461334c26.090667-29.824 13.866667-67.52-24.768-76.309333L681.728 304.213333l-127.786667-214.677333c-20.288-34.069333-59.946667-34.090667-80.213333 0l-127.786667 214.677333-243.392 55.381334c-38.442667 8.746667-50.837333 46.506667-24.768 76.309333l164.394667 188.053333-22.613333 248.917334c-3.605333 39.466667 28.437333 62.805333 64.874666 47.146666l229.376-98.432-16.810666-39.210666-229.397334 98.453333c-6.698667 2.88-6.229333 3.221333-5.546666-4.096l24.256-267.093333-176.426667-201.813334c-4.757333-5.461333-4.885333-5.034667 2.133333-6.634666l261.205334-59.434667 137.173333-230.4c3.733333-6.293333 3.114667-6.293333 6.869333 0l137.152 230.4 261.205334 59.434667c7.125333 1.621333 6.954667 1.088 2.133333 6.613333l-74.709333 85.482667 32.106666 28.074666z" fill="#ffffff" p-id="4550"></path><path d="M682.666667 917.333333a192 192 0 1 0 0-384 192 192 0 0 0 0 384z m0 42.666667c-129.6 0-234.666667-105.066667-234.666667-234.666667s105.066667-234.666667 234.666667-234.666666 234.666667 105.066667 234.666666 234.666666-105.066667 234.666667-234.666666 234.666667z" fill="#ffffff" p-id="4551"></path><path d="M769.429333 646.122667a21.333333 21.333333 0 0 1 29.930667 30.421333l-143.978667 141.653333a21.333333 21.333333 0 0 1-30.037333-0.106666l-64.426667-64.426667a21.333333 21.333333 0 0 1 30.165334-30.186667l49.472 49.472 128.853333-126.826666z" fill="#ffffff" p-id="4552"></path></svg></button>
          </slot>
        </div>
      </header>
      <p class="star-card-description">{{description}}</p>
      <footer class="star-card-footer">
        <div class="star-card-footer-language"><span class="star-card-footer-language-icon"></span> {{language}}</div>
        <div class="star-card-footer-issue" v-if="issue_numeber">
          <svg viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>{{issue_numeber}}
        </div>
        <div class="star-card-footer-star" v-if="star_number">
          <svg aria-label="star" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>{{star_number}}
        </div>
        <div class="star-card-footer-fork" v-if="fork_number">
          <svg viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>{{fork_number}}
        </div>
        <div class="star-card-footer-updated" :title="updatedTime">{{haveUpdated}}</div>
      </footer>
    </article>
    <aside>
    </aside>
  </section>
</template>

<script>
export default {
  name: 'StarCard',
  props: ['metaData', 'index'],
  data: function () {
    return {
      repository_url: '',
      title: '',
      img_url: '',
      description: '',
      language: '',
      issue_numeber: 0,
      star_number: 0,
      fork_number: 0,
      haveUpdated: '',
      updatedTime: ''
    }
  },
  filters: {
    separationPath: function (value) {
      return value.replace('/', ' / ')
    }
  },
  methods: {
    collectRepository: function () {
      this.$emit('addToCollections', this.index)
    },
    getUpdatedTimeString: function (updatedTime) {
      // format time
      var updatedHour = (+new Date() - new Date(updatedTime).getTime()) / (1000 * 60 * 60)
      if (updatedHour < 24) {
        return `Updated ${Math.ceil(updatedHour)} hours ago`
      } else {
        return `Updated ${Math.floor(updatedHour / 24)} days ago`
      }
    },
    translateData: function () {
      // props to data
      this.metaData = this.metaData || {
        'id': 131934676,
        'node_id': 'MDEwOlJlcG9zaXRvcnkxMzE5MzQ2NzY=',
        'name': 'Blog',
        'full_name': 'coconilu/Blog',
        'owner': {
          'login': 'coconilu',
          'id': 8131019,
          'node_id': 'MDQ6VXNlcjgxMzEwMTk=',
          'avatar_url': 'https://avatars3.githubusercontent.com/u/8131019?v=4',
          'gravatar_id': '',
          'url': 'https://api.github.com/users/coconilu',
          'html_url': 'https://github.com/coconilu',
          'followers_url': 'https://api.github.com/users/coconilu/followers',
          'following_url': 'https://api.github.com/users/coconilu/following{/other_user}',
          'gists_url': 'https://api.github.com/users/coconilu/gists{/gist_id}',
          'starred_url': 'https://api.github.com/users/coconilu/starred{/owner}{/repo}',
          'subscriptions_url': 'https://api.github.com/users/coconilu/subscriptions',
          'organizations_url': 'https://api.github.com/users/coconilu/orgs',
          'repos_url': 'https://api.github.com/users/coconilu/repos',
          'events_url': 'https://api.github.com/users/coconilu/events{/privacy}',
          'received_events_url': 'https://api.github.com/users/coconilu/received_events',
          'type': 'User',
          'site_admin': false
        },
        'private': false,
        'html_url': 'https://github.com/coconilu/Blog',
        'description': '全栈工程师时光胶囊。',
        'fork': false,
        'url': 'https://api.github.com/repos/coconilu/Blog',
        'forks_url': 'https://api.github.com/repos/coconilu/Blog/forks',
        'keys_url': 'https://api.github.com/repos/coconilu/Blog/keys{/key_id}',
        'collaborators_url': 'https://api.github.com/repos/coconilu/Blog/collaborators{/collaborator}',
        'teams_url': 'https://api.github.com/repos/coconilu/Blog/teams',
        'hooks_url': 'https://api.github.com/repos/coconilu/Blog/hooks',
        'issue_events_url': 'https://api.github.com/repos/coconilu/Blog/issues/events{/number}',
        'events_url': 'https://api.github.com/repos/coconilu/Blog/events',
        'assignees_url': 'https://api.github.com/repos/coconilu/Blog/assignees{/user}',
        'branches_url': 'https://api.github.com/repos/coconilu/Blog/branches{/branch}',
        'tags_url': 'https://api.github.com/repos/coconilu/Blog/tags',
        'blobs_url': 'https://api.github.com/repos/coconilu/Blog/git/blobs{/sha}',
        'git_tags_url': 'https://api.github.com/repos/coconilu/Blog/git/tags{/sha}',
        'git_refs_url': 'https://api.github.com/repos/coconilu/Blog/git/refs{/sha}',
        'trees_url': 'https://api.github.com/repos/coconilu/Blog/git/trees{/sha}',
        'statuses_url': 'https://api.github.com/repos/coconilu/Blog/statuses/{sha}',
        'languages_url': 'https://api.github.com/repos/coconilu/Blog/languages',
        'stargazers_url': 'https://api.github.com/repos/coconilu/Blog/stargazers',
        'contributors_url': 'https://api.github.com/repos/coconilu/Blog/contributors',
        'subscribers_url': 'https://api.github.com/repos/coconilu/Blog/subscribers',
        'subscription_url': 'https://api.github.com/repos/coconilu/Blog/subscription',
        'commits_url': 'https://api.github.com/repos/coconilu/Blog/commits{/sha}',
        'git_commits_url': 'https://api.github.com/repos/coconilu/Blog/git/commits{/sha}',
        'comments_url': 'https://api.github.com/repos/coconilu/Blog/comments{/number}',
        'issue_comment_url': 'https://api.github.com/repos/coconilu/Blog/issues/comments{/number}',
        'contents_url': 'https://api.github.com/repos/coconilu/Blog/contents/{+path}',
        'compare_url': 'https://api.github.com/repos/coconilu/Blog/compare/{base}...{head}',
        'merges_url': 'https://api.github.com/repos/coconilu/Blog/merges',
        'archive_url': 'https://api.github.com/repos/coconilu/Blog/{archive_format}{/ref}',
        'downloads_url': 'https://api.github.com/repos/coconilu/Blog/downloads',
        'issues_url': 'https://api.github.com/repos/coconilu/Blog/issues{/number}',
        'pulls_url': 'https://api.github.com/repos/coconilu/Blog/pulls{/number}',
        'milestones_url': 'https://api.github.com/repos/coconilu/Blog/milestones{/number}',
        'notifications_url': 'https://api.github.com/repos/coconilu/Blog/notifications{?since,all,participating}',
        'labels_url': 'https://api.github.com/repos/coconilu/Blog/labels{/name}',
        'releases_url': 'https://api.github.com/repos/coconilu/Blog/releases{/id}',
        'deployments_url': 'https://api.github.com/repos/coconilu/Blog/deployments',
        'created_at': '2018-05-03T03:06:07Z',
        'updated_at': '2018-08-21T15:58:32Z',
        'pushed_at': '2018-08-20T04:58:56Z',
        'git_url': 'git://github.com/coconilu/Blog.git',
        'ssh_url': 'git@github.com:coconilu/Blog.git',
        'clone_url': 'https://github.com/coconilu/Blog.git',
        'svn_url': 'https://github.com/coconilu/Blog',
        'homepage': '',
        'size': 413,
        'stargazers_count': 2,
        'watchers_count': 2,
        'language': 'JavaScript',
        'has_issues': true,
        'has_projects': true,
        'has_downloads': true,
        'has_wiki': true,
        'has_pages': false,
        'forks_count': 0,
        'mirror_url': null,
        'archived': false,
        'open_issues_count': 55,
        'license': null,
        'forks': 0,
        'open_issues': 55,
        'watchers': 2,
        'default_branch': 'master'
      }
      if (this.metaData) {
        this.repository_url = this.metaData.html_url
        this.title = this.metaData.full_name
        this.img_url = this.metaData.owner.avatar_url
        this.description = this.metaData.description
        this.language = this.metaData.language
        this.issue_numeber = this.metaData.open_issues_count
        this.star_number = this.metaData.stargazers_count
        this.fork_number = this.metaData.forks_count
        this.haveUpdated = this.getUpdatedTimeString(this.metaData.pushed_at)
        this.updatedTime = new Date(this.metaData.pushed_at)
      }
    }
  },
  created: function () { this.translateData() }
}
</script>

<style>
section.star-card {
  margin: 25px 0;
  padding-left: 35px;
  position: relative;
  text-align: left;
  border: 1px solid #dcdee2;
  border-color: #e8eaec;
  border-radius: 6px;
  transition: all 0.2s ease-in-out;
}
section.star-card:hover {
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  border-color: #eee;
}
section.star-card > article.star-card-main > img {
  max-width: 40px;
  max-height: 40px;
  position: absolute;
  left: -10px;
  top: -10px;
  border-radius: 50%;
  box-shadow: 0 0 1px 2px rgba(0, 0, 0, 0.2);
}
section.star-card > article.star-card-main > header.star-card-header {
  box-sizing: border-box;
  padding-top: 14px;
  height: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: stretch;
}
section.star-card
  > article.star-card-main
  > header.star-card-header
  > div.star-card-header-title {
  flex: 1 0 auto;
  font-size: 27px;
  line-height: 35px;
  max-width: 70%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: 0.2px;
}
section.star-card
  > article.star-card-main
  > header.star-card-header
  > div.star-card-header-buttons {
  flex: 0 0 auto;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: stretch;
}
section.star-card
  > article.star-card-main
  > header.star-card-header
  > div.star-card-header-buttons
  > button {
  transition: all 0.3s ease-in-out;
  border-radius: 18px;
  border-style: none;
  color: #fff;
  background-color: #4d84b2;
  padding: 3px 15px;
  margin-right: 10px;
  line-height: 30px;
  vertical-align: middle;
  width: 70px;
  text-align: center;
  overflow: hidden;
}
section.star-card
  > article.star-card-main
  > header.star-card-header
  > div.star-card-header-buttons
  > button:hover {
  opacity: 0.8;
}
section.star-card
  > article.star-card-main
  > header.star-card-header
  > div.star-card-header-buttons
  > button:active {
  opacity: 0.6;
}
section.star-card > article.star-card-main > p.star-card-description {
  padding-right: 25%;
  line-height: 1.6em;
}
section.star-card > article.star-card-main > footer.star-card-footer > * {
  display: inline-block;
}
span.star-card-footer-language-icon {
  display: inline-block;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: #3f485b;
  vertical-align: baseline;
  opacity: 0.6;
}
section.star-card > article.star-card-main > footer.star-card-footer {
  padding-bottom: 1em;
  white-space: nowrap;
  overflow: hidden;
  font-size: 13px;
}
section.star-card > article.star-card-main > footer.star-card-footer > * {
  margin-right: 1em;
  vertical-align: bottom;
}

section.star-card > article.star-card-main > footer.star-card-footer svg {
  vertical-align: -1px;
  width: 1em;
  height: 1em;
  opacity: 0.6;
  margin-right: 3px;
}
</style>
