import{f as p,j as e}from"./iframe-CZ6tfr7m.js";import{O as i}from"./object-table-TeZXdzkG.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CkfrOY1H.js";import"./Table-iWuH7aB7.js";import"./index-DLNBYVnV.js";import"./Dialog-B_rsAA2N.js";import"./cross-CPXyH5jR.js";import"./svgIconContainer-Dvg9KYVw.js";import"./useBaseUiId-Cj6LeXHN.js";import"./InternalBackdrop-D2Gwq_Q6.js";import"./composite-BbwXcuXn.js";import"./index-DeteMldf.js";import"./index-BfO80qBP.js";import"./index-DnDjlS1X.js";import"./useEventCallback-CbplXCH5.js";import"./SkeletonBar-CXPy7H-j.js";import"./LoadingCell-CHo40OKN.js";import"./ColumnConfigDialog-CiBeubIz.js";import"./DraggableList-D0IfMbFy.js";import"./search-ztvSGVr9.js";import"./Input-BkVAz5rQ.js";import"./useControlled-BvU1uW5X.js";import"./Button-3RbWO35b.js";import"./small-cross-uWgOqzJ0.js";import"./ActionButton-f-TJoADH.js";import"./Checkbox-DL5Bo1P_.js";import"./useValueChanged-CyVp-7ed.js";import"./CollapsiblePanel-CN460M1M.js";import"./MultiColumnSortDialog-CkONUFM2.js";import"./MenuTrigger-CVtTCyS5.js";import"./CompositeItem-Cl5PbTL3.js";import"./ToolbarRootContext-CRrNmffx.js";import"./getDisabledMountTransitionStyles-iXD11Bdm.js";import"./getPseudoElementBounds-ClrkBtWE.js";import"./chevron-down-DVcYPRuD.js";import"./index-DtElecf-.js";import"./error-d7pkadgS.js";import"./BaseCbacBanner-Dpr6VJnk.js";import"./makeExternalStore-D-O-FofH.js";import"./Tooltip-XgUBv2UC.js";import"./PopoverPopup-spGWFYuF.js";import"./debounce-C_YW27Xf.js";import"./useOsdkClient-BF1kH45K.js";import"./tick-DoJkCuSU.js";import"./DropdownField-BZy1OgIR.js";import"./isEqual-DSvGACqO.js";import"./withOsdkMetrics-B2DbhWLJ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
