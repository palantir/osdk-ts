import{f as p,j as e}from"./iframe-DvSgORBk.js";import{O as i}from"./object-table-BcRX0Cmv.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bh3X1IZL.js";import"./Table-Dh5Aru4J.js";import"./index-ChyOFpSp.js";import"./Dialog-0XJ0SO-Q.js";import"./cross-BUEX2IGU.js";import"./svgIconContainer-QappFeg0.js";import"./useBaseUiId-DpoPO5jU.js";import"./InternalBackdrop-C3crqnkP.js";import"./composite-xFGPtc_t.js";import"./index-DbSXjThu.js";import"./index-BGZxf-A_.js";import"./index-BDSy7YKy.js";import"./useEventCallback-Crcc4UV6.js";import"./SkeletonBar-B_m0lEWJ.js";import"./LoadingCell-DSFLxCsS.js";import"./ColumnConfigDialog-C6yzQUu1.js";import"./DraggableList-B0hW1Fu2.js";import"./search-UUFCgVGZ.js";import"./Input-ax18PB6G.js";import"./useControlled-BB6bU1kQ.js";import"./isEqual-a-uCbEZ1.js";import"./isObject-BZyiDzdf.js";import"./Button-BvKdxg3d.js";import"./ActionButton-Dxaw-g98.js";import"./Checkbox-DxL4ZG_a.js";import"./useValueChanged-BRcf4k2H.js";import"./CollapsiblePanel-dNjLU5f9.js";import"./MultiColumnSortDialog-Cy4EqFDR.js";import"./MenuTrigger-B6XUcNMI.js";import"./CompositeItem-wIWKS7_g.js";import"./ToolbarRootContext-BskIkuOz.js";import"./getDisabledMountTransitionStyles-C56Ja1Aa.js";import"./getPseudoElementBounds-DqFjVP5N.js";import"./chevron-down-C5KpQgJ6.js";import"./index-De7UWdw5.js";import"./error-BqxbYOqB.js";import"./BaseCbacBanner-Ds0ufIuT.js";import"./makeExternalStore-Cpevbodx.js";import"./Tooltip-D6JbqPgC.js";import"./PopoverPopup-BlDf12vy.js";import"./toNumber-CF0CbTZU.js";import"./useOsdkClient-CW496Pf_.js";import"./tick-BD1_G4-a.js";import"./DropdownField-By8_V6vH.js";import"./withOsdkMetrics-BKZ5oc9t.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
