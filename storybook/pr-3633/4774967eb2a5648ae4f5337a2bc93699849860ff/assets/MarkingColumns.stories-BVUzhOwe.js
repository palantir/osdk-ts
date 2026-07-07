import{f as n,j as t}from"./iframe-587nkGNT.js";import{O as p}from"./object-table-qm25R1gB.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CoJdC1JQ.js";import"./Table-BIbpZvHT.js";import"./index-8iTYB9of.js";import"./Dialog-YyKZc3m-.js";import"./cross-tJjGET59.js";import"./svgIconContainer-BQEvJWm4.js";import"./useBaseUiId-DC_uCOHy.js";import"./InternalBackdrop-IH0nOhlv.js";import"./composite-B17XNdWQ.js";import"./index-Cgc8teVl.js";import"./index-CiDOp9oc.js";import"./index-6I-NH834.js";import"./useEventCallback-UO2lVrSM.js";import"./SkeletonBar-BvmihjHP.js";import"./LoadingCell-Bu_gxUi_.js";import"./ColumnConfigDialog-Cl9sVxqJ.js";import"./DraggableList-CWZ5I8cf.js";import"./search-BMnZdPNv.js";import"./Input-Brrkxm-m.js";import"./useControlled-Dj5fAeRO.js";import"./Button-Dk23DCAr.js";import"./small-cross-CsPW_Njs.js";import"./ActionButton-7fX9scf3.js";import"./Checkbox-DnW5-cfn.js";import"./useValueChanged-CA8xw351.js";import"./CollapsiblePanel-D5i33mwm.js";import"./MultiColumnSortDialog-DVsHVhet.js";import"./MenuTrigger-CewAIipb.js";import"./CompositeItem-CxjNTHD_.js";import"./ToolbarRootContext-C19dgtRc.js";import"./getDisabledMountTransitionStyles-B3SRVeRW.js";import"./getPseudoElementBounds-DFCQ3yXE.js";import"./chevron-down-2FdgNLzq.js";import"./index-C3avtWXL.js";import"./error-CJJjbBaA.js";import"./BaseCbacBanner-CNimMX2c.js";import"./makeExternalStore-Bb2KauYY.js";import"./Tooltip-NIzWJkkg.js";import"./PopoverPopup-Vzo1PcR1.js";import"./toNumber-DoAswGUk.js";import"./useOsdkClient-Dr2Ql8Vb.js";import"./tick-BJkp5oTE.js";import"./DropdownField-Dd5slHHX.js";import"./withOsdkMetrics-CCP3IblO.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
