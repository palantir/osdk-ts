import{f as p,j as e}from"./iframe-CDFbPseP.js";import{O as i}from"./object-table-DUOcSi8T.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BKjsnnFk.js";import"./Table-DMQnRqi0.js";import"./index-CzYE_gFj.js";import"./Dialog-Dv0_z0ly.js";import"./cross-D1CsBnZQ.js";import"./svgIconContainer-BNgOwI7J.js";import"./useBaseUiId-BT9BKuc8.js";import"./InternalBackdrop-Dlq9iOxD.js";import"./composite-DoGjJBYp.js";import"./index-zCdxyZBm.js";import"./index-B9ZyEEfj.js";import"./index-DHvlVsA3.js";import"./useEventCallback-BV_0VhHt.js";import"./SkeletonBar-APOybFL0.js";import"./LoadingCell-2H_eFQDc.js";import"./ColumnConfigDialog-Crbpzmli.js";import"./DraggableList-BeB_zh_T.js";import"./search-B_GZiPBG.js";import"./Input-RJbqaFIV.js";import"./useControlled-DSth82Ot.js";import"./Button-adqe8TBe.js";import"./small-cross-Dij3KccF.js";import"./ActionButton-0OmN--Ya.js";import"./Checkbox-BPjU0jTJ.js";import"./useValueChanged-BKwGtryl.js";import"./CollapsiblePanel-B_EKx4xS.js";import"./MultiColumnSortDialog-ld-Yv8ju.js";import"./MenuTrigger-CxKvqDeW.js";import"./CompositeItem-CBWcSsRg.js";import"./ToolbarRootContext-B4N7QEkj.js";import"./getDisabledMountTransitionStyles-C4CA8fPv.js";import"./getPseudoElementBounds-3mroWXjI.js";import"./chevron-down-LTvAL7jy.js";import"./index-sMIecie8.js";import"./error-B-c6YY8H.js";import"./BaseCbacBanner-DQXK5STs.js";import"./makeExternalStore-CffN4Zs6.js";import"./Tooltip-kSDQRB-X.js";import"./PopoverPopup-Dx_YvUJO.js";import"./debounce-CP1jiFBE.js";import"./useOsdkClient-DGrdJ83Z.js";import"./tick-dn_tR7od.js";import"./DropdownField-CSbOb56z.js";import"./isEqual-GJObA0dv.js";import"./withOsdkMetrics-C_TM08QX.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
