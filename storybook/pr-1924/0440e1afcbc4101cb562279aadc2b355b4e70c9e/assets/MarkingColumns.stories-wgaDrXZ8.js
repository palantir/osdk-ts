import{f as p,j as e}from"./iframe-DHWh16X0.js";import{O as i}from"./object-table-DAbsA5PW.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CsMbAkrZ.js";import"./Table-B_H74Mo5.js";import"./index-EFIkBK0s.js";import"./Dialog-DOovsxfV.js";import"./cross-BclIt3wI.js";import"./svgIconContainer-QMaziiJ4.js";import"./useBaseUiId-CXEibAEQ.js";import"./InternalBackdrop-iZCd9FIB.js";import"./composite-tY4yE9Ik.js";import"./index-DZ3wCjjT.js";import"./index-BzT39WQ1.js";import"./index-OHk2TEvp.js";import"./useEventCallback-CFsJyHsQ.js";import"./SkeletonBar-BlJYFG81.js";import"./LoadingCell-Bz3wen_t.js";import"./ColumnConfigDialog-C2uZ7fP0.js";import"./DraggableList-D8z_FKqA.js";import"./search-CVsDG0lr.js";import"./Input-CErdghMM.js";import"./useControlled-Do1VjKsf.js";import"./Button-kRRLhT0h.js";import"./small-cross-BFNfkq-P.js";import"./ActionButton-GS4dBomP.js";import"./Checkbox-BAcXSDKE.js";import"./useValueChanged-B_yuBVxb.js";import"./CollapsiblePanel-C2dptN9G.js";import"./MultiColumnSortDialog-DzDXjAjN.js";import"./MenuTrigger-C8U6EMiR.js";import"./CompositeItem-DpZ7DPTP.js";import"./ToolbarRootContext-BomQbyQ9.js";import"./getDisabledMountTransitionStyles-CoX1zJYc.js";import"./getPseudoElementBounds-CvyqUhgM.js";import"./chevron-down-Co2wTi8S.js";import"./index-BrQ95iqV.js";import"./error-06ET36ME.js";import"./BaseCbacBanner-DhCUB6kw.js";import"./makeExternalStore-CRShQ3yp.js";import"./Tooltip-B04aXvOe.js";import"./PopoverPopup-X70xNO2C.js";import"./debounce-Db6BCj8m.js";import"./useOsdkClient-BmUHRCNB.js";import"./tick-D83m4_aJ.js";import"./DropdownField-Bak4Vaav.js";import"./isEqual-Bl3OYj3-.js";import"./withOsdkMetrics-C4DH-JGk.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
