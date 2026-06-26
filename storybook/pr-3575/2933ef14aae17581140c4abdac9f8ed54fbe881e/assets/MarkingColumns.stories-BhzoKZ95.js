import{f as n,j as t}from"./iframe-BtZWjUqs.js";import{O as p}from"./object-table-CFbIyLsH.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dmj2NsCZ.js";import"./Table-HEpjqX60.js";import"./index-ldha3fmM.js";import"./Dialog-DqgubtM6.js";import"./cross-CxvnJrvU.js";import"./svgIconContainer-CiFBfueQ.js";import"./useBaseUiId-Dz-x0qpO.js";import"./InternalBackdrop-B3IZtM0t.js";import"./composite-C6wkvaKL.js";import"./index-Uj3vbn94.js";import"./index-CY6yU0Z6.js";import"./index-CcKsQYah.js";import"./useEventCallback-B8yxPemw.js";import"./SkeletonBar-pLZglERa.js";import"./LoadingCell-B4eaJgLU.js";import"./ColumnConfigDialog-sNt2GEY5.js";import"./DraggableList-D-Blf8vS.js";import"./Input-Bzk3p84E.js";import"./useControlled-CWWAWSOd.js";import"./Button-Bqqo-hFp.js";import"./small-cross-D5tsjN2D.js";import"./ActionButton-CFtUbLAV.js";import"./Checkbox-DdV_bnun.js";import"./minus-B0K6RA_m.js";import"./useValueChanged-41lo_r1i.js";import"./caret-down-ao7-g-HQ.js";import"./CollapsiblePanel-BPJs_wA4.js";import"./MultiColumnSortDialog-DxRtjeTh.js";import"./MenuTrigger-BYrFkVdD.js";import"./CompositeItem-DjVj-MDz.js";import"./ToolbarRootContext-CcKTxivH.js";import"./getDisabledMountTransitionStyles-Ctp0OdBL.js";import"./getPseudoElementBounds-DWi6yCTk.js";import"./chevron-down-vr0QYyBS.js";import"./index-2cfK-_Ux.js";import"./error-C1YcRusv.js";import"./BaseCbacBanner-CNfO9VMQ.js";import"./makeExternalStore-DqsgJNUf.js";import"./Tooltip-CTKtHT24.js";import"./PopoverPopup-DI0ZnRiM.js";import"./toNumber-BqABGnjx.js";import"./useOsdkClient-CdyghOJJ.js";import"./DropdownField-kHupWUoq.js";import"./withOsdkMetrics-e6sLi_Zx.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
