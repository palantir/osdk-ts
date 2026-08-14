import{f as p,j as e}from"./iframe-Ct96tLEP.js";import{O as i}from"./object-table-BVb4YUri.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BzXm-lWo.js";import"./Table-BLTNEoRk.js";import"./index-BrLV5Brk.js";import"./Dialog-CdgpJYdr.js";import"./cross-njCgeQQ_.js";import"./svgIconContainer-YyohibIC.js";import"./useBaseUiId-DlPo7HoM.js";import"./InternalBackdrop-CBhLfZ10.js";import"./composite-ClWDPy_Z.js";import"./index-n7zQzqGm.js";import"./index-CFGgbOOg.js";import"./index-DvkK9vYJ.js";import"./useEventCallback-NT9uVSN-.js";import"./SkeletonBar-CHy9ImdP.js";import"./LoadingCell-CBjpGz6p.js";import"./ColumnConfigDialog-DeNfn3-2.js";import"./DraggableList-CdCzNXll.js";import"./search-gcuSrwrj.js";import"./Input-BjRTRl1y.js";import"./useControlled-BrUHVbre.js";import"./Button--zxmfjhO.js";import"./small-cross-CdOMJomB.js";import"./ActionButton-mBYFJsFl.js";import"./Checkbox-DCpFl39i.js";import"./useValueChanged-5fXKuMKH.js";import"./CollapsiblePanel-Zda4NkR-.js";import"./MultiColumnSortDialog-LxJNdhr2.js";import"./MenuTrigger-DDhJo6rx.js";import"./CompositeItem-ofC_tm6k.js";import"./ToolbarRootContext-COQSoUvI.js";import"./getDisabledMountTransitionStyles-CosExIO_.js";import"./getPseudoElementBounds-C54av8yB.js";import"./chevron-down-3x8blo3k.js";import"./index-BQUZFKJ4.js";import"./error-9UY90i-J.js";import"./BaseCbacBanner-CClJZgLo.js";import"./makeExternalStore-DsptzOqM.js";import"./Tooltip-COO2pN_0.js";import"./PopoverPopup-Bp-cbf8K.js";import"./debounce-qlqazifV.js";import"./useOsdkClient-CNbvIXrl.js";import"./tick-BTw5BL4P.js";import"./DropdownField-ipyk94KE.js";import"./isEqual-OrluLmcb.js";import"./withOsdkMetrics-BTh75wtd.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
