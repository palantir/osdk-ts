import{f as p,j as e}from"./iframe-CiSnmsUY.js";import{O as i}from"./object-table-DI2vK7kf.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DB05R4R8.js";import"./Table-D5XQxyos.js";import"./index-DtqJWAR1.js";import"./Dialog-B1l4PhW9.js";import"./cross-DqJ3usLj.js";import"./svgIconContainer-YAuGbdcX.js";import"./useBaseUiId-BgbryNLv.js";import"./InternalBackdrop-BP7YEs8y.js";import"./composite-C3rcy89N.js";import"./index-C3RlImgP.js";import"./index-MxmlqxL7.js";import"./index-BNNnVfG-.js";import"./useEventCallback-DqunfGDv.js";import"./SkeletonBar-DpUtUaVO.js";import"./LoadingCell-BmGY6OV1.js";import"./ColumnConfigDialog-B1LIhsIP.js";import"./DraggableList-DyQZfIr6.js";import"./search-BuUGV3qm.js";import"./Input-DIUphC8P.js";import"./useControlled-D6zDOA9R.js";import"./Button-zNL5TU8S.js";import"./small-cross-DoXZmpls.js";import"./ActionButton-CQ0ZQbLI.js";import"./Checkbox-DU95N0wx.js";import"./useValueChanged-hsux432g.js";import"./CollapsiblePanel-7EwtkYsj.js";import"./MultiColumnSortDialog-DRC-l6TU.js";import"./MenuTrigger-BqEoGnj9.js";import"./CompositeItem-CZisrTyk.js";import"./ToolbarRootContext-DiETc3Jn.js";import"./getDisabledMountTransitionStyles-KZsVWxev.js";import"./getPseudoElementBounds-CuJTK0LC.js";import"./chevron-down-NvsSukNZ.js";import"./index-Cyar7n9t.js";import"./error-D4igt9j_.js";import"./BaseCbacBanner-Cw3yM5Ky.js";import"./makeExternalStore-QQZ63Ao7.js";import"./Tooltip-Db4p9Oq_.js";import"./PopoverPopup-NTD0YB3Q.js";import"./debounce-BF_mGk1a.js";import"./useOsdkClient-CXCEo80y.js";import"./tick-BKrT4vVQ.js";import"./DropdownField-CjTR3tJv.js";import"./isEqual-Dj8Z5w_m.js";import"./withOsdkMetrics-B44dBrFm.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
