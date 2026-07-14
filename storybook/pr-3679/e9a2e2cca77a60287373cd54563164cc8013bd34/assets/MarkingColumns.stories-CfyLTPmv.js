import{f as n,j as t}from"./iframe-DNMmx6Si.js";import{O as p}from"./object-table-BCbjG1NP.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B1C098Cz.js";import"./Table-BI3fvush.js";import"./index-BZhLFndM.js";import"./Dialog-YBczE7Zm.js";import"./cross-CeSpPuQx.js";import"./svgIconContainer-D2PwOoz0.js";import"./useBaseUiId-DtSuWrMk.js";import"./InternalBackdrop-DdezDSJ3.js";import"./composite-DB3ZBswo.js";import"./index-Cb0pqKCg.js";import"./index-D64uu6P9.js";import"./index-BlbLf2zk.js";import"./useEventCallback-B4wWhErR.js";import"./SkeletonBar-CH5knA39.js";import"./LoadingCell-K0UorHcp.js";import"./ColumnConfigDialog-CFRJwEy5.js";import"./DraggableList-Do7vcbTu.js";import"./search-pbEf8tls.js";import"./Input-cuE84c5_.js";import"./useControlled-DrbXtnkc.js";import"./Button-ByNN6eB9.js";import"./small-cross-C2KoECcU.js";import"./ActionButton-bmeoJsTZ.js";import"./Checkbox-CF78pZX1.js";import"./useValueChanged-DyHA2FHs.js";import"./CollapsiblePanel-DYXnJcU-.js";import"./MultiColumnSortDialog-DOyGp2Hm.js";import"./MenuTrigger-BQIV4JAE.js";import"./CompositeItem-CHAE4geL.js";import"./ToolbarRootContext-BNfRMznZ.js";import"./getDisabledMountTransitionStyles-Dx2i30_8.js";import"./getPseudoElementBounds-Brlm4ojf.js";import"./chevron-down-BmnrMR4d.js";import"./index-iN6-cvPZ.js";import"./error-jHk7Y2QZ.js";import"./BaseCbacBanner-DDyrjfEI.js";import"./makeExternalStore-DdKyYX8n.js";import"./Tooltip-CQ7AMrjx.js";import"./PopoverPopup-saHPRXQ1.js";import"./toNumber-CzLB998f.js";import"./useOsdkClient-B68nDgVp.js";import"./tick-CrV5KhvA.js";import"./DropdownField-CRnI2lv3.js";import"./withOsdkMetrics-C3JDtrZP.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
