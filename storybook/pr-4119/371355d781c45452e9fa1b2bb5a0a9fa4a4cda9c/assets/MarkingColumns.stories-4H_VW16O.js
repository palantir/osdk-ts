import{f as p,j as e}from"./iframe-CrH6Yrlk.js";import{O as i}from"./object-table-BPcfv3yy.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DWN1nqfF.js";import"./Table-CW_7u1wJ.js";import"./index-BLeB2LZ4.js";import"./Dialog-B2Toa9ee.js";import"./cross-Djpe7veO.js";import"./svgIconContainer-BOBFAYEP.js";import"./useBaseUiId-DxKrUPMo.js";import"./InternalBackdrop-tytdnIli.js";import"./composite-ffO3RfE4.js";import"./index-Dnjnym33.js";import"./index-BXkTUwMI.js";import"./index-DJX0kPHb.js";import"./useEventCallback-Df7dMb-i.js";import"./SkeletonBar-BggMzaAo.js";import"./LoadingCell-AZ9SDyIy.js";import"./ColumnConfigDialog-B63qw4h6.js";import"./DraggableList-4ck5OTAl.js";import"./search-C_RAyaII.js";import"./Input-CO-EhnoV.js";import"./useControlled-BHyUcUtS.js";import"./Button-ChVjuzMV.js";import"./small-cross-Cp0wS207.js";import"./ActionButton-CAVnXpdM.js";import"./Checkbox-Dq_71KbB.js";import"./useValueChanged-C8WmnglJ.js";import"./CollapsiblePanel-CNe4nG1I.js";import"./MultiColumnSortDialog-BeVa_ST7.js";import"./MenuTrigger-CVFoNL-1.js";import"./CompositeItem-BB8cOYaX.js";import"./ToolbarRootContext-BfVZ25NV.js";import"./getDisabledMountTransitionStyles-LOYR3VUX.js";import"./getPseudoElementBounds-ZRt3Q6Bd.js";import"./chevron-down-Do4cSabx.js";import"./index-ow98vrD3.js";import"./error-Bb5TXnmt.js";import"./BaseCbacBanner-C8xIu8HD.js";import"./makeExternalStore-CiLIO8iU.js";import"./Tooltip-DRTjcE2d.js";import"./PopoverPopup-BR1F8fHw.js";import"./debounce-rtZgYy1G.js";import"./useOsdkClient-JKeEr8fH.js";import"./tick-CQI3-0jK.js";import"./DropdownField-1LHzPopr.js";import"./isEqual-Df-8D6e-.js";import"./withOsdkMetrics-B1PE_2r3.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
