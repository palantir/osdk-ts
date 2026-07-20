import{f as p,j as e}from"./iframe-DJo2MCHb.js";import{O as i}from"./object-table-D3Rsx6vh.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BhQpgkSD.js";import"./Table-knbz03jb.js";import"./index-yUhc8QiX.js";import"./Dialog-MLBlvFd6.js";import"./cross-DyQlON8o.js";import"./svgIconContainer-Dtbw7CD1.js";import"./useBaseUiId-CyBb3Nkr.js";import"./InternalBackdrop-D_K-1bCj.js";import"./composite-Cixp0KC7.js";import"./index-DY7_DYP1.js";import"./index-lXriiM9_.js";import"./index-KK-zW0ui.js";import"./useEventCallback-E0wk7xBP.js";import"./SkeletonBar-CIia9w-l.js";import"./LoadingCell-B5klUs5w.js";import"./ColumnConfigDialog-DZN4aqsV.js";import"./DraggableList-R4X4NdTq.js";import"./search-BzqLxMDC.js";import"./Input-CGa0Q2Ds.js";import"./useControlled-DORsT8QV.js";import"./isEqual-Cu65TC1l.js";import"./isObject-Cvu_Zm-T.js";import"./Button-B2BrFzwV.js";import"./ActionButton-B9Uudm2A.js";import"./Checkbox-DlKpTMkl.js";import"./useValueChanged-It76_3yD.js";import"./CollapsiblePanel-75oCMrp5.js";import"./MultiColumnSortDialog-23SFtrQf.js";import"./MenuTrigger-JXDNyUgL.js";import"./CompositeItem-B7jXrFss.js";import"./ToolbarRootContext-CJzpUse0.js";import"./getDisabledMountTransitionStyles-uf8By5tA.js";import"./getPseudoElementBounds-CQUwsekH.js";import"./chevron-down-o2eoXyoD.js";import"./index-Bmmqp1u6.js";import"./error-D1KI60yM.js";import"./BaseCbacBanner-BWgvDcfL.js";import"./makeExternalStore-DhsEMGLC.js";import"./Tooltip-DbOMqHF4.js";import"./PopoverPopup-DTG3XaWZ.js";import"./toNumber-Br4WCnQ1.js";import"./useOsdkClient-Cx8Bbvv9.js";import"./tick-DXFPGJrk.js";import"./DropdownField-Dx72gqoG.js";import"./withOsdkMetrics-DhezUvH0.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
