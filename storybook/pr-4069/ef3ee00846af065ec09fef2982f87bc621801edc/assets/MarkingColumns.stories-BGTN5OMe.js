import{f as p,j as e}from"./iframe-DAMQ0kJi.js";import{O as i}from"./object-table-BoCVYoye.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B_MKI7VB.js";import"./Table-BeIR0nLw.js";import"./index-Bp0gXdhg.js";import"./Dialog-Bh1BSDP_.js";import"./cross-DxIbIlzH.js";import"./svgIconContainer-CVBLUyxF.js";import"./useBaseUiId-CZjCaxZv.js";import"./InternalBackdrop-CKMU2rkm.js";import"./composite-BYBlPAgy.js";import"./index-8-mAEuet.js";import"./index-D8IRtIy_.js";import"./index-C9gl1QHm.js";import"./useEventCallback-ghRGpfyt.js";import"./SkeletonBar-BxVkW2-h.js";import"./LoadingCell-CF8ye8h8.js";import"./ColumnConfigDialog-BEWA1CMP.js";import"./DraggableList-C_TNi5vD.js";import"./search-AYrmuoce.js";import"./Input-CyyvCwcw.js";import"./useControlled-DC6nW2lc.js";import"./Button-5SDZ05K4.js";import"./small-cross-Cq43VNdb.js";import"./ActionButton-CDelunAe.js";import"./Checkbox-KoJLRf2Y.js";import"./useValueChanged-DjExxn5b.js";import"./CollapsiblePanel-0-xMKkM2.js";import"./MultiColumnSortDialog-B_5NUOMJ.js";import"./MenuTrigger-DBLFLpoD.js";import"./CompositeItem-BDbWSvwq.js";import"./ToolbarRootContext-DNW6tFJb.js";import"./getDisabledMountTransitionStyles-1cZ4ebyu.js";import"./getPseudoElementBounds-COCrN9V9.js";import"./chevron-down-CXmtiTux.js";import"./index-DPV2fpq5.js";import"./error-COQAffC4.js";import"./BaseCbacBanner-PHPKD-SZ.js";import"./makeExternalStore-BpUsTfEq.js";import"./Tooltip-DHasjvAh.js";import"./PopoverPopup-DEz0V8jj.js";import"./debounce-CTk30Vh4.js";import"./useOsdkClient-rfrnBJy_.js";import"./tick-Cy96E2pR.js";import"./DropdownField-DNoVk62f.js";import"./isEqual-SHSvvOQ6.js";import"./withOsdkMetrics-D6W1KI3Y.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
