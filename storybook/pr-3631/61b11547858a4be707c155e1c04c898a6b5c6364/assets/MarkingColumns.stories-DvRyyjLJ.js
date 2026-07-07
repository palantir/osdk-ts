import{f as n,j as t}from"./iframe-DacBaETh.js";import{O as p}from"./object-table-DTffgWOc.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-0LZOEI6c.js";import"./Table-C4awNQst.js";import"./index-BLI3b5Ls.js";import"./Dialog-B4ulVYRG.js";import"./cross-Cd9V6GlP.js";import"./svgIconContainer-D-FnRMc4.js";import"./useBaseUiId-DJdCXPOy.js";import"./InternalBackdrop-Dduq1D9s.js";import"./composite-B7s-sf7Y.js";import"./index-CeSgy9Z5.js";import"./index-BZzzpwcb.js";import"./index-B-eDlzeR.js";import"./useEventCallback-fg8QomR5.js";import"./SkeletonBar-D9tVPT8w.js";import"./LoadingCell-B6O-G6BN.js";import"./ColumnConfigDialog-op9dWZ3J.js";import"./DraggableList-BtnNIYbu.js";import"./search-B7TSHRZ6.js";import"./Input-DcSiOxgm.js";import"./useControlled-C21yq5Uu.js";import"./Button-EGX1Ztue.js";import"./small-cross-CeXztEdK.js";import"./ActionButton-C38IQUcx.js";import"./Checkbox-KvMb-L2-.js";import"./useValueChanged-CcYchfZ_.js";import"./CollapsiblePanel-Bow3We0M.js";import"./MultiColumnSortDialog-BeDkVivd.js";import"./MenuTrigger-ChVofddd.js";import"./CompositeItem-DSjuMmIy.js";import"./ToolbarRootContext-BB7Ifw49.js";import"./getDisabledMountTransitionStyles-DFUAAr1B.js";import"./getPseudoElementBounds-Bkdncwbc.js";import"./chevron-down-TVGeU_9X.js";import"./index-MSmZ_9Sr.js";import"./error-Dwxf8wvh.js";import"./BaseCbacBanner-Bdh773_-.js";import"./makeExternalStore-CtZ0c0QD.js";import"./Tooltip-Dduv9L03.js";import"./PopoverPopup-YaZr6cL6.js";import"./toNumber-1OgnMnv3.js";import"./useOsdkClient-CGjrsjbk.js";import"./tick-x9_PC_Nm.js";import"./DropdownField-O1k0Brj2.js";import"./withOsdkMetrics-BXXzNPYT.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
