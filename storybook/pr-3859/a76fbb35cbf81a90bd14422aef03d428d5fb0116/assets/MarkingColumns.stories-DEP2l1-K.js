import{f as p,j as e}from"./iframe-DOCnG8_R.js";import{O as i}from"./object-table-ByvdEx-N.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CHeAXlhd.js";import"./Table-dzQCxb3w.js";import"./index-B9FSm492.js";import"./Dialog-CMmoPV6w.js";import"./cross-DD4lLZUH.js";import"./svgIconContainer-C_xgL_so.js";import"./useBaseUiId-BIuK8Cls.js";import"./InternalBackdrop-IuYb9qMZ.js";import"./composite-1CbyJRr9.js";import"./index-BVlFCpMD.js";import"./index-BPb9hoVr.js";import"./index-DKtApVsH.js";import"./useEventCallback-BY0rvE7k.js";import"./SkeletonBar-yZks2ZUy.js";import"./LoadingCell-L92wNfok.js";import"./ColumnConfigDialog-CHO0Y_Pf.js";import"./DraggableList-gM4QkIXJ.js";import"./search-CAkVi9HF.js";import"./Input-mExbb7nh.js";import"./useControlled-XIrZJlZr.js";import"./isEqual-CFGyKprK.js";import"./isObject-B272SqN4.js";import"./Button-DdV0L53R.js";import"./ActionButton-CQIy90oM.js";import"./Checkbox-BTFZacPm.js";import"./useValueChanged-j0HODzj-.js";import"./CollapsiblePanel-ji2H9ijV.js";import"./MultiColumnSortDialog-CXfqsRGe.js";import"./MenuTrigger-FhiuXfp1.js";import"./CompositeItem-B1uodXbS.js";import"./ToolbarRootContext-CTPtaqaC.js";import"./getDisabledMountTransitionStyles-B1flPJOL.js";import"./getPseudoElementBounds-BAwwC9X0.js";import"./chevron-down-BZCx1w1J.js";import"./index-CTc_ufVR.js";import"./error-DySJTj9B.js";import"./BaseCbacBanner-U_RGl_3A.js";import"./makeExternalStore-DIwWA4d5.js";import"./Tooltip-DKuwdUQf.js";import"./PopoverPopup-o2vq8MRP.js";import"./toNumber-DQ2BqFwD.js";import"./useOsdkClient-CLF-MvJu.js";import"./tick-BNxVC9F3.js";import"./DropdownField-BB1G0i31.js";import"./withOsdkMetrics-D69gnpAo.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
