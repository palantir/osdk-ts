import{f as n,j as t}from"./iframe-zLsQUMAw.js";import{O as p}from"./object-table-BgeD4JuT.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CO4lQq_B.js";import"./Table-H7nQg7jv.js";import"./index-DE6lriSD.js";import"./Dialog-C7SuERu5.js";import"./cross-HAfKpsri.js";import"./svgIconContainer-DM1sVsf9.js";import"./useBaseUiId-CDbWZKXZ.js";import"./InternalBackdrop-D80U27G8.js";import"./composite-BsASbnkT.js";import"./index-DK05LQT7.js";import"./index-WGFNGwIq.js";import"./index-D9svPj6n.js";import"./useEventCallback-Cnr1zu1U.js";import"./SkeletonBar-DRvs3al4.js";import"./LoadingCell-zkM00B9n.js";import"./ColumnConfigDialog-B-IpO38P.js";import"./DraggableList-BPXNnrSV.js";import"./search-B4nRmcHn.js";import"./Input-DFEZJQv8.js";import"./useControlled-Bnt72tl_.js";import"./Button-CQlBfRM3.js";import"./small-cross-CsYe5KLO.js";import"./ActionButton-t5bTXHOi.js";import"./Checkbox-lTUt8QdJ.js";import"./useValueChanged-CqiHIm1B.js";import"./CollapsiblePanel-RfJIOgnR.js";import"./MultiColumnSortDialog-C69sMrp-.js";import"./MenuTrigger-CL2wkF4T.js";import"./CompositeItem-CjgyYjDg.js";import"./ToolbarRootContext-D-gY887B.js";import"./getDisabledMountTransitionStyles-CG8btGC3.js";import"./getPseudoElementBounds-BbooY6ih.js";import"./chevron-down-K_6VEsr_.js";import"./index-DDQT6zO2.js";import"./error-Bw9Mtjnp.js";import"./BaseCbacBanner-BlP9zLq1.js";import"./makeExternalStore-B-tZIFNm.js";import"./Tooltip-BbvYVbt2.js";import"./PopoverPopup-8MnK0a5C.js";import"./toNumber-B1nZ2PiK.js";import"./useOsdkClient-B3byok8U.js";import"./tick-CpgN2ErT.js";import"./DropdownField-Bnq7SV8c.js";import"./withOsdkMetrics-CICgC5TI.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
