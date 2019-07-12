from marshmallow import Schema, fields, ValidationError, validates

class UserSchema(Schema):
    username = fields.String()
    email = fields.Email()
    password = fields.String()

    @validates('password')
    def validate_password_strength(self, password):
        len_password = len(password) > 6
        digit_in_password = any(char.isdigit() for char in password)
        
        if not len_password or not digit_in_password:
            raise ValidationError('Password must be at least 6 characters with 1 numeric digit')
    

            