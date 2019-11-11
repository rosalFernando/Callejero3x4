import { TestBed } from '@angular/core/testing';
import { CloudServiceService } from './cloud-service.service';
describe('CloudServiceService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(CloudServiceService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=cloud-service.service.spec.js.map