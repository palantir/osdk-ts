import{f as p,j as e}from"./iframe-Bhux-jL2.js";import{O as i}from"./object-table-CA16_MIj.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-D5A3MZPg.js";import"./index-CqpPyV6t.js";import"./Dialog-BYvkDmOC.js";import"./cross-CUQYhxA4.js";import"./svgIconContainer-DLxw3PxE.js";import"./useBaseUiId-De8pklpX.js";import"./InternalBackdrop-1Uep-6OD.js";import"./composite-pG-5UHC0.js";import"./index-Dq01vjvQ.js";import"./index-DbS2jUPU.js";import"./index-DkYiUypd.js";import"./useEventCallback-Cjzrema4.js";import"./SkeletonBar-D1FlFldy.js";import"./LoadingCell-DRoK-x5w.js";import"./ColumnConfigDialog-DKYIaNjP.js";import"./DraggableList-CoaIImom.js";import"./search-jbt_qsn3.js";import"./Input-Cz3DPiZR.js";import"./useControlled-B8x__iZM.js";import"./Button-CMvjR2Al.js";import"./small-cross-Dc7PW3MT.js";import"./ActionButton-D5iMXjgf.js";import"./Checkbox-D4zGkPrI.js";import"./useValueChanged-CSfjLy1S.js";import"./CollapsiblePanel-DGcKBfeQ.js";import"./MultiColumnSortDialog-eH_q_TBq.js";import"./MenuTrigger-BBZstzo2.js";import"./CompositeItem-x-GueMXE.js";import"./ToolbarRootContext-BAnbUtNA.js";import"./getDisabledMountTransitionStyles-DSrXhE1l.js";import"./getPseudoElementBounds-B5CqKbrh.js";import"./chevron-down-_Dmt60i4.js";import"./index-fIrfSYEO.js";import"./error-mg2-r6Xs.js";import"./BaseCbacBanner-uoC7ilO6.js";import"./makeExternalStore-fmuI2lu4.js";import"./Tooltip-CmR5c3KM.js";import"./PopoverPopup-C9A-63Ov.js";import"./debounce-C9UrikDA.js";import"./useOsdkClient-B-RCP7CA.js";import"./tick-BGANEUAQ.js";import"./DropdownField-D_Ub0nmh.js";import"./isEqual-FW8TNQ2z.js";import"./withOsdkMetrics-D-lmPy0A.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
