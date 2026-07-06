import{f as n,j as t}from"./iframe-D4uVbbmv.js";import{O as p}from"./object-table-Bp7IBzjW.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BmNxizg7.js";import"./Table-CoRuZ7Xw.js";import"./index-APMMA_6e.js";import"./Dialog-BBhbJYwx.js";import"./cross-CWRYv8qu.js";import"./svgIconContainer-C-UKpIGq.js";import"./useBaseUiId-D8bHBuAj.js";import"./InternalBackdrop-BOJ8Dnab.js";import"./composite-DSrAyWnR.js";import"./index-DMXJyqmQ.js";import"./index-vLGJVlTP.js";import"./index-BRzMQYAA.js";import"./useEventCallback-CH5lDt7J.js";import"./SkeletonBar-of90W5YR.js";import"./LoadingCell-BFgbYEt8.js";import"./ColumnConfigDialog-DcHKFO6m.js";import"./DraggableList-CGp6hzEH.js";import"./search-YL8utvOc.js";import"./Input-CI-QUH2Z.js";import"./useControlled-CYYBVSCA.js";import"./Button-CUvumU_z.js";import"./small-cross-KMN0B-dt.js";import"./ActionButton-dX7nbsbg.js";import"./Checkbox-Drs2nCAT.js";import"./useValueChanged-BNeGbeQM.js";import"./CollapsiblePanel--EPdFl-j.js";import"./MultiColumnSortDialog-B7bu6UPk.js";import"./MenuTrigger-qrWvBU5P.js";import"./CompositeItem-dLl2klUa.js";import"./ToolbarRootContext-CgcDMUZv.js";import"./getDisabledMountTransitionStyles-AjXQuIA8.js";import"./getPseudoElementBounds-D9dK5Kde.js";import"./chevron-down-Ch0PbUhb.js";import"./index-Dbhkjidn.js";import"./error-BmdzypHe.js";import"./BaseCbacBanner-cnne-FVb.js";import"./makeExternalStore-BukyzIkL.js";import"./Tooltip-DiJeIPP0.js";import"./PopoverPopup-BFTNs00S.js";import"./toNumber-B0w-XiE5.js";import"./useOsdkClient-DHP1sXD-.js";import"./tick-BhbhTsUq.js";import"./DropdownField-BqdxcIaf.js";import"./withOsdkMetrics-D6jS_maY.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
