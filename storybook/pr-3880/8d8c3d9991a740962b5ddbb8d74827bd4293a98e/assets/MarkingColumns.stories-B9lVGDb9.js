import{f as p,j as e}from"./iframe-CfXo_xGs.js";import{O as i}from"./object-table-BvqZ3CMp.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DICGDLzn.js";import"./Table-D607lmpx.js";import"./index-CnGqDH_i.js";import"./Dialog-BxTvGKLX.js";import"./cross-BJtxhdST.js";import"./svgIconContainer-BAtltPp3.js";import"./useBaseUiId-DtsL1qz-.js";import"./InternalBackdrop-Bz8Dw8Ib.js";import"./composite-DPZWJgUc.js";import"./index-B5L6vnyq.js";import"./index-8kojcasY.js";import"./index-DppFUAq0.js";import"./useEventCallback-CQY5FeQg.js";import"./SkeletonBar-Dou4RbGj.js";import"./LoadingCell-ys6iwyAU.js";import"./ColumnConfigDialog-BSDdqq1g.js";import"./DraggableList-QdOnTU-N.js";import"./search-khU-kTlh.js";import"./Input-6L5IGU13.js";import"./useControlled-zSImE_Ef.js";import"./Button-Ctf32UkD.js";import"./small-cross-qncZTNbn.js";import"./ActionButton-xvOEHwP5.js";import"./Checkbox-BcLi88Jr.js";import"./useValueChanged-NcxPg-on.js";import"./CollapsiblePanel-B97m10Lh.js";import"./MultiColumnSortDialog-B5w_sXlo.js";import"./MenuTrigger-D0jw3WCx.js";import"./CompositeItem-B8aCK6n2.js";import"./ToolbarRootContext-D_iTI7z6.js";import"./getDisabledMountTransitionStyles-lw59aPL7.js";import"./getPseudoElementBounds-DjC2xHva.js";import"./chevron-down-Bw0n8vBX.js";import"./index-Wx3Cvrm7.js";import"./error-DO1H2NAA.js";import"./BaseCbacBanner-DFO4Q86h.js";import"./makeExternalStore-BUEQbKkl.js";import"./Tooltip-7EqCRI09.js";import"./PopoverPopup-pGLd2R6N.js";import"./debounce-DI-ivBUV.js";import"./useOsdkClient-23LGP0yF.js";import"./tick-oAiLguH-.js";import"./DropdownField-DPZX800G.js";import"./isEqual-C5PNU0hp.js";import"./withOsdkMetrics-BfkC7ecP.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
