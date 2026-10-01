import{f as p,j as e}from"./iframe-CQcaQGvw.js";import{O as i}from"./object-table-DpmmZmB6.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bpr-Zbmh.js";import"./Table-CS63qZ4Y.js";import"./index-DEOxmfRe.js";import"./Dialog-D-oFZX2x.js";import"./cross-KHNb9CvK.js";import"./svgIconContainer-BlwZok7B.js";import"./useBaseUiId-VAYeRdVB.js";import"./InternalBackdrop-Dk9Ect_q.js";import"./composite-CIfh6Bad.js";import"./index-B-ZM_tXu.js";import"./index-B9xnj9RD.js";import"./index-Cybk3Ne2.js";import"./useEventCallback-CArEIpoN.js";import"./SkeletonBar-DwEmvlQd.js";import"./LoadingCell-w0AlfgOa.js";import"./ColumnConfigDialog-BwA-ArwO.js";import"./DraggableList-DcjcrWwB.js";import"./search-D2m2i9E6.js";import"./Input-9-R4IQfH.js";import"./useControlled-67ajb_bK.js";import"./Button-8-6PGj6n.js";import"./small-cross-CdN_p7Hi.js";import"./ActionButton-DflWWN5i.js";import"./Checkbox-CVnS3BL9.js";import"./useValueChanged-DbtSKH0N.js";import"./CollapsiblePanel-DYXFBbIc.js";import"./MultiColumnSortDialog-DyV5ZdCf.js";import"./MenuTrigger-BgDkquvz.js";import"./CompositeItem-C3IvhL6b.js";import"./ToolbarRootContext-BXhcIhdf.js";import"./getDisabledMountTransitionStyles-DWvIpLbT.js";import"./getPseudoElementBounds-CIy0YkKg.js";import"./chevron-down-B_FXfQYl.js";import"./index-BEjLsBGv.js";import"./error-CUpk6v7r.js";import"./BaseCbacBanner-DqU4exPy.js";import"./makeExternalStore-Ms4Ce4yr.js";import"./Tooltip-D_Sh4Nii.js";import"./PopoverPopup-G1jUpOgq.js";import"./debounce-DSy6HMAr.js";import"./useOsdkClient-BuGTS-D_.js";import"./tick-CvubQLo2.js";import"./DropdownField-Cvh6eOlG.js";import"./isEqual-B1uid1yF.js";import"./withOsdkMetrics-gr6PUNKA.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
