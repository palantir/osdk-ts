import{f as n,j as t}from"./iframe-B3ejg-GI.js";import{O as p}from"./object-table-BkzLaWfe.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-fSKAYz8W.js";import"./Table-7k499V4-.js";import"./index-g62t3B_I.js";import"./Dialog-CI_5wpz8.js";import"./cross-B-qm3kZu.js";import"./svgIconContainer-DEdmzDTv.js";import"./useBaseUiId-D1BKrusH.js";import"./InternalBackdrop-CWmdv7Kk.js";import"./composite-Bt9yRfYp.js";import"./index-WnbprtO7.js";import"./index-C9Fw3uQJ.js";import"./index-C0DE7O9T.js";import"./useEventCallback-DfXlI1Cd.js";import"./SkeletonBar-Bd_VY950.js";import"./LoadingCell-2TmUCDHR.js";import"./ColumnConfigDialog-B18SPwOY.js";import"./DraggableList-CXNnpiql.js";import"./Input-Chb0fvGl.js";import"./useControlled-CQa52Rqd.js";import"./Button-DNrF6IbB.js";import"./small-cross-CZU9iOcS.js";import"./ActionButton-CATuPwcw.js";import"./Checkbox-ojOryNzf.js";import"./minus-F_9Jlsk0.js";import"./useValueChanged-_jSCmbLe.js";import"./caret-down-8X_Yiqv5.js";import"./CollapsiblePanel-CTuDxSqq.js";import"./MultiColumnSortDialog-DIfL4kJw.js";import"./MenuTrigger-7oeNMHE5.js";import"./CompositeItem-V4OHK5w6.js";import"./ToolbarRootContext-BgYrjm3l.js";import"./getDisabledMountTransitionStyles-CmLWdvH-.js";import"./getPseudoElementBounds-BpeXNzz0.js";import"./chevron-down-DT1Rf9Ig.js";import"./index-WGxuTJD4.js";import"./error-BtwJmqZN.js";import"./BaseCbacBanner-Dp-8Dwh3.js";import"./makeExternalStore-DlK_z9fZ.js";import"./Tooltip-KJaLeGgP.js";import"./PopoverPopup-BklcNR-z.js";import"./toNumber-CrxF56gN.js";import"./useOsdkClient-BLk1Mqhf.js";import"./DropdownField-CjdDkmO1.js";import"./withOsdkMetrics-uOGyEtwZ.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
