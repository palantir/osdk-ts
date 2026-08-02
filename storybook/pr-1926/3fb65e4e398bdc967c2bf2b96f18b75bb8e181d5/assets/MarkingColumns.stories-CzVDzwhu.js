import{f as p,j as e}from"./iframe-DytthAgf.js";import{O as i}from"./object-table-DJHUpA5d.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C_4BNbTz.js";import"./Table-CG8VK7f1.js";import"./index-D3tIM5sk.js";import"./Dialog-DL-uZSD8.js";import"./cross-BAoo9bRB.js";import"./svgIconContainer-B3UGUQMc.js";import"./useBaseUiId-Dkek2wV5.js";import"./InternalBackdrop-CKlfqC_d.js";import"./composite-BtiuVRIQ.js";import"./index-BoY2zDED.js";import"./index-lj4n_gzr.js";import"./index-Cg68QRb4.js";import"./useEventCallback-D5hjObTy.js";import"./SkeletonBar-BslgRjWc.js";import"./LoadingCell-CTG-LOZa.js";import"./ColumnConfigDialog-CQpKKnM6.js";import"./DraggableList-CGL30u5r.js";import"./search-DxqwfofF.js";import"./Input-Dmrm85gF.js";import"./useControlled-BiVwljs8.js";import"./isEqual-BI3vA7Ba.js";import"./isObject-DwNdKho2.js";import"./Button-COGmdSd7.js";import"./ActionButton-DIz3vx6C.js";import"./Checkbox-Rnnk1CNA.js";import"./useValueChanged-D2yo41HC.js";import"./CollapsiblePanel-CvnwF6oN.js";import"./MultiColumnSortDialog-zGAxeUw5.js";import"./MenuTrigger-CuvxcAIl.js";import"./CompositeItem-C2b15spo.js";import"./ToolbarRootContext-Tt4yBAJp.js";import"./getDisabledMountTransitionStyles-CW35Y1qZ.js";import"./getPseudoElementBounds-onXc2cOr.js";import"./chevron-down-D-EU7ysh.js";import"./index-Dufg7QH_.js";import"./error-C8qY1hME.js";import"./BaseCbacBanner-4HweScCj.js";import"./makeExternalStore-B--gn_oA.js";import"./Tooltip-t-5z9t1Y.js";import"./PopoverPopup-BIy-JnXN.js";import"./toNumber-Cs5Prda0.js";import"./useOsdkClient-BB_Qjreu.js";import"./tick-afCbX4dN.js";import"./DropdownField-C6kbYpb5.js";import"./withOsdkMetrics-Car_C0r4.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
