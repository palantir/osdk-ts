import{f as p,j as e}from"./iframe-BYRe4uJK.js";import{O as i}from"./object-table-Gx5XArQc.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cum0qz8-.js";import"./Table-6lp2W5g2.js";import"./index-BSiGs5jY.js";import"./Dialog-5sGPqiei.js";import"./cross-BhpL9m1U.js";import"./svgIconContainer-Cwfx5WFd.js";import"./useBaseUiId-7Cfuz0uT.js";import"./InternalBackdrop-BZBXVGAn.js";import"./composite-Dd4L05U8.js";import"./index-JMZ2rmHA.js";import"./index-BSDlleOE.js";import"./index-RnITh2Pk.js";import"./useEventCallback-DrLI1ECC.js";import"./SkeletonBar-CU8MmVrx.js";import"./LoadingCell-CAexyXn_.js";import"./ColumnConfigDialog-CDcT3SZ2.js";import"./DraggableList-qVk8ReXj.js";import"./search-BNXEAWI6.js";import"./Input-CeyVjWeu.js";import"./useControlled-Cz1PwyZ0.js";import"./isEqual-B1i8JgkM.js";import"./isObject-BVZtGy2m.js";import"./Button-DOx7OVVZ.js";import"./ActionButton-JgzY3pFc.js";import"./Checkbox-Bj7qVpG3.js";import"./useValueChanged-BzPGZL1i.js";import"./CollapsiblePanel-BIBcePge.js";import"./MultiColumnSortDialog-5xWPRE3S.js";import"./MenuTrigger-D-Cf_7ec.js";import"./CompositeItem-Crcaf1__.js";import"./ToolbarRootContext-C3DcUEtK.js";import"./getDisabledMountTransitionStyles-C4nkIV6E.js";import"./getPseudoElementBounds-DpFAaFeN.js";import"./chevron-down-DTiQIWjT.js";import"./index-BBRR4-WG.js";import"./error-QnKoxNx8.js";import"./BaseCbacBanner-BXEEFQ3o.js";import"./makeExternalStore-Dn028j21.js";import"./Tooltip-DobIPcII.js";import"./PopoverPopup-u47BXAhC.js";import"./toNumber-CExTw8Lf.js";import"./useOsdkClient-C8fbuVV_.js";import"./tick-DRHqVtt7.js";import"./DropdownField-C6dyai0P.js";import"./withOsdkMetrics-_2ZJlIJa.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
