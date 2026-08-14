import{f as p,j as e}from"./iframe-vUigHa_R.js";import{O as i}from"./object-table-DGwgE45W.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-y4UwMW9A.js";import"./Table-C_3YDv9s.js";import"./index-D23DfkwD.js";import"./Dialog-DolWiMuS.js";import"./cross-4LijBnZ1.js";import"./svgIconContainer-B9kPsCJD.js";import"./useBaseUiId-B_Xr74Hh.js";import"./InternalBackdrop-wWroyLHr.js";import"./composite-B5_hjWtY.js";import"./index-M84BU-nW.js";import"./index-Bhvq4vDE.js";import"./index-BxUjSB8i.js";import"./useEventCallback-Df0Uw9vc.js";import"./SkeletonBar-w0o065Tr.js";import"./LoadingCell-BdCRpTF3.js";import"./ColumnConfigDialog-BpVTnDJZ.js";import"./DraggableList-CMXagTEH.js";import"./search-Du0pQ6pL.js";import"./Input-Ca0Q4NVt.js";import"./useControlled-7ZCh4KeY.js";import"./Button-B9LxW1HS.js";import"./small-cross-C7JwLoUr.js";import"./ActionButton-C98XASXJ.js";import"./Checkbox-BSEISqRZ.js";import"./useValueChanged-TqXgw_xj.js";import"./CollapsiblePanel-Dwu8tjuK.js";import"./MultiColumnSortDialog-Dvt2-75n.js";import"./MenuTrigger-CroGNNa4.js";import"./CompositeItem-N7hxfDs2.js";import"./ToolbarRootContext-hmB3Z2ti.js";import"./getDisabledMountTransitionStyles-FRxSr_Lg.js";import"./getPseudoElementBounds-BhLD9aHH.js";import"./chevron-down-Dk583wTX.js";import"./index-adjP72nR.js";import"./error-DkxPnmmW.js";import"./BaseCbacBanner-9KRL944L.js";import"./makeExternalStore-DzBHK_Wg.js";import"./Tooltip-TZFzUmuz.js";import"./PopoverPopup-B0Qqbtvx.js";import"./debounce-BibzVj7i.js";import"./useOsdkClient-oBZ78Nx2.js";import"./tick-Ci_qLFZl.js";import"./DropdownField-DfPQW3Lm.js";import"./isEqual-f0kfjnzR.js";import"./withOsdkMetrics-DO0ZWj9H.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
