import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Icon, Popconfirm, message } from 'antd';
import { PropTypes } from 'prop-types';
import { fetchOneProject } from '../../store/action/projectAction';

const ProjectDetails = ({ match }) => {
    const { id } = match.params;
    const project = useSelector(state => state.project.currentProject);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOneProject(id));
    }, [dispatch, id]);

    // TODO
    const confirm = () => {
        message.info('Clicked on Yes.');
    };

    if (project) {
        return (
            <div>
                <Card
                    title={`${project.id}. ${project.title}`}
                    bordered={false}
                    actions={[
                        <Icon type="edit" />,
                        <Popconfirm
                            placement="top"
                            title="deleted?"
                            onConfirm={confirm}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Icon type="delete" />
                        </Popconfirm>
                    ]}
                >
                    <p>{project.content}</p>
                    <hr />
                    <p>{`${project.author.firstName} ${project.author.lastName}`}</p>
                    <p>{project.createDate}</p>
                </Card>
            </div>
        );
    }

    return <div>Loading</div>;
};

ProjectDetails.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
};

export default ProjectDetails;
