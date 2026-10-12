import{f as p,j as e}from"./iframe-DDCC62mw.js";import{O as i}from"./object-table-OQexuOAk.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-TbI6pun2.js";import"./Table-Ec8kAuP5.js";import"./index-z6zT66iy.js";import"./Dialog-DmoyXpWO.js";import"./cross-CFNkWks7.js";import"./svgIconContainer-8NI9Pceg.js";import"./useBaseUiId-Cx54uMSy.js";import"./InternalBackdrop-DEeOk2qp.js";import"./composite-oUxuVDiC.js";import"./index-BtGfhpV-.js";import"./index-8Tq8e6Kq.js";import"./index-C68Nk8KR.js";import"./useEventCallback-B5u_qSmP.js";import"./SkeletonBar-RZyiWmdj.js";import"./LoadingCell-C27X0YWe.js";import"./ColumnConfigDialog-BFe0lJSs.js";import"./DraggableList-BpIVC8Oz.js";import"./search-BJP-HOO5.js";import"./Input-L9q-qGHh.js";import"./useControlled-CHZ6ZiHg.js";import"./Button-DreRcsv2.js";import"./small-cross-ZcATWl5F.js";import"./ActionButton-CCAWhnCb.js";import"./Checkbox-D1ridbKQ.js";import"./useValueChanged-R_tn0UMM.js";import"./CollapsiblePanel-D0jWvycX.js";import"./MultiColumnSortDialog-IUhDXqPY.js";import"./MenuTrigger-Bh4gyTRB.js";import"./CompositeItem-EdV_vQTm.js";import"./ToolbarRootContext-B4LwY6SC.js";import"./getDisabledMountTransitionStyles-BWc9hNjX.js";import"./getPseudoElementBounds-BxYMv3LN.js";import"./chevron-down-CKdPMFgU.js";import"./index-DNvyrcf-.js";import"./error-B0SCddV6.js";import"./BaseCbacBanner-lZ-L0DlF.js";import"./makeExternalStore-Bpmw5WPB.js";import"./Tooltip-C5trv4L9.js";import"./PopoverPopup-BChNR2Ib.js";import"./debounce-Dh0-cHXm.js";import"./useOsdkClient-B0m0YA5K.js";import"./tick-CQHTofux.js";import"./DropdownField-Be49_OLB.js";import"./isEqual-D9ZQ6BUD.js";import"./withOsdkMetrics-3tZAXSEA.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
