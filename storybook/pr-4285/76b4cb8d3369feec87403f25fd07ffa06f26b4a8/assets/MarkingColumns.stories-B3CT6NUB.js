import{f as p,j as e}from"./iframe-CZB8iCrN.js";import{O as i}from"./object-table-DehqEVQ8.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bfp8b3lb.js";import"./Table-rjbMHeM4.js";import"./index-B20F_8Db.js";import"./Dialog-DLx2nLTg.js";import"./cross-BaVj46vf.js";import"./svgIconContainer-C34Xeufa.js";import"./useBaseUiId-Dl-CxI70.js";import"./InternalBackdrop-CZc7gtvF.js";import"./composite-7sRBgyZt.js";import"./index-DadbORQH.js";import"./index-DiIHqUbm.js";import"./index-BA1zjzC9.js";import"./useEventCallback-BfsfIFjp.js";import"./SkeletonBar-BSHJjhv4.js";import"./LoadingCell-BtskXgKq.js";import"./ColumnConfigDialog-6OPnpbeC.js";import"./DraggableList-DpDcjxuL.js";import"./search-FLqm4c0t.js";import"./Input-mSuQxNwT.js";import"./useControlled-CISHEyOE.js";import"./Button-CN7eBVL6.js";import"./small-cross-CHUBqXu0.js";import"./ActionButton-D-kvs5NB.js";import"./Checkbox-DqqtCebH.js";import"./useValueChanged-BCYX16oW.js";import"./CollapsiblePanel-DKs8Sotj.js";import"./MultiColumnSortDialog-fBXaklYM.js";import"./MenuTrigger-D7qtEAHL.js";import"./CompositeItem-BGy1WNiQ.js";import"./ToolbarRootContext-Xc9NkH4h.js";import"./getDisabledMountTransitionStyles-C0YnDowy.js";import"./getPseudoElementBounds-zdwXg5BV.js";import"./chevron-down-CyERpmZf.js";import"./index-CnvQ1zd9.js";import"./error-BrUtxvkn.js";import"./BaseCbacBanner-BgYcC6c9.js";import"./makeExternalStore-Bemx5W1x.js";import"./Tooltip-Dza2UVUK.js";import"./PopoverPopup-DlycPGOu.js";import"./debounce-5SpNsm5N.js";import"./useOsdkClient-BcxP6QNS.js";import"./tick-DJ7lwI6u.js";import"./DropdownField-Bru52TRy.js";import"./isEqual-BMF7Qr-y.js";import"./withOsdkMetrics-CrKh0O5J.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
