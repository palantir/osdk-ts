import{f as p,j as e}from"./iframe-Ccapaqae.js";import{O as i}from"./object-table-Dz76OuRn.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B0fDxzOV.js";import"./Table-D6loqJR_.js";import"./index-CAc_fcE_.js";import"./Dialog-OboDm5XO.js";import"./cross-DVe-hkuB.js";import"./svgIconContainer-usxw3tZ0.js";import"./useBaseUiId-BD8gqrlU.js";import"./InternalBackdrop-BN-hTzRo.js";import"./composite-D5uZkbga.js";import"./index-DJ_c_Zcf.js";import"./index-Bb7LrozI.js";import"./index-C-nQHSmy.js";import"./useEventCallback-B8B0zh1F.js";import"./SkeletonBar-CxVZ2dgM.js";import"./LoadingCell-B0rni8W2.js";import"./ColumnConfigDialog-BIUweG0f.js";import"./DraggableList-D0wc-qLT.js";import"./search-gfBqCBGK.js";import"./Input-Cmwk-bsi.js";import"./useControlled-OeZ6f7Nb.js";import"./Button-YLU6pcy0.js";import"./small-cross-BCCk6ZGS.js";import"./ActionButton-BU9tJHwz.js";import"./Checkbox-DC6mo_fZ.js";import"./useValueChanged-fMEzhjAD.js";import"./CollapsiblePanel-BRx4L-gI.js";import"./MultiColumnSortDialog-B_yL99Yt.js";import"./MenuTrigger-CdarDH0K.js";import"./CompositeItem-BQ56iutS.js";import"./ToolbarRootContext-h1fk3wwB.js";import"./getDisabledMountTransitionStyles-CX7DWXGm.js";import"./getPseudoElementBounds-3hF2b042.js";import"./chevron-down-NuPa8cs3.js";import"./index-BmU3DUw1.js";import"./error-rF1GSzue.js";import"./BaseCbacBanner-59JQ6rwc.js";import"./makeExternalStore-g6LhMIcg.js";import"./Tooltip-OyMbgjjf.js";import"./PopoverPopup-Bdu2GGRB.js";import"./debounce-DqeA49PZ.js";import"./useOsdkClient-BB4EEIlx.js";import"./tick-B2UO1Zse.js";import"./DropdownField-BincnoLP.js";import"./isEqual-DSfnir-p.js";import"./withOsdkMetrics-Clo6yw-m.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
