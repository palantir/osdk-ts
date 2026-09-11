import{f as p,j as e}from"./iframe-t6gOiOpP.js";import{O as i}from"./object-table-jCj-jdV2.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CV5pzfbJ.js";import"./Table-CHURngd8.js";import"./index-B8f3749n.js";import"./Dialog-DZMmB0a5.js";import"./cross-DD5o22Zb.js";import"./svgIconContainer-B5Lj2eIE.js";import"./useBaseUiId-D0UWHXkS.js";import"./InternalBackdrop--ckurpTO.js";import"./composite-CFO_COst.js";import"./index-DaGdI8vt.js";import"./index-8kYg-C7M.js";import"./index-DxstgvF0.js";import"./useEventCallback-Ch6gIkUP.js";import"./SkeletonBar-CM0U4JXQ.js";import"./LoadingCell-CvILSvAL.js";import"./ColumnConfigDialog-tb2UPRLc.js";import"./DraggableList-Bey6PH__.js";import"./search-DBk5UsI-.js";import"./Input-DFrbhTU8.js";import"./useControlled-BZFiwdLD.js";import"./Button-CSkSEq0A.js";import"./small-cross-6H0sIvkE.js";import"./ActionButton-lPYhjhek.js";import"./Checkbox-BY24afgd.js";import"./useValueChanged-DdQntC3G.js";import"./CollapsiblePanel-Z1wCWvPx.js";import"./MultiColumnSortDialog--6aq8P5b.js";import"./MenuTrigger-BYAoIMpG.js";import"./CompositeItem-BYApWBRb.js";import"./ToolbarRootContext-DZ6RrQxV.js";import"./getDisabledMountTransitionStyles-CvywptPR.js";import"./getPseudoElementBounds-U7mN2tqj.js";import"./chevron-down-DJ9UCW_x.js";import"./index-Dqwb4kGz.js";import"./error-CgIajBJj.js";import"./BaseCbacBanner-CMR0iKug.js";import"./makeExternalStore-Y2a1OF7x.js";import"./Tooltip-C6huUy0h.js";import"./PopoverPopup-C9ka-zpy.js";import"./debounce-7GEDpMki.js";import"./useOsdkClient-lwd_qzlK.js";import"./tick-DyExF_WY.js";import"./DropdownField-BxmxCkTC.js";import"./isEqual-B1tWiUyp.js";import"./withOsdkMetrics-Bdbjb4hh.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
