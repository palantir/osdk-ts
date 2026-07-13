import{f as n,j as t}from"./iframe-BYDd13Gq.js";import{O as p}from"./object-table-xc7T01Ic.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CRTbv9f1.js";import"./Table-C-avvTTV.js";import"./index-DAt4uNWn.js";import"./Dialog-yH7vrVsb.js";import"./cross-BwMj07Lv.js";import"./svgIconContainer-BvVBQY0M.js";import"./useBaseUiId-B7zoNiex.js";import"./InternalBackdrop-CYDSMLn5.js";import"./composite-DAzdDn9M.js";import"./index-C44qydix.js";import"./index-BehHqcOB.js";import"./index-YJP14mKS.js";import"./useEventCallback-3HnlVv7V.js";import"./SkeletonBar-Cr4t3zot.js";import"./LoadingCell-CC7RjzOB.js";import"./ColumnConfigDialog-CdZ2G-Py.js";import"./DraggableList-i2QUxD7v.js";import"./search-BLYcXVNY.js";import"./Input-BTOVlKzv.js";import"./useControlled-DKVNuIG7.js";import"./Button-DogeI-Te.js";import"./small-cross-BJ1ppg1-.js";import"./ActionButton-DhTO3bd9.js";import"./Checkbox-Dg7oBAvB.js";import"./useValueChanged-DF_5t-7A.js";import"./CollapsiblePanel-Cs6zvV7b.js";import"./MultiColumnSortDialog-b9rhvIN-.js";import"./MenuTrigger-Cnsiu6Oz.js";import"./CompositeItem-CxIk05xP.js";import"./ToolbarRootContext-BFhORt-N.js";import"./getDisabledMountTransitionStyles-B0oFx-D2.js";import"./getPseudoElementBounds-BayHO6oP.js";import"./chevron-down-CMlArBeW.js";import"./index-Cmm7LrQU.js";import"./error-BO5I4Xtc.js";import"./BaseCbacBanner-B1mTBqXk.js";import"./makeExternalStore-DK8pW9uJ.js";import"./Tooltip-KwnH0SLv.js";import"./PopoverPopup-OLLvAMMB.js";import"./toNumber-DuVnTaon.js";import"./useOsdkClient-C1S8vH9b.js";import"./tick-YbsD-Kix.js";import"./DropdownField-D-9FWwiH.js";import"./withOsdkMetrics-B8xuGbT0.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
