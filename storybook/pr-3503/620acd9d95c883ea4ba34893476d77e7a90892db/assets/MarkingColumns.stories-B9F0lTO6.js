import{f as n,j as t}from"./iframe-CA-Q_jU7.js";import{O as p}from"./object-table-SDTbaTZ5.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BdCNlve6.js";import"./Table-CyFnxB4T.js";import"./index-VO2jRSn_.js";import"./Dialog-CY6PAgkR.js";import"./cross-oxpbK6hh.js";import"./svgIconContainer-B8j61YwK.js";import"./useBaseUiId-qVGoLdQZ.js";import"./InternalBackdrop-CiIWTXNw.js";import"./composite-CzBZ8Myw.js";import"./index-CG8L9I03.js";import"./index-ByR1nggb.js";import"./index-CBWlALiZ.js";import"./useEventCallback-Cl1catkJ.js";import"./SkeletonBar-DsB62RR2.js";import"./LoadingCell-D13Xgezv.js";import"./ColumnConfigDialog-CkSfsUos.js";import"./DraggableList-2iDCk19e.js";import"./search-mP0zrIjU.js";import"./Input-4IbICc_N.js";import"./useControlled-DbYf413A.js";import"./Button-Cl2geIeB.js";import"./small-cross-DetrI0iV.js";import"./ActionButton-CgqJMXMV.js";import"./Checkbox-Dqvp8Xky.js";import"./minus-CvxGmIuW.js";import"./tick-DGv6LZ0M.js";import"./useValueChanged-BQK9WQ7r.js";import"./caret-down-D979phhc.js";import"./CollapsiblePanel-B6ERrLDO.js";import"./MultiColumnSortDialog-iRzvcjuc.js";import"./MenuTrigger-CNZtVkig.js";import"./CompositeItem-omTeulrv.js";import"./ToolbarRootContext-B8fjPlVh.js";import"./getDisabledMountTransitionStyles-Y7VnOa3h.js";import"./getPseudoElementBounds-7eAKkBrW.js";import"./chevron-down-CYCHBchH.js";import"./index-BZnWLbDC.js";import"./error-C1cMouvI.js";import"./BaseCbacBanner-PjNltOCP.js";import"./makeExternalStore-CkIusA3Y.js";import"./Tooltip-47EZ7Ro3.js";import"./PopoverPopup-DsTHvv3B.js";import"./toNumber-BD-BDjFh.js";import"./useOsdkClient-GxQJUmNy.js";import"./DropdownField-BFgE_hFq.js";import"./withOsdkMetrics-BgzlNlWK.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
