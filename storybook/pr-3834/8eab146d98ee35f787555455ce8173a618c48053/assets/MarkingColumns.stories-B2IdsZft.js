import{f as p,j as e}from"./iframe-5Z3i0E9X.js";import{O as i}from"./object-table-DPTtzRmo.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CxXp5K4w.js";import"./Table-BS_gimTg.js";import"./index-BfhbkjSI.js";import"./Dialog-BqgcU_l7.js";import"./cross-DZCL8gCN.js";import"./svgIconContainer-DvyPNWZq.js";import"./useBaseUiId-BlRYUEsQ.js";import"./InternalBackdrop-6-8lSj7Z.js";import"./composite-CSBuVBSk.js";import"./index-BPvT0TAi.js";import"./index-lKVM4LMn.js";import"./index-Dv5iqqQH.js";import"./useEventCallback-BJQewwS3.js";import"./SkeletonBar-D5JDKLXI.js";import"./LoadingCell-D3qvPcn9.js";import"./ColumnConfigDialog-D5mityMp.js";import"./DraggableList-DwY_-N0y.js";import"./search-D1X78FHj.js";import"./Input-Bt5W6Bbn.js";import"./useControlled-Q_YoD09k.js";import"./isEqual-DOXwneP4.js";import"./isObject-BxHU6UQF.js";import"./Button-MShjPJp1.js";import"./ActionButton-DuJUtkq_.js";import"./Checkbox-Bb7NREoy.js";import"./useValueChanged-DY3EsH1m.js";import"./CollapsiblePanel-DGnymJiI.js";import"./MultiColumnSortDialog-MmbiKaE0.js";import"./MenuTrigger-CVzLJINj.js";import"./CompositeItem-DT5prC13.js";import"./ToolbarRootContext-CleLhimn.js";import"./getDisabledMountTransitionStyles-CY8wd436.js";import"./getPseudoElementBounds-DjXgxs14.js";import"./chevron-down-CA1gmqiz.js";import"./index-DX-aKmrv.js";import"./error-JfXpK5Qu.js";import"./BaseCbacBanner-CXQ-Qa9l.js";import"./makeExternalStore-yqMU8E9S.js";import"./Tooltip-Drortw-b.js";import"./PopoverPopup-T4fSUWna.js";import"./toNumber-vKmWEYXE.js";import"./useOsdkClient-CAUBTODW.js";import"./tick-C6-DnUEq.js";import"./DropdownField-B4CCJs-u.js";import"./withOsdkMetrics-nuv42wTk.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
