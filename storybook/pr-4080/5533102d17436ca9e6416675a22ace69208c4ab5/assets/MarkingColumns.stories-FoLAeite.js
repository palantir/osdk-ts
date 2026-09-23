import{f as p,j as e}from"./iframe-C3xC__LU.js";import{O as i}from"./object-table-DkYzXbd6.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DxYa6wnu.js";import"./Table-BAV7undJ.js";import"./index-Bdy1H0uO.js";import"./Dialog-5SNzSg7r.js";import"./cross-DTsmRRZf.js";import"./svgIconContainer-Bfm1ZKMl.js";import"./useBaseUiId-DfXUpmNo.js";import"./InternalBackdrop-DDB1NqHl.js";import"./composite-DEhtrm_a.js";import"./index-BC4cspOB.js";import"./index-5F-Zydov.js";import"./index-h0dbL0ga.js";import"./useEventCallback-YKLGG8r3.js";import"./SkeletonBar-CEAqEMoY.js";import"./LoadingCell-C4RKxj_Q.js";import"./ColumnConfigDialog-IZf70LtJ.js";import"./DraggableList-znG0xmL3.js";import"./search-C7Klq3lR.js";import"./Input-CprSxKZD.js";import"./useControlled-D8jbflQz.js";import"./Button-CIfwAqPR.js";import"./small-cross-N-4r5wTS.js";import"./ActionButton-CRT7rdtb.js";import"./Checkbox-DUlafT6w.js";import"./useValueChanged-DnBGnqXA.js";import"./CollapsiblePanel-BvlLag5C.js";import"./MultiColumnSortDialog-DqGtievi.js";import"./MenuTrigger-CvdSqop6.js";import"./CompositeItem-BTSmeuTL.js";import"./ToolbarRootContext-Ciubtyo1.js";import"./getDisabledMountTransitionStyles-DAJs1DsQ.js";import"./getPseudoElementBounds-HE1LNCz1.js";import"./chevron-down-Cpgn36Ir.js";import"./index-DEH1lz3e.js";import"./error-CQKPevIq.js";import"./BaseCbacBanner-CsbEPIz4.js";import"./makeExternalStore-DlKuehqN.js";import"./Tooltip-CgkXmPE_.js";import"./PopoverPopup-Bkq0Fxyf.js";import"./debounce-Cq5z3UtH.js";import"./useOsdkClient-BT6MutGO.js";import"./tick-2Vgdfn-_.js";import"./DropdownField-Bvfem0KY.js";import"./isEqual-DMocQ3uq.js";import"./withOsdkMetrics-DD7JD0C1.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
