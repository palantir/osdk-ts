import{f as p,j as e}from"./iframe-gHIh_ABY.js";import{O as i}from"./object-table-Dl3UN5Rz.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C--wqxNR.js";import"./Table-BPmSdLdc.js";import"./index-DyPMxe-T.js";import"./Dialog-Cc9URUc5.js";import"./cross-DecwR9UF.js";import"./svgIconContainer-BsQinfdF.js";import"./useBaseUiId-dqf5kUOq.js";import"./InternalBackdrop-DOc9dm1o.js";import"./composite-G9H6ILMG.js";import"./index-CWxda7K-.js";import"./index-D1LhnjWM.js";import"./index-C34ZHf-K.js";import"./useEventCallback-E1OVmXif.js";import"./SkeletonBar-BEzmBAg7.js";import"./LoadingCell-FOpHRjq2.js";import"./ColumnConfigDialog-CAGkaqGn.js";import"./DraggableList-CJfNVRmO.js";import"./search-Blg9RF01.js";import"./Input-CphmVuHr.js";import"./useControlled-C8OoR1Ph.js";import"./Button-bbhva_Wr.js";import"./small-cross-BwADiSMm.js";import"./ActionButton-sMHQZDfc.js";import"./Checkbox-Db14FcSZ.js";import"./useValueChanged-BBNrWnU1.js";import"./CollapsiblePanel-DgUiEhUm.js";import"./MultiColumnSortDialog-CiO9gB7G.js";import"./MenuTrigger-BMEpoHEX.js";import"./CompositeItem-ChBkH7yO.js";import"./ToolbarRootContext-BaCzfuCb.js";import"./getDisabledMountTransitionStyles-BBrgI6Lb.js";import"./getPseudoElementBounds-AK_MaNof.js";import"./chevron-down-C9sYZ9oi.js";import"./index-DPBLKrFq.js";import"./error-Bs-UYVj5.js";import"./BaseCbacBanner-B-M0WJ6I.js";import"./makeExternalStore-DdIdXh98.js";import"./Tooltip-BVVrGeU9.js";import"./PopoverPopup-BMZcpAvB.js";import"./debounce-BCvtfNN5.js";import"./useOsdkClient-BkL_6XFG.js";import"./tick-BRMzqiwr.js";import"./DropdownField-DoF6Yrgi.js";import"./isEqual-B5qnIJjO.js";import"./withOsdkMetrics-DoSr47Bs.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
