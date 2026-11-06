import{f as p,j as e}from"./iframe-Dy3pbGVl.js";import{O as i}from"./object-table-kTEr-sWF.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CpAlczou.js";import"./Table-VOHC5N06.js";import"./index-BGynA5Ey.js";import"./Dialog-zWcA6cDC.js";import"./cross-_ffwL7On.js";import"./svgIconContainer-DwcpIzbz.js";import"./useBaseUiId-1GhcXjBj.js";import"./InternalBackdrop-DMIRmadR.js";import"./composite-DD7PMic6.js";import"./index-rQvGOKiy.js";import"./index-B3hOY3C5.js";import"./index-Dl_Buekn.js";import"./useEventCallback-C3LX0_mu.js";import"./SkeletonBar-DSCrW__O.js";import"./LoadingCell-DfPkft0q.js";import"./ColumnConfigDialog-BbLQ2JxQ.js";import"./DraggableList-C-d_nAEh.js";import"./search-CRVUm7gt.js";import"./Input-Ddh63PuK.js";import"./useControlled-CHjpObPc.js";import"./Button-ByPi26fD.js";import"./small-cross-DjIzegN_.js";import"./ActionButton-DFCeFCb6.js";import"./Checkbox-DDOz7-wX.js";import"./useValueChanged-DpMeL3s2.js";import"./CollapsiblePanel-CBe89pMe.js";import"./MultiColumnSortDialog-CZFWzHwI.js";import"./MenuTrigger-CZSjGNYF.js";import"./CompositeItem-BeUctUoU.js";import"./ToolbarRootContext-B0Ul7YuG.js";import"./getDisabledMountTransitionStyles-eVKTLrRf.js";import"./getPseudoElementBounds-gTzTtYPO.js";import"./chevron-down-8plcDTLG.js";import"./index-TQ3K22OR.js";import"./error-C7pYFxix.js";import"./BaseCbacBanner-C2pkLlLs.js";import"./makeExternalStore-WrhHs9Vh.js";import"./Tooltip-BSjRKIbt.js";import"./PopoverPopup-DrFWXbYx.js";import"./debounce-CXNS7Ik8.js";import"./useOsdkClient-B6m6pKrS.js";import"./tick-CBR4s6ZO.js";import"./DropdownField-CzivYSGB.js";import"./isEqual-Z9n-lDZW.js";import"./withOsdkMetrics-DtiZVH3G.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
