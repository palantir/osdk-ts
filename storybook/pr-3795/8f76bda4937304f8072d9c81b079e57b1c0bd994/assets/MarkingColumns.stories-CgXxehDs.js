import{f as p,j as e}from"./iframe-DyXeoGwO.js";import{O as i}from"./object-table-DE7Sj6ly.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D0PKvm90.js";import"./Table-BBQPugP-.js";import"./index-4Nqwzpvt.js";import"./Dialog-BQmjQitq.js";import"./cross-DTaTjAMm.js";import"./svgIconContainer-CCZ_a6ls.js";import"./useBaseUiId-9gwfWVJK.js";import"./InternalBackdrop-C4D46pwb.js";import"./composite-Yz-mnVT0.js";import"./index-CmKnfhTb.js";import"./index-Cxn1_saB.js";import"./index-DWWiASO0.js";import"./useEventCallback-CTiFkA1l.js";import"./SkeletonBar-DBij0pOc.js";import"./LoadingCell-BC3K9zFE.js";import"./ColumnConfigDialog-Cr3dELxt.js";import"./DraggableList-CzNfUaab.js";import"./search-Bb8GWAj-.js";import"./Input-Co_ozBSv.js";import"./useControlled-bhCIZURY.js";import"./isEqual-B29kTtlj.js";import"./isObject-DwlzPnNm.js";import"./Button-XiNhMhnD.js";import"./ActionButton-D7w_sh8l.js";import"./Checkbox-Bgz3S2Ey.js";import"./useValueChanged-BV0XQf5l.js";import"./CollapsiblePanel-CurIuftZ.js";import"./MultiColumnSortDialog-DXi1qJXQ.js";import"./MenuTrigger-B82V7p-S.js";import"./CompositeItem-D5uWMXLy.js";import"./ToolbarRootContext-NSuMsQk4.js";import"./getDisabledMountTransitionStyles-D3_etIrj.js";import"./getPseudoElementBounds-b8HcpjfA.js";import"./chevron-down-DlMyCTIX.js";import"./index-Btsx4sMw.js";import"./error-lrLb-CbY.js";import"./BaseCbacBanner-BbSgloor.js";import"./makeExternalStore-DcczwIex.js";import"./Tooltip-BNvyozEt.js";import"./PopoverPopup-CctUCuUJ.js";import"./toNumber-C_IGtKbm.js";import"./useOsdkClient-EbzbD1EX.js";import"./tick-BEKrCP22.js";import"./DropdownField-DvxFRQn7.js";import"./withOsdkMetrics-DX8ITSGp.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
