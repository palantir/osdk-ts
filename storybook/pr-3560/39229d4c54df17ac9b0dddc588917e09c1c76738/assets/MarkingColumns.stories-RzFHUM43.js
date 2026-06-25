import{f as n,j as t}from"./iframe-Dzgb9b1-.js";import{O as p}from"./object-table-C1kU0QGM.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CbG1VhRv.js";import"./Table-L-QDJRVy.js";import"./index-NED9Vwxt.js";import"./Dialog-DWodKqHD.js";import"./cross-D1OuBKL6.js";import"./svgIconContainer-DyXJheXv.js";import"./useBaseUiId-D6C8k5wa.js";import"./InternalBackdrop-CupKk1O3.js";import"./composite-Cz6_F6ls.js";import"./index-DbNEzEJl.js";import"./index-0GDPtvZv.js";import"./index-DUCKQTFP.js";import"./useEventCallback-Bj48agJp.js";import"./SkeletonBar-C_Kr3WUD.js";import"./LoadingCell-BZFg8iPQ.js";import"./ColumnConfigDialog-DykImxfa.js";import"./DraggableList-vzCG3MSL.js";import"./Input-DJ1m8zCl.js";import"./useControlled-DXvvDkZD.js";import"./Button-hcuYcyHr.js";import"./small-cross-dZSvkkij.js";import"./ActionButton-DZXlBDpF.js";import"./Checkbox-BvCO0uKH.js";import"./minus-DSg_oN_F.js";import"./useValueChanged-DN9usCkI.js";import"./caret-down-CSSd01df.js";import"./CollapsiblePanel-DYiDFJ0N.js";import"./MultiColumnSortDialog-DsjclKiu.js";import"./MenuTrigger-D9DIg0L9.js";import"./CompositeItem-DyHZ2XIW.js";import"./ToolbarRootContext-DPXPQhuz.js";import"./getDisabledMountTransitionStyles-DKlLMLAY.js";import"./getPseudoElementBounds-indmkfuG.js";import"./chevron-down-CuqmBXPt.js";import"./index-CEeq6aeU.js";import"./error-Byo4SlGS.js";import"./BaseCbacBanner-CgocLwqB.js";import"./makeExternalStore-CSjcMWcm.js";import"./Tooltip-DNwJMFfF.js";import"./PopoverPopup-DnAseyQd.js";import"./toNumber-Dt97_Jp_.js";import"./useOsdkClient-Bv2vEbjP.js";import"./DropdownField-CDQUyNFu.js";import"./withOsdkMetrics-BNiLtR-B.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
