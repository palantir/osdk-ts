import{f as n,j as t}from"./iframe-D3BrmG1-.js";import{O as p}from"./object-table-BL902otj.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-noM8pYub.js";import"./Table-btwsGpqM.js";import"./index-CWn8kxs9.js";import"./Dialog-DgXnK5Ds.js";import"./cross-CPpNbOts.js";import"./svgIconContainer-CsFnx5wo.js";import"./useBaseUiId-BaPY3QBz.js";import"./InternalBackdrop-bPIHazvk.js";import"./composite-B3-stUHV.js";import"./index-Ce1f_LAk.js";import"./index-DO-nQfhk.js";import"./index-CfUQSMJU.js";import"./useEventCallback-BcuvtZ7U.js";import"./SkeletonBar-DMPUxID8.js";import"./LoadingCell-DKo7KC0c.js";import"./ColumnConfigDialog-D4JKXukj.js";import"./DraggableList-Da1ef7Wf.js";import"./search-Di8PTnT5.js";import"./Input-DEUS6lRw.js";import"./useControlled-bbU_YmzA.js";import"./Button-Dk4RR9yn.js";import"./small-cross-CPcnxnTT.js";import"./ActionButton-0KIqNSlY.js";import"./Checkbox-Rf9O_jfk.js";import"./useValueChanged-CrJNIxp2.js";import"./CollapsiblePanel-B62aT8fF.js";import"./MultiColumnSortDialog-PDKFBef5.js";import"./MenuTrigger-a2iCQ5Nq.js";import"./CompositeItem-Cm3zFYGd.js";import"./ToolbarRootContext-B8ZXSrIZ.js";import"./getDisabledMountTransitionStyles-setgrDQE.js";import"./getPseudoElementBounds-DmdgcFGW.js";import"./chevron-down-rAhx4X-e.js";import"./index-B45_tq2x.js";import"./error-BCzhFG07.js";import"./BaseCbacBanner-BaQ2kXp9.js";import"./makeExternalStore-BdOTM5Tx.js";import"./Tooltip-CzpL6TKn.js";import"./PopoverPopup-BpfXlPih.js";import"./toNumber-BoMA8GUw.js";import"./useOsdkClient-jndFL2Fe.js";import"./tick-C9HizoZZ.js";import"./DropdownField-BoULmS3g.js";import"./withOsdkMetrics-CVvrSjhi.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: [{
      locator: {
        type: "property",
        id: "fullName"
      }
    }, {
      locator: {
        type: "property",
        id: "department"
      }
    }, {
      locator: {
        type: "property",
        id: "classificationMarking"
      }
    }, {
      locator: {
        type: "property",
        id: "clearanceMarking"
      }
    }]
  },
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const er=["MarkingColumns"];export{r as MarkingColumns,er as __namedExportsOrder,or as default};
