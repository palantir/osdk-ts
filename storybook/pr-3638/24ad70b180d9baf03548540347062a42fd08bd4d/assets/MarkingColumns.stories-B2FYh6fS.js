import{f as n,j as t}from"./iframe-CoTMVfnL.js";import{O as p}from"./object-table-gO5wwtbS.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DjaNlnbw.js";import"./Table-CWk4BIH2.js";import"./index-Cg3w6apq.js";import"./Dialog-Gr6zfdlY.js";import"./cross-B-VkzZ5p.js";import"./svgIconContainer-BEAlQ9Ta.js";import"./useBaseUiId-DE_ED7pu.js";import"./InternalBackdrop-CJSdBfgT.js";import"./composite-Doaf3sfV.js";import"./index-Cv2u_PUJ.js";import"./index-CtMqyHGQ.js";import"./index--jGqzUYN.js";import"./useEventCallback-DlyUoXPD.js";import"./SkeletonBar-pMLUcq5p.js";import"./LoadingCell-DLc03_2i.js";import"./ColumnConfigDialog-JvvsJY8j.js";import"./DraggableList-UNspKl6W.js";import"./search-m-jhS3a1.js";import"./Input-BigwbId-.js";import"./useControlled-CauNHWaj.js";import"./Button-DPs9dOYS.js";import"./small-cross-Bwc8Yyhs.js";import"./ActionButton-5PLoorCC.js";import"./Checkbox-D1cj1OY5.js";import"./useValueChanged-BO2BvkRB.js";import"./CollapsiblePanel-CeFvaPH-.js";import"./MultiColumnSortDialog-CYmZPb4V.js";import"./MenuTrigger-BRAOvnPp.js";import"./CompositeItem-XC20fOJX.js";import"./ToolbarRootContext-HpQfuFqk.js";import"./getDisabledMountTransitionStyles-Bo4YuvGF.js";import"./getPseudoElementBounds-RQ-icijl.js";import"./chevron-down-D4ySI5Fm.js";import"./index-BLZOyItz.js";import"./error-Cyn8jfJA.js";import"./BaseCbacBanner-IVNEIdJJ.js";import"./makeExternalStore-C7b-POpQ.js";import"./Tooltip-BuI3GHG7.js";import"./PopoverPopup-BW-rU2mB.js";import"./toNumber-Dg6lHiyL.js";import"./useOsdkClient-DXx8gzpX.js";import"./tick-C8c96b7L.js";import"./DropdownField-SG8U3Bqq.js";import"./withOsdkMetrics-DhbHudqv.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
