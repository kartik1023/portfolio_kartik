import React from 'react';
import { FaCode, FaHammer, FaVial, FaRocket, FaChartLine, FaArrowRight } from 'react-icons/fa';

const PipelineStage = ({ icon, title, subtitle, tech }) => (
    <div className="pipeline-stage">
        <div className="stage-icon">
            <i>{icon}</i>
        </div>
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <span className="stage-tech">{tech}</span>
    </div>
);

const PipelineArrow = () => (
    <div className="pipeline-arrow">
        <i><FaArrowRight /></i>
    </div>
);

const DevOpsPipeline = () => {
    return (
        <section className="devops-pipeline">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Workflow</span>
                    <h2 className="section-title">DevOps Pipeline</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="pipeline-flow">
                    <PipelineStage
                        icon={<FaCode />}
                        title="Code"
                        subtitle="Version Control"
                        tech="Git, GitHub"
                    />
                    <PipelineArrow />
                    <PipelineStage
                        icon={<FaHammer />}
                        title="Build"
                        subtitle="Containerization"
                        tech="Docker, Maven"
                    />
                    <PipelineArrow />
                    <PipelineStage
                        icon={<FaVial />}
                        title="Test"
                        subtitle="Automated Testing"
                        tech="PyTest, Jest"
                    />
                    <PipelineArrow />
                    <PipelineStage
                        icon={<FaRocket />}
                        title="Deploy"
                        subtitle="Cloud Deployment"
                        tech="AWS, K8s"
                    />
                    <PipelineArrow />
                    <PipelineStage
                        icon={<FaChartLine />}
                        title="Monitor"
                        subtitle="Observability"
                        tech="CloudWatch"
                    />
                </div>
            </div>
        </section>
    );
};

export default DevOpsPipeline;
