import{f as p,j as e}from"./iframe-Bzybdyuo.js";import{O as i}from"./object-table-Ci06Cb6a.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DvhPMCjI.js";import"./Table-s-LOx-O1.js";import"./index-C7I7uOuD.js";import"./Dialog-DKwwdXiW.js";import"./cross-CE07U7-n.js";import"./svgIconContainer-CT7GuDuE.js";import"./useBaseUiId-LiIOLQsT.js";import"./InternalBackdrop-BteoWMrF.js";import"./composite-BlLYhcU2.js";import"./index-gwzeuytQ.js";import"./index-DyzMZFsL.js";import"./index-Cj0RLd6Y.js";import"./useEventCallback-BIS3lrlS.js";import"./SkeletonBar-M1Ic1N8F.js";import"./LoadingCell-DlD1fvlw.js";import"./ColumnConfigDialog-DHll2Vtm.js";import"./DraggableList-CKJ156pY.js";import"./search-DvoFgpQI.js";import"./Input-CdTlwUNA.js";import"./useControlled-Dmv8kSAc.js";import"./isEqual-a7a6QpMS.js";import"./isObject-CbXsQEYM.js";import"./Button-BVoTv4hE.js";import"./ActionButton-HSnORvpF.js";import"./Checkbox-CrI4yRfS.js";import"./useValueChanged-BeDSHPhg.js";import"./CollapsiblePanel-DIZt_nYD.js";import"./MultiColumnSortDialog-B1OBUidD.js";import"./MenuTrigger-CH3kZWz7.js";import"./CompositeItem-Dmbp9j_U.js";import"./ToolbarRootContext-DTWuY11i.js";import"./getDisabledMountTransitionStyles-gWcg8BNd.js";import"./getPseudoElementBounds-DntOXEgl.js";import"./chevron-down-ChW0ZqRN.js";import"./index-B9kV5q7Y.js";import"./error-DxO-v6dh.js";import"./BaseCbacBanner-ywq-HhKA.js";import"./makeExternalStore-DPGXEAtz.js";import"./Tooltip-BVN02VII.js";import"./PopoverPopup-3wn-Yyju.js";import"./toNumber-UpjdYfXI.js";import"./useOsdkClient-CgU6C7-g.js";import"./tick-BmQSr-db.js";import"./DropdownField-BcLVRQWa.js";import"./withOsdkMetrics-BQraTyAY.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:a=>e.jsx("div",{style:{height:480},children:e.jsx(i,{...a})})};var t,o,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />\`
      }
    }
  },
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const nr=["MarkingColumns"];export{r as MarkingColumns,nr as __namedExportsOrder,or as default};
