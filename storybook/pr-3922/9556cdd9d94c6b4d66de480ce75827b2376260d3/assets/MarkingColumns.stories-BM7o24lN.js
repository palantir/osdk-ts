import{f as p,j as e}from"./iframe-uuw7htdR.js";import{O as i}from"./object-table-BRgDatzv.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DFPRxsEF.js";import"./Table-CwiVhKvo.js";import"./index-DyFb1z2g.js";import"./Dialog-DanhRYeN.js";import"./cross-BpDXlZPZ.js";import"./svgIconContainer-6mS79FyE.js";import"./useBaseUiId-BbWDT_DX.js";import"./InternalBackdrop-DSxt84yf.js";import"./composite-HcgVWLde.js";import"./index-KZpV_o_R.js";import"./index-DlhafJwL.js";import"./index-TikMIhJ1.js";import"./useEventCallback--9RyIE0g.js";import"./SkeletonBar-CV-e5B2s.js";import"./LoadingCell-BieQChy9.js";import"./ColumnConfigDialog-BYR7Bb37.js";import"./DraggableList-Dehj-1oF.js";import"./search-CPthhaeA.js";import"./Input-B4rchUKr.js";import"./useControlled-DWYS3HP4.js";import"./Button-iHaT6U_x.js";import"./small-cross-mMVM4Qt0.js";import"./ActionButton-BDVI-Ha2.js";import"./Checkbox-BDnIdw4Q.js";import"./useValueChanged-DTHX8REt.js";import"./CollapsiblePanel-BpCoh2zs.js";import"./MultiColumnSortDialog-Bu8iH6Vo.js";import"./MenuTrigger-Dn_zgl92.js";import"./CompositeItem-CIVV53Jd.js";import"./ToolbarRootContext-DWeXPuz4.js";import"./getDisabledMountTransitionStyles-BFWHvAfp.js";import"./getPseudoElementBounds-DslwyEnI.js";import"./chevron-down-Y-hj8f1V.js";import"./index-D-Jsk4o1.js";import"./error-CblFsZqu.js";import"./BaseCbacBanner-D3kXbQeQ.js";import"./makeExternalStore-DAuuY8fZ.js";import"./Tooltip-coVj6bPK.js";import"./PopoverPopup-BYNv-Qsz.js";import"./debounce-CZIJJWHa.js";import"./useOsdkClient-BtbsETzR.js";import"./tick-DSafz49U.js";import"./DropdownField-DXP5SNgq.js";import"./isEqual-Cr99_gpe.js";import"./withOsdkMetrics-CgSgSDy7.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
