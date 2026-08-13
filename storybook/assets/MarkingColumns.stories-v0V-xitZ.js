import{f as p,j as e}from"./iframe-KgHs4zat.js";import{O as i}from"./object-table-DV5y26_M.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-74UoGiwT.js";import"./index-4vqX9qxC.js";import"./Dialog-BpGjciNF.js";import"./cross-DhFqeu01.js";import"./svgIconContainer-DQnAfD0o.js";import"./useBaseUiId-DalgrHe6.js";import"./InternalBackdrop-DViNfjhE.js";import"./composite-IhPVrKNo.js";import"./index-sG7sensQ.js";import"./index-C8wkzaSL.js";import"./index-Cvi9YUqR.js";import"./useEventCallback-k4xeUSxb.js";import"./SkeletonBar-Bf7e_vZS.js";import"./LoadingCell-DKEWteEU.js";import"./ColumnConfigDialog-CbKTIPgu.js";import"./DraggableList-89OxstIM.js";import"./search-EITjVgXy.js";import"./Input-a2sXSpjj.js";import"./useControlled-CxaIzWVI.js";import"./Button-Dpxg_r7U.js";import"./small-cross-D0RxxQjs.js";import"./ActionButton-C50xJeW0.js";import"./Checkbox-DrjqhFVh.js";import"./useValueChanged-BFs6pXAE.js";import"./CollapsiblePanel-Z924RNew.js";import"./MultiColumnSortDialog-mu_PjvZK.js";import"./MenuTrigger-BpEoVlQn.js";import"./CompositeItem-7z4K7NB3.js";import"./ToolbarRootContext-D2FvLITL.js";import"./getDisabledMountTransitionStyles-NJe8la4r.js";import"./getPseudoElementBounds-BZaAPVEY.js";import"./chevron-down-CkShUoKE.js";import"./index-Dtd5pHFd.js";import"./error-DM5-tWgF.js";import"./BaseCbacBanner-D7M6Q2cB.js";import"./makeExternalStore-CgubNTuf.js";import"./Tooltip-DgoYnTNF.js";import"./PopoverPopup-DrtPa-a0.js";import"./debounce-CDJ8NUNV.js";import"./useOsdkClient-DCQJMlbA.js";import"./tick-9dKwtDHQ.js";import"./DropdownField-TNE9D_Wl.js";import"./isEqual-DtaZ63Yd.js";import"./withOsdkMetrics-fRmXbymy.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
