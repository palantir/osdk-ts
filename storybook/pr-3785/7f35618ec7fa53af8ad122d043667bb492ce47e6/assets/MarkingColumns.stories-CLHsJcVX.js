import{f as p,j as e}from"./iframe-iYC6vAB_.js";import{O as i}from"./object-table-B7XVPyF5.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Br5mua1v.js";import"./Table-rO63C4On.js";import"./index-DpOo1606.js";import"./Dialog-DW6s5zNf.js";import"./cross-BrbS3Icp.js";import"./svgIconContainer-D-ZasT0L.js";import"./useBaseUiId-B9eyS0D0.js";import"./InternalBackdrop-7PMuJeV1.js";import"./composite-v77FsArx.js";import"./index-QX0Uv_MK.js";import"./index-Dz2p1JfI.js";import"./index-DWu-8pfX.js";import"./useEventCallback-BGSAbgMA.js";import"./SkeletonBar-Ct_r8P3y.js";import"./LoadingCell-CizPVaWx.js";import"./ColumnConfigDialog-BVvYjqpJ.js";import"./DraggableList-BgljoLpl.js";import"./search-BDtw4QLY.js";import"./Input-BWavTvGX.js";import"./useControlled-C6rc4bi8.js";import"./isEqual-BvnyoED8.js";import"./isObject-DsmXICAg.js";import"./Button-CYu6aPyK.js";import"./ActionButton-XdMdSvPG.js";import"./Checkbox-ChuAqLvm.js";import"./useValueChanged-DBkFN2BU.js";import"./CollapsiblePanel-CoFoYim3.js";import"./MultiColumnSortDialog-DEkKEvGx.js";import"./MenuTrigger-CCgnUVbi.js";import"./CompositeItem-BMBEvSZ_.js";import"./ToolbarRootContext-DM4XCCSQ.js";import"./getDisabledMountTransitionStyles-BbjC2268.js";import"./getPseudoElementBounds-BDlA4Lv9.js";import"./chevron-down-BGy8KVlz.js";import"./index-_Y1lHNIx.js";import"./error-D4wx1m5V.js";import"./BaseCbacBanner-KGPFmWJj.js";import"./makeExternalStore-Ci4r-VA-.js";import"./Tooltip-DC0-jila.js";import"./PopoverPopup-DPOgv1BI.js";import"./toNumber-CGIbY5q9.js";import"./useOsdkClient-KtJ7es4q.js";import"./tick-qPYquHw-.js";import"./DropdownField-BQ1K9Kux.js";import"./withOsdkMetrics-qijyDy6X.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
