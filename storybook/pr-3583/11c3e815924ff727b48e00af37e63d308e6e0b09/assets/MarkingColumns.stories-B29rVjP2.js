import{f as n,j as t}from"./iframe-BbfLQ3uk.js";import{O as p}from"./object-table-Ck2DYV_o.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CGyGUrAr.js";import"./Table-uLd0pCVx.js";import"./index-tua362Yp.js";import"./Dialog-BACnwmTE.js";import"./cross-D1ZzBCxX.js";import"./svgIconContainer-B_TvUk0O.js";import"./useBaseUiId-DJ9t-oSD.js";import"./InternalBackdrop-BU3LfI30.js";import"./composite-BqXUif72.js";import"./index-vPqjhVNG.js";import"./index-CyvLI5s6.js";import"./index-x5bLQ0tD.js";import"./useEventCallback-CCbPfF2r.js";import"./SkeletonBar-BUDd1yTp.js";import"./LoadingCell-Co2ZUjg9.js";import"./ColumnConfigDialog-DKdRTGEb.js";import"./DraggableList-CAXEWy6g.js";import"./search-tWoeXU-l.js";import"./Input-CstxWGzJ.js";import"./useControlled-CKpbpIM7.js";import"./Button-DC80tMv-.js";import"./small-cross-BZD78fDB.js";import"./ActionButton-D1X_Il0_.js";import"./Checkbox-Dnf9oMIG.js";import"./minus-wbZo9U9c.js";import"./tick-BPbr2did.js";import"./useValueChanged-TSf5Kkuf.js";import"./caret-down-KXFaBzwD.js";import"./CollapsiblePanel-B5hUPMHV.js";import"./MultiColumnSortDialog-D2IEvJaN.js";import"./MenuTrigger-C47QhcvV.js";import"./CompositeItem-DAj-8AX2.js";import"./ToolbarRootContext-zso1Kjw1.js";import"./getDisabledMountTransitionStyles-BYkqtEiY.js";import"./getPseudoElementBounds-Dbk80xWL.js";import"./chevron-down-Dw-MF_lM.js";import"./index-D_P3mHzB.js";import"./error-HOzGPf1x.js";import"./BaseCbacBanner-uuwSoW_B.js";import"./makeExternalStore-CzwZ4tpv.js";import"./Tooltip-DBFvUfZb.js";import"./PopoverPopup-wPy7Q893.js";import"./toNumber-C-JQIREB.js";import"./useOsdkClient-BwIKaIU0.js";import"./DropdownField--F9uid4f.js";import"./withOsdkMetrics-B0qkFJVT.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
