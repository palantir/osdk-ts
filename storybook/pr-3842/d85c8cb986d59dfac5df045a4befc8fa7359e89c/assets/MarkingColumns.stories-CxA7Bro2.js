import{f as p,j as e}from"./iframe-C1aZz4qh.js";import{O as i}from"./object-table-Da3ELJ35.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C57PRwQB.js";import"./Table-BwAq-AXt.js";import"./index-DndOh7uw.js";import"./Dialog-D0XUZvVd.js";import"./cross-qtsLbSBi.js";import"./svgIconContainer-B5UnyqeH.js";import"./useBaseUiId-DHP81qHW.js";import"./InternalBackdrop-8CzUigsn.js";import"./composite-CB1pt23S.js";import"./index-CSr6rIRF.js";import"./index-DwSUGGBW.js";import"./index-DhK7zook.js";import"./useEventCallback-u7Ubimgc.js";import"./SkeletonBar-DM3YtxCs.js";import"./LoadingCell-DfLkqqvz.js";import"./ColumnConfigDialog-iroc8zmb.js";import"./DraggableList-Dc-s-PBU.js";import"./search-yR82rB65.js";import"./Input-CkMB4S7R.js";import"./useControlled-CCEarqoz.js";import"./isEqual-CY_FtRlU.js";import"./isObject-Dd13mV1N.js";import"./Button-BgiX1sCn.js";import"./ActionButton-FEh_tB9Y.js";import"./Checkbox-Cb2TG0KZ.js";import"./useValueChanged-CIbB9b-p.js";import"./CollapsiblePanel-P01aIOd1.js";import"./MultiColumnSortDialog-DbWxPT_p.js";import"./MenuTrigger-BJS7IWlK.js";import"./CompositeItem-DLnehaEy.js";import"./ToolbarRootContext-BNN0c4jp.js";import"./getDisabledMountTransitionStyles-BmzXB9Ho.js";import"./getPseudoElementBounds-DuZUZl-y.js";import"./chevron-down-dh3VxrDb.js";import"./index-NP9LypFz.js";import"./error-BXuTAgqJ.js";import"./BaseCbacBanner-DpgVfwhv.js";import"./makeExternalStore-tkOquhkD.js";import"./Tooltip-CCcmI9_z.js";import"./PopoverPopup-DpukjGTT.js";import"./toNumber-DoftAu1J.js";import"./useOsdkClient-7X5NmjyA.js";import"./tick-RCuoZqaK.js";import"./DropdownField-jqAfXglE.js";import"./withOsdkMetrics-C0HDOzXR.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
