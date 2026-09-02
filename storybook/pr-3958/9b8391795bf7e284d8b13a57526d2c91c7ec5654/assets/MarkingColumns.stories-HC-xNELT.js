import{f as p,j as e}from"./iframe-CV7MwmCP.js";import{O as i}from"./object-table-Cj1nijnb.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DaalMKrO.js";import"./Table-BJuxhHcS.js";import"./index-CcmSo4f0.js";import"./Dialog-BGtR0xP5.js";import"./cross-BCKmMZfz.js";import"./svgIconContainer-BUwlxwM3.js";import"./useBaseUiId-D02gbCJt.js";import"./InternalBackdrop-apLUccr2.js";import"./composite-C5wlKwIo.js";import"./index-Cbmw9Aiw.js";import"./index-DZAiGofL.js";import"./index-D1Ud-UQP.js";import"./useEventCallback-CBeA15IC.js";import"./SkeletonBar-B7jUP9zd.js";import"./LoadingCell-CnAgf7pz.js";import"./ColumnConfigDialog-BqSXyCAB.js";import"./DraggableList-ShbNYLF5.js";import"./search-ZA-JuIRw.js";import"./Input-LBPH7NI5.js";import"./useControlled-B_AlXpDe.js";import"./Button-DL3cpirA.js";import"./small-cross-CClaOzes.js";import"./ActionButton-DR2X-pvt.js";import"./Checkbox-_FZGFlQq.js";import"./useValueChanged-CgXUX70Z.js";import"./CollapsiblePanel-BHKHfMPs.js";import"./MultiColumnSortDialog-KMRCcWQd.js";import"./MenuTrigger-qmOJgo_k.js";import"./CompositeItem-DeeqYyog.js";import"./ToolbarRootContext-m0BDUoDq.js";import"./getDisabledMountTransitionStyles-dYTq3w9c.js";import"./getPseudoElementBounds-Dav5DWq0.js";import"./chevron-down-DSa8oKzx.js";import"./index-BT2TFY4S.js";import"./error-CMXtHiOW.js";import"./BaseCbacBanner-C3roT97X.js";import"./makeExternalStore-D2__KQ0O.js";import"./Tooltip-UQeFx1yB.js";import"./PopoverPopup-CtCkbput.js";import"./debounce-C_lpTgYJ.js";import"./useOsdkClient-C63pRinH.js";import"./tick-0LVn8dGI.js";import"./DropdownField-CaQvqdAI.js";import"./isEqual-DsMCDxpD.js";import"./withOsdkMetrics-B-y4GUW2.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
