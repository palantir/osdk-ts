import{f as p,j as e}from"./iframe-BEf575A3.js";import{O as i}from"./object-table-CyNsBF74.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B8yT8SXx.js";import"./Table-BoarFvvZ.js";import"./index-DPOra9vP.js";import"./Dialog-CbevediE.js";import"./cross-B2xt-49o.js";import"./svgIconContainer-Ds_sg4id.js";import"./useBaseUiId-Du1Cq8KT.js";import"./InternalBackdrop-KVNLpp70.js";import"./composite-BVFiP9nk.js";import"./index-B6Jwaemq.js";import"./index-CSOMTnLn.js";import"./index-DrWIlFdC.js";import"./useEventCallback-B2f7tSmD.js";import"./SkeletonBar-C0AvNUSN.js";import"./LoadingCell-DXktZPMb.js";import"./ColumnConfigDialog-B12qvy7z.js";import"./DraggableList-BUv6HqtM.js";import"./search-BSaWqUSD.js";import"./Input-BSE_NzJ1.js";import"./useControlled-GhsyJ4IB.js";import"./Button-DQuoZQTN.js";import"./small-cross-DHnU3Y_M.js";import"./ActionButton-pEA0J6a-.js";import"./Checkbox-D9rWDzpT.js";import"./useValueChanged-BCwdJtac.js";import"./CollapsiblePanel-Dc7YlANl.js";import"./MultiColumnSortDialog-DrdEZbOO.js";import"./MenuTrigger-Ecdz3oSM.js";import"./CompositeItem-DQa7bQl1.js";import"./ToolbarRootContext-DeNEF_85.js";import"./getDisabledMountTransitionStyles-BwejZ17E.js";import"./getPseudoElementBounds-D_SiGCEF.js";import"./chevron-down-Dh8dts5f.js";import"./index-6kp1VAEO.js";import"./error-i1IrNpAR.js";import"./BaseCbacBanner-Blv-vsVV.js";import"./makeExternalStore-C8e7yQGc.js";import"./Tooltip-Dbh86cq5.js";import"./PopoverPopup-iEpmJA85.js";import"./debounce-C190Sqdz.js";import"./useOsdkClient-tyif8xTS.js";import"./tick-Y-Su1Qel.js";import"./DropdownField-4xDffuje.js";import"./isEqual-DZtnWfiD.js";import"./withOsdkMetrics-B7g61Aed.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
