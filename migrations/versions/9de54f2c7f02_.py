"""empty message

Revision ID: 9de54f2c7f02
Revises: 
Create Date: 2022-11-23 13:39:59.878192

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9de54f2c7f02'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('first_name', sa.String(length=50), nullable=False),
    sa.Column('last_name', sa.String(length=50), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.Column('favorited_order', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('radio_stations',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('admin_id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=False),
    sa.Column('stream_url', sa.String(length=500), nullable=False),
    sa.Column('image_url', sa.String(length=500), nullable=True),
    sa.Column('website_url', sa.String(length=500), nullable=True),
    sa.Column('chat_url', sa.String(length=500), nullable=True),
    sa.Column('calendar_url', sa.String(length=500), nullable=True),
    sa.Column('additional_link_1', sa.String(length=500), nullable=True),
    sa.Column('additional_link_2', sa.String(length=500), nullable=True),
    sa.Column('additional_link_3', sa.String(length=500), nullable=True),
    sa.Column('additional_label_1', sa.String(length=100), nullable=True),
    sa.Column('additional_label_2', sa.String(length=100), nullable=True),
    sa.Column('additional_label_3', sa.String(length=100), nullable=True),
    sa.Column('now_playing_url', sa.String(length=500), nullable=True),
    sa.ForeignKeyConstraint(['admin_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('chat_members',
    sa.Column('radio_station_id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['radio_station_id'], ['radio_stations.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('radio_station_id', 'user_id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('chat_members')
    op.drop_table('radio_stations')
    op.drop_table('users')
    # ### end Alembic commands ###
