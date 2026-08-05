import{f as p,j as e}from"./iframe-B5ZzFpGV.js";import{O as i}from"./object-table-BAN1bX6b.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BJvIoz8B.js";import"./Table-B3CRxTpo.js";import"./index-z4xETEDy.js";import"./Dialog-DeF2s5sl.js";import"./cross-BGaKNqwh.js";import"./svgIconContainer-CW1kT3WQ.js";import"./useBaseUiId-DJnMsM3b.js";import"./InternalBackdrop-t-Tkp2mf.js";import"./composite-ilR61S-U.js";import"./index-BXOUosox.js";import"./index-CRM3J1t9.js";import"./index-pipDnF82.js";import"./useEventCallback-B8zk15kN.js";import"./SkeletonBar-DJk1-8Bw.js";import"./LoadingCell-x1ad322X.js";import"./ColumnConfigDialog-uerieJHr.js";import"./DraggableList-BlLBygSa.js";import"./search-C_g1Mr7n.js";import"./Input-CwAbMfOY.js";import"./useControlled-DiSq_f2x.js";import"./isEqual-wEqXlrPC.js";import"./isObject-GtkGHpJ0.js";import"./Button-CYH1D7qG.js";import"./ActionButton-BDEvghIZ.js";import"./Checkbox-D5r_2i7u.js";import"./useValueChanged-DHoXd38F.js";import"./CollapsiblePanel-BQpiv9Vm.js";import"./MultiColumnSortDialog-DWxuuXXs.js";import"./MenuTrigger-D9c0vcFB.js";import"./CompositeItem-C8C3gNK6.js";import"./ToolbarRootContext-ChmL4KtX.js";import"./getDisabledMountTransitionStyles-BLQLaFmr.js";import"./getPseudoElementBounds-DZHDf8sw.js";import"./chevron-down-D8Xw2XSL.js";import"./index-DTZ3ogMT.js";import"./error-CweQ51t5.js";import"./BaseCbacBanner-uc8qvZPA.js";import"./makeExternalStore-WLdqxZL2.js";import"./Tooltip-CE0dRtvL.js";import"./PopoverPopup-dtml0Wne.js";import"./toNumber-AlaGGTap.js";import"./useOsdkClient-DEz3juUB.js";import"./tick-Cruxb3nb.js";import"./DropdownField-ButkmT75.js";import"./withOsdkMetrics-B_Ikpxmc.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
