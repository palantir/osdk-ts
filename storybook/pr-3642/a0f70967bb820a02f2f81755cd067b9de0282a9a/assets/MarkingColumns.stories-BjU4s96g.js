import{f as n,j as t}from"./iframe-BuOaXUBG.js";import{O as p}from"./object-table-BUlT7Q71.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Byc6zjGJ.js";import"./Table-Bv_bTFWo.js";import"./index-9gX-aKb8.js";import"./Dialog-B05aFGnW.js";import"./cross-BFOHUCmw.js";import"./svgIconContainer-C0AgpTQn.js";import"./useBaseUiId-gWvzXzJi.js";import"./InternalBackdrop-DfIGZEsu.js";import"./composite-DtcJsKmT.js";import"./index-j6_2wF34.js";import"./index-CIq_jtO8.js";import"./index-CynYRU0p.js";import"./useEventCallback-Btn01CTu.js";import"./SkeletonBar-Bxw9lSXE.js";import"./LoadingCell-C5Ix6gB8.js";import"./ColumnConfigDialog-DwBDOKYv.js";import"./DraggableList-DRaaHsfJ.js";import"./search-CXvYB15j.js";import"./Input-DjcXgolR.js";import"./useControlled-CeVnUSmU.js";import"./Button-BfCOyrcS.js";import"./small-cross-BSA0BI5r.js";import"./ActionButton-DHHy6PHj.js";import"./Checkbox-D-laqcrF.js";import"./useValueChanged-DY34WbUf.js";import"./CollapsiblePanel-yKp-M-_H.js";import"./MultiColumnSortDialog-BlpIWzvm.js";import"./MenuTrigger-BcarOHqp.js";import"./CompositeItem-Dn8s-lwK.js";import"./ToolbarRootContext-BufBD7j9.js";import"./getDisabledMountTransitionStyles-CF4UnRDj.js";import"./getPseudoElementBounds-Dz4w-ebU.js";import"./chevron-down-Cf0curwx.js";import"./index-DsbnjtVq.js";import"./error-C3camBiK.js";import"./BaseCbacBanner-BvNZXsp1.js";import"./makeExternalStore-BHbVl8Qy.js";import"./Tooltip-C1X83Fns.js";import"./PopoverPopup-DPS3RmeM.js";import"./toNumber-DM1rC8Zn.js";import"./useOsdkClient-DoOfzZOx.js";import"./tick-Dm7l2Lrj.js";import"./DropdownField-Cejjr8hi.js";import"./withOsdkMetrics-DYOj9Of0.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
