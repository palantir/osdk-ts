import{f as p,j as e}from"./iframe-Tb86ZRmF.js";import{O as i}from"./object-table-BV4hXuTI.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DfbZGOZ6.js";import"./Table-BC91fjfJ.js";import"./index-Dnqd7J8g.js";import"./Dialog-C670hlwL.js";import"./cross-CCAZO53q.js";import"./svgIconContainer-DJKDb-5p.js";import"./useBaseUiId-DEBuPtLc.js";import"./InternalBackdrop-Bhys3WAZ.js";import"./composite-DV_gLhz3.js";import"./index-sYybngkU.js";import"./index-CmiZFNOU.js";import"./index-DzMh4JUH.js";import"./useEventCallback-44hTJD3Z.js";import"./SkeletonBar-C9jEOxoG.js";import"./LoadingCell-BGS5yipP.js";import"./ColumnConfigDialog-Dojt5IjM.js";import"./DraggableList-DkwoEc61.js";import"./search-L-ymspTn.js";import"./Input-Khmtvi3_.js";import"./useControlled-B1TwbK1C.js";import"./Button-CLo15qID.js";import"./small-cross-3q1WModJ.js";import"./ActionButton-BMukdQVj.js";import"./Checkbox-BojkLLsG.js";import"./useValueChanged-BgcKIQxd.js";import"./CollapsiblePanel-DmSY5GnO.js";import"./MultiColumnSortDialog-CkRkKP_G.js";import"./MenuTrigger-BM1y1Qj7.js";import"./CompositeItem-m28j8eMj.js";import"./ToolbarRootContext-BZOu2fTP.js";import"./getDisabledMountTransitionStyles-DO_qV-fs.js";import"./getPseudoElementBounds-DnJUwswI.js";import"./chevron-down-Cc6F0Nf0.js";import"./index-BU-9JmZp.js";import"./error-Bv1qHWgX.js";import"./BaseCbacBanner-Cxj2gyfs.js";import"./makeExternalStore-BlPRehW9.js";import"./Tooltip-DJRSuFpF.js";import"./PopoverPopup-BsjOHC5X.js";import"./debounce-BPiUJ-4q.js";import"./useOsdkClient-DkM13ykF.js";import"./tick-UdFgVdYE.js";import"./DropdownField-BqvRNL9c.js";import"./isEqual-bqxSBOhE.js";import"./withOsdkMetrics-C3T6RJD2.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
