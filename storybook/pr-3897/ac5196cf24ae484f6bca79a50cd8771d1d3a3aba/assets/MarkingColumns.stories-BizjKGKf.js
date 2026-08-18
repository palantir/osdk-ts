import{f as p,j as e}from"./iframe-Bk-88sEf.js";import{O as i}from"./object-table-DLbz3v7t.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DvYlXxAP.js";import"./Table-w2KwEraW.js";import"./index-CdHmGUcS.js";import"./Dialog-Cse2Ob6V.js";import"./cross-CzjMymPe.js";import"./svgIconContainer-CJ_w5BhJ.js";import"./useBaseUiId-DES5vLxx.js";import"./InternalBackdrop-2wnNc0zw.js";import"./composite-BXvRBvIS.js";import"./index-DGx-W2pO.js";import"./index-6f90H5TT.js";import"./index-BR7LTQOs.js";import"./useEventCallback-DqbTsOIO.js";import"./SkeletonBar-CyJN-Xjm.js";import"./LoadingCell-R780WQSC.js";import"./ColumnConfigDialog-DpSlK8Z8.js";import"./DraggableList-c_O2vsqv.js";import"./search-Cyt-_x8X.js";import"./Input-U7zXtF1y.js";import"./useControlled-Cf_AiB9R.js";import"./Button-DB1Qd4Ey.js";import"./small-cross-DaPzMpTC.js";import"./ActionButton-BJA2YejZ.js";import"./Checkbox-B9A5gIer.js";import"./useValueChanged-woSaOMyv.js";import"./CollapsiblePanel-wakff4ru.js";import"./MultiColumnSortDialog-CZyyzg1l.js";import"./MenuTrigger-BnRYX-HV.js";import"./CompositeItem-DFySnHOB.js";import"./ToolbarRootContext-CXOIvMk7.js";import"./getDisabledMountTransitionStyles-laX3tK9e.js";import"./getPseudoElementBounds-DToJELRK.js";import"./chevron-down-BZoWzWGC.js";import"./index-CowKu27H.js";import"./error-2_AseInf.js";import"./BaseCbacBanner-D4QCiXA1.js";import"./makeExternalStore-OahYSLFz.js";import"./Tooltip-CTK12_Si.js";import"./PopoverPopup-BuuLyK1V.js";import"./debounce-BH4BBh9a.js";import"./useOsdkClient-p7Hx3gk-.js";import"./tick-CO3pOylc.js";import"./DropdownField-pgFmM9K7.js";import"./isEqual-BijyGCHx.js";import"./withOsdkMetrics-CcAilitW.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
