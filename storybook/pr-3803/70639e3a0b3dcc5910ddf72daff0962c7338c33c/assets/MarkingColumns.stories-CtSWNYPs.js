import{f as p,j as e}from"./iframe-Bm5jzr8T.js";import{O as i}from"./object-table-BT3WJKf5.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CSZnNglA.js";import"./Table-BwCey59J.js";import"./index-ClQUzYG2.js";import"./Dialog-CEW496P3.js";import"./cross-DVFMZvVA.js";import"./svgIconContainer-R--xU0hg.js";import"./useBaseUiId-C3nowbxu.js";import"./InternalBackdrop-DZ3hqVez.js";import"./composite-CWDFfLuK.js";import"./index-DLRkWHMK.js";import"./index-BcWTji-b.js";import"./index-BEoHxM62.js";import"./useEventCallback-CI7uLU8f.js";import"./SkeletonBar-CSxJEasa.js";import"./LoadingCell-DcLLGo5Q.js";import"./ColumnConfigDialog-Eiwl-hwJ.js";import"./DraggableList-Bmfpw-zN.js";import"./search-CqGLs9ZZ.js";import"./Input-CDKdLXlP.js";import"./useControlled-BLatlVO6.js";import"./isEqual-DXaKKJIX.js";import"./isObject-DztzetiJ.js";import"./Button-Cety1YHR.js";import"./ActionButton-bTP_UK65.js";import"./Checkbox-BkVz2iLv.js";import"./useValueChanged-DHWbbgvf.js";import"./CollapsiblePanel-ConGGTZK.js";import"./MultiColumnSortDialog-BsXGmWAr.js";import"./MenuTrigger-BbNMOgKb.js";import"./CompositeItem-3MKWjM1o.js";import"./ToolbarRootContext-cG30qRz2.js";import"./getDisabledMountTransitionStyles-DgnGFD7A.js";import"./getPseudoElementBounds-CbPvxVlD.js";import"./chevron-down-C6hvYjb1.js";import"./index-DHhyRUWy.js";import"./error-Bhi3wxY-.js";import"./BaseCbacBanner-DqM_wZYq.js";import"./makeExternalStore-BMDNa_EK.js";import"./Tooltip-uspGCdfX.js";import"./PopoverPopup-fq6DR5Ok.js";import"./toNumber-BbWIN4JV.js";import"./useOsdkClient-CCL0FN2l.js";import"./tick-DksdaIdb.js";import"./DropdownField-o4Ba4JuE.js";import"./withOsdkMetrics-CwVNpXHj.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
