import{f as p,j as e}from"./iframe-DlM-48cS.js";import{O as i}from"./object-table-6UYhzY7J.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DmLvY0Ro.js";import"./Table-DHNgN1mF.js";import"./index-DQySynAe.js";import"./Dialog-BMdGWId2.js";import"./cross-DwTMpwkP.js";import"./svgIconContainer-BSW0qWgw.js";import"./useBaseUiId-BL7ajxcr.js";import"./InternalBackdrop-g_U0vMMw.js";import"./composite-CCDJ76ow.js";import"./index-oiGtd9Nq.js";import"./index-DD03Ubzs.js";import"./index-BbcdD0et.js";import"./useEventCallback-C32mWVio.js";import"./SkeletonBar-Cxw_3ain.js";import"./LoadingCell-JC4LkPeL.js";import"./ColumnConfigDialog-lAlcW1DG.js";import"./DraggableList-BRnq7nnv.js";import"./search-CPnwrFbd.js";import"./Input-BgLmo8kc.js";import"./useControlled-Cds1c1L2.js";import"./Button-CS46bS-Y.js";import"./small-cross-ZWRWvs2M.js";import"./ActionButton-C_ljWeF0.js";import"./Checkbox-BAwY31E0.js";import"./useValueChanged-p3rsjtiE.js";import"./CollapsiblePanel-DaZOGvpp.js";import"./MultiColumnSortDialog-CLq9BdIb.js";import"./MenuTrigger-BmrmMcrE.js";import"./CompositeItem-DnzFCdD-.js";import"./ToolbarRootContext-DaIwolue.js";import"./getDisabledMountTransitionStyles-BKN0QXaR.js";import"./getPseudoElementBounds-DmT7azNk.js";import"./chevron-down-P2rFBgt2.js";import"./index-zmbIiHRb.js";import"./error-CpOA0Xju.js";import"./BaseCbacBanner-DY-b7WCK.js";import"./makeExternalStore-CFNSwXMM.js";import"./Tooltip-WnQo6xYr.js";import"./PopoverPopup-DSW4WQWE.js";import"./debounce-C3CDxvw2.js";import"./useOsdkClient-BufyZItZ.js";import"./tick-D1rTjIGT.js";import"./DropdownField-BWVVH9kG.js";import"./isEqual-CCq2LSSh.js";import"./withOsdkMetrics-D-ub6zdF.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
