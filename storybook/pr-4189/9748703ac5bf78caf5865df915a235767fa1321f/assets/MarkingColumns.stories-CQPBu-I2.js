import{f as p,j as e}from"./iframe-Dh2xvDPL.js";import{O as i}from"./object-table-CyttWP_N.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-SAHcs0zZ.js";import"./Table-BBHaU1bC.js";import"./index-Dr7bSUf-.js";import"./Dialog-CCieSDld.js";import"./cross-ZJLJ2cFd.js";import"./svgIconContainer-BHSUSAvD.js";import"./useBaseUiId-X9Y2KA52.js";import"./InternalBackdrop-C2q5bYna.js";import"./composite-KqTwPrS-.js";import"./index-CT9Bx1MM.js";import"./index-n6Qd_eA8.js";import"./index-BM8dCjb_.js";import"./useEventCallback-C1LEHjlu.js";import"./SkeletonBar-DlK6Lvgg.js";import"./LoadingCell--qTTcwGL.js";import"./ColumnConfigDialog-DzRcgXCF.js";import"./DraggableList-D2Nvn9BZ.js";import"./search-DmyvADcW.js";import"./Input-D6WeFSc3.js";import"./useControlled-Cuxd_f5K.js";import"./Button-YpbDPlK1.js";import"./small-cross-DJlalsgy.js";import"./ActionButton-CGAhjyey.js";import"./Checkbox-BNxawU7W.js";import"./useValueChanged-DhcPVJzs.js";import"./CollapsiblePanel-Bx6XMZE8.js";import"./MultiColumnSortDialog-BY6eWIGX.js";import"./MenuTrigger-ChH9TEBU.js";import"./CompositeItem-DLX8hiU0.js";import"./ToolbarRootContext-D8HNRzfl.js";import"./getDisabledMountTransitionStyles-DxtpCxOq.js";import"./getPseudoElementBounds-BI_64AOy.js";import"./chevron-down-Bnx_kJUl.js";import"./index-DSLCj2ev.js";import"./error-DKTxybZv.js";import"./BaseCbacBanner-BXlg9iiI.js";import"./makeExternalStore-DYD0iaqF.js";import"./Tooltip-C-gFw6R-.js";import"./PopoverPopup-BCrdCA5S.js";import"./debounce-DG8yYAXE.js";import"./useOsdkClient-BDIRf078.js";import"./tick-1mKZAjPR.js";import"./DropdownField-CXn8MxM3.js";import"./isEqual-ChBky0gE.js";import"./withOsdkMetrics-DzUlIuBm.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
