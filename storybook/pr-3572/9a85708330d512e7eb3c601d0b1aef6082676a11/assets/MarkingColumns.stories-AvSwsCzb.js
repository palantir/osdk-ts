import{f as n,j as t}from"./iframe-6DWpb4n8.js";import{O as p}from"./object-table-BcB2EIM7.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CKC3MDBV.js";import"./Table-B01Rs_o6.js";import"./index-DvSw4Y8y.js";import"./Dialog-S8zailNB.js";import"./cross-DzEIRlDS.js";import"./svgIconContainer-CEcqlPd6.js";import"./useBaseUiId-BMfPZQEL.js";import"./InternalBackdrop-5g83KIMa.js";import"./composite-BP4DAUSV.js";import"./index-kjbPB0Tc.js";import"./index-DXie4Vqe.js";import"./index-B9yScdf6.js";import"./useEventCallback-EcZd48ml.js";import"./SkeletonBar-CLeyDOgJ.js";import"./LoadingCell-o5zxtv5_.js";import"./ColumnConfigDialog-Lwwv0W3J.js";import"./DraggableList-C7FxmE-H.js";import"./search-C_ZrWNSR.js";import"./Input-fwKnahH6.js";import"./useControlled-Cmd5jpf8.js";import"./Button-DZvQGd15.js";import"./small-cross-vfe1oVw5.js";import"./ActionButton-9H35vsSc.js";import"./Checkbox-CtGUERuj.js";import"./minus-BsyllDxp.js";import"./tick-Bi6gcR2I.js";import"./useValueChanged-YzasCaGg.js";import"./caret-down-C1_OAL1N.js";import"./CollapsiblePanel-D3qnZWVf.js";import"./MultiColumnSortDialog-WHLv-qIm.js";import"./MenuTrigger-CMHzFKSj.js";import"./CompositeItem-Zyxnw8On.js";import"./ToolbarRootContext-j9l86UQ6.js";import"./getDisabledMountTransitionStyles-BP6n7LlW.js";import"./getPseudoElementBounds-Bp8sQiT_.js";import"./chevron-down-DWI2AdOf.js";import"./index-BFiua2g7.js";import"./error-Co_RU7lE.js";import"./BaseCbacBanner-C48mSWNw.js";import"./makeExternalStore-M8_UnZ4Q.js";import"./Tooltip-CX3-lNin.js";import"./PopoverPopup-Cd0Rtz2g.js";import"./toNumber-CfhOoEau.js";import"./useOsdkClient-cWQvQ02f.js";import"./DropdownField-DxB8Gt1z.js";import"./withOsdkMetrics-DsHZN0Lu.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
