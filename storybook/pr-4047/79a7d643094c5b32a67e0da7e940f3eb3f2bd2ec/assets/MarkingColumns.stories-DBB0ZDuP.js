import{f as p,j as e}from"./iframe-NBWgt9Kz.js";import{O as i}from"./object-table-C3ybEDQQ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-dD2tealv.js";import"./Table-BWGAnIn8.js";import"./index-CvVwqIuN.js";import"./Dialog-DjV469Rf.js";import"./cross-DT-CTOSO.js";import"./svgIconContainer-ClcvIiJ_.js";import"./useBaseUiId-CQ82DsVx.js";import"./InternalBackdrop-C_OBf41a.js";import"./composite-fJ5Lq9kI.js";import"./index-zqSU5Gel.js";import"./index-CGp-CZFX.js";import"./index-4CUL2nMU.js";import"./useEventCallback-C2WEzDGK.js";import"./SkeletonBar-CSguwWtT.js";import"./LoadingCell-BOqjOmxe.js";import"./ColumnConfigDialog-DlaGziiJ.js";import"./DraggableList-DkXeeuCx.js";import"./search-DE3aPm_j.js";import"./Input-CslBGOUO.js";import"./useControlled-CzU7BR2U.js";import"./Button-BFGOLVaf.js";import"./small-cross-DNAO4fiY.js";import"./ActionButton-CoxL5yHI.js";import"./Checkbox-J2H29pF_.js";import"./useValueChanged-dmynfG-H.js";import"./CollapsiblePanel-UmPQakJ4.js";import"./MultiColumnSortDialog-DsVf9VY-.js";import"./MenuTrigger-CHK6t9Th.js";import"./CompositeItem-C9UmmHfT.js";import"./ToolbarRootContext-Ds0fuH8S.js";import"./getDisabledMountTransitionStyles-CFAUpb7c.js";import"./getPseudoElementBounds-Ce9dJaFF.js";import"./chevron-down-BQb3Bdcv.js";import"./index-Cog39q-i.js";import"./error-EEVYrIXI.js";import"./BaseCbacBanner-C-7olJ7B.js";import"./makeExternalStore-Db1JM_b8.js";import"./Tooltip-DcFVb-7H.js";import"./PopoverPopup-C6XCNR8l.js";import"./debounce-Daxc9dxM.js";import"./useOsdkClient-4hMfsXGF.js";import"./tick-DEzFYdsE.js";import"./DropdownField-r_qJh2io.js";import"./isEqual-XEm0HNXL.js";import"./withOsdkMetrics-P_2UpnBY.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:a=>e.jsx("div",{style:{height:480},children:e.jsx(i,{...a})})};var t,o,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />\`
      }
    }
  },
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const nr=["MarkingColumns"];export{r as MarkingColumns,nr as __namedExportsOrder,or as default};
