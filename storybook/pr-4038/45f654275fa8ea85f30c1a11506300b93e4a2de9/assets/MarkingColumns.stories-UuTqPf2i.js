import{f as p,j as e}from"./iframe-CChix_Ju.js";import{O as i}from"./object-table-W3AwL5m5.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DGn9W5qi.js";import"./Table-ClI-xhR1.js";import"./index-pvPqNL-H.js";import"./Dialog-C0wKlZ34.js";import"./cross-CUi9b35_.js";import"./svgIconContainer-BeYzdFE0.js";import"./useBaseUiId-4A8uRFRe.js";import"./InternalBackdrop-0GHCyljD.js";import"./composite-Ctdw8swW.js";import"./index-CHXlKmK_.js";import"./index-BdOozmQn.js";import"./index-DzZ5SHau.js";import"./useEventCallback-omUHy35f.js";import"./SkeletonBar-CyTCelnP.js";import"./LoadingCell-CikoTcWZ.js";import"./ColumnConfigDialog-DbwfwSdP.js";import"./DraggableList-Dn_ahx7T.js";import"./search-CX5b2IB4.js";import"./Input-BRtUQT1Y.js";import"./useControlled-CG8Zt7_4.js";import"./Button-BRITeuER.js";import"./small-cross-CocjBOU4.js";import"./ActionButton-BOCIBxLx.js";import"./Checkbox-C9LUYdAG.js";import"./useValueChanged-5TXMPTNO.js";import"./CollapsiblePanel-C6nKBTkT.js";import"./MultiColumnSortDialog-BGo8dzST.js";import"./MenuTrigger-DmLCLZNx.js";import"./CompositeItem-Dh0FwBF1.js";import"./ToolbarRootContext-4N77tOAl.js";import"./getDisabledMountTransitionStyles-Dqw8IpJe.js";import"./getPseudoElementBounds-BZu9KNVE.js";import"./chevron-down-DL0MqWR7.js";import"./index-Bmjlrc5X.js";import"./error-fDpd87S9.js";import"./BaseCbacBanner-b0DOB5bF.js";import"./makeExternalStore-Cw3jon-H.js";import"./Tooltip-D0QIy-LD.js";import"./PopoverPopup-ZgO3OX-R.js";import"./debounce-y_QKH6vw.js";import"./useOsdkClient-BuYYPMjl.js";import"./tick-BaB62fCb.js";import"./DropdownField-BHcpSdCb.js";import"./isEqual-CLIiWmbM.js";import"./withOsdkMetrics-DIof6Ugt.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
