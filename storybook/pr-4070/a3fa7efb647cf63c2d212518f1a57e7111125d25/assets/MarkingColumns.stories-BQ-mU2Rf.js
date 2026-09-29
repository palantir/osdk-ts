import{f as p,j as e}from"./iframe-l_8eBvr6.js";import{O as i}from"./object-table-CaxH4GVl.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CWo-haOY.js";import"./Table-DoYXsy_p.js";import"./index-pTEOeQs1.js";import"./Dialog-D5uirT7r.js";import"./cross-AIldtqcf.js";import"./svgIconContainer-BE3MMvAi.js";import"./useBaseUiId-GR3xcgzw.js";import"./InternalBackdrop-BwRQmd5J.js";import"./composite-DKO9W0st.js";import"./index-rFITWboZ.js";import"./index-CsnFWtbo.js";import"./index-BbfTT1Q9.js";import"./useEventCallback-DAeskcdy.js";import"./SkeletonBar-CDf6uP_r.js";import"./LoadingCell-Dvw-Ylel.js";import"./ColumnConfigDialog-BxJ9KUuv.js";import"./DraggableList-C2YkM-if.js";import"./search-53j1pAYR.js";import"./Input-b3HEdj9w.js";import"./useControlled-_ZKeS4Zg.js";import"./Button-D_UBsIlq.js";import"./small-cross-eWReh8kV.js";import"./ActionButton-DyHiHAz9.js";import"./Checkbox-BA2kB2zz.js";import"./useValueChanged-Dh9MsvOa.js";import"./CollapsiblePanel-YVCjpYyB.js";import"./MultiColumnSortDialog-BiDCU8at.js";import"./MenuTrigger-Doj1fSEU.js";import"./CompositeItem-DVcnG8tP.js";import"./ToolbarRootContext-D8m03rR2.js";import"./getDisabledMountTransitionStyles-Bv0Oi4hK.js";import"./getPseudoElementBounds-C0cGWyvs.js";import"./chevron-down-Dr_zm-jW.js";import"./index-CTOamDEC.js";import"./error-BjQYuyH5.js";import"./BaseCbacBanner-B6hZVpGP.js";import"./makeExternalStore-DEwbFKap.js";import"./Tooltip-CyHw9hKc.js";import"./PopoverPopup-D63UO-5k.js";import"./debounce-DGMy8DlN.js";import"./useOsdkClient-k3QwwWy-.js";import"./tick-BfV32k5E.js";import"./DropdownField-BsI2YIfo.js";import"./isEqual-CQ3ooCqh.js";import"./withOsdkMetrics-C36UZcw9.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
