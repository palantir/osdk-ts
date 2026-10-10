import{f as p,j as e}from"./iframe-CvUSgiu3.js";import{O as i}from"./object-table-BvJbDI1c.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B0zyaiwI.js";import"./Table-BqGL8juK.js";import"./index-DmcWe2qf.js";import"./Dialog-BHI0eyC8.js";import"./cross-DrZXwXEo.js";import"./svgIconContainer-CTy32Y-c.js";import"./useBaseUiId-DY1Z1crQ.js";import"./InternalBackdrop-BjeXf3nJ.js";import"./composite-2ofaKrdo.js";import"./index-Cn7kZwJh.js";import"./index-40gUd9cg.js";import"./index-CiZrWga3.js";import"./useEventCallback-giAqM-Ga.js";import"./SkeletonBar-Crq6VcI5.js";import"./LoadingCell-ZMp_upZg.js";import"./ColumnConfigDialog-BdgHmIoU.js";import"./DraggableList-CI68k6Xu.js";import"./search-BikN9LqI.js";import"./Input-Dqxb3pxV.js";import"./useControlled-DxVirw8z.js";import"./Button-BbMrXCM7.js";import"./small-cross-brkzixeZ.js";import"./ActionButton-cWvGC5Rr.js";import"./Checkbox-BnT_7Zv0.js";import"./useValueChanged-B7529PCr.js";import"./CollapsiblePanel-DD_1P7Ak.js";import"./MultiColumnSortDialog-seWZwaRj.js";import"./MenuTrigger-hLB_c1Oa.js";import"./CompositeItem-BekmKE9y.js";import"./ToolbarRootContext-BRgMGrEJ.js";import"./getDisabledMountTransitionStyles-YgtPIr1c.js";import"./getPseudoElementBounds-BGaSa-J5.js";import"./chevron-down-BJ7q-Z6f.js";import"./index-CSjUKw3W.js";import"./error-CFT8_0w_.js";import"./BaseCbacBanner-owDcSAdE.js";import"./makeExternalStore-BqQyfi25.js";import"./Tooltip-DpOcBxM1.js";import"./PopoverPopup-CKHxkUKN.js";import"./debounce-C7rA69Kq.js";import"./useOsdkClient-BU6oB7cD.js";import"./tick-DVXui722.js";import"./DropdownField-B3F6gD4V.js";import"./isEqual-B-ebV27u.js";import"./withOsdkMetrics-B2ewH9eG.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
