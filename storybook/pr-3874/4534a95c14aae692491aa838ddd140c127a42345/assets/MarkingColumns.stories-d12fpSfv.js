import{f as p,j as e}from"./iframe-Ba8PHYqF.js";import{O as i}from"./object-table-COs1RWZm.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-VSCHNqrc.js";import"./Table-BLGSYdXP.js";import"./index-CYz5sxm-.js";import"./Dialog-CW58EFG4.js";import"./cross-BMuQzm1w.js";import"./svgIconContainer-D3Vq6lhO.js";import"./useBaseUiId-CM4KZ4gx.js";import"./InternalBackdrop-C0Iw5WBU.js";import"./composite-C7C0lYaE.js";import"./index-7A66RV6v.js";import"./index-BH--vJui.js";import"./index-BgRDPYQ2.js";import"./useEventCallback-CCCfMMAc.js";import"./SkeletonBar-rCpEJ8p6.js";import"./LoadingCell-Bas8m6yo.js";import"./ColumnConfigDialog-DiDAecuK.js";import"./DraggableList-C33e8VbS.js";import"./search-CSidIbdR.js";import"./Input-DxXWxw4L.js";import"./useControlled-df092o7d.js";import"./Button-H-kX3WhQ.js";import"./small-cross-yRw1vW_l.js";import"./ActionButton-DLThXdQb.js";import"./Checkbox-cgSWlE0O.js";import"./useValueChanged-CAvtLgMA.js";import"./CollapsiblePanel-BpVH8rXR.js";import"./MultiColumnSortDialog-AD6pTiLp.js";import"./MenuTrigger-CIm9vomN.js";import"./CompositeItem-D3oTZHnf.js";import"./ToolbarRootContext-ClpWLSom.js";import"./getDisabledMountTransitionStyles-BTdqaYwA.js";import"./getPseudoElementBounds-vfCPoH5N.js";import"./chevron-down-DcdnJMhC.js";import"./index-CqwCmP3l.js";import"./error-BJ5r8zIU.js";import"./BaseCbacBanner-CC5TBrfI.js";import"./makeExternalStore-y72CzQ6c.js";import"./Tooltip-DxDRfVS3.js";import"./PopoverPopup-7FW94aDk.js";import"./debounce-BQHT7fzq.js";import"./useOsdkClient-C-NQgoaU.js";import"./tick-CBriDvBS.js";import"./DropdownField-Dvxz-g49.js";import"./isEqual-0UHk7APa.js";import"./withOsdkMetrics-5o3v7rv4.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
