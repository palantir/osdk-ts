import{f as p,j as e}from"./iframe-DkUlyVAk.js";import{O as i}from"./object-table-wcCDtGcD.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Do3rx7tx.js";import"./Table-BuAXuDdk.js";import"./index-BKCxouDT.js";import"./Dialog-t8PP7gAK.js";import"./cross-NxNK5LVM.js";import"./svgIconContainer-DXdte7hC.js";import"./useBaseUiId-Ct2lb7hy.js";import"./InternalBackdrop-JtvBqmbW.js";import"./composite-DFkzp6xD.js";import"./index-C2qK1saS.js";import"./index-D2D5ykmi.js";import"./index-BHWhvKcH.js";import"./useEventCallback-Bfg-1dtD.js";import"./SkeletonBar-DrTF8jwx.js";import"./LoadingCell-CzBDsbnw.js";import"./ColumnConfigDialog-DzLhLwGL.js";import"./DraggableList-Zj2AdCb7.js";import"./search-BtZqzqFW.js";import"./Input-DEfnyfO2.js";import"./useControlled-DQwmvUO6.js";import"./Button-YTCf-lQa.js";import"./small-cross-CBmGUiw6.js";import"./ActionButton-CGCXefcq.js";import"./Checkbox-D-KL8GQC.js";import"./useValueChanged-Bwz98CW8.js";import"./CollapsiblePanel-CWIE3b7e.js";import"./MultiColumnSortDialog-CelZgdCc.js";import"./MenuTrigger-D-7KzGK2.js";import"./CompositeItem-C6x4Plfg.js";import"./ToolbarRootContext-H2xpDF0U.js";import"./getDisabledMountTransitionStyles-D2mnHFL5.js";import"./getPseudoElementBounds-DgjJtdNO.js";import"./chevron-down-C8H-X29U.js";import"./index-2N4Mch0O.js";import"./error-Cxkq3yoq.js";import"./BaseCbacBanner-CvVoV4NY.js";import"./makeExternalStore-CrMBheh9.js";import"./Tooltip-BZdoNmX1.js";import"./PopoverPopup-CjNS0jhO.js";import"./debounce-BrUJ1qZS.js";import"./useOsdkClient-DcaeD6xA.js";import"./tick-xV8dN8GT.js";import"./DropdownField-Bqc5sgH5.js";import"./isEqual-uuZQYH9j.js";import"./withOsdkMetrics-_-mYkqh_.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
