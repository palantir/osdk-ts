import{f as p,j as e}from"./iframe-BS39yabj.js";import{O as i}from"./object-table-BG2HpV_Z.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BlmF7poY.js";import"./Table-NR-u2LQJ.js";import"./index-azX0WN20.js";import"./Dialog-BdDEc9ZK.js";import"./cross-bmcz7kaq.js";import"./svgIconContainer-CNsteYTu.js";import"./useBaseUiId-D6zQUJH2.js";import"./InternalBackdrop-DdLVr0rp.js";import"./composite-CrL6ee8J.js";import"./index-DNFWNz_b.js";import"./index-DG4fpTh9.js";import"./index-PhutVXJ9.js";import"./useEventCallback-DbJ-5CM3.js";import"./SkeletonBar-D2_rdQx4.js";import"./LoadingCell-DLSxxkpW.js";import"./ColumnConfigDialog-BI7Wk6ld.js";import"./DraggableList-3XvF_fmY.js";import"./search-DAe8-jYH.js";import"./Input-D3GthuCR.js";import"./useControlled-BtFTec_4.js";import"./Button-iYAVh6AY.js";import"./small-cross-1NinHjR6.js";import"./ActionButton-pdu1jtw7.js";import"./Checkbox-BOw-3iNT.js";import"./useValueChanged-Cv2_6DC2.js";import"./CollapsiblePanel-BpV10IyX.js";import"./MultiColumnSortDialog-DF9I3qiO.js";import"./MenuTrigger-B-q30BGy.js";import"./CompositeItem-9rYzgPbG.js";import"./ToolbarRootContext-CI8IZR11.js";import"./getDisabledMountTransitionStyles-CAstZq8O.js";import"./getPseudoElementBounds-CWt6eGsw.js";import"./chevron-down-DlL6v6RD.js";import"./index-COrNsrGV.js";import"./error-BIF0zaRT.js";import"./BaseCbacBanner-0uknKwVN.js";import"./makeExternalStore-CRPXUjA_.js";import"./Tooltip-BrBmFfM2.js";import"./PopoverPopup-ByPglwJA.js";import"./debounce-BAByceoi.js";import"./useOsdkClient-BEiGHmPL.js";import"./tick-BLEDxvEm.js";import"./DropdownField--vh2Xda9.js";import"./isEqual-Dw_0jNQy.js";import"./withOsdkMetrics-D0DSfH2H.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
