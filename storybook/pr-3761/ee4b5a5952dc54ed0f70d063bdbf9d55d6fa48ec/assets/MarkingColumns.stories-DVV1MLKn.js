import{f as p,j as e}from"./iframe-CIbSoI7M.js";import{O as i}from"./object-table-CdpOGEYD.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DmH6FFG8.js";import"./Table-CL0AHU_v.js";import"./index-APCVJEW3.js";import"./Dialog-BDcSUddr.js";import"./cross-B4Gn6Z-M.js";import"./svgIconContainer-DcLu3MTp.js";import"./useBaseUiId-Bmq7BhRQ.js";import"./InternalBackdrop-BjgtFig0.js";import"./composite-CpNiXj_M.js";import"./index-CboshYjZ.js";import"./index-B_6MzMjy.js";import"./index-C3xT3GfP.js";import"./useEventCallback-BffX7Oxm.js";import"./SkeletonBar-C4i3ReRr.js";import"./LoadingCell-BIds3c2z.js";import"./ColumnConfigDialog-SXzUSwu7.js";import"./DraggableList-BHXP4rV_.js";import"./search-BkI_TfyS.js";import"./Input-BML0uaTR.js";import"./useControlled-B_hgmZPj.js";import"./isEqual-qGRkFMs-.js";import"./isObject-CjXE3_P0.js";import"./Button-B5W8gulZ.js";import"./ActionButton-BJZ859-j.js";import"./Checkbox-DOaIFBWt.js";import"./useValueChanged-BIcWN65t.js";import"./CollapsiblePanel-DUJM-fFs.js";import"./MultiColumnSortDialog-B7lgY-v3.js";import"./MenuTrigger-vAioYqMC.js";import"./CompositeItem-DObahPUf.js";import"./ToolbarRootContext-CxR7GEiJ.js";import"./getDisabledMountTransitionStyles-DYmaRG6n.js";import"./getPseudoElementBounds-BWWJ6sub.js";import"./chevron-down-C9wqxvOA.js";import"./index-CmzWklHf.js";import"./error-BMaUhajR.js";import"./BaseCbacBanner-BZNb6prg.js";import"./makeExternalStore-Db2RDoef.js";import"./Tooltip-Bm5iAyY8.js";import"./PopoverPopup-CYc0fInH.js";import"./toNumber-ClgHQQIk.js";import"./useOsdkClient-fg_a0RqO.js";import"./tick-BQndWl-G.js";import"./DropdownField-DYYRN_9K.js";import"./withOsdkMetrics-CgEO4G4q.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
