import{f as p,j as e}from"./iframe-CyooYLyM.js";import{O as i}from"./object-table-D2vNArqQ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bngm7-ol.js";import"./Table-z9goVWNW.js";import"./index-CIHNhV_V.js";import"./Dialog-EepA0i_O.js";import"./cross-ECBcZMsc.js";import"./svgIconContainer-BUB4CTcl.js";import"./useBaseUiId-B6QldWDF.js";import"./InternalBackdrop-CdJ1CYip.js";import"./composite-Ct2KL6gZ.js";import"./index-CeYxTKYZ.js";import"./index-CYfla4gt.js";import"./index-DJrmSdlL.js";import"./useEventCallback-BoCra72q.js";import"./SkeletonBar-DOUvjjDK.js";import"./LoadingCell-LsIhRtPF.js";import"./ColumnConfigDialog-CLqK_x10.js";import"./DraggableList-DPEz_ect.js";import"./search-B3kqtI7c.js";import"./Input-COiGAk6z.js";import"./useControlled-i1Ezl6Tl.js";import"./Button-BmMB6JHM.js";import"./small-cross-BC6HSGjl.js";import"./ActionButton-DMpxTXkE.js";import"./Checkbox-DPeuERNM.js";import"./useValueChanged-DMjW1Np8.js";import"./CollapsiblePanel-D8wSVDSv.js";import"./MultiColumnSortDialog-OC_EtbbE.js";import"./MenuTrigger-Tft-1JTt.js";import"./CompositeItem-Bl-YA0xX.js";import"./ToolbarRootContext-D7fAF7oZ.js";import"./getDisabledMountTransitionStyles-CtwlLgnw.js";import"./getPseudoElementBounds-BmACaDew.js";import"./chevron-down-B96rYcxD.js";import"./index-LrFKMTxg.js";import"./error-CQMuKd3b.js";import"./BaseCbacBanner-COsBoy9s.js";import"./makeExternalStore-DQfo9etd.js";import"./Tooltip-C4Nyw1my.js";import"./PopoverPopup-BV24RTcO.js";import"./debounce-BAPzRuvt.js";import"./useOsdkClient-DaN5XCxO.js";import"./tick-BvxF-FNa.js";import"./DropdownField-BNmEjlHT.js";import"./isEqual-CD-9D1bD.js";import"./withOsdkMetrics-D__EiDJX.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
