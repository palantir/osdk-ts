import{f as p,j as e}from"./iframe-81je18Ik.js";import{O as i}from"./object-table-BvQWIhZK.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CRAEXExV.js";import"./Table-CATOd2mE.js";import"./index-Ch4IN5aI.js";import"./Dialog-bzSxmtfs.js";import"./cross-Cc4GvHBG.js";import"./svgIconContainer-CkaRT57i.js";import"./useBaseUiId-BZJB2Tlb.js";import"./InternalBackdrop-C65WwkrS.js";import"./composite-B4jPeedW.js";import"./index-F2YzzidU.js";import"./index-CJX1bs1L.js";import"./index-CbMHVh08.js";import"./useEventCallback-DQ9am-6U.js";import"./SkeletonBar-Dw-ewOea.js";import"./LoadingCell-D0Zburhd.js";import"./ColumnConfigDialog-Cet9ZvNQ.js";import"./DraggableList-5Ave0405.js";import"./search-DL20J9IV.js";import"./Input-Dw0afNfi.js";import"./useControlled-B3eKfZiB.js";import"./Button-DMrFAQQL.js";import"./small-cross-Bkj0uCyB.js";import"./ActionButton-B6EeJUTi.js";import"./Checkbox-BvqadCb6.js";import"./useValueChanged-CSH2H_LU.js";import"./CollapsiblePanel-BZXNDPDr.js";import"./MultiColumnSortDialog-C9gRh8VL.js";import"./MenuTrigger-BtxN9ewG.js";import"./CompositeItem-CGRjueKi.js";import"./ToolbarRootContext-Bevviuy2.js";import"./getDisabledMountTransitionStyles-Baxpj6ZK.js";import"./getPseudoElementBounds-CsA6tpz4.js";import"./chevron-down-ea9DRGVa.js";import"./index-BZr2ycyZ.js";import"./error-v2_eLjNd.js";import"./BaseCbacBanner-DH9rtQ5g.js";import"./makeExternalStore-C42KheMu.js";import"./Tooltip-ZUJ8p7GH.js";import"./PopoverPopup-CJ53N5Gn.js";import"./debounce-C0dFA0mS.js";import"./useOsdkClient-DOUL53LR.js";import"./tick-C3zDCHaR.js";import"./DropdownField-_ZfRXRml.js";import"./isEqual-DOga7zoS.js";import"./withOsdkMetrics-DpvfaYrl.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
