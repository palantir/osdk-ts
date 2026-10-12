import{f as p,j as e}from"./iframe-DQ-Ez-qG.js";import{O as i}from"./object-table-DI1IchAR.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DbSstiuK.js";import"./Table-0s9Hh2Qy.js";import"./index-BXE1O0xs.js";import"./Dialog-CybwZ66j.js";import"./cross-UZvPpSxI.js";import"./svgIconContainer-B-U6T-6a.js";import"./useBaseUiId-SgVzRrNW.js";import"./InternalBackdrop-DMP_qe1B.js";import"./composite-BiRiw1GR.js";import"./index-vFCgFCPf.js";import"./index-CKAmw6bu.js";import"./index-D0HpUEtr.js";import"./useEventCallback-BIHXGnti.js";import"./SkeletonBar-DugVqGn-.js";import"./LoadingCell-DATetjrQ.js";import"./ColumnConfigDialog-CSQmRJhb.js";import"./DraggableList-CdBCLWZn.js";import"./search-67zYXUAs.js";import"./Input-DJaKEaOT.js";import"./useControlled-CTxFJ2Pw.js";import"./Button-CEhBDWA2.js";import"./small-cross-BMEseqYj.js";import"./ActionButton-gGre5Rrx.js";import"./Checkbox-D_IiJIC9.js";import"./useValueChanged-Bp8kvkvX.js";import"./CollapsiblePanel-UEtpZfSu.js";import"./MultiColumnSortDialog-DkEwyEYT.js";import"./MenuTrigger-DOBbIFFg.js";import"./CompositeItem-DdY16ynU.js";import"./ToolbarRootContext-BlHD5nI1.js";import"./getDisabledMountTransitionStyles-CADlu38g.js";import"./getPseudoElementBounds-fzrtgOLH.js";import"./chevron-down-COv6kIer.js";import"./index-e-PI1xG5.js";import"./error-BvUwAVRc.js";import"./BaseCbacBanner-BhAOZWr2.js";import"./makeExternalStore-JHGUKVEV.js";import"./Tooltip-BPBaOiL7.js";import"./PopoverPopup-rO1C9fPG.js";import"./debounce-CqA-XlMm.js";import"./useOsdkClient-CFdl-q-C.js";import"./tick-Co47VK84.js";import"./DropdownField-DYQWWJ9Y.js";import"./isEqual-DJrJLYBW.js";import"./withOsdkMetrics-CUCSCii1.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
