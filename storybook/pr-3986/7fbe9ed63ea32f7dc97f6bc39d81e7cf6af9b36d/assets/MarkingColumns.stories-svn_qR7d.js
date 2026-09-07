import{f as p,j as e}from"./iframe-NrfGywpz.js";import{O as i}from"./object-table-CSBOnXso.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B_PzSpqk.js";import"./Table-yN6i7lAP.js";import"./index-B4J3JGGr.js";import"./Dialog-C2AOq1lk.js";import"./cross-Caw6Pz43.js";import"./svgIconContainer-Cgk6hNay.js";import"./useBaseUiId-DgnEpncS.js";import"./InternalBackdrop-DwTNI5Cd.js";import"./composite-DA8gx3Og.js";import"./index-D-R7Oq4i.js";import"./index-ALjvoOKD.js";import"./index-D3KOsz6o.js";import"./useEventCallback-DGcpXBNW.js";import"./SkeletonBar-DEllJNlP.js";import"./LoadingCell-B5rJAwI5.js";import"./ColumnConfigDialog-5mgHcV2b.js";import"./DraggableList-mQAKFBz7.js";import"./search-DU1IM6NB.js";import"./Input-CCWHU-92.js";import"./useControlled-DTlMTcYw.js";import"./Button-DIZaR5tq.js";import"./small-cross-CqGyxp_N.js";import"./ActionButton-CKkZcYry.js";import"./Checkbox-CIZsMWNA.js";import"./useValueChanged-DybLxmI0.js";import"./CollapsiblePanel-CdmC8pOd.js";import"./MultiColumnSortDialog-NTJeK39Q.js";import"./MenuTrigger-D7_F68sm.js";import"./CompositeItem-DkX84chI.js";import"./ToolbarRootContext-DXSxTdJI.js";import"./getDisabledMountTransitionStyles-z6rzoWNn.js";import"./getPseudoElementBounds-ButHWGJx.js";import"./chevron-down-Cswe4CW9.js";import"./index-hEzcpiCN.js";import"./error-DaUrBpBS.js";import"./BaseCbacBanner-CN69LqS-.js";import"./makeExternalStore-D2ri9UvN.js";import"./Tooltip-DpVDM5M6.js";import"./PopoverPopup-hYgPs6_l.js";import"./debounce-CsnCNeb8.js";import"./useOsdkClient-DsjVhBsW.js";import"./tick-ZKA2ZAhf.js";import"./DropdownField-CuIAd7EW.js";import"./isEqual-BuonFklC.js";import"./withOsdkMetrics-5_2pgCwu.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
