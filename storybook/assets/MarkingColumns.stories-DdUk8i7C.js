import{f as n,j as t}from"./iframe-pMDj1zlL.js";import{O as p}from"./object-table-BImrhad6.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DHF-42pT.js";import"./index-BEiLhw5T.js";import"./Dialog-ByKIXCmm.js";import"./cross-DyLj8FgG.js";import"./svgIconContainer-DdmpuKmq.js";import"./useBaseUiId-BxOJz_bX.js";import"./InternalBackdrop-CJe_laL7.js";import"./composite-CggwT3kY.js";import"./index-60_psmw5.js";import"./index-CkoF2FYc.js";import"./index-ClahnE6Y.js";import"./useEventCallback-DVPs2WCm.js";import"./SkeletonBar-JbG53OsU.js";import"./LoadingCell-DisCmiJ4.js";import"./ColumnConfigDialog-DpK1bQ8S.js";import"./DraggableList-CWfXwcnJ.js";import"./search-DogkgmdT.js";import"./Input-DEXAudoy.js";import"./useControlled-DLFFdWtR.js";import"./Button-Dmc2RbhW.js";import"./small-cross-CgAP5WEw.js";import"./ActionButton-l_JBhbk1.js";import"./Checkbox-DNWkJ12C.js";import"./useValueChanged-B6VfGAxi.js";import"./CollapsiblePanel-f6pjMInG.js";import"./MultiColumnSortDialog-B8cVNBGU.js";import"./MenuTrigger-BFLQE-HI.js";import"./CompositeItem-Cc3oJSSK.js";import"./ToolbarRootContext-CWM57gb-.js";import"./getDisabledMountTransitionStyles-C3wZsLIV.js";import"./getPseudoElementBounds-QpMQv_QM.js";import"./chevron-down-CJumc_Om.js";import"./index-D2Z6sc74.js";import"./error-Dt7j7VXO.js";import"./BaseCbacBanner-D24ulVxe.js";import"./makeExternalStore-hwCkOqqO.js";import"./Tooltip-EnPaHjwR.js";import"./PopoverPopup-BOiDlhbK.js";import"./toNumber-BZ2Cv7Pt.js";import"./useOsdkClient-DaPbRqZB.js";import"./tick-eqEY8hIq.js";import"./DropdownField-C6rxxxl0.js";import"./withOsdkMetrics-Vcm7xII9.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
