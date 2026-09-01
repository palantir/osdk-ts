import{f as p,j as e}from"./iframe-DUz-OrqR.js";import{O as i}from"./object-table-w0417WkP.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-WEmf-dAi.js";import"./Table-C5BdWZ0N.js";import"./index-DPNIRnN8.js";import"./Dialog-CWBU6oUQ.js";import"./cross-CCEYas7q.js";import"./svgIconContainer-D7O_Fxw5.js";import"./useBaseUiId-faWN6al-.js";import"./InternalBackdrop-CdDLYcsS.js";import"./composite-5JSlF-Dr.js";import"./index-DYvQRBeB.js";import"./index-BiD7WpJZ.js";import"./index-qR442l2c.js";import"./useEventCallback-CxMtqjaM.js";import"./SkeletonBar-rNAt0bnX.js";import"./LoadingCell-BvcwRBBv.js";import"./ColumnConfigDialog-qGz8PZyw.js";import"./DraggableList-CvNJjWPn.js";import"./search-Bcz0i2pz.js";import"./Input-CbwTlgOh.js";import"./useControlled-CC5aVJEJ.js";import"./Button-CsUtrvR7.js";import"./small-cross-pWPsHnHo.js";import"./ActionButton-vQiUWj7m.js";import"./Checkbox-B3k8RFLk.js";import"./useValueChanged-B2lWda7M.js";import"./CollapsiblePanel-C8CGDA5F.js";import"./MultiColumnSortDialog-D7e9qUsI.js";import"./MenuTrigger-D34Pbt_d.js";import"./CompositeItem-C7hFkHG3.js";import"./ToolbarRootContext-BvHshB_C.js";import"./getDisabledMountTransitionStyles-JWaj6cbB.js";import"./getPseudoElementBounds-ckg5Ie2k.js";import"./chevron-down-b_QMdGXW.js";import"./index-BwuUX6bY.js";import"./error-DKqly0Za.js";import"./BaseCbacBanner-DNIMwCRS.js";import"./makeExternalStore-D6Z3VA3j.js";import"./Tooltip-5zdjkf3a.js";import"./PopoverPopup-BhZaHO9j.js";import"./debounce-tuaMCDN5.js";import"./useOsdkClient-BWsNL_Kz.js";import"./tick-Bni8E4-n.js";import"./DropdownField-RUWE0tyk.js";import"./isEqual-tNX8jUnb.js";import"./withOsdkMetrics-DJx9VGp_.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
