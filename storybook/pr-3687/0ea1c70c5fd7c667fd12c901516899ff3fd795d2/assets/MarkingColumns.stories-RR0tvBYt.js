import{f as n,j as t}from"./iframe-D8D8Fd7N.js";import{O as p}from"./object-table-DH9ZWNO9.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-HfLRyj_M.js";import"./Table-CkK7dK6q.js";import"./index-DawESuRM.js";import"./Dialog-B9p53XJl.js";import"./cross-Bczuw6HZ.js";import"./svgIconContainer-D6lNkQ7D.js";import"./useBaseUiId-qsdqGWpP.js";import"./InternalBackdrop-vckT6C2q.js";import"./composite-CIUikIoi.js";import"./index-DYipZiVM.js";import"./index-QS9SuPH9.js";import"./index-ujJmo4t9.js";import"./useEventCallback-CV2KFr39.js";import"./SkeletonBar-BuPwnctq.js";import"./LoadingCell-CD496AsM.js";import"./ColumnConfigDialog-1XXyYxbO.js";import"./DraggableList-BEQ9YfSM.js";import"./search-CzCT0qg7.js";import"./Input-5Zfe1Eu4.js";import"./useControlled-BTUrnS98.js";import"./Button-DFUhNqlH.js";import"./small-cross-DwEe5MKj.js";import"./ActionButton-DsB4Pm_I.js";import"./Checkbox-uiCOOFhS.js";import"./useValueChanged-DiVS3QGH.js";import"./CollapsiblePanel-ConJwcAa.js";import"./MultiColumnSortDialog-B4s3BUoE.js";import"./MenuTrigger-zrzWzPXX.js";import"./CompositeItem-BdVAy7o5.js";import"./ToolbarRootContext-V4KuPQFG.js";import"./getDisabledMountTransitionStyles-B2IVlD7B.js";import"./getPseudoElementBounds-DX3UnMTv.js";import"./chevron-down-CWk43xwC.js";import"./index-D0UWbO9T.js";import"./error-BqsCvt66.js";import"./BaseCbacBanner-DWhDv7ql.js";import"./makeExternalStore-BrMWIuuv.js";import"./Tooltip-B5zpuG_4.js";import"./PopoverPopup-BqmJX3WX.js";import"./toNumber-DHtwRWdQ.js";import"./useOsdkClient-CNmxTVZh.js";import"./tick-B5msijB4.js";import"./DropdownField-Dw3kxcfr.js";import"./withOsdkMetrics-CtnhpNYC.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
