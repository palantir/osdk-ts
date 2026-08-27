import{f as p,j as e}from"./iframe-CymrrUap.js";import{O as i}from"./object-table-DsD5lCxR.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ehSUgiiL.js";import"./Table-BwyEzzA3.js";import"./index-DA-oUp9z.js";import"./Dialog-CXf9IXsT.js";import"./cross-D80OmHTw.js";import"./svgIconContainer-DmC2tGob.js";import"./useBaseUiId-DBVrwlNg.js";import"./InternalBackdrop-DptHKqPi.js";import"./composite-CPmOeLm-.js";import"./index-CkbGSZqd.js";import"./index-BMFjKR_h.js";import"./index-D-TCxA9c.js";import"./useEventCallback-Ca0PZb-I.js";import"./SkeletonBar-Cy3aWI1h.js";import"./LoadingCell-DrGS4_GQ.js";import"./ColumnConfigDialog-DXZYQVA8.js";import"./DraggableList-C5fTPmAd.js";import"./search-D73uP9Os.js";import"./Input-BVeDMVsS.js";import"./useControlled-F4dJPm4K.js";import"./Button-ZWSn3dX-.js";import"./small-cross-BXC0Eg3O.js";import"./ActionButton-CkEPzh79.js";import"./Checkbox-BKGwXbsb.js";import"./useValueChanged-CfWffDr4.js";import"./CollapsiblePanel-BjlGtYv0.js";import"./MultiColumnSortDialog-NMs-Rt6h.js";import"./MenuTrigger-DnF-czQE.js";import"./CompositeItem-Dj6qYNKV.js";import"./ToolbarRootContext-BsZ0cva1.js";import"./getDisabledMountTransitionStyles-Cqy5xLfF.js";import"./getPseudoElementBounds-Cwm_P-oB.js";import"./chevron-down-DOWVkS2T.js";import"./index-BNNz_fAv.js";import"./error-xVwU37JI.js";import"./BaseCbacBanner-BA1752Gq.js";import"./makeExternalStore-3pbdXedN.js";import"./Tooltip-DmacMCn7.js";import"./PopoverPopup-9VCLlEje.js";import"./debounce-D89nRWoA.js";import"./useOsdkClient-Cu-liJH6.js";import"./tick-HZRn0iiz.js";import"./DropdownField-D7TDTmE3.js";import"./isEqual-B-zNnBk1.js";import"./withOsdkMetrics-CA9bgf-6.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
