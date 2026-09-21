import{f as p,j as e}from"./iframe-DiEonpI4.js";import{O as i}from"./object-table-Cj3vTSS3.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CK-k_2Vt.js";import"./Table-CQYEccso.js";import"./index-emI1jrST.js";import"./Dialog-BOrLCAdB.js";import"./cross-Dk3kDcDy.js";import"./svgIconContainer-HP-rjnIi.js";import"./useBaseUiId-vTxFcR1B.js";import"./InternalBackdrop-EQ6LpJI_.js";import"./composite-CGrPsAxE.js";import"./index-CLd9qPG2.js";import"./index-Ds0MF9yD.js";import"./index-CiZmf62M.js";import"./useEventCallback-CdNjUNof.js";import"./SkeletonBar-z7idkCKw.js";import"./LoadingCell-Dw44iy_M.js";import"./ColumnConfigDialog-CusMm4zO.js";import"./DraggableList-BV6fb_vM.js";import"./search-BguN7d-l.js";import"./Input-DeBBkK_j.js";import"./useControlled-BXxbQ2_H.js";import"./Button-DUYCFQGz.js";import"./small-cross-CJHxZfcv.js";import"./ActionButton-xlIYdZYB.js";import"./Checkbox-BmZi08nF.js";import"./useValueChanged-BUX6j6jW.js";import"./CollapsiblePanel-D8lZXkVz.js";import"./MultiColumnSortDialog-DdzeV36a.js";import"./MenuTrigger-5Ts7mkeP.js";import"./CompositeItem-Cogr6rzU.js";import"./ToolbarRootContext-D-kjOzEz.js";import"./getDisabledMountTransitionStyles-CYLa5ttS.js";import"./getPseudoElementBounds-BF-DLRq1.js";import"./chevron-down-C-r7fv-U.js";import"./index-DL9fAFGC.js";import"./error-DiLLCp_W.js";import"./BaseCbacBanner-BHqjCXez.js";import"./makeExternalStore-BUkIaKmg.js";import"./Tooltip-DbBb7fon.js";import"./PopoverPopup-DYIt5v_N.js";import"./debounce-Cm2KkAbL.js";import"./useOsdkClient-BTBjVGr0.js";import"./tick-8-vebs0z.js";import"./DropdownField-KRyqpjup.js";import"./isEqual-D3P-_--k.js";import"./withOsdkMetrics-CSqvl8Bo.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
