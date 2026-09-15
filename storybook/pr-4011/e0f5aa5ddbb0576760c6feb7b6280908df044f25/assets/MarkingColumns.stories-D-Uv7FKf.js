import{f as p,j as e}from"./iframe-CfT8oSzl.js";import{O as i}from"./object-table-D-zdFh4O.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Ck2G3lhL.js";import"./Table-G9pXBYqy.js";import"./index-BpawNvzq.js";import"./Dialog-CdzqfLeL.js";import"./cross-BDq3cq5E.js";import"./svgIconContainer-ya4CV7y2.js";import"./useBaseUiId-D4xhi0G6.js";import"./InternalBackdrop-DbdxTKbh.js";import"./composite-CCZTgGc-.js";import"./index-DvoLa0A4.js";import"./index-UxUlnqFt.js";import"./index-ClAIatsn.js";import"./useEventCallback-CSvW4qDl.js";import"./SkeletonBar-CQtM8ssv.js";import"./LoadingCell-efDHe_sF.js";import"./ColumnConfigDialog-LKXN3hyw.js";import"./DraggableList-D1pXLlwE.js";import"./search-CeTlWaJs.js";import"./Input-frvZccMj.js";import"./useControlled-C4oVQ_PT.js";import"./Button-RnGlAnHy.js";import"./small-cross-B1GJDPeO.js";import"./ActionButton-Ce-MUeV5.js";import"./Checkbox-BsFDLi46.js";import"./useValueChanged-D06smhY0.js";import"./CollapsiblePanel-CHkL4bVQ.js";import"./MultiColumnSortDialog-DvaS2aUX.js";import"./MenuTrigger-CSaaZI9V.js";import"./CompositeItem-B7Z5vov3.js";import"./ToolbarRootContext-CiSOROzl.js";import"./getDisabledMountTransitionStyles-DSlo8AiB.js";import"./getPseudoElementBounds-B5D0r4zv.js";import"./chevron-down-hfFWURIG.js";import"./index-Ajqy3tvo.js";import"./error-CTOxDA6S.js";import"./BaseCbacBanner-D5RmPoWA.js";import"./makeExternalStore-Bq85hlSU.js";import"./Tooltip-DolSoQfn.js";import"./PopoverPopup-D5R3Wt8N.js";import"./debounce-eSR8WnsM.js";import"./useOsdkClient-CeYb4mIi.js";import"./tick-3Sqmfbum.js";import"./DropdownField-cTMj70TI.js";import"./isEqual-D62eLK_x.js";import"./withOsdkMetrics-BzsRVIUg.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
