import{f as n,j as t}from"./iframe-fTHeOU9e.js";import{O as p}from"./object-table-Dym8qja4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DUeFVirN.js";import"./Table-BCrNAHbL.js";import"./index-DdvlSDKR.js";import"./Dialog-VwBVCFZg.js";import"./cross-CDJ6pmvk.js";import"./svgIconContainer-CGQ29GAT.js";import"./useBaseUiId-C39bGUma.js";import"./InternalBackdrop-CFCoWuZe.js";import"./composite-BZWXkR4S.js";import"./index-DAQi22VX.js";import"./index-BGF8JbBC.js";import"./index-BGXu_oGV.js";import"./useEventCallback-9Chjof9Q.js";import"./SkeletonBar-C9dAuAJ4.js";import"./LoadingCell-DEvGgJ3k.js";import"./ColumnConfigDialog-CFUeTZUZ.js";import"./DraggableList-BpoWCYp6.js";import"./search-BWFnuRRX.js";import"./Input-nZbFJSmM.js";import"./useControlled-DZWSLqlS.js";import"./Button-C0ysNRwo.js";import"./small-cross-CL83P-pb.js";import"./ActionButton-BdjV0oqp.js";import"./Checkbox-DISOU8aG.js";import"./useValueChanged-XxZh8nGk.js";import"./CollapsiblePanel-CWjr6mu_.js";import"./MultiColumnSortDialog-B4ThFdDR.js";import"./MenuTrigger-4nUVx1Lw.js";import"./CompositeItem-Zcd7z74I.js";import"./ToolbarRootContext-DrZLqzzc.js";import"./getDisabledMountTransitionStyles-SAu7DMSZ.js";import"./getPseudoElementBounds-C2NCzhcT.js";import"./chevron-down-nHkGM0vO.js";import"./index-81aw2kEM.js";import"./error-DnHe9Z1y.js";import"./BaseCbacBanner-BOjuSJoH.js";import"./makeExternalStore-B0j55Dv3.js";import"./Tooltip-Crw1rt1b.js";import"./PopoverPopup-nAEjZtV9.js";import"./toNumber-BHydonYR.js";import"./useOsdkClient-Cmk-sy2l.js";import"./tick-CT4UF6m_.js";import"./DropdownField-BroPNIO2.js";import"./withOsdkMetrics-Dub_hgsh.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
