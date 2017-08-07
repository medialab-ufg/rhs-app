import { Injectable } from '@angular/core';

@Injectable()
export class PostModel {

  constructor(
    public id: number,
    public date: string,
    public date_gmt: string,
    public guid: [{
      'rendered': string
    }],
    public modified: string,
    public modified_gmt: string,
    public slug: string,
    public status: string,
    public type: string,
    public link: string,
    public title: [{
      'rendered': string
    }],
    public content: [{
      'rendered': string,
      'protected': boolean
    }],
    public excerpt: [{
      'rendered': string,
      'protected': boolean
    }],
    public author: number,
    public featured_media: number,
    public comment_status: string,
    public ping_status: string,
    public sticky: boolean,
    public template: string,
    public format: string,
    public meta: [any],
    public categories: [number],
    public tags: [any],
    public _links: [{
      'self': [{string}],
      'author': [{any}],
      'replies': [{any}],
      'wp:featuredmedia': [{any}],
      'wp:attatchment': [{any}],
      'wp:term': [{any}],
      'curies': [{any}]
    }],
    public _embedded: [{
      'author': [{any}],
      'replies': [{any}],
      'wp:featuredmedia': [{any}],
      'wp:attatchment': [{any}],
      'wp:term': [{any}]
    }],
    ) {}

}

@Injectable()
export class UserModel {

  constructor(
    public id: number,
    public name: string,
    public url: string,
    public description: string,
    public link: string,
    public slug: string,
    public avatar_urls: [{
      '24': string, // access it like userInfo.avatar_urls['24'];
      '48': string,
      '96': string
    }],
    public meta: [any]
  ) {}

}

@Injectable()
export class CommentModel {

  constructor(
    public id: number,
    public post: number,
    public parent: number,
    public author: number,
    public author_name: string,
    public author_url: string,
    public date: string,
    public date_gmt: string,
    public content: [{
      'rendered': string,
      'protected': boolean
    }],
    public status: string,
    public type: string,
    public link: string,
    public author_avatar_urls: [{
      '24': string, // access it like userInfo.avatar_urls['24'];
      '48': string,
      '96': string
    }],
    public meta: [any],
    public categories: [number],
    public tags: [any],
    public _links: [{
      'self': [{string}],
      'author': [{any}],
      'up': [{any}],
      'in-reply-to': [{any}]
    }],
    public depth: number
    ) {}

}

@Injectable()
export class TagModel {

  constructor(
    public id: number,
    public count: number,
    public description: string,
    public link: string,
    public name: string,
    public slug: string,
    public taxonomy: string
    ) {}

}

@Injectable()
export class CategoryModel {

  constructor(
    public id: number,
    public count: number,
    public description: string,
    public link: string,
    public name: string,
    public slug: string,
    public taxonomy: string,
    public parent: number
    ) {}

}
