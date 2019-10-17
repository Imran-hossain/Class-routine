<?php
namespace App;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Auth\Authenticatable;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Contracts\Auth\Authenticatable  as AuthenticatableContract;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;
class User extends Eloquent implements JWTSubject, AuthenticatableContract
{
    use Notifiable;
    use Authenticatable;
    
    protected $connection = 'mongodb';
    protected $collection = 'users';
    

    protected $fillable = [
        'name','type', 'ID', 'email','password','admin_email','token',
    ];
    
    
    protected $hidden = [
        'password', 'remember_token',
    ];
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }
    public function getJWTCustomClaims()
    {
        return [];
    }
}