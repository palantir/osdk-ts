import{f as p,j as e}from"./iframe-Cl70dWji.js";import{O as i}from"./object-table-DSKBKJEJ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-QiZ_zLcF.js";import"./Table-CT32E32c.js";import"./index-Ds00pONi.js";import"./Dialog-BQOFHT2N.js";import"./cross-BB7Pc46-.js";import"./svgIconContainer-BTNEBHys.js";import"./useBaseUiId-DOyYal5B.js";import"./InternalBackdrop-DrCY85f_.js";import"./composite-C748PZ0N.js";import"./index-C3QZTmM_.js";import"./index-CafCqYhX.js";import"./index-BNc2rzrN.js";import"./useEventCallback-CuVM_nnh.js";import"./SkeletonBar-ZZ-gHcd3.js";import"./LoadingCell-C4fmmZXT.js";import"./ColumnConfigDialog-D1JnnrAy.js";import"./DraggableList-Cy_C57Fv.js";import"./search-DF6sLdtJ.js";import"./Input-BXSbXZmI.js";import"./useControlled-Q9tFcpq6.js";import"./isEqual-C6EEvx8A.js";import"./isObject-DQR0yTql.js";import"./Button-D15y4J1a.js";import"./ActionButton-DewavcTR.js";import"./Checkbox-CMJRhaQz.js";import"./useValueChanged-BOJK3Ya0.js";import"./CollapsiblePanel-5JgopO6I.js";import"./MultiColumnSortDialog-D6_YMFCs.js";import"./MenuTrigger-BqxlSmck.js";import"./CompositeItem-BomeUMbI.js";import"./ToolbarRootContext-DqYG79A3.js";import"./getDisabledMountTransitionStyles-C6EScx01.js";import"./getPseudoElementBounds-DMThbFPG.js";import"./chevron-down-CVLu7rIR.js";import"./index-CoYvOkpA.js";import"./error-BlBC8OXl.js";import"./BaseCbacBanner-l6rCUghX.js";import"./makeExternalStore-BMmPmQBR.js";import"./Tooltip-CXyot0O5.js";import"./PopoverPopup-CoC_t-0L.js";import"./toNumber-BLVbDFpr.js";import"./useOsdkClient-DnZ3twwm.js";import"./tick-DgbGHwXk.js";import"./DropdownField-Bav9j6aq.js";import"./withOsdkMetrics-DW3ouCxC.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
