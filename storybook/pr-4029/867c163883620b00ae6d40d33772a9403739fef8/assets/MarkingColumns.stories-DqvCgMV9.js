import{f as p,j as e}from"./iframe-Elh15CPO.js";import{O as i}from"./object-table-DmOwYA3a.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Df_Un8ev.js";import"./Table-CAK4NNbF.js";import"./index-DTYWX8Gd.js";import"./Dialog-CeSL8zDR.js";import"./cross-W2wOrtb4.js";import"./svgIconContainer-BzS94m4s.js";import"./useBaseUiId-DnwRjc07.js";import"./InternalBackdrop-DMjCkzTC.js";import"./composite-BSEtTnKL.js";import"./index-Doj8EHeU.js";import"./index-DPHcjEKY.js";import"./index-DWJg2tV_.js";import"./useEventCallback-DN9b37tD.js";import"./SkeletonBar-C40l-VqG.js";import"./LoadingCell-wEUeQ0dk.js";import"./ColumnConfigDialog-aE5C0mPI.js";import"./DraggableList-DCxwSfnC.js";import"./search-O3qV3BZP.js";import"./Input-C_Udp-5V.js";import"./useControlled-enifNsDV.js";import"./Button-D4CjXtEU.js";import"./small-cross-BRdYRDe1.js";import"./ActionButton-DAxrmY5m.js";import"./Checkbox-DFLi9i_0.js";import"./useValueChanged-CY4pDDqC.js";import"./CollapsiblePanel-BuwRJmVL.js";import"./MultiColumnSortDialog-BOZsKGUG.js";import"./MenuTrigger-Bo9Jct4u.js";import"./CompositeItem-CzwKTDvK.js";import"./ToolbarRootContext--FtOM0jf.js";import"./getDisabledMountTransitionStyles-BZhGmJyD.js";import"./getPseudoElementBounds-DHu47n9G.js";import"./chevron-down-vAkfWkS9.js";import"./index-B3O3SB4a.js";import"./error-B_1KE3-h.js";import"./BaseCbacBanner-B-e4n9MM.js";import"./makeExternalStore-DrH3viZo.js";import"./Tooltip-CDuc6-QX.js";import"./PopoverPopup-CmeyaCH5.js";import"./debounce-BkKFILxU.js";import"./useOsdkClient-CBxlc9T9.js";import"./tick-K9jJxqF2.js";import"./DropdownField-CL6X_FSf.js";import"./isEqual-BfoLWsoX.js";import"./withOsdkMetrics-SkuWgDWO.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
