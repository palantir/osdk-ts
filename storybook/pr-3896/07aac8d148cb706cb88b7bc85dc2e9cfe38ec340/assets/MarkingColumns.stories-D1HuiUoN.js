import{f as p,j as e}from"./iframe-CgO27IRu.js";import{O as i}from"./object-table-DXNAiDf6.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BFaeybdJ.js";import"./Table-BIALEz5r.js";import"./index-BYcjpIix.js";import"./Dialog-CkwYR2xh.js";import"./cross-7f4N_TUE.js";import"./svgIconContainer-DhCCLzjj.js";import"./useBaseUiId-BO2BnfXi.js";import"./InternalBackdrop-Cz0WVhEG.js";import"./composite-p801Jdqa.js";import"./index-D2mMtCtu.js";import"./index-BUqQhE-Z.js";import"./index-mNj5KG8f.js";import"./useEventCallback-DFjx1zjN.js";import"./SkeletonBar-BX4lka8z.js";import"./LoadingCell-D3D5c3XV.js";import"./ColumnConfigDialog-1UCfeJwM.js";import"./DraggableList-WrqVXuVf.js";import"./search-BsJeG7XA.js";import"./Input-Dj3Aq0gE.js";import"./useControlled-DQw2ttEs.js";import"./Button-IqR8HyTq.js";import"./small-cross-CPs8amt9.js";import"./ActionButton-DOTNR6TX.js";import"./Checkbox-BbzMjnfd.js";import"./useValueChanged-BE8D05Iz.js";import"./CollapsiblePanel-PEWKdp4D.js";import"./MultiColumnSortDialog-CjR7xFOj.js";import"./MenuTrigger-SbjN_ntN.js";import"./CompositeItem-DM5Ux4XM.js";import"./ToolbarRootContext-Dk5396e8.js";import"./getDisabledMountTransitionStyles-DXJXIwd_.js";import"./getPseudoElementBounds-DowlDy4M.js";import"./chevron-down-BHGyaEjN.js";import"./index-D4Z8a6hC.js";import"./error-CvjVBbuk.js";import"./BaseCbacBanner-BAMy2tjK.js";import"./makeExternalStore-BWlpa4eR.js";import"./Tooltip-BUDoMBLR.js";import"./PopoverPopup-DwKTUNJI.js";import"./debounce-CKeaQRTn.js";import"./useOsdkClient-B_-tZKM9.js";import"./tick-BaoeG2cB.js";import"./DropdownField-Doi6icK-.js";import"./isEqual-BZS2mAgW.js";import"./withOsdkMetrics-DT_01Uro.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
