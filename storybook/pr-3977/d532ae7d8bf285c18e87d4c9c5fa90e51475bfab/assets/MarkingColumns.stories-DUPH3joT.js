import{f as p,j as e}from"./iframe-TxXxbmz5.js";import{O as i}from"./object-table-DOS0WT1a.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CpxRQbhd.js";import"./Table-C2X14doc.js";import"./index-CN0gJRJO.js";import"./Dialog-DT7VSMak.js";import"./cross-VXN4aiwS.js";import"./svgIconContainer-CELXinHy.js";import"./useBaseUiId-Br3V4Y7Q.js";import"./InternalBackdrop-CetaIsfW.js";import"./composite-DOASapxT.js";import"./index-B7GgCYYh.js";import"./index-CIu9B3ha.js";import"./index-DyCiBw5P.js";import"./useEventCallback-g6vs120_.js";import"./SkeletonBar-BMAk9jbB.js";import"./LoadingCell-DPGrgI7B.js";import"./ColumnConfigDialog-zuV-SXCD.js";import"./DraggableList-DN_w3IKW.js";import"./search-BC9yKYZ2.js";import"./Input-B4WkyavH.js";import"./useControlled-DruZmDs3.js";import"./Button-LZRzEtLJ.js";import"./small-cross-Cdx0iwCB.js";import"./ActionButton-D-hbTAJE.js";import"./Checkbox-CARz_iuB.js";import"./useValueChanged-CWKC294z.js";import"./CollapsiblePanel-dwMPUOFS.js";import"./MultiColumnSortDialog-Dg0KJEfa.js";import"./MenuTrigger-BBnNVDOO.js";import"./CompositeItem-BE7Mz5Vz.js";import"./ToolbarRootContext-BWpuHFgW.js";import"./getDisabledMountTransitionStyles-C9uIvqp9.js";import"./getPseudoElementBounds-DfyCOY8U.js";import"./chevron-down-BclEY4pC.js";import"./index-CRtDM6bX.js";import"./error-DK4Y1HxX.js";import"./BaseCbacBanner-BekuzNeO.js";import"./makeExternalStore-Da0z5igE.js";import"./Tooltip-FiY13jbJ.js";import"./PopoverPopup-CPS5tfTo.js";import"./debounce-CnngSnsz.js";import"./useOsdkClient-CCaWk0Px.js";import"./tick-CF_Cqk30.js";import"./DropdownField-Cuo6Kh-T.js";import"./isEqual-Vj9O0wAi.js";import"./withOsdkMetrics-BEHPBM8E.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
