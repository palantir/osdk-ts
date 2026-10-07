import{f as p,j as e}from"./iframe-C4U2JRoY.js";import{O as i}from"./object-table-C8YPtxGL.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DN3ZEv3h.js";import"./Table-DemeUw8L.js";import"./index-sST8iqoh.js";import"./Dialog-CxbAQOcE.js";import"./cross-BjW1gIQB.js";import"./svgIconContainer-Bqyk4ukb.js";import"./useBaseUiId-t75_1mYb.js";import"./InternalBackdrop-DLXodZp2.js";import"./composite-DyzBkCx-.js";import"./index-CwxTqGIm.js";import"./index-BAotWep5.js";import"./index-C6xQgxB6.js";import"./useEventCallback-DztBvHUA.js";import"./SkeletonBar-CA43xrQl.js";import"./LoadingCell-CeMmlt8X.js";import"./ColumnConfigDialog-B_DBv9UA.js";import"./DraggableList-f63FvW7O.js";import"./search-DGpCoBRn.js";import"./Input-Bt5QmGO0.js";import"./useControlled-DgRL6il9.js";import"./Button-_EOncV-8.js";import"./small-cross-CD5bCdAl.js";import"./ActionButton-NrurrT_q.js";import"./Checkbox-B0bJPmc0.js";import"./useValueChanged-CVpGeeut.js";import"./CollapsiblePanel-e6QLkFeN.js";import"./MultiColumnSortDialog-DxmTCiTh.js";import"./MenuTrigger-Ds-m-Ojk.js";import"./CompositeItem-2E0ykI3P.js";import"./ToolbarRootContext-BAVcRF15.js";import"./getDisabledMountTransitionStyles-BTRmRtbC.js";import"./getPseudoElementBounds-Gnx7A5W2.js";import"./chevron-down-dh5AFKhr.js";import"./index-DXHuqct4.js";import"./error-CEamcZeP.js";import"./BaseCbacBanner-DOipROPK.js";import"./makeExternalStore-BDSIsETy.js";import"./Tooltip-CcfNdB-z.js";import"./PopoverPopup-DnvLtuHj.js";import"./debounce-X49geldC.js";import"./useOsdkClient-BAmivmrL.js";import"./tick-BWNn2Zwm.js";import"./DropdownField-DM7w76cT.js";import"./isEqual-UzAaeF-g.js";import"./withOsdkMetrics-DqoHWRxV.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
