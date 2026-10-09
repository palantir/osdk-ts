import{f as p,j as e}from"./iframe-eOIbuNqJ.js";import{O as i}from"./object-table-B9N8IcN2.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CgIJPkyR.js";import"./Table-DbkNuL-9.js";import"./index-Dk7CsQL8.js";import"./Dialog-Bja5HFb2.js";import"./cross-BcLTDviE.js";import"./svgIconContainer-rhD8_llD.js";import"./useBaseUiId-BGt5np_k.js";import"./InternalBackdrop-uUv9MGMr.js";import"./composite-Bd6nPt4i.js";import"./index-DSnIaanU.js";import"./index-CFmwThG4.js";import"./index-904NSARe.js";import"./useEventCallback-WZf0a_bB.js";import"./SkeletonBar-BEmPZtKd.js";import"./LoadingCell-DP8CSwZh.js";import"./ColumnConfigDialog-D4KPwQM7.js";import"./DraggableList-Dh1kMlcW.js";import"./search-sJO-f4KO.js";import"./Input-Dseoi2Bs.js";import"./useControlled-D-af9sp-.js";import"./Button-mtLpgF2-.js";import"./small-cross-CTDjsytU.js";import"./ActionButton-C40yhSRc.js";import"./Checkbox-D-EAJqyP.js";import"./useValueChanged-Cyy6383A.js";import"./CollapsiblePanel-Cfs2diUt.js";import"./MultiColumnSortDialog-bWpTSf1H.js";import"./MenuTrigger-5Qse9-wJ.js";import"./CompositeItem-CilfwKya.js";import"./ToolbarRootContext-D7liU5HL.js";import"./getDisabledMountTransitionStyles-BebC4cTU.js";import"./getPseudoElementBounds-CstG7_ji.js";import"./chevron-down-BTesjy4Z.js";import"./index-CCzJD3Mm.js";import"./error-DBxXNUf_.js";import"./BaseCbacBanner-CWHdKSS8.js";import"./makeExternalStore-DO8UH6Jn.js";import"./Tooltip-DuWPukYN.js";import"./PopoverPopup-DVnqpSim.js";import"./debounce-DuqXkYiy.js";import"./useOsdkClient-D-YKzOkS.js";import"./tick-B8P9ON5a.js";import"./DropdownField-DVCiuc26.js";import"./isEqual-DChFwswX.js";import"./withOsdkMetrics-DMw3oRZ7.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
