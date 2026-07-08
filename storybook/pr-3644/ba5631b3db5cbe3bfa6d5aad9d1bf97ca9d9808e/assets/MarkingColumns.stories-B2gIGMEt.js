import{f as n,j as t}from"./iframe-D55M5wci.js";import{O as p}from"./object-table-CxEh1iqI.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C18qDopu.js";import"./Table-B_XafodX.js";import"./index-5AuowcZ1.js";import"./Dialog-B0jlQiPG.js";import"./cross-GBYBmKJt.js";import"./svgIconContainer-B1N7UlgV.js";import"./useBaseUiId-Dqp7OPFO.js";import"./InternalBackdrop-BBj86GRX.js";import"./composite-BVZ68ZGS.js";import"./index-DL7HOTWE.js";import"./index-CXQfZiCl.js";import"./index-C4nan5U7.js";import"./useEventCallback-BvloLB_Z.js";import"./SkeletonBar-KK7ZFNRh.js";import"./LoadingCell-DWY0GQQG.js";import"./ColumnConfigDialog-BhhvDrV7.js";import"./DraggableList-BmmHq7Pw.js";import"./search-D5wvQIfI.js";import"./Input-pfVHnHW4.js";import"./useControlled-DK45zpKp.js";import"./Button-BL1B-X-6.js";import"./small-cross-htdWViEx.js";import"./ActionButton-pdY0b2q_.js";import"./Checkbox-BuW1icFv.js";import"./useValueChanged-CIMNYAxz.js";import"./CollapsiblePanel-DepV_pmd.js";import"./MultiColumnSortDialog-_bvPU7iC.js";import"./MenuTrigger-z_9dG_ji.js";import"./CompositeItem-BHvqg_WK.js";import"./ToolbarRootContext--3075s1k.js";import"./getDisabledMountTransitionStyles-DyUhMSPq.js";import"./getPseudoElementBounds-FNQGtSTP.js";import"./chevron-down-Dx2WazF2.js";import"./index-CdMghF7-.js";import"./error-MuIb47bq.js";import"./BaseCbacBanner-bM8n6vhV.js";import"./makeExternalStore-BDflhLO9.js";import"./Tooltip-NQvi7YyC.js";import"./PopoverPopup-EBKkzcQ2.js";import"./toNumber-cHXXE-Rm.js";import"./useOsdkClient-CMIt1WEZ.js";import"./tick-BSbHeHMA.js";import"./DropdownField-Lw-OYerM.js";import"./withOsdkMetrics-DaytlST7.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
