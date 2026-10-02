import{f as p,j as e}from"./iframe-_pZ-OrnG.js";import{O as i}from"./object-table-r3WkwVVv.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CI2nkxYP.js";import"./Table-OtroCakx.js";import"./index-BzR1Js4P.js";import"./Dialog-BQJcGlPc.js";import"./cross-DHXoKhRr.js";import"./svgIconContainer-Df8znJbK.js";import"./useBaseUiId-sTNVvHGV.js";import"./InternalBackdrop-Bo6uJZfN.js";import"./composite-s_PtHBLY.js";import"./index-C7S3dsZZ.js";import"./index-fBaLvFhr.js";import"./index-BarU5QY7.js";import"./useEventCallback-ChWi4eCf.js";import"./SkeletonBar-BFdlYeDG.js";import"./LoadingCell-D1X8FIjN.js";import"./ColumnConfigDialog-BPSyj1CE.js";import"./DraggableList-BLYOh7Ub.js";import"./search-ChtcLVXZ.js";import"./Input-DDttcV3K.js";import"./useControlled-MIg91upF.js";import"./Button-HWVms3sL.js";import"./small-cross-cg-4l1k7.js";import"./ActionButton-CtdL7XCW.js";import"./Checkbox-xcdgEr09.js";import"./useValueChanged-BA_OyhSR.js";import"./CollapsiblePanel-D-pLoE7v.js";import"./MultiColumnSortDialog-C9MPFbPJ.js";import"./MenuTrigger-C6Iqz-rw.js";import"./CompositeItem-1-7kFxMp.js";import"./ToolbarRootContext-DDubgB6v.js";import"./getDisabledMountTransitionStyles-D1TqjFAj.js";import"./getPseudoElementBounds-CSJkhnGQ.js";import"./chevron-down-DaGWzrOS.js";import"./index-5qJDayCH.js";import"./error-CDa2ZV4b.js";import"./BaseCbacBanner-B5NHyS1X.js";import"./makeExternalStore-_KUFuRZc.js";import"./Tooltip-Cv-ahOg4.js";import"./PopoverPopup-CeDlnkfZ.js";import"./debounce-Cs0rV5XU.js";import"./useOsdkClient-CXug1a02.js";import"./tick-B25sgwJt.js";import"./DropdownField-Boodu9_n.js";import"./isEqual-DkHXmUl6.js";import"./withOsdkMetrics-CNAkmbs_.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
