import{f as p,j as e}from"./iframe-Biji2bf1.js";import{O as i}from"./object-table-DUZsbd2A.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BnQD_pUs.js";import"./Table-CpIpVsLD.js";import"./index-DfdB1ttn.js";import"./Dialog-B73FG_lW.js";import"./cross-DgO8Y3SG.js";import"./svgIconContainer-CtuHzH_7.js";import"./useBaseUiId-D8agI47X.js";import"./InternalBackdrop-Cur7vZgT.js";import"./composite-DTVuKyBl.js";import"./index-BcRJjTzj.js";import"./index-BBv7G2Gz.js";import"./index-DuyzOau4.js";import"./useEventCallback-BuGz6aEK.js";import"./SkeletonBar-prYHuNvB.js";import"./LoadingCell-BMxleUkf.js";import"./ColumnConfigDialog-BrIv1Rnf.js";import"./DraggableList-CNguQZ2s.js";import"./search-CLwp4qIO.js";import"./Input-Ka8u0CD4.js";import"./useControlled-CvQogkf4.js";import"./Button-B3fK-m0j.js";import"./small-cross-BJ_whcm4.js";import"./ActionButton-D5GVqQ0r.js";import"./Checkbox-Bil92OSh.js";import"./useValueChanged-CgmTK9yE.js";import"./CollapsiblePanel-Q8df4Rvk.js";import"./MultiColumnSortDialog-exGQm7Ht.js";import"./MenuTrigger-DSyx9jXw.js";import"./CompositeItem-D3laoAWw.js";import"./ToolbarRootContext-8ykIWAUV.js";import"./getDisabledMountTransitionStyles-uiKLVkrc.js";import"./getPseudoElementBounds-CuRI4A7q.js";import"./chevron-down-xdyo5QmP.js";import"./index-CwIIM57l.js";import"./error-AacONtzC.js";import"./BaseCbacBanner-BSXqmrpj.js";import"./makeExternalStore-Wt3R0a85.js";import"./Tooltip-Gl-FzrVH.js";import"./PopoverPopup-BgQoU5Ch.js";import"./debounce-CMsRCK9t.js";import"./useOsdkClient-iyUYhFeG.js";import"./tick-B0yPEej0.js";import"./DropdownField-BMpZFA_1.js";import"./isEqual-CbbNTxgy.js";import"./withOsdkMetrics-BRBNDhHT.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
