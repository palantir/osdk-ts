import{f as p,j as e}from"./iframe-C4dizZ36.js";import{O as i}from"./object-table-BgrvQbJI.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-yVPvR8z3.js";import"./Table-BzUgLi4N.js";import"./index-CFT7unnD.js";import"./Dialog-D8prFB35.js";import"./cross-drbNV1T7.js";import"./svgIconContainer-DfcgCVjr.js";import"./useBaseUiId-k_5E4sc5.js";import"./InternalBackdrop-ConLyfAg.js";import"./composite-BKXJ61hE.js";import"./index-CTCpbOLj.js";import"./index-BMu-FTMn.js";import"./index-B0IHZgxT.js";import"./useEventCallback-BEbBXTDA.js";import"./SkeletonBar-Dt_A_Oo6.js";import"./LoadingCell-KwchXr4h.js";import"./ColumnConfigDialog-xcBo-RJ9.js";import"./DraggableList-CKHBkgED.js";import"./search-D-SP9Yj6.js";import"./Input-DPBssrp3.js";import"./useControlled-CUKEEG6I.js";import"./Button-B3WKdDfx.js";import"./small-cross-yc2rW1h-.js";import"./ActionButton-CrXRFnK7.js";import"./Checkbox-CWgjRKWS.js";import"./useValueChanged-DCy4_NVv.js";import"./CollapsiblePanel-TS6XPwGw.js";import"./MultiColumnSortDialog-CG_eOG-o.js";import"./MenuTrigger-B9hf80SG.js";import"./CompositeItem-Deat6XJ7.js";import"./ToolbarRootContext-cilGYW-z.js";import"./getDisabledMountTransitionStyles-DSExnO14.js";import"./getPseudoElementBounds-BTkeKk10.js";import"./chevron-down-B_DWNPfU.js";import"./index-C5-B81cJ.js";import"./error-j1AChp6N.js";import"./BaseCbacBanner-Bkd4XpK8.js";import"./makeExternalStore-BsFJZbFX.js";import"./Tooltip-CcaOWhED.js";import"./PopoverPopup-DjEzPR4r.js";import"./debounce-DpNok1rz.js";import"./useOsdkClient-DYefkPsN.js";import"./tick-9qx9fXAT.js";import"./DropdownField-BfEb6RcP.js";import"./isEqual-DnhpXLt3.js";import"./withOsdkMetrics-CrG5BOev.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
