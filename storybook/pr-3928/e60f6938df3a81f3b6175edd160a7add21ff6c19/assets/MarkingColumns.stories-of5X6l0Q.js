import{f as p,j as e}from"./iframe-DWCUNAgH.js";import{O as i}from"./object-table-yHUfiZrX.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CllRkgj6.js";import"./Table-DehLudrN.js";import"./index-vPfXSe3i.js";import"./Dialog-C5rNgLZT.js";import"./cross-s4mYc0O3.js";import"./svgIconContainer-BHOQdzaM.js";import"./useBaseUiId-CYOEG7DI.js";import"./InternalBackdrop-CF8Jd0mr.js";import"./composite-DZBVWi3t.js";import"./index-Qe8PCUYJ.js";import"./index-cPCy3bFL.js";import"./index-BUhcus0w.js";import"./useEventCallback-D9midYVp.js";import"./SkeletonBar-DpVscZFf.js";import"./LoadingCell-CG6tkgGP.js";import"./ColumnConfigDialog-DBA6pxoY.js";import"./DraggableList-C-ti_Lyt.js";import"./search-D7gKGmcx.js";import"./Input-BMNb_hi9.js";import"./useControlled-Ba-PlL56.js";import"./Button-D7K0Sf4T.js";import"./small-cross-BlnHnuCl.js";import"./ActionButton-CV61KAz2.js";import"./Checkbox-qL_08NUu.js";import"./useValueChanged-C3GY74Cc.js";import"./CollapsiblePanel-Cz1uHs6i.js";import"./MultiColumnSortDialog-xUJHNI2I.js";import"./MenuTrigger-BcMsSN9G.js";import"./CompositeItem-CVjfjLok.js";import"./ToolbarRootContext-cpZFd1K3.js";import"./getDisabledMountTransitionStyles-CtOsq3X_.js";import"./getPseudoElementBounds-BdBOEd_H.js";import"./chevron-down-Bsil1jJ0.js";import"./index-D14ZBxmP.js";import"./error-_xKRYfae.js";import"./BaseCbacBanner-Y0_vxP-R.js";import"./makeExternalStore-C7M61MFA.js";import"./Tooltip-BBvR4voq.js";import"./PopoverPopup-BRoJH9FS.js";import"./debounce-CiX1XvrO.js";import"./useOsdkClient-CIZUCnSq.js";import"./tick-DpXneqLq.js";import"./DropdownField-Br1gAOJ2.js";import"./isEqual-Dp95ehwz.js";import"./withOsdkMetrics-DUDoeULv.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
