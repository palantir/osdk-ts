import{f as p,j as e}from"./iframe-BXnew5By.js";import{O as i}from"./object-table-BN25w3m8.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BgFOTMV1.js";import"./Table-DKeEq1LX.js";import"./index-DJpoqriT.js";import"./Dialog-BJNOd716.js";import"./cross-CeycVR7t.js";import"./svgIconContainer-BOoSLwOJ.js";import"./useBaseUiId-Co3zeB_F.js";import"./InternalBackdrop-huoQMuNZ.js";import"./composite-BAOjtMlw.js";import"./index-ytG0jJ_D.js";import"./index-Db3xMcrp.js";import"./index-By4f0Urp.js";import"./useEventCallback-Dsd6TDvm.js";import"./SkeletonBar-DCvGLNk1.js";import"./LoadingCell-BL4XcoMT.js";import"./ColumnConfigDialog-fgbl5wpm.js";import"./DraggableList-CceqTZsM.js";import"./search-hra39GH9.js";import"./Input-CvomcPkC.js";import"./useControlled-ClYOKgQs.js";import"./Button-TEbldry0.js";import"./small-cross-BNPCi4md.js";import"./ActionButton-D24YaycG.js";import"./Checkbox-D73LO1C5.js";import"./useValueChanged-7SKRVsQE.js";import"./CollapsiblePanel-DKOlS72j.js";import"./MultiColumnSortDialog-B5_Au34U.js";import"./MenuTrigger-eQ2rWHau.js";import"./CompositeItem-W1wcrO0a.js";import"./ToolbarRootContext-DobZfpb_.js";import"./getDisabledMountTransitionStyles-BPAsAy4r.js";import"./getPseudoElementBounds-yDzXL7xl.js";import"./chevron-down-BWrlC_BY.js";import"./index-Bopk1NCu.js";import"./error-5wYybOyD.js";import"./BaseCbacBanner-ln0Atg9L.js";import"./makeExternalStore-rqkc6KEp.js";import"./Tooltip-DFS9Zaq4.js";import"./PopoverPopup-myoJjBlp.js";import"./debounce-4CN7S1Vp.js";import"./useOsdkClient-Dv-ty224.js";import"./tick-DUV4yo-s.js";import"./DropdownField-Bxvwi2SR.js";import"./isEqual-D61AOONF.js";import"./withOsdkMetrics-XvAUFTIm.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
