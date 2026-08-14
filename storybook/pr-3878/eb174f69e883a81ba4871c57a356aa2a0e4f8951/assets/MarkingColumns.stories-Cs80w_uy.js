import{f as p,j as e}from"./iframe-DYHiAth1.js";import{O as i}from"./object-table-DEWC-nn6.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BP3stq1X.js";import"./Table-2K-cGukF.js";import"./index-CFqT-tg2.js";import"./Dialog-DQ4YCnYw.js";import"./cross-NVvu5W38.js";import"./svgIconContainer-CpmCT8qJ.js";import"./useBaseUiId-D0-MqLY3.js";import"./InternalBackdrop-CxXrMN-4.js";import"./composite-rM29Crwf.js";import"./index-CkiCmIU-.js";import"./index-BwwRvQBw.js";import"./index-DciWkXkh.js";import"./useEventCallback-DC29l974.js";import"./SkeletonBar-DYoISvdk.js";import"./LoadingCell-FtlHLmdg.js";import"./ColumnConfigDialog-ntW35Xqz.js";import"./DraggableList-DiqY5Ru2.js";import"./search-CQsEHw2u.js";import"./Input-_kt7fmI_.js";import"./useControlled-CC9eDEXu.js";import"./Button-BEfeLVww.js";import"./small-cross-DjRHx6o3.js";import"./ActionButton-92N3WJHq.js";import"./Checkbox-Cj0lmbVz.js";import"./useValueChanged-B4YQUOGh.js";import"./CollapsiblePanel-Cj4OFHRl.js";import"./MultiColumnSortDialog-D9iHHBDb.js";import"./MenuTrigger-picsPTWZ.js";import"./CompositeItem-BzTzzhBW.js";import"./ToolbarRootContext-DKtHKjj0.js";import"./getDisabledMountTransitionStyles-BgEZbX8N.js";import"./getPseudoElementBounds-BF9Su6Vc.js";import"./chevron-down-CN-or4pg.js";import"./index-Cw0Wnr-O.js";import"./error-5z49WPo0.js";import"./BaseCbacBanner-CJYJCrD1.js";import"./makeExternalStore-QtZrVkJy.js";import"./Tooltip-B5wcixUa.js";import"./PopoverPopup-of74B-iq.js";import"./debounce-DR7Pr710.js";import"./useOsdkClient-BQwErlmz.js";import"./tick-Di6EJAuo.js";import"./DropdownField-CGvMTI-U.js";import"./isEqual-CUVGUpjO.js";import"./withOsdkMetrics-0_t_tujb.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
