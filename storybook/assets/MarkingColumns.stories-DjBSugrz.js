import{f as p,j as e}from"./iframe-DCe6Mdm_.js";import{O as i}from"./object-table-CPHzaYxP.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BOJ4PoOi.js";import"./index-DEsJaMx2.js";import"./Dialog-DGwfutm-.js";import"./cross-CJsNmyRf.js";import"./svgIconContainer-DCGhfyJV.js";import"./useBaseUiId-BBf2jJQX.js";import"./InternalBackdrop-mRLBU6i0.js";import"./composite-D278LNPr.js";import"./index-w4e4JQ9Y.js";import"./index-DfEtL9_w.js";import"./index-D7eNBVK-.js";import"./useEventCallback-60DtBFBu.js";import"./SkeletonBar-lewdr35b.js";import"./LoadingCell-C7C7yuXh.js";import"./ColumnConfigDialog-ClE2fiGp.js";import"./DraggableList-DyLRFxn4.js";import"./search-i3wN8XPz.js";import"./Input-CexuDk3x.js";import"./useControlled-J08ycTXS.js";import"./Button-CMj35CzN.js";import"./small-cross-CKR9nVmW.js";import"./ActionButton-CxPFrJen.js";import"./Checkbox-CFvHGocX.js";import"./useValueChanged-CKSZHwBz.js";import"./CollapsiblePanel-wkW42G3A.js";import"./MultiColumnSortDialog-C8R_Sag-.js";import"./MenuTrigger-3KeKY9rT.js";import"./CompositeItem-QuRNq9IV.js";import"./ToolbarRootContext-Dg7t3l2c.js";import"./getDisabledMountTransitionStyles-90RwPzEQ.js";import"./getPseudoElementBounds-DUbM5yff.js";import"./chevron-down-1f-nO09j.js";import"./index-C2gC57rZ.js";import"./error-DDf8VeOI.js";import"./BaseCbacBanner-BsymODXL.js";import"./makeExternalStore-Z40vhwY9.js";import"./Tooltip-DL0JIbop.js";import"./PopoverPopup-453DLuVc.js";import"./toNumber-CNeIRQiS.js";import"./useOsdkClient-Ce4ACsVh.js";import"./tick-CmBo1oMB.js";import"./DropdownField-G_wbGU9M.js";import"./withOsdkMetrics-DaHbZvPF.js";const tr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const or=["MarkingColumns"];export{r as MarkingColumns,or as __namedExportsOrder,tr as default};
