import{f as p,j as e}from"./iframe-BfMbsuTO.js";import{O as i}from"./object-table-CXvirFHf.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CvOWIyqc.js";import"./Table-BCtO7Tm4.js";import"./index-DK1QCnCo.js";import"./Dialog-qbU7sNxi.js";import"./cross-CKp_r7sS.js";import"./svgIconContainer-CLqHKPGt.js";import"./useBaseUiId-Cepz8rU_.js";import"./InternalBackdrop-DXRw1dZW.js";import"./composite-BfY9eDFq.js";import"./index-DTXKD30u.js";import"./index-xWp45YNg.js";import"./index-DXRgQkgl.js";import"./useEventCallback-D2WgD8Fc.js";import"./SkeletonBar-DFlFqo-D.js";import"./LoadingCell-BSezMWI2.js";import"./ColumnConfigDialog-BbRlGI2h.js";import"./DraggableList-CHP2UEGQ.js";import"./search-BJeF5SRa.js";import"./Input-Cj0x-U8m.js";import"./useControlled-B68j-m4m.js";import"./Button-pvHRSg6_.js";import"./small-cross-djyfeFmh.js";import"./ActionButton-CytU0bca.js";import"./Checkbox-Dzhl8s6O.js";import"./useValueChanged-DyIk8Xfw.js";import"./CollapsiblePanel-CPMXApTs.js";import"./MultiColumnSortDialog-DIu64B3r.js";import"./MenuTrigger-Bm3OeSUo.js";import"./CompositeItem-CQTgHCYc.js";import"./ToolbarRootContext-Dr3KNeMK.js";import"./getDisabledMountTransitionStyles-DggBnFeQ.js";import"./getPseudoElementBounds-WGFkMGwU.js";import"./chevron-down-DCzLtESR.js";import"./index-B-v6d6PY.js";import"./error-DD1JkUFX.js";import"./BaseCbacBanner-CiZFeI-A.js";import"./makeExternalStore-C1l5Ysjg.js";import"./Tooltip-DIC1LP32.js";import"./PopoverPopup-CV-IPSFd.js";import"./debounce-7sbKsZ6D.js";import"./useOsdkClient-DLOB0_Is.js";import"./tick-Bur9r6Ja.js";import"./DropdownField-DhX33T-q.js";import"./isEqual-BOxWcwph.js";import"./withOsdkMetrics-mlNsH_gV.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
