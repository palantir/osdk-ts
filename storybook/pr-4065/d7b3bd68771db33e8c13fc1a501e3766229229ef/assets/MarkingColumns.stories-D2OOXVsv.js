import{f as p,j as e}from"./iframe-BkN_38ur.js";import{O as i}from"./object-table-BxK2SFkH.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BysSMJyv.js";import"./Table-CHYRgWFW.js";import"./index-VCNAMxPB.js";import"./Dialog-CU_R9RQd.js";import"./cross-QuNtfWNx.js";import"./svgIconContainer-CleM6Ots.js";import"./useBaseUiId-DDXpceTn.js";import"./InternalBackdrop-2b4i1OXO.js";import"./composite-DTpp6U8p.js";import"./index-B8WRO5V1.js";import"./index-B4VzS2Ja.js";import"./index-PtHv8Npb.js";import"./useEventCallback-CfnnU2xW.js";import"./SkeletonBar-BLri9E0k.js";import"./LoadingCell-D8UndlJ7.js";import"./ColumnConfigDialog-BRCStEaP.js";import"./DraggableList-CBM_kRa4.js";import"./search-DLVM4UyR.js";import"./Input-BB5NVTdl.js";import"./useControlled-Cl0okxKJ.js";import"./Button-Bz7lNxsT.js";import"./small-cross-Bq-afI8J.js";import"./ActionButton-BEokvpGB.js";import"./Checkbox-B2Ex9sZd.js";import"./useValueChanged-sVrHRRrg.js";import"./CollapsiblePanel-o_jOyFnm.js";import"./MultiColumnSortDialog-DJ3dPbhu.js";import"./MenuTrigger-Baz3vKii.js";import"./CompositeItem-DeZdbGTL.js";import"./ToolbarRootContext-DsnyQOq9.js";import"./getDisabledMountTransitionStyles-B4uk2RCK.js";import"./getPseudoElementBounds-DqBsVHMm.js";import"./chevron-down-DQ_KkOEg.js";import"./index-tJ30rsuQ.js";import"./error-B2ZdHohT.js";import"./BaseCbacBanner-B7QoD-f1.js";import"./makeExternalStore-BQFFGO0N.js";import"./Tooltip-DB2l-4XV.js";import"./PopoverPopup-BGPwoB7x.js";import"./debounce-BH4zeBLy.js";import"./useOsdkClient-C7M0gZ9G.js";import"./tick-Ja0-lS9C.js";import"./DropdownField-DMG193d-.js";import"./isEqual-DV7eM8kA.js";import"./withOsdkMetrics-Bgcs-XTD.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
