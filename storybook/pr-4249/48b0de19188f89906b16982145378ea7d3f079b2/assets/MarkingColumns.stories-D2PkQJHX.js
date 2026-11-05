import{f as p,j as e}from"./iframe-GU9uuCxz.js";import{O as i}from"./object-table-D1ni6jd4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DiuBXggc.js";import"./Table-Bfyuy1vX.js";import"./index-wbqNQUCN.js";import"./Dialog-D9fiqstc.js";import"./cross-lUtkcXvq.js";import"./svgIconContainer-lMVp7Q5D.js";import"./useBaseUiId-izgrlbm8.js";import"./InternalBackdrop-JyM_yboG.js";import"./composite-D5bxH43Y.js";import"./index-BiQmph9i.js";import"./index-CWdNU6XI.js";import"./useEventCallback-DbxWTdO3.js";import"./SkeletonBar-DsaZzNM8.js";import"./LoadingCell-oN6k6fLQ.js";import"./ColumnConfigDialog-DuU5N0AY.js";import"./DraggableList-ynrUIkKs.js";import"./search-BwM3LpYv.js";import"./Input-D7wHTW3A.js";import"./useControlled-DeKlo4Fr.js";import"./Button-BfmdkMAB.js";import"./small-cross-CD2Qn0fR.js";import"./ActionButton-1COA3Sdw.js";import"./Checkbox-nA6cG1JI.js";import"./useValueChanged-DwRKotGN.js";import"./CollapsiblePanel-BW9VYb1e.js";import"./MultiColumnSortDialog-C4P1ac3Y.js";import"./MenuTrigger-DvRL7yRT.js";import"./CompositeItem-Cx8rt4Os.js";import"./ToolbarRootContext-CAN5koek.js";import"./getDisabledMountTransitionStyles-C9feCk9b.js";import"./getPseudoElementBounds-D5nIJXlV.js";import"./chevron-down-TCTUxLeS.js";import"./index-C3igxD5N.js";import"./error-BZwp4K-_.js";import"./BaseCbacBanner-sJ6Gr1uy.js";import"./makeExternalStore-B8P6l5nx.js";import"./Tooltip-T6_qKaR2.js";import"./isObject-iIy0QNEy.js";import"./debounce-CRbn1ibT.js";import"./useOsdkClient-Cw50fjDU.js";import"./tick-C-CpglM8.js";import"./DropdownField-DIOwQMdG.js";import"./isEqual-DZy78p28.js";import"./_baseIsEqual-Dd9svSeM.js";import"./withOsdkMetrics-BKdRrZP1.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
