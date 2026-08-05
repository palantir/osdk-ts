import{f as p,j as e}from"./iframe-BRmpzCZE.js";import{O as i}from"./object-table-B4KSVeZe.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B5zwBkL_.js";import"./Table-DOE4ka-3.js";import"./index-DTo1AYJc.js";import"./Dialog-EXkgzOFJ.js";import"./cross-BrjpUCyw.js";import"./svgIconContainer-ClB0EAWF.js";import"./useBaseUiId-BWWrNU9X.js";import"./InternalBackdrop-BTcS2Uf7.js";import"./composite-BoPdrtMz.js";import"./index-CNCITnU0.js";import"./index-CuSmUnvX.js";import"./index-ypap7acm.js";import"./useEventCallback-C6Mswr5F.js";import"./SkeletonBar-DQU-rI3B.js";import"./LoadingCell-C1LUUzjB.js";import"./ColumnConfigDialog-xNqG-w0E.js";import"./DraggableList-DAZdpPIL.js";import"./search-QrPcr5Jb.js";import"./Input-DevgbnOf.js";import"./useControlled-0nxGMda2.js";import"./isEqual-DWFHPcMG.js";import"./isObject-89n0janb.js";import"./Button-D9yfxBKS.js";import"./ActionButton-B_mAo__X.js";import"./Checkbox-G_ri2pRu.js";import"./useValueChanged-HLDrTK4G.js";import"./CollapsiblePanel-BazzP6aN.js";import"./MultiColumnSortDialog-CG_tkOTM.js";import"./MenuTrigger-BLByaRZe.js";import"./CompositeItem-B9M_u-lg.js";import"./ToolbarRootContext-Czmaa9ZO.js";import"./getDisabledMountTransitionStyles-YpX2H8HK.js";import"./getPseudoElementBounds-56O41HH1.js";import"./chevron-down-9MEkRqsE.js";import"./index-DyDKdM2i.js";import"./error-Cbn_oEWX.js";import"./BaseCbacBanner-DLkybrgv.js";import"./makeExternalStore-CeZQOp3r.js";import"./Tooltip-epWC9lqd.js";import"./PopoverPopup-DjFxDqyY.js";import"./toNumber-DWulGXhk.js";import"./useOsdkClient-BZ8Rgv97.js";import"./tick-Cxqoq0Gn.js";import"./DropdownField-DpN0Y8uc.js";import"./withOsdkMetrics-CD_RD48C.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
