import{f as p,j as e}from"./iframe-Tg2fnlVs.js";import{O as i}from"./object-table-s1e2Phdi.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-xsLVBww1.js";import"./Table-D4vOxokt.js";import"./index-B3-1mb1K.js";import"./Dialog-z10bt9ml.js";import"./cross-BZrYWs_D.js";import"./svgIconContainer-Cp1mUGc0.js";import"./useBaseUiId-D6sRq2bB.js";import"./InternalBackdrop-BsP43oYC.js";import"./composite-DuLfcYDh.js";import"./index-o5uplDD7.js";import"./index-DPwCU7gB.js";import"./index-FXCVzM8A.js";import"./useEventCallback-Clt5HhZy.js";import"./SkeletonBar-BzHuBvLf.js";import"./LoadingCell-C6Z17YL3.js";import"./ColumnConfigDialog-Ck5OsDxx.js";import"./DraggableList-2-y-jsVB.js";import"./search-UK-OniDD.js";import"./Input-BPgms8bD.js";import"./useControlled-Dvm87Fn4.js";import"./isEqual-NkSmJgkK.js";import"./isObject-DmJxbbx1.js";import"./Button-CiYzxyPU.js";import"./ActionButton-1QC1UJFs.js";import"./Checkbox-HpCj16gy.js";import"./useValueChanged-seYnRZ38.js";import"./CollapsiblePanel-BNpWQkWl.js";import"./MultiColumnSortDialog-D2ob9v7y.js";import"./MenuTrigger-Dw2XlIXx.js";import"./CompositeItem-DEGMDptb.js";import"./ToolbarRootContext-BUY7sygA.js";import"./getDisabledMountTransitionStyles-cA1h6ws6.js";import"./getPseudoElementBounds-B0T37kvs.js";import"./chevron-down-Bj_a4fCt.js";import"./index-CL7wapu_.js";import"./error-9Ml166dJ.js";import"./BaseCbacBanner-D21Fu5a7.js";import"./makeExternalStore-Y3iyej0D.js";import"./Tooltip-2VCDdGRa.js";import"./PopoverPopup-Dp0lEAyY.js";import"./toNumber-B00qaJHM.js";import"./useOsdkClient-C_cOGEWG.js";import"./tick-dG2WuFpQ.js";import"./DropdownField-CBRsuUdv.js";import"./withOsdkMetrics-DGs0YjPU.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
