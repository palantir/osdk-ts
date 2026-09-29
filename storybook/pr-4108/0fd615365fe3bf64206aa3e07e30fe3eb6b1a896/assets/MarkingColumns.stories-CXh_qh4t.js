import{f as p,j as e}from"./iframe-CziGYRZ5.js";import{O as i}from"./object-table-DG9OK9f3.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-gc9urLS2.js";import"./Table-C23fV-A4.js";import"./index-FTgGsQkL.js";import"./Dialog-C-zQIvLm.js";import"./cross-BHNWGXzB.js";import"./svgIconContainer-DFNJwVrV.js";import"./useBaseUiId-DlaJxT3G.js";import"./InternalBackdrop-CmQk3LXX.js";import"./composite-BvX1_pb1.js";import"./index-DvwMpTX4.js";import"./index-BgvYMuxB.js";import"./index-Dh3a3xZV.js";import"./useEventCallback-C84SdZch.js";import"./SkeletonBar-D7G546qA.js";import"./LoadingCell-DBzmQTYP.js";import"./ColumnConfigDialog-CxR2Z5wP.js";import"./DraggableList-COGcPqti.js";import"./search-cETe_cym.js";import"./Input-B_f-YNqg.js";import"./useControlled-Cl0l9Mrk.js";import"./Button-DfO3Y95R.js";import"./small-cross-BvEW3fuD.js";import"./ActionButton-CuomlX14.js";import"./Checkbox-CrQuAGol.js";import"./useValueChanged-OL0F_VvO.js";import"./CollapsiblePanel-D1R6dB3U.js";import"./MultiColumnSortDialog-Dh80iJ_F.js";import"./MenuTrigger-DOwjC9Dr.js";import"./CompositeItem-Bv09Xrw7.js";import"./ToolbarRootContext-YLrOIXIR.js";import"./getDisabledMountTransitionStyles-DXKrtJSh.js";import"./getPseudoElementBounds-Cbnbi5z8.js";import"./chevron-down-BzHtNLP_.js";import"./index-C3TtPejY.js";import"./error-q8pihEMG.js";import"./BaseCbacBanner-CTW6b3Om.js";import"./makeExternalStore-CKEXKIUu.js";import"./Tooltip-xz9w5Bgx.js";import"./PopoverPopup-C9gHOQmg.js";import"./debounce-B8aqKZgz.js";import"./useOsdkClient-ixR0tRCy.js";import"./tick-D6YJJ1hj.js";import"./DropdownField-DPVN1Ym_.js";import"./isEqual-CXjQlmNo.js";import"./withOsdkMetrics-B4ICqk1s.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
