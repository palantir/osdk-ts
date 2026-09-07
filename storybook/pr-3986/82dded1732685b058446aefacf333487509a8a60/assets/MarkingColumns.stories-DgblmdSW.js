import{f as p,j as e}from"./iframe-BtBIXkF3.js";import{O as i}from"./object-table-9UB2qNHK.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-KCRTf-fU.js";import"./Table-C-92Mm7K.js";import"./index-BGAjKCp6.js";import"./Dialog-yW4mTTj3.js";import"./cross-B9mjFWYU.js";import"./svgIconContainer-CclLyuS6.js";import"./useBaseUiId-CzkvuYxc.js";import"./InternalBackdrop-CxX8IWWG.js";import"./composite-Bn3hBJno.js";import"./index-DnxktrWp.js";import"./index-Bg1G_Vw4.js";import"./index-D1E8i8Wn.js";import"./useEventCallback-BQpb3sO5.js";import"./SkeletonBar-BNOhPsmd.js";import"./LoadingCell-C5Xqiqpu.js";import"./ColumnConfigDialog-auwReXLV.js";import"./DraggableList-DW3EaiLm.js";import"./search-DV3YNQgX.js";import"./Input-CZ_pHuwE.js";import"./useControlled-Bsm9yLUZ.js";import"./Button-FoDlRoyn.js";import"./small-cross-D7pBBSfk.js";import"./ActionButton-CXzhKuCF.js";import"./Checkbox-I1uYLB9H.js";import"./useValueChanged-DWNSNYCY.js";import"./CollapsiblePanel-CZO-nI2a.js";import"./MultiColumnSortDialog-DrKFPM2W.js";import"./MenuTrigger-DRF14xJF.js";import"./CompositeItem-BCTeJPmX.js";import"./ToolbarRootContext-B_9qz0NR.js";import"./getDisabledMountTransitionStyles-D444HRMW.js";import"./getPseudoElementBounds-DWPVaQIw.js";import"./chevron-down-BHLBt5vn.js";import"./index-C81F4-IO.js";import"./error-VXjIMzYn.js";import"./BaseCbacBanner-CdTxml7S.js";import"./makeExternalStore-CMGSbNhD.js";import"./Tooltip-BzRRe3iu.js";import"./PopoverPopup-CII93Llt.js";import"./debounce-fpq53JQI.js";import"./useOsdkClient-Dw51PFJi.js";import"./tick-BfzomYJ0.js";import"./DropdownField-CeeFHjMT.js";import"./isEqual-Nrqv2hX0.js";import"./withOsdkMetrics-CEusHpqR.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
