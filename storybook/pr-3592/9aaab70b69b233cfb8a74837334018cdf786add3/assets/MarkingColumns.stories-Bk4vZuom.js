import{f as n,j as t}from"./iframe-BuvMsZtG.js";import{O as p}from"./object-table-CXt1Ldsw.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DkO06LBG.js";import"./Table-KkC8ZHqF.js";import"./index-BrH84VTy.js";import"./Dialog-W0DKTrpN.js";import"./cross-DeDEJYzH.js";import"./svgIconContainer-DLBvWme8.js";import"./useBaseUiId-DAlUuicx.js";import"./InternalBackdrop-C_ZV9CX4.js";import"./composite-DCKRM-n_.js";import"./index-3iSIe5o6.js";import"./index-Cum23KRi.js";import"./index-D6lOILvY.js";import"./useEventCallback-DPEgUYgW.js";import"./SkeletonBar-Cg_Ee1G4.js";import"./LoadingCell-pv8ySaaD.js";import"./ColumnConfigDialog-Bt3Dwj2t.js";import"./DraggableList-DEhonnss.js";import"./search-BcBio4BJ.js";import"./Input-CHzA_gvK.js";import"./useControlled-vkUbBAp-.js";import"./Button-zjZgPub4.js";import"./small-cross-5-X_WcrI.js";import"./ActionButton-2qvKazvZ.js";import"./Checkbox-BLoeczSG.js";import"./minus-DO1F4fVU.js";import"./tick-BwSfLKv8.js";import"./useValueChanged-Nhc-lx8J.js";import"./caret-down-C5jtd5bB.js";import"./CollapsiblePanel-2WzAeGXr.js";import"./MultiColumnSortDialog-DsGmUe3c.js";import"./MenuTrigger-Cn1kVPRz.js";import"./CompositeItem-BFnfxBpM.js";import"./ToolbarRootContext-DVV2ELei.js";import"./getDisabledMountTransitionStyles-BVqCf1Qa.js";import"./getPseudoElementBounds-CiY6qU6X.js";import"./chevron-down-Zorp05f6.js";import"./index-BYgqtpqf.js";import"./error-DkdoCXm0.js";import"./BaseCbacBanner-DrGqxv-V.js";import"./makeExternalStore-DZlgS07u.js";import"./Tooltip-BdwSuyKV.js";import"./PopoverPopup-kEgg1twJ.js";import"./toNumber-C8FNQlmx.js";import"./useOsdkClient-FuBvqkTz.js";import"./DropdownField-bvbgCg_D.js";import"./withOsdkMetrics-BaqLod3I.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const pr=["MarkingColumns"];export{r as MarkingColumns,pr as __namedExportsOrder,ir as default};
