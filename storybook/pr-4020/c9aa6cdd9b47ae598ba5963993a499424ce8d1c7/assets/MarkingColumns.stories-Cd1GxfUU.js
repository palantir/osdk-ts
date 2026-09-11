import{f as p,j as e}from"./iframe-nPEDWuq5.js";import{O as i}from"./object-table-CRPiQ3Ub.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C6v3Woxd.js";import"./Table-lCMrQkNT.js";import"./index-BDaAzszu.js";import"./Dialog-UbMhrZBy.js";import"./cross-CAR7WZMr.js";import"./svgIconContainer-Buy0gbpp.js";import"./useBaseUiId-BXoUi6bA.js";import"./InternalBackdrop-Yc2AYYIP.js";import"./composite-CnhzSObF.js";import"./index-BWMgc9TH.js";import"./index-DshB7Dwn.js";import"./index-DwMLeagM.js";import"./useEventCallback-DT88xX0T.js";import"./SkeletonBar-qZCRr-4g.js";import"./LoadingCell-B4XwyJKF.js";import"./ColumnConfigDialog-aEeFW2sQ.js";import"./DraggableList-BgjPQF0b.js";import"./search-CDt_zXJw.js";import"./Input-D9N0trYU.js";import"./useControlled-BvjcIJZ1.js";import"./Button-BdGhF_Br.js";import"./small-cross-BgQyzeJV.js";import"./ActionButton-CQHkvHtv.js";import"./Checkbox-mO8D-c8M.js";import"./useValueChanged-K-OlizrE.js";import"./CollapsiblePanel-7oyGI4Ll.js";import"./MultiColumnSortDialog-kEPt91j4.js";import"./MenuTrigger-CluvJSuE.js";import"./CompositeItem-CryHE6pf.js";import"./ToolbarRootContext-kq769ncg.js";import"./getDisabledMountTransitionStyles-BrBhvHF_.js";import"./getPseudoElementBounds-DZQnzGS3.js";import"./chevron-down-I8DXHveL.js";import"./index-Bdb3f4mb.js";import"./error-CBIwIhhP.js";import"./BaseCbacBanner-BeAP6OMH.js";import"./makeExternalStore-CYa6UY1g.js";import"./Tooltip-ByNkcQt7.js";import"./PopoverPopup-D49G2G7z.js";import"./debounce-B0x1PKSV.js";import"./useOsdkClient-CJxHdyXB.js";import"./tick-C2ltMR2g.js";import"./DropdownField-D0J2AzMJ.js";import"./isEqual-CL-UmrLO.js";import"./withOsdkMetrics-DX-TmC7j.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
