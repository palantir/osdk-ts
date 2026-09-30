import{f as p,j as e}from"./iframe-mIKFVahX.js";import{O as i}from"./object-table-hPMOmqJR.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DQmtxJ1O.js";import"./Table-Brx6eFBd.js";import"./index-eiO_d1ck.js";import"./Dialog-BSESTF6k.js";import"./cross-UeuWwKaz.js";import"./svgIconContainer-CQHualxO.js";import"./useBaseUiId-CgEi7PVt.js";import"./InternalBackdrop-Cdrrn7aO.js";import"./composite-D6bfVeDu.js";import"./index-Dr8o4W-0.js";import"./index-CRsq_c05.js";import"./index-Pl8i-n3y.js";import"./useEventCallback-ByOT_zkS.js";import"./SkeletonBar-Uz0c5MYh.js";import"./LoadingCell-DXFzSvcB.js";import"./ColumnConfigDialog-lI0l1iiB.js";import"./DraggableList-CdQWcTkz.js";import"./search-BUcn5JQ5.js";import"./Input-C9PDTVtY.js";import"./useControlled-XyEjnDFJ.js";import"./Button-D5NXSYW3.js";import"./small-cross-CuoPPjey.js";import"./ActionButton-D0IxPZVx.js";import"./Checkbox-CxqJmRtZ.js";import"./useValueChanged-BD4JYKkh.js";import"./CollapsiblePanel--mOZhS6t.js";import"./MultiColumnSortDialog-CO8YBk6o.js";import"./MenuTrigger-Cs75RSzs.js";import"./CompositeItem-CiILW6_Z.js";import"./ToolbarRootContext-xG4QpLCn.js";import"./getDisabledMountTransitionStyles-BBJk5-bd.js";import"./getPseudoElementBounds-BHyVtr05.js";import"./chevron-down-BpXaL00s.js";import"./index-ug1vsAFu.js";import"./error-Jm4hVuYR.js";import"./BaseCbacBanner-C-c4cvyr.js";import"./makeExternalStore-BtEilyBA.js";import"./Tooltip-DaMgYhHZ.js";import"./PopoverPopup-DVmf3a0F.js";import"./debounce-ahFHSZsE.js";import"./useOsdkClient-Dtz0cA44.js";import"./tick-D0ywqUCl.js";import"./DropdownField-DRer5ayG.js";import"./isEqual-k-eFjD6c.js";import"./withOsdkMetrics-f8AFQ5tL.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
