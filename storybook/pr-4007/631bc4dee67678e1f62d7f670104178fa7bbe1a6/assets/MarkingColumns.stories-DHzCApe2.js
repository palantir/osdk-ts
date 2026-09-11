import{f as p,j as e}from"./iframe-BU8GFPxQ.js";import{O as i}from"./object-table-WiGfrNuV.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BSSMxuAV.js";import"./Table-_iLj8Rwt.js";import"./index-Bj-f6_Qj.js";import"./Dialog-BRZ_Mhxt.js";import"./cross-DWZb8fnb.js";import"./svgIconContainer-TGaOK_qc.js";import"./useBaseUiId-BwjQR-o4.js";import"./InternalBackdrop-4G36EFVK.js";import"./composite-Boe3qmtr.js";import"./index-RL0-TRLi.js";import"./index-BXjwg4tu.js";import"./index-C_kynsOY.js";import"./useEventCallback-DG6Athm7.js";import"./SkeletonBar-CPA8YoA_.js";import"./LoadingCell-xe8P1haw.js";import"./ColumnConfigDialog-BFPCLBzz.js";import"./DraggableList-DseQHdl8.js";import"./search-BzzxBGZs.js";import"./Input-BKDA3F0b.js";import"./useControlled-D1XH3a1Z.js";import"./Button-BVSo85zW.js";import"./small-cross-ByWRQaND.js";import"./ActionButton-DwMdzrCh.js";import"./Checkbox-JGOrpztY.js";import"./useValueChanged-DEn3Bp16.js";import"./CollapsiblePanel-DvEibyNb.js";import"./MultiColumnSortDialog-D8RzlB43.js";import"./MenuTrigger-wpqOhd9z.js";import"./CompositeItem-CKxdCuih.js";import"./ToolbarRootContext-C_zt0aic.js";import"./getDisabledMountTransitionStyles-DdQ32HlV.js";import"./getPseudoElementBounds-CVkJL-hX.js";import"./chevron-down-Cmk3gaNN.js";import"./index-DzgdnyuN.js";import"./error-DmWc08dY.js";import"./BaseCbacBanner-DDbqCS2g.js";import"./makeExternalStore-BQ9uq3hP.js";import"./Tooltip-_KniFWIt.js";import"./PopoverPopup-DzgCN5FT.js";import"./debounce-CEAcWSfb.js";import"./useOsdkClient-CxUbeAk0.js";import"./tick-p7Xjilvh.js";import"./DropdownField-B8coeO1y.js";import"./isEqual-trZ89Cy7.js";import"./withOsdkMetrics-NEaJKOCO.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
