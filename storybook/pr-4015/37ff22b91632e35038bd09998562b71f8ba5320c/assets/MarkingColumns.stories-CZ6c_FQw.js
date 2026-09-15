import{f as p,j as e}from"./iframe-DuKb9b-g.js";import{O as i}from"./object-table-D_f3jEqw.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CmBjm-d1.js";import"./Table-CelvBzgi.js";import"./index-CBTF18Y_.js";import"./Dialog-BItLkqX5.js";import"./cross-BuyNDB8o.js";import"./svgIconContainer-D2G78cDZ.js";import"./useBaseUiId-NQWDjIJs.js";import"./InternalBackdrop-D4gOUPe7.js";import"./composite-DGpno2Zs.js";import"./index-COA_z0C-.js";import"./index-rSrw9_A6.js";import"./index-LK-vvshS.js";import"./useEventCallback-Du_jiSTN.js";import"./SkeletonBar-CyJQaH3P.js";import"./LoadingCell-RsBbZKeg.js";import"./ColumnConfigDialog-BHzMjY3y.js";import"./DraggableList-OFpiB0Ur.js";import"./search-DorovZ71.js";import"./Input-Cn1-EvYg.js";import"./useControlled-Cq3GxJKq.js";import"./Button--z0-7-P6.js";import"./small-cross-XPwGc81k.js";import"./ActionButton-B90I1M0m.js";import"./Checkbox-DY6vacWn.js";import"./useValueChanged-B0eTT0HH.js";import"./CollapsiblePanel-BCVzQFnZ.js";import"./MultiColumnSortDialog-DVBISA0E.js";import"./MenuTrigger-DmALjKVQ.js";import"./CompositeItem-nEfjeVhf.js";import"./ToolbarRootContext-B06gfqsL.js";import"./getDisabledMountTransitionStyles-CE96oCFC.js";import"./getPseudoElementBounds-I2seTDJA.js";import"./chevron-down-Cn1BrU6q.js";import"./index-DYJuDcIp.js";import"./error-F4sFwWip.js";import"./BaseCbacBanner-C3rmTLBi.js";import"./makeExternalStore-Ch4HrWdd.js";import"./Tooltip-LmxDT9eD.js";import"./PopoverPopup-C0gNO46d.js";import"./debounce-BTQaBQTc.js";import"./useOsdkClient-3LBkaWIm.js";import"./tick-ozEvHoG_.js";import"./DropdownField-B1euX2XM.js";import"./isEqual-DOiyiefo.js";import"./withOsdkMetrics-HiGGTrX-.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
