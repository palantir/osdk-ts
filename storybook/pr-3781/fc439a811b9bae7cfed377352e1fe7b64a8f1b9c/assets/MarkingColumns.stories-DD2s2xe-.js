import{f as p,j as e}from"./iframe-B-JTL6t_.js";import{O as i}from"./object-table-FNJFEKEW.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DJ_hAMVg.js";import"./Table-Dg7aaslH.js";import"./index-BVBufCln.js";import"./Dialog-WOLPrhdU.js";import"./cross-3QOYISjX.js";import"./svgIconContainer-CiyL_qiy.js";import"./useBaseUiId-CUEnf41u.js";import"./InternalBackdrop-DjxTY25E.js";import"./composite-VcmuBxGV.js";import"./index-BA2SfPb-.js";import"./index-D9XzKchN.js";import"./index-VPeaEhQ2.js";import"./useEventCallback-ChtJeHxU.js";import"./SkeletonBar-DXHB1vtB.js";import"./LoadingCell-CPyzJPjv.js";import"./ColumnConfigDialog-DLNzwBWy.js";import"./DraggableList-C2RirL5h.js";import"./search-CU5MGZ4i.js";import"./Input-BaVlDPE6.js";import"./useControlled-ATGUHDV2.js";import"./isEqual-BSpE638U.js";import"./isObject-D90CYxLm.js";import"./Button-BlExWpZe.js";import"./ActionButton-L1IYyJOK.js";import"./Checkbox-Dr1WIlPV.js";import"./useValueChanged-ZCwCC8lo.js";import"./CollapsiblePanel-u1hLg1cv.js";import"./MultiColumnSortDialog-BU3jZhRe.js";import"./MenuTrigger-BaCTkUfs.js";import"./CompositeItem-DdntBB6P.js";import"./ToolbarRootContext-JmY-spmC.js";import"./getDisabledMountTransitionStyles-DZYVkC85.js";import"./getPseudoElementBounds-DswZmhB0.js";import"./chevron-down-BU52dZSy.js";import"./index-B57PfW1U.js";import"./error-CRuUFItf.js";import"./BaseCbacBanner-B6ISRA4O.js";import"./makeExternalStore-CdrDMmD2.js";import"./Tooltip-DgWDKpH1.js";import"./PopoverPopup-B7Sonn9Z.js";import"./toNumber-BYWFkk3t.js";import"./useOsdkClient-DcpOzUwu.js";import"./tick-BpWGEPsZ.js";import"./DropdownField--LFlJ0eP.js";import"./withOsdkMetrics-DmIxOOZN.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
