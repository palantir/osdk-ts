import{f as p,j as e}from"./iframe-CdXRgAZ5.js";import{O as i}from"./object-table-CN8kwCL4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CitRRdiQ.js";import"./Table-CDJRnX7-.js";import"./index-D9vry920.js";import"./Dialog-DchmYRhm.js";import"./cross-BSpE7ik9.js";import"./svgIconContainer-DDpGR0K9.js";import"./useBaseUiId-C4Byj8B0.js";import"./InternalBackdrop-DO-4mexr.js";import"./composite-in5-wL5z.js";import"./index-EqByydDb.js";import"./index-ltWxUmJy.js";import"./index-CNFDJENd.js";import"./useEventCallback-Bz8KBaS5.js";import"./SkeletonBar-Yb2Ri3_7.js";import"./LoadingCell-Dg6H086G.js";import"./ColumnConfigDialog-DbRCU5iz.js";import"./DraggableList-DYta_Y7r.js";import"./search-CBule6p8.js";import"./Input-CSHvQsfp.js";import"./useControlled-DSrBRiZ_.js";import"./Button-vMf8G5_Y.js";import"./small-cross-DywfSgOm.js";import"./ActionButton-D_fOZp6Y.js";import"./Checkbox-DC-aG5Bo.js";import"./useValueChanged-BKvMUlXV.js";import"./CollapsiblePanel-O4VAn8Gx.js";import"./MultiColumnSortDialog-BRiBPLiI.js";import"./MenuTrigger-ow0lXlSw.js";import"./CompositeItem-DuqUtFNG.js";import"./ToolbarRootContext-D-BSwljH.js";import"./getDisabledMountTransitionStyles-T20fe8L9.js";import"./getPseudoElementBounds-DDHCJymJ.js";import"./chevron-down-BymEN6Iw.js";import"./index-B4exONM0.js";import"./error-DZGmcMd6.js";import"./BaseCbacBanner-DQSCEX4v.js";import"./makeExternalStore-D0rHK4H4.js";import"./Tooltip-BrmNiBdj.js";import"./PopoverPopup-DD3bpHRz.js";import"./debounce-nRF8PGBP.js";import"./useOsdkClient-DfLv09Cv.js";import"./tick-B4Cn5MSM.js";import"./DropdownField-Dc5QpqIC.js";import"./isEqual-CkwefDw5.js";import"./withOsdkMetrics-DQE_UW0r.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
