import{f as p,j as e}from"./iframe-vnKEgnca.js";import{O as i}from"./object-table-Cdqb0T8o.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-sQW1CADx.js";import"./Table-jIMLYzem.js";import"./index-BeGfthlJ.js";import"./Dialog-CeIQS-Df.js";import"./cross-_8csVoP1.js";import"./svgIconContainer-NsUuck07.js";import"./useBaseUiId-CgxqfjcM.js";import"./InternalBackdrop-83r7I1RI.js";import"./composite-C9k3QAIL.js";import"./index-fmSw06oW.js";import"./index-CFCh4JjT.js";import"./index-CcuQRhTx.js";import"./useEventCallback-Dfml-rlK.js";import"./SkeletonBar-Dk4nJLO-.js";import"./LoadingCell-rXcdd4XO.js";import"./ColumnConfigDialog-CzA6lYEA.js";import"./DraggableList-BtqsKkmI.js";import"./search-DSYVPSfx.js";import"./Input-CWIjEhtY.js";import"./useControlled-Bxc3bdV1.js";import"./Button-28NdSEt3.js";import"./small-cross-CUYeKhnX.js";import"./ActionButton-D-nwGdVx.js";import"./Checkbox-DawziPMY.js";import"./useValueChanged-CDaiOFJe.js";import"./CollapsiblePanel-snp8kNHN.js";import"./MultiColumnSortDialog-Bata7hBa.js";import"./MenuTrigger-DIYp-ZLj.js";import"./CompositeItem-1_Yzr1XW.js";import"./ToolbarRootContext-CwAo2bG9.js";import"./getDisabledMountTransitionStyles-BwHnrPvs.js";import"./getPseudoElementBounds-CHJP1wr0.js";import"./chevron-down-DEu7XuhT.js";import"./index-BvRjSpJH.js";import"./error-BV36DzgX.js";import"./BaseCbacBanner-Dyqd2qNr.js";import"./makeExternalStore-CcMSZMO7.js";import"./Tooltip-Cj_Idruq.js";import"./PopoverPopup-BTMMw79y.js";import"./debounce-D-YcwjSi.js";import"./useOsdkClient-3N-DZ2Jr.js";import"./tick-0FUkR9Gc.js";import"./DropdownField-VOlhddjk.js";import"./isEqual-DUuBLzE6.js";import"./withOsdkMetrics-Dh0bq2dQ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
