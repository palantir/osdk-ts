import{f as p,j as e}from"./iframe-DljkNNxK.js";import{O as i}from"./object-table-BRthzJfl.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cpo1q_i6.js";import"./Table-By3tnqQM.js";import"./index-D64RJmhP.js";import"./Dialog-DBv0k4xP.js";import"./cross-BC6Bgo8V.js";import"./svgIconContainer-CnhwGfa6.js";import"./useBaseUiId-BDewQ6nf.js";import"./InternalBackdrop-Bvu56fjL.js";import"./composite-GUx361Ly.js";import"./index-BwvPIv6E.js";import"./index-DVoFeU9w.js";import"./index-Bwjaz__m.js";import"./useEventCallback-kYW6J0ZS.js";import"./SkeletonBar-C5t-2Ut2.js";import"./LoadingCell-BC3NZk02.js";import"./ColumnConfigDialog-Ctnm6Zhp.js";import"./DraggableList-DgptIJm8.js";import"./search-CviN7Quw.js";import"./Input-C1T-Uord.js";import"./useControlled-Chg_haxJ.js";import"./Button-sFRd8YxN.js";import"./small-cross-uYb4a6-f.js";import"./ActionButton-WkEm3I4L.js";import"./Checkbox-D0824Hq2.js";import"./useValueChanged-DZsMbhXQ.js";import"./CollapsiblePanel-DYjSn6NE.js";import"./MultiColumnSortDialog-DDc1iF_d.js";import"./MenuTrigger-5WPZqihD.js";import"./CompositeItem-asw0sP3K.js";import"./ToolbarRootContext-DT3K0tIr.js";import"./getDisabledMountTransitionStyles-ClRtvzpg.js";import"./getPseudoElementBounds-0bgPiDkB.js";import"./chevron-down-TeUlP9Ri.js";import"./index-IcPHFoqD.js";import"./error-M6Q45Sy0.js";import"./BaseCbacBanner-BFqmynFx.js";import"./makeExternalStore-CQCn-_eJ.js";import"./Tooltip-DDI1N6qC.js";import"./PopoverPopup-ABlhCtw7.js";import"./debounce-v1jWqcH4.js";import"./useOsdkClient-BkCV2xv_.js";import"./tick-BHidfImn.js";import"./DropdownField-BJcI8ciq.js";import"./isEqual-DZhrb1Kx.js";import"./withOsdkMetrics-DgcAshrM.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
