import{f as n,j as t}from"./iframe-DheMeIUs.js";import{O as p}from"./object-table-DkMzRlZS.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DejDMXS6.js";import"./Table-CNf2img5.js";import"./index-OHHQoean.js";import"./Dialog-9xw5DOoR.js";import"./cross-YW3eipDg.js";import"./svgIconContainer-BfpvBKiY.js";import"./useBaseUiId-BMVLaYwE.js";import"./InternalBackdrop-BHSin-BR.js";import"./composite-CRzCQjwQ.js";import"./index-DGk7mLcT.js";import"./index-DzmaRJf-.js";import"./index-Bfz6UbdH.js";import"./useEventCallback-DJTsComn.js";import"./SkeletonBar-DbKQKEzA.js";import"./LoadingCell-C6mBXu0h.js";import"./ColumnConfigDialog-DTOJsH9s.js";import"./DraggableList-BuPjJK38.js";import"./search-zQu6az4w.js";import"./Input-CmhuZYKN.js";import"./useControlled-CoSVLB1k.js";import"./Button-Cef4KTgn.js";import"./small-cross-C8EsIZ47.js";import"./ActionButton-TG3Djeeu.js";import"./Checkbox-BnA1a0tB.js";import"./useValueChanged-DoxuVxBV.js";import"./CollapsiblePanel-DlkROZby.js";import"./MultiColumnSortDialog-CBuO5hhJ.js";import"./MenuTrigger-Dvjf4s6G.js";import"./CompositeItem-Wv9Mv1O5.js";import"./ToolbarRootContext-DlN8pce4.js";import"./getDisabledMountTransitionStyles-DYTcvg1Q.js";import"./getPseudoElementBounds-BSHKFqJK.js";import"./chevron-down-DZsxM3aG.js";import"./index-E7MP2WA9.js";import"./error-DaolRgcp.js";import"./BaseCbacBanner-DOgV5CL6.js";import"./makeExternalStore-CFMmgv0A.js";import"./Tooltip-aI3Es71V.js";import"./PopoverPopup-DeLTlB80.js";import"./toNumber-D5_mhlXq.js";import"./useOsdkClient-DhlRsN8T.js";import"./tick-DzpiFqqu.js";import"./DropdownField-Ch5nIzAy.js";import"./withOsdkMetrics-WdIR64Ii.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
