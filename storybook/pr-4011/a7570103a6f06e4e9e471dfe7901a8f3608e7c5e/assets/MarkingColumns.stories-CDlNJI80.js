import{f as p,j as e}from"./iframe-BD39Do8C.js";import{O as i}from"./object-table-XvysqiEU.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-JSiQ8WbR.js";import"./Table-Kxd4s0Rq.js";import"./index-BCxf04aV.js";import"./Dialog-DbttJI7D.js";import"./cross-CMhnMXoS.js";import"./svgIconContainer-BGfZ28Se.js";import"./useBaseUiId-CixWZYdi.js";import"./InternalBackdrop-JgUl4SpN.js";import"./composite-Dw7ZpZcU.js";import"./index-BxvffljR.js";import"./index-BlGl871Z.js";import"./index-BMGw1Ywl.js";import"./useEventCallback-CAno7Uq2.js";import"./SkeletonBar-ChYm8Pif.js";import"./LoadingCell-Bp33neIb.js";import"./ColumnConfigDialog-CmdVMkd2.js";import"./DraggableList-CFz8s0Iz.js";import"./search-DKvlAX7y.js";import"./Input-C2jmuYOz.js";import"./useControlled-eZ44qZZ0.js";import"./Button-u59jaYGp.js";import"./small-cross-v3WipyAt.js";import"./ActionButton-7xwBUzYP.js";import"./Checkbox-CggHv61E.js";import"./useValueChanged-DEs8VwNn.js";import"./CollapsiblePanel-Drtssh2l.js";import"./MultiColumnSortDialog-CZb4OMVv.js";import"./MenuTrigger-n2HgLx6m.js";import"./CompositeItem-ucwXIdj-.js";import"./ToolbarRootContext-CEznXclz.js";import"./getDisabledMountTransitionStyles-CF6npNkJ.js";import"./getPseudoElementBounds-muQrWTVi.js";import"./chevron-down-Xa2zxhAU.js";import"./index-C4HeAi2L.js";import"./error-Bjl2LrVO.js";import"./BaseCbacBanner-D7gYN66H.js";import"./makeExternalStore-3auNYjTa.js";import"./Tooltip-A3U5tZhT.js";import"./PopoverPopup-B0-uC8s0.js";import"./debounce-Bbpr-sop.js";import"./useOsdkClient-s9NhLy7T.js";import"./tick--a7d8SCu.js";import"./DropdownField-sKOGesOW.js";import"./isEqual-BAy2lMjl.js";import"./withOsdkMetrics-Dp5pMzPZ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
