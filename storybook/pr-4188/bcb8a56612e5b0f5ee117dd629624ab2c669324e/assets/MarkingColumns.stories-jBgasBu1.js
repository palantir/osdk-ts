import{f as p,j as e}from"./iframe-BpcZw0Qh.js";import{O as i}from"./object-table-DUmT7cvP.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-bs_ZWCVp.js";import"./Table-s-iRKnNU.js";import"./index-RyqdaqZt.js";import"./Dialog-C1FgKXrl.js";import"./cross-BQZa2Kkg.js";import"./svgIconContainer-B6eNnREq.js";import"./useBaseUiId-BsFMaRmq.js";import"./InternalBackdrop-CephDmCg.js";import"./composite-b_Vir_Qy.js";import"./index-j_Bq1Wxb.js";import"./index-hOxH3DWt.js";import"./index-9jDzRHbg.js";import"./useEventCallback-Dyo7s63d.js";import"./SkeletonBar-CFFQOHPZ.js";import"./LoadingCell-D1RU1IJM.js";import"./ColumnConfigDialog-BR1gNZ0z.js";import"./DraggableList-DwApawfg.js";import"./search-C5aLdI-z.js";import"./Input-B-pxSN65.js";import"./useControlled-BaPgI88u.js";import"./Button-xX1VEK25.js";import"./small-cross-B0G2BYVi.js";import"./ActionButton-CSQPpyYl.js";import"./Checkbox-D3OGLlT9.js";import"./useValueChanged-DyTrIZ4q.js";import"./CollapsiblePanel-BGTJ0O0p.js";import"./MultiColumnSortDialog-Cl67X5Ew.js";import"./MenuTrigger-toVLb17l.js";import"./CompositeItem-CiXh4i5Q.js";import"./ToolbarRootContext-Bafsun3r.js";import"./getDisabledMountTransitionStyles-DAuYWGeR.js";import"./getPseudoElementBounds-CMoxeRLZ.js";import"./chevron-down-0qsj7SKJ.js";import"./index-BvmVuSqJ.js";import"./error-DJy30QKE.js";import"./BaseCbacBanner-BbbKJkgD.js";import"./makeExternalStore-vOLbyGHJ.js";import"./Tooltip-CrVqygHA.js";import"./PopoverPopup-CiGvhW0c.js";import"./debounce-BUHFTaie.js";import"./useOsdkClient-BPiM2Ufk.js";import"./tick-BLie4KaX.js";import"./DropdownField-BY-KWr1H.js";import"./isEqual-B9mRJgu4.js";import"./withOsdkMetrics-OlYBoQiq.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
