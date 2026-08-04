import{f as p,j as e}from"./iframe-BuzOoOHv.js";import{O as i}from"./object-table-CvbZDzOi.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C765uWVj.js";import"./Table-B8zOSGXI.js";import"./index-_6ysS2yV.js";import"./Dialog-C2Q4iKQk.js";import"./cross-BV3IGYpC.js";import"./svgIconContainer-SORA5KtX.js";import"./useBaseUiId-DqalFV8v.js";import"./InternalBackdrop-BtuRLE2O.js";import"./composite-BIVAp0zR.js";import"./index-DCrRq_5A.js";import"./index-hW3Ke2NY.js";import"./index-jehAm6Kk.js";import"./useEventCallback-bOVx3wI8.js";import"./SkeletonBar-O0oSg_B7.js";import"./LoadingCell-CRfMmV_r.js";import"./ColumnConfigDialog-BkRlh8kU.js";import"./DraggableList-tTG2ePWi.js";import"./search-DqLYnKdd.js";import"./Input-BO7emUuh.js";import"./useControlled-uHrHxuUf.js";import"./isEqual-3xf8jPCh.js";import"./isObject-Bvw6a01i.js";import"./Button-D1sJFP36.js";import"./ActionButton-ThhIHAJM.js";import"./Checkbox-BUs9gT7T.js";import"./useValueChanged-Emqhaa8x.js";import"./CollapsiblePanel-BnQCoUWm.js";import"./MultiColumnSortDialog-9Fqkz69M.js";import"./MenuTrigger-DsVfygqB.js";import"./CompositeItem-TlDrHws6.js";import"./ToolbarRootContext-jg392USi.js";import"./getDisabledMountTransitionStyles-BvPtMGe8.js";import"./getPseudoElementBounds-BUW3HczB.js";import"./chevron-down-CTN4fjxa.js";import"./index-9Om4LNln.js";import"./error-h4XEWJuh.js";import"./BaseCbacBanner-BuJZW5To.js";import"./makeExternalStore-CsXJf4mV.js";import"./Tooltip-BPMSggV3.js";import"./PopoverPopup-DwCdko6-.js";import"./toNumber-C0gEFUc5.js";import"./useOsdkClient-BVdLtTfj.js";import"./tick-AKA0MUCM.js";import"./DropdownField-CiJb6Zx4.js";import"./withOsdkMetrics-BAnTF50z.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
