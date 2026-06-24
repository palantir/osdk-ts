import{f as n,j as t}from"./iframe-CuyoQOya.js";import{O as p}from"./object-table-BXhJ-i5l.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-YTbMogRT.js";import"./Table-BB5lxe1A.js";import"./index-BXWFq-Y-.js";import"./Dialog-BI9qN1z4.js";import"./cross-BtX7Kd8h.js";import"./svgIconContainer-BcEc_lav.js";import"./useBaseUiId-CISyD09v.js";import"./InternalBackdrop-Cp4SDgr2.js";import"./composite-C49KSaGC.js";import"./index-DPX2jSuM.js";import"./index-D4LuZEJc.js";import"./index-BocRgb_c.js";import"./useEventCallback-BpfebJex.js";import"./SkeletonBar-CGsXpy_m.js";import"./LoadingCell-CiRLUPMJ.js";import"./ColumnConfigDialog-kZH-tfrj.js";import"./DraggableList-DioWfgKH.js";import"./Input-BkA0C2c2.js";import"./useControlled-CEiAmGGr.js";import"./Button-BWnh3zgl.js";import"./small-cross-YMZ1bZZe.js";import"./ActionButton-B-DnSlXZ.js";import"./Checkbox-C3GGZkPO.js";import"./minus-C5-g-Rkr.js";import"./useValueChanged-Ca3WkigY.js";import"./caret-down-BL7WUeJj.js";import"./CollapsiblePanel-CEH0zRiP.js";import"./MultiColumnSortDialog-EJ4pacX_.js";import"./MenuTrigger-DQWK2n6D.js";import"./CompositeItem-U_GX9thw.js";import"./ToolbarRootContext-B531Nv74.js";import"./getDisabledMountTransitionStyles-Z8Z1Wksz.js";import"./getPseudoElementBounds-UZAVQ-D6.js";import"./chevron-down-Bn6S65PF.js";import"./index-pATCxWSy.js";import"./error-CMdxBd1R.js";import"./BaseCbacBanner-DjrW_pfk.js";import"./makeExternalStore-BF3EknRt.js";import"./Tooltip-DplMO14m.js";import"./PopoverPopup-BqXRzW4i.js";import"./toNumber-K0t9oDlb.js";import"./useOsdkClient-CjlSRjX1.js";import"./DropdownField-B-IeJ3Xq.js";import"./withOsdkMetrics-CuQYuHx_.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
