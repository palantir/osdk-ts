import{f as p,j as e}from"./iframe-B9vRr-8o.js";import{O as i}from"./object-table-Cy9_ddQq.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CT6yiVJK.js";import"./Table-BUC41EyK.js";import"./index-Db6wxNSm.js";import"./Dialog-DrfWv6lO.js";import"./cross-DS9XOep9.js";import"./svgIconContainer-jTmjY-5C.js";import"./useBaseUiId-Zy-hPVme.js";import"./InternalBackdrop-Dkt-LU98.js";import"./composite-D-Ig3PPA.js";import"./index-BqLTNrL3.js";import"./index-BP6meDIf.js";import"./index-DiOfrt9y.js";import"./useEventCallback-Dnwjatgq.js";import"./SkeletonBar-DDQ6bK0h.js";import"./LoadingCell-h6-IYD-k.js";import"./ColumnConfigDialog-DSyqhsd5.js";import"./DraggableList-BEY5F6_e.js";import"./search-BLFbd71b.js";import"./Input-49lOIosv.js";import"./useControlled-Czmg4_Mq.js";import"./Button-DInSh6Mg.js";import"./small-cross-g5g4iWLv.js";import"./ActionButton-VuwZ2TlI.js";import"./Checkbox-DD1_NRcm.js";import"./useValueChanged-CZWNgrSk.js";import"./CollapsiblePanel-BYu6tsP9.js";import"./MultiColumnSortDialog-C54yM2eA.js";import"./MenuTrigger-k50_Svx1.js";import"./CompositeItem-CAhsvlmM.js";import"./ToolbarRootContext-BnF1ucj1.js";import"./getDisabledMountTransitionStyles-DR1DqNS1.js";import"./getPseudoElementBounds-B9b1zlvs.js";import"./chevron-down-KfZfPmTG.js";import"./index-DmmkcNZh.js";import"./error-DU5bvt7m.js";import"./BaseCbacBanner-BIhbpkTr.js";import"./makeExternalStore-CO4PrvZd.js";import"./Tooltip-Iu1ebRAa.js";import"./PopoverPopup-1FDqfr6m.js";import"./debounce-CTdyZ7c7.js";import"./useOsdkClient-XUvdpQCP.js";import"./tick-HHcjPpdd.js";import"./DropdownField-D-lyti30.js";import"./isEqual-BHuMrP_U.js";import"./withOsdkMetrics-BZu7xMYv.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
