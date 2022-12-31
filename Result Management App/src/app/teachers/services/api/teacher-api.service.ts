import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Result } from 'src/app/shared/models/result';
import { User } from 'src/app/shared/models/user';

@Injectable({
    providedIn: 'root',
})
export class TeacherApiService {
    constructor(private httpClient: HttpClient) {}

    getTeacherByUsername(username: string) {
        return this.httpClient.get<User[]>(
            'http://localhost:3001/users/' + username
        );
    }

    getAllResults() {
        return this.httpClient.get<Result[]>('http://localhost:3001/results');
    }

    getResultByRollNo(rollNo: number) {
        return this.httpClient.get<Result[]>(
            'http://localhost:3001/results/' + rollNo
        );
    }

    addResult(result: Result) {
        return this.httpClient.post<Result>(
            'http://localhost:3001/results',
            result
        );
    }

    updateResult(result: Result) {
        console.log(result.id);
        return this.httpClient.put<Result>(
            'http://localhost:3001/results/' + result.id,
            result
        );
    }

    deleteResult(id: number) {
        return this.httpClient.delete('http://localhost:3001/results/' + id);
    }
}
