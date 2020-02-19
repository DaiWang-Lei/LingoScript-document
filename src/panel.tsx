import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

const sideBarData = [
    { id: 1, summary: '真介绍' },
    { id: 1, summary: '介绍', details: ['加入', '巧妙', '旅程'] },
    { id: 2, summary: '核心资源', details: ['平衡', '体会', '创造'] },
    { id: 1, summary: '介绍', details: ['加入', '巧妙', '旅程'] },
    { id: 2, summary: '核心资源', details: ['平衡', '体会', '创造'] },
    { id: 1, summary: '介绍', details: ['加入', '巧妙', '旅程'] },
    { id: 2, summary: '核心资源', details: ['平衡', '体会', '创造'] },
    { id: 1, summary: '介绍', details: ['加入', '巧妙', '旅程'] },
    { id: 2, summary: '核心资源', details: ['平衡', '体会', '创造'] },
    { id: 1, summary: '介绍', details: ['加入', '巧妙', '旅程'] },
    { id: 2, summary: '核心资源', details: ['平衡', '体会', '创造'] },


]


export default function SimpleExpansionPanel() {

    return (
        <div className='bg-transparent'>
            {
                sideBarData.map((val, i) => {
                    return (
                        // 每个扩展面板
                        <ExpansionPanel style={{ backgroundColor: 'transparent', color: 'white' }}>
                            {
                                // 扩展面板是摘要还是细节
                                val.details ?
                                    (<ExpansionPanelSummary>
                                        <div>{val.summary}</div>
                                    </ExpansionPanelSummary>)
                                    :
                                    <ExpansionPanelDetails>
                                        <div>{val.summary}</div>
                                    </ExpansionPanelDetails>
                            }

                            {
                                val.details && val.details.map((item, i) => {
                                    return (
                                        <ExpansionPanelDetails>
                                            <span>
                                                {item}
                                            </span>
                                        </ExpansionPanelDetails>
                                    )
                                })
                            }
                        </ExpansionPanel>
                    )
                })
            }

        </div >
    );
}
