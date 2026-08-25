import{f as p,j as e}from"./iframe-CV9AnRvZ.js";import{O as i}from"./object-table-BR5aerbJ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-7FfFv9ik.js";import"./Table-DPmXaC0p.js";import"./index-Di1ZWUkk.js";import"./Dialog-CKK99e0E.js";import"./cross-DhIejhWj.js";import"./svgIconContainer-CNjSdOBT.js";import"./useBaseUiId-C1_GlfkL.js";import"./InternalBackdrop-COZpaA8l.js";import"./composite-qPADmGy9.js";import"./index-igmFT0OY.js";import"./index-CmKxkFU5.js";import"./index-C2F-6H3e.js";import"./useEventCallback-Bna_B7Jk.js";import"./SkeletonBar-CY_yprKK.js";import"./LoadingCell-C0a-a0Kd.js";import"./ColumnConfigDialog-Cx50unOT.js";import"./DraggableList-BWZfvIec.js";import"./search-DNk3MK5-.js";import"./Input-dv3PsiKp.js";import"./useControlled-D-7JcRiN.js";import"./Button-DxiXB_zs.js";import"./small-cross-DErCO5W1.js";import"./ActionButton-C0FEiRhP.js";import"./Checkbox-DYoZLqBR.js";import"./useValueChanged-m-oZ9Q-6.js";import"./CollapsiblePanel-CkzmNhCo.js";import"./MultiColumnSortDialog-BO3I_Guk.js";import"./MenuTrigger-B0_EOu_h.js";import"./CompositeItem-Bf5YN-0d.js";import"./ToolbarRootContext-BhRNTtAp.js";import"./getDisabledMountTransitionStyles-uluusgZc.js";import"./getPseudoElementBounds-CKcwYVgn.js";import"./chevron-down-DqetHEHw.js";import"./index-B4-YpXrf.js";import"./error-BkY5gQM6.js";import"./BaseCbacBanner-C58alHRF.js";import"./makeExternalStore-DGTggbnP.js";import"./Tooltip-Ba2b5c4L.js";import"./PopoverPopup-Dbah9SzS.js";import"./debounce-DQFz88Lj.js";import"./useOsdkClient-Balcrs_g.js";import"./tick-DkCBUQtK.js";import"./DropdownField-CnQNM4ni.js";import"./isEqual-DFiSRrhR.js";import"./withOsdkMetrics-zIgNwk4v.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
