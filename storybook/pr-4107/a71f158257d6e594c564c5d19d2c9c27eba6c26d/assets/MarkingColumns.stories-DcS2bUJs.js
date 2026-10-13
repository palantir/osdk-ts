import{f as p,j as e}from"./iframe-weo2ftOt.js";import{O as i}from"./object-table-MPznOHsn.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CccATkyg.js";import"./Table-C9cmQgMl.js";import"./index-BzFNlzeA.js";import"./Dialog-DXnfnG2Y.js";import"./cross-DFxtUTH2.js";import"./svgIconContainer-4wqza-Yn.js";import"./useBaseUiId-Ca9MSPeN.js";import"./InternalBackdrop-CuieHGY6.js";import"./composite-CXbXQTWA.js";import"./index-CwVuW96i.js";import"./index-OwV8MnsF.js";import"./index-BdXrAkiS.js";import"./useEventCallback-CDd5n6gg.js";import"./SkeletonBar-CDPR9pBR.js";import"./LoadingCell-WuxZExiN.js";import"./ColumnConfigDialog-BoYEBqur.js";import"./DraggableList-CrnBYdkh.js";import"./search-D7AcF35x.js";import"./Input-DDH0znUE.js";import"./useControlled-BR3V1Gxk.js";import"./Button-DTZufqgI.js";import"./small-cross-DMF81cbr.js";import"./ActionButton-yOO-hwGF.js";import"./Checkbox-BD6MUUao.js";import"./useValueChanged-47o-AHo4.js";import"./CollapsiblePanel-MUmgFy3O.js";import"./MultiColumnSortDialog-n4XkIf-Z.js";import"./MenuTrigger-BRpqpide.js";import"./CompositeItem-tLUZG1Hv.js";import"./ToolbarRootContext-9vNtX9N5.js";import"./getDisabledMountTransitionStyles-CJygm4kF.js";import"./getPseudoElementBounds-B7YRzaVu.js";import"./chevron-down-BqDjxAzh.js";import"./index-jbXLVEma.js";import"./error-LA7kedRF.js";import"./BaseCbacBanner-DgWEbDvw.js";import"./makeExternalStore-CGRq4C4C.js";import"./Tooltip-BZAy0DbI.js";import"./PopoverPopup-B1Tf3m9o.js";import"./debounce-C2Mlteaf.js";import"./useOsdkClient-DWTjpIGp.js";import"./tick-2nC9-KBm.js";import"./DropdownField-DBrFB89T.js";import"./isEqual-DUHhgGZv.js";import"./withOsdkMetrics-td22ADns.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
