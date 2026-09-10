import{f as p,j as e}from"./iframe-D3RGMnav.js";import{O as i}from"./object-table-BakC7nn4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BklmKIr_.js";import"./Table-R7a12CVv.js";import"./index-nSo8ObpB.js";import"./Dialog-DzLg0Ofr.js";import"./cross-DJMZ2_VJ.js";import"./svgIconContainer-nHtSwbNR.js";import"./useBaseUiId-BhJo7SoD.js";import"./InternalBackdrop-DNhkpLhR.js";import"./composite-DtZsoZnS.js";import"./index-B1m7fBwG.js";import"./index-BCGsGoWh.js";import"./index-DkTcI7f6.js";import"./useEventCallback-Bb_RfLNl.js";import"./SkeletonBar--V7bY1Hg.js";import"./LoadingCell-C-Mgr2_3.js";import"./ColumnConfigDialog-BmT51Anr.js";import"./DraggableList-CyL66yiO.js";import"./search-DhStDycO.js";import"./Input-BD3DYMGR.js";import"./useControlled-TK_e7a_Y.js";import"./Button-DybLmK6C.js";import"./small-cross-I1SXQrv5.js";import"./ActionButton-LPM2maYQ.js";import"./Checkbox-BPd5nN8O.js";import"./useValueChanged-BhgPHUED.js";import"./CollapsiblePanel-B5YKTTfg.js";import"./MultiColumnSortDialog-DTCkqGq-.js";import"./MenuTrigger-XGVUEXcP.js";import"./CompositeItem-Bs8xPD2u.js";import"./ToolbarRootContext-DVajx3A6.js";import"./getDisabledMountTransitionStyles-CAL3aepw.js";import"./getPseudoElementBounds-BCjf5F4u.js";import"./chevron-down-Cq6RCzUz.js";import"./index-DDdvHcPj.js";import"./error-BtBmESuY.js";import"./BaseCbacBanner-f6adz1Nr.js";import"./makeExternalStore-DkQFuTyA.js";import"./Tooltip-xT35MYb5.js";import"./PopoverPopup-CgsNZx-r.js";import"./debounce-DCoo-0F-.js";import"./useOsdkClient-B1LUMolX.js";import"./tick-BFwYDZkg.js";import"./DropdownField-DifR4mWz.js";import"./isEqual-cXk5KBsJ.js";import"./withOsdkMetrics-q9Ci7M-s.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
