import{f as p,j as e}from"./iframe-DZKZRMfI.js";import{O as i}from"./object-table-BsWjOEgt.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CyDM0kIy.js";import"./Table-U9dRKIWF.js";import"./index-UHNo6JXh.js";import"./Dialog-C9zFjDwL.js";import"./cross-7qoEAdfk.js";import"./svgIconContainer-C1JqEOuF.js";import"./useBaseUiId-BrAP3Vhg.js";import"./InternalBackdrop-Bd1Fm7m7.js";import"./composite-Wbt-b0Wx.js";import"./index-BcZyi5e5.js";import"./index-GUxQVV6o.js";import"./index-DuUfF7np.js";import"./useEventCallback-ZFvhVecb.js";import"./SkeletonBar-B4noTuJE.js";import"./LoadingCell-jvnZxHuU.js";import"./ColumnConfigDialog-CWL9Lvpm.js";import"./DraggableList-QUK3qw-p.js";import"./search-BMN_5avI.js";import"./Input-DAp8ZrwB.js";import"./useControlled-Dg2uTPRC.js";import"./isEqual-B35GUBBd.js";import"./isObject-CZrcnf8_.js";import"./Button-Clu6RzPE.js";import"./ActionButton-DV1gQ_3M.js";import"./Checkbox-DvrL_Cuc.js";import"./useValueChanged-CES4Mr1K.js";import"./CollapsiblePanel-ChxW3qwi.js";import"./MultiColumnSortDialog-Bnt2nhz5.js";import"./MenuTrigger-DM0YWJsi.js";import"./CompositeItem-BToRPTQx.js";import"./ToolbarRootContext-DRj1zGHd.js";import"./getDisabledMountTransitionStyles-BKGiXkNj.js";import"./getPseudoElementBounds-CnkNCKmG.js";import"./chevron-down-B-VJcggY.js";import"./index-CzSoEYKc.js";import"./error-BGz2U_dj.js";import"./BaseCbacBanner-DlYIXUuu.js";import"./makeExternalStore-BdBWg-q-.js";import"./Tooltip-m2lNKbbq.js";import"./PopoverPopup-rf4F-xS_.js";import"./toNumber-C0YbIGo7.js";import"./useOsdkClient-BeGqXuUC.js";import"./tick-Cf7fJ5Zm.js";import"./DropdownField-Cmzd4G9b.js";import"./withOsdkMetrics-hhq9mBBz.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
