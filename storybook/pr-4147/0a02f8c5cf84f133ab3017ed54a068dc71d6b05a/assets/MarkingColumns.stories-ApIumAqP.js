import{f as p,j as e}from"./iframe-BmTfPnlj.js";import{O as i}from"./object-table-DuwyKVEZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bt_1BQmW.js";import"./Table-BQzYY4p1.js";import"./index-Bm1AuuXK.js";import"./Dialog-CLdygFMh.js";import"./cross-1FUbPxXE.js";import"./svgIconContainer-B7k9FdbM.js";import"./useBaseUiId-CCBNiAGi.js";import"./InternalBackdrop-D1OaTL7l.js";import"./composite-EJeYuU8b.js";import"./index-CXPEIkSW.js";import"./index-SU5jaKKw.js";import"./index-CpTFd5F4.js";import"./useEventCallback-CthUr-8o.js";import"./SkeletonBar-xGbITfKH.js";import"./LoadingCell-im-jO5xv.js";import"./ColumnConfigDialog-DMDJcMq5.js";import"./DraggableList-B9SvoxHN.js";import"./search-CB8fQpSi.js";import"./Input-DCbUCzbU.js";import"./useControlled-DnL-NKvx.js";import"./Button-B5eSVAk7.js";import"./small-cross-C79mcn34.js";import"./ActionButton-cPylYcIf.js";import"./Checkbox-BWJ9MvvS.js";import"./useValueChanged-DFht__m8.js";import"./CollapsiblePanel-Gfd_BnuO.js";import"./MultiColumnSortDialog-BQzltBiA.js";import"./MenuTrigger-B34U6tOS.js";import"./CompositeItem-BMTpDb-Q.js";import"./ToolbarRootContext-BGVsEm7y.js";import"./getDisabledMountTransitionStyles-BN0kS-V3.js";import"./getPseudoElementBounds-DXAkgdW7.js";import"./chevron-down-BcbzO8DN.js";import"./index-CIA5CVhr.js";import"./error-DAivNTLD.js";import"./BaseCbacBanner-DpXuSF7U.js";import"./makeExternalStore-D35ZSxQs.js";import"./Tooltip-BF_5RxMC.js";import"./PopoverPopup-DP_BVDXy.js";import"./debounce-rwBGYxkZ.js";import"./useOsdkClient-Cv-kkUDW.js";import"./tick-BZF5qhIw.js";import"./DropdownField-CWmI2VfS.js";import"./isEqual-9M4q6ORL.js";import"./withOsdkMetrics-NcWgtcUH.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
