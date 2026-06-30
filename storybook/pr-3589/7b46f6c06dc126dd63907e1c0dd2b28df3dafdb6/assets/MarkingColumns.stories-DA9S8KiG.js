import{f as n,j as t}from"./iframe-OmSGaNMj.js";import{O as p}from"./object-table-DGjPEUXD.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BxTFTclk.js";import"./Table-B0N7Xvm2.js";import"./index-Csst3lF4.js";import"./Dialog-BbaUQVhr.js";import"./cross-QB_I_1on.js";import"./svgIconContainer-B_tunsrW.js";import"./useBaseUiId-D4LJig10.js";import"./InternalBackdrop-BymBPe4c.js";import"./composite-DbP2kJ4g.js";import"./index-iJ6fimfD.js";import"./index-CBhglGWR.js";import"./index-Dr3lKNKa.js";import"./useEventCallback-BZU6NWuq.js";import"./SkeletonBar-DcZkeKhX.js";import"./LoadingCell-mRjrRfsk.js";import"./ColumnConfigDialog-CPe7NlBE.js";import"./DraggableList-8-Gvdbul.js";import"./search-ChqSwl5J.js";import"./Input-DhRElkh1.js";import"./useControlled-DDBgOSEI.js";import"./Button-D7UfI-My.js";import"./small-cross-Cr8GySmf.js";import"./ActionButton-CNpSKkLf.js";import"./Checkbox-C3Jd2cOX.js";import"./minus--kxQeT7R.js";import"./tick-6_fpN_ta.js";import"./useValueChanged-BmHgQi-w.js";import"./caret-down-DT_ffZip.js";import"./CollapsiblePanel-Ck2PIT9h.js";import"./MultiColumnSortDialog-BaeCB3D7.js";import"./MenuTrigger-S-xrKkIx.js";import"./CompositeItem-D9sf5ABe.js";import"./ToolbarRootContext-z4tZARu2.js";import"./getDisabledMountTransitionStyles-DBooNIRY.js";import"./getPseudoElementBounds-Bkn5qV2f.js";import"./chevron-down-Vm8dnS-v.js";import"./index-YTYrmtEq.js";import"./error-Dtvo8XX1.js";import"./BaseCbacBanner-DEd1ErA6.js";import"./makeExternalStore-DPvRmNE7.js";import"./Tooltip-BaCZcblq.js";import"./PopoverPopup-Gk_PS6w3.js";import"./toNumber-NVqzuEKT.js";import"./useOsdkClient-BNcQihPk.js";import"./DropdownField-BK60ilsJ.js";import"./withOsdkMetrics-CfiDkPmx.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const pr=["MarkingColumns"];export{r as MarkingColumns,pr as __namedExportsOrder,ir as default};
