import{f as p,j as e}from"./iframe-Cbj36Vfl.js";import{O as i}from"./object-table-Ck_Gk-KX.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D9vtqHHo.js";import"./Table-CSAIsRfe.js";import"./index-CsY1LewD.js";import"./Dialog-B6LavUp4.js";import"./cross-BMM6M_v0.js";import"./svgIconContainer-hIUzSHkO.js";import"./useBaseUiId-Dm0BFRC6.js";import"./InternalBackdrop-BqigWIDb.js";import"./composite-BNLz_aLE.js";import"./index-BCwTQa_2.js";import"./index-C4i1VFtD.js";import"./index-D7hW5oga.js";import"./useEventCallback-Dlret5nm.js";import"./SkeletonBar-SALMo7gf.js";import"./LoadingCell-xwoMoQxj.js";import"./ColumnConfigDialog-Br62xFzv.js";import"./DraggableList-hYn9rXPD.js";import"./search-B0cFd55B.js";import"./Input-bczR2KJT.js";import"./useControlled-BLkU7nYF.js";import"./Button-BvKlSQww.js";import"./small-cross-CPlaBkT_.js";import"./ActionButton-C-4-1sk9.js";import"./Checkbox-KclU3XSR.js";import"./useValueChanged-Be0rmsr7.js";import"./CollapsiblePanel-DTg3GoH2.js";import"./MultiColumnSortDialog-DDicJckq.js";import"./MenuTrigger-DtrhwXCR.js";import"./CompositeItem-DyJlzvO6.js";import"./ToolbarRootContext-B2HRt-p3.js";import"./getDisabledMountTransitionStyles-DVNBPl0-.js";import"./getPseudoElementBounds-BzB85nEj.js";import"./chevron-down-b6fjz5-P.js";import"./index-DGMJzfmR.js";import"./error-B5SQU-7B.js";import"./BaseCbacBanner-i0Mk5qM4.js";import"./makeExternalStore-BQvhAloH.js";import"./Tooltip-DFxnzQIr.js";import"./PopoverPopup-DVJleO51.js";import"./debounce-C-I-lp5G.js";import"./useOsdkClient-Z_Xvqm2q.js";import"./tick-DrdzLXJS.js";import"./DropdownField-Bd5p68Fh.js";import"./isEqual-B4e635j3.js";import"./withOsdkMetrics-CvORwH-d.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
