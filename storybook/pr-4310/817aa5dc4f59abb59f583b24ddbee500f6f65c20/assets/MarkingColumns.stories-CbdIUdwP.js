import{f as p,j as e}from"./iframe-DycPRZ3_.js";import{O as i}from"./object-table-cKA_tnl_.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CwFGYy97.js";import"./Table-BVNM11_C.js";import"./index-D8OuJnBD.js";import"./Dialog-BmRJa2Pg.js";import"./cross-BCqcqOvJ.js";import"./svgIconContainer-CdogxpvZ.js";import"./useBaseUiId-BcdZIsRg.js";import"./InternalBackdrop-C-dfpcw1.js";import"./composite-BS35o5ci.js";import"./index-DsXNa1nt.js";import"./index-CUewPl3I.js";import"./index-BL25K-TO.js";import"./useEventCallback-lJ2DHBKq.js";import"./SkeletonBar-C2Omcp_Q.js";import"./LoadingCell-DIBawpGj.js";import"./ColumnConfigDialog-DuHMsboc.js";import"./DraggableList-CueLlr79.js";import"./search-_YpI-rXF.js";import"./Input-DlxWReQQ.js";import"./useControlled-CSrl2eWz.js";import"./Button-BRZRYHG0.js";import"./small-cross-DHlLl8iv.js";import"./ActionButton-KL_G11f2.js";import"./Checkbox-hkMCRpsU.js";import"./useValueChanged-CoxCzpHk.js";import"./CollapsiblePanel-v1RS7AoO.js";import"./MultiColumnSortDialog-BHwBBth3.js";import"./MenuTrigger-Bi_nIbiQ.js";import"./CompositeItem-BFpto-ga.js";import"./ToolbarRootContext-O9iZr2zE.js";import"./getDisabledMountTransitionStyles-BL7UYAd-.js";import"./getPseudoElementBounds-Bp1o7LjX.js";import"./chevron-down-oahySAf9.js";import"./index-Cmvp_WNS.js";import"./error-CfB5jUCL.js";import"./BaseCbacBanner-DFjRHJFT.js";import"./makeExternalStore-Ko2ktWoV.js";import"./Tooltip-BkvL-duP.js";import"./PopoverPopup-CkUDMz4E.js";import"./debounce-BnD1fViJ.js";import"./useOsdkClient-DFeWJms6.js";import"./tick-Dro8bbOl.js";import"./DropdownField-XtF6381b.js";import"./isEqual-DymJ8cEu.js";import"./withOsdkMetrics-BKuNAfM3.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
