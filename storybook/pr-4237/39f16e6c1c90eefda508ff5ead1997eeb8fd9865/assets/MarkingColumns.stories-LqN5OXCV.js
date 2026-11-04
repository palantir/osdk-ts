import{f as p,j as e}from"./iframe-BVgEXOM0.js";import{O as i}from"./object-table-zuApkwGh.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CactQ6nb.js";import"./Table-bMNODVxc.js";import"./index-8aR2Ioa8.js";import"./Dialog-DO5HiN2t.js";import"./cross-D1T8VNxn.js";import"./svgIconContainer-CDZ82EYf.js";import"./useBaseUiId-D5ZxfDH3.js";import"./InternalBackdrop-Bh6vJ7HZ.js";import"./composite-CZzw119W.js";import"./index-DQzPD5cl.js";import"./index-DwR3j9NI.js";import"./index-DwnOMM-g.js";import"./useEventCallback-DvGf3XkN.js";import"./SkeletonBar-HB-1xzv6.js";import"./LoadingCell-C1lwI8Pi.js";import"./ColumnConfigDialog-BXLGpEZI.js";import"./DraggableList-P1u1yq0T.js";import"./search-CxzK3q4z.js";import"./Input-odv82aFx.js";import"./useControlled-BIcpHOeT.js";import"./Button-WKXKQ1tY.js";import"./small-cross-BdrFqIIe.js";import"./ActionButton-CfAm7XVr.js";import"./Checkbox-2dZaRhmt.js";import"./useValueChanged-SWdGVnir.js";import"./CollapsiblePanel-C2JZHC-G.js";import"./MultiColumnSortDialog-B_TiCVPa.js";import"./MenuTrigger-CLS7ZbZ1.js";import"./CompositeItem-DmERPWlX.js";import"./ToolbarRootContext-Cn0yRgUL.js";import"./getDisabledMountTransitionStyles-DQpr4Tpg.js";import"./getPseudoElementBounds-Ba7Ut1tY.js";import"./chevron-down-CrDZIThJ.js";import"./index-BfuXcFcC.js";import"./error-B5TbSbWu.js";import"./BaseCbacBanner-GORXksxW.js";import"./makeExternalStore-aQWgWKmj.js";import"./Tooltip-D3jGIJfs.js";import"./PopoverPopup-BcZfo8D_.js";import"./debounce-BtRqgR_f.js";import"./useOsdkClient-BrFIlZ12.js";import"./tick-CiLURy-F.js";import"./DropdownField-DQ-dTX_I.js";import"./isEqual-BCY0XfFZ.js";import"./withOsdkMetrics-C2GPaHST.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
