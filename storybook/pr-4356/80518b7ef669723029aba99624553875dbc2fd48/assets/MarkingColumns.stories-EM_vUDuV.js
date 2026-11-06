import{f as p,j as e}from"./iframe-CEcdsVJq.js";import{O as i}from"./object-table-kly_C4hy.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CwdDwPFb.js";import"./Table-BuBnqDbM.js";import"./index-CYAMjkkg.js";import"./Dialog-BcKkBsF0.js";import"./cross-MZ6bg35c.js";import"./svgIconContainer-CM3Ra624.js";import"./useBaseUiId-DGCtOfjA.js";import"./InternalBackdrop-CrdF0gp5.js";import"./composite-Bw-yzexU.js";import"./index-ByC2L83v.js";import"./index-Dt5JenlP.js";import"./index-BqhjR31D.js";import"./useEventCallback-CoOaDXAk.js";import"./SkeletonBar-B0hbq4FE.js";import"./LoadingCell-DelqVOB6.js";import"./ColumnConfigDialog-Dl-d7U0a.js";import"./DraggableList-B5vt0VaS.js";import"./search-DyPNv9j0.js";import"./Input-tSgTwGI-.js";import"./useControlled-oPldRElz.js";import"./Button-DE6hvZhq.js";import"./small-cross-BAIe5upx.js";import"./ActionButton-O2R9i3U9.js";import"./Checkbox-CQCkwFw-.js";import"./useValueChanged-HH9MPtoe.js";import"./CollapsiblePanel-CfmGyi20.js";import"./MultiColumnSortDialog-CB7cRcpw.js";import"./MenuTrigger-DIyqzTda.js";import"./CompositeItem-DPYzCgzB.js";import"./ToolbarRootContext-CHwqmaMQ.js";import"./getDisabledMountTransitionStyles-CU0LRjik.js";import"./getPseudoElementBounds-CdIwqNAh.js";import"./chevron-down-C-qVIMYg.js";import"./index-BWNvfyzP.js";import"./error-B4aXreAp.js";import"./BaseCbacBanner-CFSt_HvR.js";import"./makeExternalStore-BPRH1LKG.js";import"./Tooltip-bo6C_98m.js";import"./PopoverPopup-DUz2sdVN.js";import"./debounce-CoMjtpmw.js";import"./useOsdkClient-BdsS4ftD.js";import"./tick-CP_0B18b.js";import"./DropdownField-ZmhVFUXY.js";import"./isEqual-BMJgaJ9U.js";import"./withOsdkMetrics-Mp4Rwj5-.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
