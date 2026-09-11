import{f as p,j as e}from"./iframe-Cf0qyGmO.js";import{O as i}from"./object-table-B3dUEJgW.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-FPWMSdmp.js";import"./Table-C96eoQ6L.js";import"./index-BgodPvXa.js";import"./Dialog-1ooC9KhB.js";import"./cross-Dw3cMUV6.js";import"./svgIconContainer-Cf6GYh8C.js";import"./useBaseUiId-BYXJoihF.js";import"./InternalBackdrop-Cr8_GTkt.js";import"./composite-C4psFksR.js";import"./index-vIhG0vhZ.js";import"./index-_vrq9vUl.js";import"./index-DcVAYh3u.js";import"./useEventCallback-D6E5ELqq.js";import"./SkeletonBar-B3eK4lrr.js";import"./LoadingCell-zmT-jdAw.js";import"./ColumnConfigDialog-BiFwCQUt.js";import"./DraggableList-CfAVftDP.js";import"./search-CjtKZYOm.js";import"./Input-DeGiuUjm.js";import"./useControlled-BC5mDRRe.js";import"./Button-QXRQZjdg.js";import"./small-cross-BtxyZWiR.js";import"./ActionButton-CagVTzlG.js";import"./Checkbox-CYDFVU58.js";import"./useValueChanged-Iv8KZjJ4.js";import"./CollapsiblePanel-CzQfHLf4.js";import"./MultiColumnSortDialog-vANMZoGL.js";import"./MenuTrigger-3jyGR3ne.js";import"./CompositeItem-Hv8dpGL2.js";import"./ToolbarRootContext-BEgrRK88.js";import"./getDisabledMountTransitionStyles-D1czWqQx.js";import"./getPseudoElementBounds-D7l6Y_as.js";import"./chevron-down-CciGsrf9.js";import"./index-DsFZ6bc6.js";import"./error-CneFkgZH.js";import"./BaseCbacBanner-CF3yMDO2.js";import"./makeExternalStore-Do5TdYdF.js";import"./Tooltip-D8djcuHS.js";import"./PopoverPopup-CAL-bmct.js";import"./debounce-qcOHSgKC.js";import"./useOsdkClient-Blulg0DK.js";import"./tick-YNlQehLt.js";import"./DropdownField-BNhZxXTj.js";import"./isEqual-zZcIegst.js";import"./withOsdkMetrics-T_QycJJf.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
