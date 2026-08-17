import{f as p,j as e}from"./iframe-Dwq9wrDt.js";import{O as i}from"./object-table-C0ojvj8Q.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B1owdDsL.js";import"./Table-x4X088dP.js";import"./index-DH5QrWNc.js";import"./Dialog-Da6AXT6s.js";import"./cross-bOMperPh.js";import"./svgIconContainer-D0D9W8JM.js";import"./useBaseUiId-B7nN8GdQ.js";import"./InternalBackdrop-BIJmIlb_.js";import"./composite-CEGLGHiv.js";import"./index-D7NxJNil.js";import"./index-CP796jUP.js";import"./index-eQsJMTxi.js";import"./useEventCallback-B19JLpmu.js";import"./SkeletonBar-Dy6nnuXU.js";import"./LoadingCell-DjTJg32u.js";import"./ColumnConfigDialog-DCbw1UJH.js";import"./DraggableList-Z-EWa3FS.js";import"./search-BMSwG6Z-.js";import"./Input-Cx88AEdI.js";import"./useControlled-Fc1Z38Dl.js";import"./Button-D7JoiY-s.js";import"./small-cross-j8rJd5Xm.js";import"./ActionButton-Dr4qYGQO.js";import"./Checkbox-C4c4w8i1.js";import"./useValueChanged-CN4VeO_p.js";import"./CollapsiblePanel-CBIF_eeh.js";import"./MultiColumnSortDialog-B_xMJUsx.js";import"./MenuTrigger-DidvGjJV.js";import"./CompositeItem-C4EX3fG2.js";import"./ToolbarRootContext-D7rqNdCo.js";import"./getDisabledMountTransitionStyles-DLK9eHUM.js";import"./getPseudoElementBounds-DO-6sdCU.js";import"./chevron-down-BvKwnLh6.js";import"./index-C3biqhR2.js";import"./error-OKwjq5IS.js";import"./BaseCbacBanner-DinZMws6.js";import"./makeExternalStore-CaAgBHnr.js";import"./Tooltip-BzDmJOWp.js";import"./PopoverPopup-CV_eEi5d.js";import"./debounce-C4VhubKr.js";import"./useOsdkClient-Cr99Bnja.js";import"./tick-ARaqt1U4.js";import"./DropdownField-CQYHMIv6.js";import"./isEqual-FoUaro_7.js";import"./withOsdkMetrics-DWFHC7AK.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
