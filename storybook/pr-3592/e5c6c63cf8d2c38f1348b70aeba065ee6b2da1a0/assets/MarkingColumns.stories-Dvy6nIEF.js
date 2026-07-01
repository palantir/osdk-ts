import{f as n,j as t}from"./iframe-CK6-bEXf.js";import{O as p}from"./object-table-D_vlHw2u.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-4WvK8-Yd.js";import"./Table-DPE6rtdI.js";import"./index-gCf76nbq.js";import"./Dialog-c1iW_d78.js";import"./cross-CE4e9qpC.js";import"./svgIconContainer-0vw9KVmL.js";import"./useBaseUiId-C8bwbgNl.js";import"./InternalBackdrop-BxOxmnTY.js";import"./composite-CLzESlrj.js";import"./index-CKHSgMY3.js";import"./index-B6anvPji.js";import"./index-Bj3Du-xo.js";import"./useEventCallback-f8U0fy8W.js";import"./SkeletonBar-Cw_dIYge.js";import"./LoadingCell-CW76RmWF.js";import"./ColumnConfigDialog-CXkZh4JH.js";import"./DraggableList-BeJJH_IG.js";import"./search-HTteqF-B.js";import"./Input-BWRSmdVV.js";import"./useControlled-CVJt9X_l.js";import"./Button-DF5pKT7b.js";import"./small-cross-b3NQhOSU.js";import"./ActionButton-Ysxt3f6S.js";import"./Checkbox-BYf4r5MS.js";import"./minus-HyGnoJJ1.js";import"./tick-Csq3YK-1.js";import"./useValueChanged-BFPYgryE.js";import"./caret-down-DEoQayYA.js";import"./CollapsiblePanel-DrLb0tiL.js";import"./MultiColumnSortDialog-heWeWvrV.js";import"./MenuTrigger-BSJln2qV.js";import"./CompositeItem-PoTHCljE.js";import"./ToolbarRootContext-C8omlPvD.js";import"./getDisabledMountTransitionStyles-RbpPly0M.js";import"./getPseudoElementBounds-D5y-2Lek.js";import"./chevron-down-DyK65iz3.js";import"./index-CF-olHcK.js";import"./error-BzLb54Cb.js";import"./BaseCbacBanner-ChaSN6rY.js";import"./makeExternalStore-Depr778P.js";import"./Tooltip-CJg1zjZA.js";import"./PopoverPopup-G5uEGgyq.js";import"./toNumber-bA3Sujbc.js";import"./useOsdkClient-DCM7vX_L.js";import"./DropdownField-DFzlSC50.js";import"./withOsdkMetrics-4uTcp25M.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
