import{f as n,j as t}from"./iframe-CfrMZuVj.js";import{O as p}from"./object-table-BHv5GzIF.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B5fAXmjS.js";import"./Table-XqXrSMRG.js";import"./index-DYVq1j9X.js";import"./Dialog-BtWpVA49.js";import"./cross-3f22uQ-C.js";import"./svgIconContainer-C95DDcxX.js";import"./useBaseUiId-DdoKUeod.js";import"./InternalBackdrop-C619luLx.js";import"./composite-B4aiyj7A.js";import"./index-CbrxzA2c.js";import"./index-DE3GyER6.js";import"./index-DgU_G9ed.js";import"./useEventCallback-BxrnMlsn.js";import"./SkeletonBar-BPhvKtKC.js";import"./LoadingCell-D1XnBPGA.js";import"./ColumnConfigDialog-BJSVM1nP.js";import"./DraggableList-CTGQHeiT.js";import"./search-C7dfYjlW.js";import"./Input-BKTzM7mP.js";import"./useControlled-DUCqzd58.js";import"./Button-D8f87WjA.js";import"./small-cross-C99u7UYJ.js";import"./ActionButton-C5wwx6qq.js";import"./Checkbox-DmEgRxs2.js";import"./minus-y7sHBYHO.js";import"./tick-W0MLuzjr.js";import"./useValueChanged-rn3XEx0l.js";import"./caret-down-CKfiu5tH.js";import"./CollapsiblePanel-ZUlxkIGy.js";import"./MultiColumnSortDialog-B8Mh5Yt0.js";import"./MenuTrigger-CkWMDOBx.js";import"./CompositeItem-DZvjn6Tw.js";import"./ToolbarRootContext-BMBxxppn.js";import"./getDisabledMountTransitionStyles-tWkUFA-G.js";import"./getPseudoElementBounds-Dqv9oT7A.js";import"./chevron-down-BqqOGFpy.js";import"./index-CZV25uKZ.js";import"./error-vsyFXbHa.js";import"./BaseCbacBanner-BQVcW4RK.js";import"./makeExternalStore-Bw-HdF_K.js";import"./Tooltip-BLQ0kGR7.js";import"./PopoverPopup-DtkD25v3.js";import"./toNumber-CoMOoahI.js";import"./useOsdkClient-BdDwho6F.js";import"./DropdownField-B7hsuZof.js";import"./withOsdkMetrics-BaK8lHbo.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
