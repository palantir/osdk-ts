import{f as p,j as e}from"./iframe-CMm4N1y0.js";import{O as i}from"./object-table-_y8JQsVL.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DPdS5gYT.js";import"./Table-B-jh3DiY.js";import"./index-mc6WZDuQ.js";import"./Dialog-7hbNYFd7.js";import"./cross-w0K8LNSt.js";import"./svgIconContainer-zPF7HvxF.js";import"./useBaseUiId-DSNrt-U2.js";import"./InternalBackdrop-C3wXessL.js";import"./composite-BoQ1iNnl.js";import"./index-DgJDHTvw.js";import"./index-ULPzqRga.js";import"./index-TDPUwOnJ.js";import"./useEventCallback-C1kO7wJe.js";import"./SkeletonBar-BX6mbipF.js";import"./LoadingCell-BLjl_Xzy.js";import"./ColumnConfigDialog-CNZf5IfJ.js";import"./DraggableList-DhyTCalD.js";import"./search-CiZI6CH-.js";import"./Input-WLnnNcib.js";import"./useControlled-BNALToTQ.js";import"./Button-RJLOnGs4.js";import"./small-cross-Bzj4KzKP.js";import"./ActionButton-C1HDW1tb.js";import"./Checkbox-y1Ue4XXM.js";import"./useValueChanged-BAb8DN1s.js";import"./CollapsiblePanel-CKo7WZyd.js";import"./MultiColumnSortDialog-BhbhduM7.js";import"./MenuTrigger-BgJpdaXh.js";import"./CompositeItem-BwL5uNEu.js";import"./ToolbarRootContext-Dy9xQ5C5.js";import"./getDisabledMountTransitionStyles-WnHy71z6.js";import"./getPseudoElementBounds-CbILzRJ8.js";import"./chevron-down-BWoDSlPa.js";import"./index-DdpoA6j8.js";import"./error-BNe6vl6a.js";import"./BaseCbacBanner-CR1fj-E0.js";import"./makeExternalStore-C-_FdC6k.js";import"./Tooltip-B56bZ38u.js";import"./PopoverPopup-COua6oiQ.js";import"./debounce-e_CiYFMe.js";import"./useOsdkClient-DhcRZ6oq.js";import"./tick-Blq7nSqP.js";import"./DropdownField-Dpg0H91Q.js";import"./isEqual-CGKBuTFm.js";import"./withOsdkMetrics-CWiHOjas.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
