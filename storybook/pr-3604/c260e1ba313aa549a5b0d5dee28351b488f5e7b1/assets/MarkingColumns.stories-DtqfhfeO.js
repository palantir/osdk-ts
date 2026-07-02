import{f as n,j as t}from"./iframe-DCYRL4H9.js";import{O as p}from"./object-table-CU0VUOP7.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DhNa-SfY.js";import"./Table-B641_0Xj.js";import"./index-BadqSvra.js";import"./Dialog-DxYNRIhT.js";import"./cross-MTDmMIYo.js";import"./svgIconContainer-yymEYtFs.js";import"./useBaseUiId-C40ePuZs.js";import"./InternalBackdrop-CCy8ddHm.js";import"./composite-DP2g4oyM.js";import"./index-0HeaUW6Z.js";import"./index-DseVM04U.js";import"./index-KeYTcCWE.js";import"./useEventCallback-DTO9K2A3.js";import"./SkeletonBar-C0C_a3Ju.js";import"./LoadingCell-CIT8EZ1T.js";import"./ColumnConfigDialog-BOVVoi2U.js";import"./DraggableList-Bhui0FWk.js";import"./search-DVQZ78U2.js";import"./Input-CytECBC7.js";import"./useControlled-DQQBI8PS.js";import"./Button-DY07Ql1q.js";import"./small-cross-B-Qk9TWM.js";import"./ActionButton-BeTo5Dky.js";import"./Checkbox-DYOH_fyF.js";import"./minus-Driyk1S9.js";import"./tick-efq2W7lq.js";import"./useValueChanged-0YgopMI9.js";import"./caret-down-BTCVMUSQ.js";import"./CollapsiblePanel-DWo4YYA0.js";import"./MultiColumnSortDialog-DIIlNI7P.js";import"./MenuTrigger-D0X6HjqR.js";import"./CompositeItem-Dr8bPHFw.js";import"./ToolbarRootContext-BkZzFyoX.js";import"./getDisabledMountTransitionStyles-Dyl_S-GD.js";import"./getPseudoElementBounds-BifiGWEk.js";import"./chevron-down-DjFwRC7H.js";import"./index-19uHMXQL.js";import"./error-CqjxyM1J.js";import"./BaseCbacBanner-D82oSXVY.js";import"./makeExternalStore-COlEuZuC.js";import"./Tooltip-DsxmPYKf.js";import"./PopoverPopup-BtQSgJ5F.js";import"./toNumber-CblXtSEU.js";import"./useOsdkClient-BgiuS7Wk.js";import"./DropdownField-GH1G-4Q-.js";import"./withOsdkMetrics-wzS6tx1u.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
