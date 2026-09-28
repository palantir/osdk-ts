import{f as p,j as e}from"./iframe-Ee2tiFng.js";import{O as i}from"./object-table-CUw1D6id.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CtRzgCKY.js";import"./Table-B3fwPJtk.js";import"./index-BycdD30l.js";import"./Dialog-CY7xbifw.js";import"./cross-Brhn2tbY.js";import"./svgIconContainer-DBeRHNA7.js";import"./useBaseUiId-Be0iYuTZ.js";import"./InternalBackdrop-CVHBMFpq.js";import"./composite-DV6J8ilo.js";import"./index-JJBCSCXl.js";import"./index-BedpPbbM.js";import"./index-Dk4tKx0P.js";import"./useEventCallback-BNXOMRrJ.js";import"./SkeletonBar-DHXhmo2J.js";import"./LoadingCell-BGlWi5gD.js";import"./ColumnConfigDialog-YeIH7uni.js";import"./DraggableList-DZrBBiAh.js";import"./search-CiSU3HM-.js";import"./Input-QNUgM8xD.js";import"./useControlled-BncLGICw.js";import"./Button-CwIbjmyl.js";import"./small-cross-DuTxQXWE.js";import"./ActionButton-CxqAcUWU.js";import"./Checkbox-C4V2bg8B.js";import"./useValueChanged-PsyQRqEw.js";import"./CollapsiblePanel-BuxKyO81.js";import"./MultiColumnSortDialog-CRwNlqwB.js";import"./MenuTrigger-t9pTxsRD.js";import"./CompositeItem-CLuGmXNA.js";import"./ToolbarRootContext-DJCzTPIr.js";import"./getDisabledMountTransitionStyles-BMpNISPy.js";import"./getPseudoElementBounds-BmhfqGEc.js";import"./chevron-down-CvL73yqq.js";import"./index-DKxbLgfs.js";import"./error-DM4M2_Dk.js";import"./BaseCbacBanner-zBwS6jbd.js";import"./makeExternalStore-BrNx43tP.js";import"./Tooltip-B-8atzAY.js";import"./PopoverPopup-DQm-H_D6.js";import"./debounce-mCmNNuAo.js";import"./useOsdkClient-B-Ywo9RD.js";import"./tick-vr1mqfrV.js";import"./DropdownField-Cn7UYlie.js";import"./isEqual-BpM4g_Rz.js";import"./withOsdkMetrics-D0H1MUTi.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
