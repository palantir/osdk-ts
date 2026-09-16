import{f as p,j as e}from"./iframe-DaCuFEr4.js";import{O as i}from"./object-table-BLHNmO4Q.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CH__3C9o.js";import"./Table-BCCPtXPw.js";import"./index-DBgsNfjF.js";import"./Dialog-BGDE9Lmz.js";import"./cross-Dvh7Mb4q.js";import"./svgIconContainer-xI7GONU5.js";import"./useBaseUiId-ONC8Xt4g.js";import"./InternalBackdrop-IX1U8kwf.js";import"./composite-dd7jjZk4.js";import"./index-dtUyYAkL.js";import"./index-B2p2pg25.js";import"./index-CB1zNyDM.js";import"./useEventCallback-nN2qNTIn.js";import"./SkeletonBar-CQ0QNmxu.js";import"./LoadingCell-tcz8ADSH.js";import"./ColumnConfigDialog-BCPHsvLd.js";import"./DraggableList-Bbsa4S8M.js";import"./search-D050E2Ix.js";import"./Input-9OWE4hHY.js";import"./useControlled-qOz3lv_a.js";import"./Button-BSyutd6a.js";import"./small-cross-DG1zTSDP.js";import"./ActionButton-CLh4iGOc.js";import"./Checkbox-BsxvVU3e.js";import"./useValueChanged-ClwG0cRJ.js";import"./CollapsiblePanel-qk7TdI5O.js";import"./MultiColumnSortDialog-kJmtx_MZ.js";import"./MenuTrigger-Hn15FCcY.js";import"./CompositeItem-CUKWIiHk.js";import"./ToolbarRootContext-BhpmgE0w.js";import"./getDisabledMountTransitionStyles-CB7sZ96x.js";import"./getPseudoElementBounds-CqcAX_hh.js";import"./chevron-down-kPE5lOM8.js";import"./index-CGnRKytQ.js";import"./error-C-IGdotI.js";import"./BaseCbacBanner-B-l4fz7l.js";import"./makeExternalStore-DGayjJTu.js";import"./Tooltip-CT9sU2PZ.js";import"./PopoverPopup-DZltGoWp.js";import"./debounce-Bu5YTwKq.js";import"./useOsdkClient-D0YYFk-l.js";import"./tick-BTtRE0Kk.js";import"./DropdownField-bcPFxJTG.js";import"./isEqual-BXIGuTbA.js";import"./withOsdkMetrics-B-pgZqiw.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
