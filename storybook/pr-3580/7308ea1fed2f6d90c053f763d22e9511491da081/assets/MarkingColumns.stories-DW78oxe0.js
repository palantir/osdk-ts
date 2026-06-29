import{f as n,j as t}from"./iframe-BhaVgwJF.js";import{O as p}from"./object-table-DiW7p_QI.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DqVS_s6V.js";import"./Table-B1k4FsmT.js";import"./index-BDOsboJF.js";import"./Dialog-H8B49iIP.js";import"./cross-V5vChtTh.js";import"./svgIconContainer-DakBFGqu.js";import"./useBaseUiId-B92PsFWM.js";import"./InternalBackdrop-DpHzvy6t.js";import"./composite-Jl80SJua.js";import"./index-CdWjQmdV.js";import"./index-Cebglo5K.js";import"./index-Df3mUQeh.js";import"./useEventCallback-Dn3j0dYV.js";import"./SkeletonBar-lgQMBjwx.js";import"./LoadingCell-BZugiiuW.js";import"./ColumnConfigDialog-8IaAsnfe.js";import"./DraggableList-MSy0AsOL.js";import"./Input-AvHqkE0x.js";import"./useControlled-1bY20Uqz.js";import"./Button-CrvtM6Ii.js";import"./small-cross-CpbviC3G.js";import"./ActionButton-C64JpTFY.js";import"./Checkbox-CVGL6pox.js";import"./minus-DChzWoWb.js";import"./useValueChanged-CFfSnGFn.js";import"./caret-down-ulVhd9XZ.js";import"./CollapsiblePanel-C0hbQlI6.js";import"./MultiColumnSortDialog-CBEfkC1v.js";import"./MenuTrigger-t9G2SONU.js";import"./CompositeItem-HgTZsmh3.js";import"./ToolbarRootContext-CmBg7Gns.js";import"./getDisabledMountTransitionStyles-DuAiKipC.js";import"./getPseudoElementBounds-lwl1_POG.js";import"./chevron-down-DWlReEPz.js";import"./index-DZ1wXuHu.js";import"./error-CiNhj8KY.js";import"./BaseCbacBanner-CkQW8Gd9.js";import"./makeExternalStore-CHUl6C6O.js";import"./Tooltip-CaeN1XIx.js";import"./PopoverPopup-CQVRZxHb.js";import"./toNumber-Dm97kWV4.js";import"./useOsdkClient-C6dw0e9u.js";import"./DropdownField-BBd_JPfq.js";import"./withOsdkMetrics-B6RafAIK.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const er=["MarkingColumns"];export{r as MarkingColumns,er as __namedExportsOrder,or as default};
