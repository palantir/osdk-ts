import{f as p,j as e}from"./iframe-J30hPVdk.js";import{O as i}from"./object-table-Bunnygjb.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-21pBjwGc.js";import"./Table-Ex05FhFv.js";import"./index-DzFJcvqE.js";import"./Dialog-DSdAEYxC.js";import"./cross-1ilXjfTr.js";import"./svgIconContainer-Bmpr-YG-.js";import"./useBaseUiId-BPzj-rci.js";import"./InternalBackdrop-DnbkkKQH.js";import"./composite-BMEMfwlO.js";import"./index-B1uCCcyj.js";import"./index-D8MmmnXz.js";import"./index-BWrnMFHO.js";import"./useEventCallback-C7hZrsdh.js";import"./SkeletonBar-DX3FY0lK.js";import"./LoadingCell-B3O5ywmq.js";import"./ColumnConfigDialog-BHqTh2X-.js";import"./DraggableList-Cnjnmv33.js";import"./search-CBu-pF0G.js";import"./Input-DW9kemBa.js";import"./useControlled-CGDYKM6L.js";import"./Button-9RAeKDxl.js";import"./small-cross-DLACjrSW.js";import"./ActionButton-Cj1dNVdG.js";import"./Checkbox-DddRnZ8G.js";import"./useValueChanged-DEXfPX0Q.js";import"./CollapsiblePanel-Or1n6xhN.js";import"./MultiColumnSortDialog-Cgnen5BE.js";import"./MenuTrigger-fsa0hbSF.js";import"./CompositeItem-Jmu2r9JC.js";import"./ToolbarRootContext-ClVL2vmD.js";import"./getDisabledMountTransitionStyles-sG9CL-HI.js";import"./getPseudoElementBounds-DfSRht98.js";import"./chevron-down-CdNGoo9Q.js";import"./index-BLPazZJs.js";import"./error-BSLpMKqj.js";import"./BaseCbacBanner-B3mOSYuN.js";import"./makeExternalStore-DALczlz3.js";import"./Tooltip-BokQxeg5.js";import"./PopoverPopup-DbS2DolK.js";import"./debounce-D3LSvrP2.js";import"./useOsdkClient-jc2ng4S0.js";import"./tick-Bz0F0nuW.js";import"./DropdownField-DXOH2Xdp.js";import"./isEqual-BbuKmiSE.js";import"./withOsdkMetrics-Bp-1idm_.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
