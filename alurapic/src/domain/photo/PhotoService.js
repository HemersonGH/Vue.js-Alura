export default class PhotoService {
  constructor(resource) {
    this._resource = resource('v1/fotos{/id}');
  }

  add(photo) {
    return this._resource.save(photo);
  }

  list() {
    return this._resource
      .query()
      .then(res => res.json());
  }

  delete(id) {
    return this._resource.delete({ id });
  }
}
