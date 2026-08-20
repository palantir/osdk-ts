import{f as p,j as e}from"./iframe-DXxQjXBv.js";import{O as i}from"./object-table-BW_Sl5wS.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B3x_8eTM.js";import"./Table-5Pkjf0xl.js";import"./index-DXdDs4lB.js";import"./Dialog-DyrAYHFW.js";import"./cross-DBGO2VVp.js";import"./svgIconContainer-Djvq0Ea-.js";import"./useBaseUiId-sMJwHuF9.js";import"./InternalBackdrop-1veRHWnT.js";import"./composite-DyOcb01D.js";import"./index-D2ThU2H1.js";import"./index-BACG9pJt.js";import"./index-DV-wQImC.js";import"./useEventCallback-ZORB5mtp.js";import"./SkeletonBar-CLPsLqkj.js";import"./LoadingCell-Cqa_kdVU.js";import"./ColumnConfigDialog-B0N3jfw-.js";import"./DraggableList-LqDJEkvM.js";import"./search-AXE8JxuE.js";import"./Input-D27Qregm.js";import"./useControlled-DX08P2U0.js";import"./Button-Ci_FRPTV.js";import"./small-cross-B64sAtfI.js";import"./ActionButton-CBpybzk5.js";import"./Checkbox-CZ7FQT-u.js";import"./useValueChanged-D4gbbrz9.js";import"./CollapsiblePanel-CaZbRFQ9.js";import"./MultiColumnSortDialog-yucVxOpt.js";import"./MenuTrigger-CbMwSs8E.js";import"./CompositeItem-DpkHDNf0.js";import"./ToolbarRootContext-CWTmo3ib.js";import"./getDisabledMountTransitionStyles-4PFD-HSx.js";import"./getPseudoElementBounds-BofrfX0E.js";import"./chevron-down-BbVf5MXz.js";import"./index-WfGPsqa3.js";import"./error-C3iIo7m3.js";import"./BaseCbacBanner-gwObvKD0.js";import"./makeExternalStore-B_fb5bX2.js";import"./Tooltip-Jw2VnCeH.js";import"./PopoverPopup-DPa0Gw29.js";import"./debounce-CLg2jDRW.js";import"./useOsdkClient-B50wCFRC.js";import"./tick-P1YE4zf9.js";import"./DropdownField-HqK3PI3z.js";import"./useDebouncedCallback-Det4gxbH.js";import"./withOsdkMetrics-DszGj25-.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
