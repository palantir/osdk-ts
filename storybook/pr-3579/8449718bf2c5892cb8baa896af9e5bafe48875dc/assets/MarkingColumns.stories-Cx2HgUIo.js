import{f as n,j as t}from"./iframe-EgW55rp1.js";import{O as p}from"./object-table-14peJNit.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BJBqx_ZF.js";import"./Table-BzMPWmGi.js";import"./index-ofy4ekvw.js";import"./Dialog-BrF2T0Na.js";import"./cross-s_B_m8xI.js";import"./svgIconContainer-BFynvZcF.js";import"./useBaseUiId-CxI2lHal.js";import"./InternalBackdrop-DaWfmWqQ.js";import"./composite-qJIbPHXf.js";import"./index-TCBaztB2.js";import"./index-CLw44H1U.js";import"./index-C9daGKzd.js";import"./useEventCallback-xayyEM8S.js";import"./SkeletonBar-DQrwcQ3s.js";import"./LoadingCell-Ce__4ElN.js";import"./ColumnConfigDialog--gnEui-X.js";import"./DraggableList-CvzjMw4z.js";import"./search-Cq7EIF7n.js";import"./Input-453DtfgB.js";import"./useControlled-CYO8LWR7.js";import"./Button-DiEdXENR.js";import"./small-cross-BiO1Zdkr.js";import"./ActionButton-DyZuffS3.js";import"./Checkbox-B1UkzIwS.js";import"./minus-Bn9isfsH.js";import"./tick-Bk55DB8O.js";import"./useValueChanged-DHhT4oVM.js";import"./caret-down-Bli5xtTx.js";import"./CollapsiblePanel-WSlpSlL4.js";import"./MultiColumnSortDialog-IRcJzn2W.js";import"./MenuTrigger-BUlskCOR.js";import"./CompositeItem-Cv2wWPiy.js";import"./ToolbarRootContext-DWHOqxKc.js";import"./getDisabledMountTransitionStyles-B69kbOaH.js";import"./getPseudoElementBounds-Cx4eihRp.js";import"./chevron-down-D5AR2wJO.js";import"./index-DxV-gI_1.js";import"./error-B4NQhp3w.js";import"./BaseCbacBanner-DZmYDNVi.js";import"./makeExternalStore-CjuMZ-T0.js";import"./Tooltip-yW5FNMho.js";import"./PopoverPopup-D21LwhG9.js";import"./toNumber-jdIXn9gv.js";import"./useOsdkClient-BPOQiWJK.js";import"./DropdownField-BRfUBvMR.js";import"./withOsdkMetrics-D4-WB5Yi.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
