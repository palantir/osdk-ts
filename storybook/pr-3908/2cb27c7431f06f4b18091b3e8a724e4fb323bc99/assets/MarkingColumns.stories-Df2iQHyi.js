import{f as p,j as e}from"./iframe-jVZSa0_O.js";import{O as i}from"./object-table-pRHX98Mv.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B0JsgF0Q.js";import"./Table-nVgjXAUi.js";import"./index-cz87o1u2.js";import"./Dialog-DVswX8WH.js";import"./cross-D_kf2VMY.js";import"./svgIconContainer-CCkoUGO-.js";import"./useBaseUiId-Dh7cbX1i.js";import"./InternalBackdrop-CNizCF8V.js";import"./composite-B1R1VOU-.js";import"./index-CFlWgQDO.js";import"./index-DRJcVra2.js";import"./index-D68UoJcu.js";import"./useEventCallback-BFzCFepw.js";import"./SkeletonBar-D52KZgWC.js";import"./LoadingCell-xEbKxsbK.js";import"./ColumnConfigDialog-CSIk7lHh.js";import"./DraggableList-gx-jNQAx.js";import"./search-y5GiQxVJ.js";import"./Input-DE-dqgbb.js";import"./useControlled-PPoFg-g2.js";import"./Button-ruj5eHNw.js";import"./small-cross-DW-_vWg4.js";import"./ActionButton-MDw6R0lF.js";import"./Checkbox-7WJWAj1Q.js";import"./useValueChanged-lRBuZxnF.js";import"./CollapsiblePanel-BwEkY4as.js";import"./MultiColumnSortDialog-DOQ54144.js";import"./MenuTrigger-ClD5MLDz.js";import"./CompositeItem-Bdw-jz1U.js";import"./ToolbarRootContext-W1O_4HxY.js";import"./getDisabledMountTransitionStyles-CPsauNSR.js";import"./getPseudoElementBounds-CZyxgjLi.js";import"./chevron-down-vgR9jQm9.js";import"./index-DprOP2mE.js";import"./error-BkWT_eOO.js";import"./BaseCbacBanner-DOO_uje4.js";import"./makeExternalStore-D0xCnJrG.js";import"./Tooltip-nvYgD8vA.js";import"./PopoverPopup-BkH3GWX-.js";import"./debounce-29zvw66V.js";import"./useOsdkClient-DXW6J2KM.js";import"./tick-y1p0xcrN.js";import"./DropdownField-B7ayEcBh.js";import"./isEqual-kMY5ydKZ.js";import"./withOsdkMetrics-C6vVTJkI.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
