import{f as p,j as e}from"./iframe-BX_ZglJt.js";import{O as i}from"./object-table-BrfdoMYW.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DgkZQ_xq.js";import"./Table-D8_HSV8U.js";import"./index-Bc3Cl_41.js";import"./Dialog-Bu6-Kj-W.js";import"./cross-Bb6sq-qZ.js";import"./svgIconContainer-BXbbsTGb.js";import"./useBaseUiId-B1-OngoV.js";import"./InternalBackdrop-CVXRM7LX.js";import"./composite-zDdFGMPL.js";import"./index-f-SNNIDI.js";import"./index-DEXm8OLH.js";import"./index-Bymt254M.js";import"./useEventCallback-CY3efkIf.js";import"./SkeletonBar-OhTF8r69.js";import"./LoadingCell-jCSIzRv-.js";import"./ColumnConfigDialog-CVbQvdjb.js";import"./DraggableList-DYouQU8K.js";import"./search-fr7iJOod.js";import"./Input-Dhz0W6pJ.js";import"./useControlled-CJlGLYfk.js";import"./isEqual-CjhHFU-O.js";import"./isObject-DOPaAV0g.js";import"./Button-E6kiD0yr.js";import"./ActionButton-DOP9LOd9.js";import"./Checkbox-Blm_4ilg.js";import"./useValueChanged-D4-4-7b2.js";import"./CollapsiblePanel-BhOuAUWU.js";import"./MultiColumnSortDialog-Dzzs7tfF.js";import"./MenuTrigger-DoPJIVoM.js";import"./CompositeItem-nc6zMu_C.js";import"./ToolbarRootContext-DkSLh-9D.js";import"./getDisabledMountTransitionStyles-BysbxaoP.js";import"./getPseudoElementBounds-BPL1ZlaK.js";import"./chevron-down-Enjce5n9.js";import"./index-CEWEVwT2.js";import"./error-aw4kUWZA.js";import"./BaseCbacBanner-2hGgw6l3.js";import"./makeExternalStore-BMycxTdB.js";import"./Tooltip-DalQkWyU.js";import"./PopoverPopup-BsXM6vRc.js";import"./toNumber-DE4wMns7.js";import"./useOsdkClient-Duhffiqv.js";import"./tick-Dnu4AhpX.js";import"./DropdownField-DfSuo6wk.js";import"./withOsdkMetrics-CwOfdRmG.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
