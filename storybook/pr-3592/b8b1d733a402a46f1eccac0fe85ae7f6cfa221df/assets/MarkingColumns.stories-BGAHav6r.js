import{f as n,j as t}from"./iframe-hi2BxIHC.js";import{O as p}from"./object-table-CaxRUess.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ZxDKr6DS.js";import"./Table-B4ikg0No.js";import"./index-CFxCkbUH.js";import"./Dialog-CZSLgWq5.js";import"./cross-DvXT3q5F.js";import"./svgIconContainer-C-L2PUSb.js";import"./useBaseUiId-B_tYD7-Z.js";import"./InternalBackdrop-DodjeV4Y.js";import"./composite-8iwrm9g9.js";import"./index-3yirHU9f.js";import"./index-DXA0rk4Q.js";import"./index-C8zfo1KW.js";import"./useEventCallback-D-HeK37x.js";import"./SkeletonBar-5fwFIgtZ.js";import"./LoadingCell-B2cG7tbJ.js";import"./ColumnConfigDialog-BdxlV0hM.js";import"./DraggableList-Cyv_pL3S.js";import"./search-DtNWi_d_.js";import"./Input-B7tYC-Xs.js";import"./useControlled-CNI1KcEl.js";import"./Button-B7N2mn7E.js";import"./small-cross-DrHmdgQz.js";import"./ActionButton-CMlqza77.js";import"./Checkbox-B_-wNeZS.js";import"./minus-BA9uP_V1.js";import"./tick-v-1dcGK3.js";import"./useValueChanged-Bc5OIPmz.js";import"./caret-down-b8yxO5fr.js";import"./CollapsiblePanel-xjZKRee7.js";import"./MultiColumnSortDialog-DLJ3MY9r.js";import"./MenuTrigger-CtCPxe0t.js";import"./CompositeItem-B5-Du_uy.js";import"./ToolbarRootContext-g85W73-P.js";import"./getDisabledMountTransitionStyles-DaaCp0k2.js";import"./getPseudoElementBounds-_VeLeb6E.js";import"./chevron-down-C_Gvrc9A.js";import"./index-C2kzkxMt.js";import"./error-DdENDWQJ.js";import"./BaseCbacBanner-6HTBfEP7.js";import"./makeExternalStore-De-jpnE7.js";import"./Tooltip-G2W5efxV.js";import"./PopoverPopup-BorbZngs.js";import"./toNumber-CqVRRf4k.js";import"./useOsdkClient-CYo3pg9m.js";import"./DropdownField-B9IOAfSv.js";import"./withOsdkMetrics-yW5Lus8o.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
