import{f as n,j as t}from"./iframe-Cm_EHC51.js";import{O as p}from"./object-table-BNy22QzH.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-OCJMeOK-.js";import"./Table-VCR_hh98.js";import"./index-BXlCiAkj.js";import"./Dialog-HsgB1PId.js";import"./cross-BRQRT10E.js";import"./svgIconContainer-y4xcTkAj.js";import"./useBaseUiId-D1vJVKRR.js";import"./InternalBackdrop-DcvVideg.js";import"./composite-CVdzW3sc.js";import"./index-R28diiJ3.js";import"./index-ZKEi5Emz.js";import"./index-ByT02Su5.js";import"./useEventCallback-BY5dWLi4.js";import"./SkeletonBar-DG-TqzL-.js";import"./LoadingCell-DeTmq0lx.js";import"./ColumnConfigDialog-B1HCbaMR.js";import"./DraggableList-CI9PXc0s.js";import"./search-30yIUM2-.js";import"./Input-zz3lOutb.js";import"./useControlled-C-jSpOYm.js";import"./Button-DIH5t_0T.js";import"./small-cross-CoR6pbPL.js";import"./ActionButton-CBsSZfFl.js";import"./Checkbox-BQC_tjU7.js";import"./useValueChanged-6788JLEw.js";import"./CollapsiblePanel-C3IFR7gk.js";import"./MultiColumnSortDialog-B40kjDTS.js";import"./MenuTrigger-Bka2fEUT.js";import"./CompositeItem-Cx7vCAIi.js";import"./ToolbarRootContext-49KFllv_.js";import"./getDisabledMountTransitionStyles-Dyoi0zLm.js";import"./getPseudoElementBounds-DxDUEDyk.js";import"./chevron-down-BSxwOLLx.js";import"./index-ClDcmJ32.js";import"./error-BjF7Kl8A.js";import"./BaseCbacBanner-C_3U-ziW.js";import"./makeExternalStore-BGELqknt.js";import"./Tooltip-CsJDwwY8.js";import"./PopoverPopup-C1-oKCXt.js";import"./toNumber-CQc9hUcP.js";import"./useOsdkClient-CAl79kSD.js";import"./tick-D41Q0Ug7.js";import"./DropdownField-Bdy406Oh.js";import"./withOsdkMetrics-fCWeer_z.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
