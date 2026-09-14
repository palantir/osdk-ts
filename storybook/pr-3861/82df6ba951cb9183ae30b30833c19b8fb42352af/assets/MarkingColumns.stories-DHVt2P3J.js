import{f as p,j as e}from"./iframe-D3x4g0gw.js";import{O as i}from"./object-table-BJWR7mZ5.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DpKiFXQE.js";import"./Table-gtzT0OA8.js";import"./index-DmJVhxkC.js";import"./Dialog-BL0eiG9o.js";import"./cross-noZD8yCQ.js";import"./svgIconContainer-Ch07AZiN.js";import"./useBaseUiId-Cza7NB65.js";import"./InternalBackdrop-DRfabTHE.js";import"./composite-CbVzOtkL.js";import"./index-BFwtMTR7.js";import"./index-CHX_y3YQ.js";import"./index-BM_v9pt3.js";import"./useEventCallback-DKxR4GSB.js";import"./SkeletonBar-BBCGvtlx.js";import"./LoadingCell-BkcsG2ev.js";import"./ColumnConfigDialog-CIdTSppo.js";import"./DraggableList-B2z6Jhre.js";import"./search-Vpq8vYa6.js";import"./Input-D7XVlSnc.js";import"./useControlled-u8Kd9MbQ.js";import"./Button-waIQuOK_.js";import"./small-cross-DojPJSHV.js";import"./ActionButton-D4pNdjo7.js";import"./Checkbox-SAzgd6A3.js";import"./useValueChanged-Cm3ghXGz.js";import"./CollapsiblePanel-MtWIBxII.js";import"./MultiColumnSortDialog-CX94El7z.js";import"./MenuTrigger-D4FrUD7q.js";import"./CompositeItem-C81j0gfv.js";import"./ToolbarRootContext-D-JTlGY6.js";import"./getDisabledMountTransitionStyles-BDg7WwLA.js";import"./getPseudoElementBounds-m4kZMHaS.js";import"./chevron-down-F1u7ETIP.js";import"./index-CdtIJVqT.js";import"./error-EOjqK743.js";import"./BaseCbacBanner-CAxpfmC5.js";import"./makeExternalStore-B-EBN1-5.js";import"./Tooltip-Cny1QPUK.js";import"./PopoverPopup-BJayu4w5.js";import"./debounce-Dgw7wFze.js";import"./useOsdkClient-CcBCF4jU.js";import"./tick-E3YA_PC9.js";import"./DropdownField-BTbdugIo.js";import"./isEqual-DdD0roBe.js";import"./withOsdkMetrics-q2ysVhnq.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
