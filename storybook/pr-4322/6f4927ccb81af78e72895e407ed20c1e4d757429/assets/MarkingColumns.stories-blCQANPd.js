import{f as p,j as e}from"./iframe-BvgKvBTT.js";import{O as i}from"./object-table-C04Tld44.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-dVfNiIKn.js";import"./Table-BGGRw821.js";import"./index-C6P12W9x.js";import"./Dialog-BS5nOE0N.js";import"./cross-Dgfh0hI8.js";import"./svgIconContainer-BZvKBCv0.js";import"./useRenderElement-BFIknrE2.js";import"./InternalBackdrop-m0dkTmEO.js";import"./composite-DfJtFIGD.js";import"./useBaseUiId-DWfZ2Kad.js";import"./index-yqy4XRqT.js";import"./index-BzjqKOq7.js";import"./index-CbHQFypX.js";import"./useEventCallback-DNmABAT6.js";import"./SkeletonBar-CFhg6IWc.js";import"./LoadingCell-CkyPVhhc.js";import"./ColumnConfigDialog-D-sng6Hl.js";import"./DraggableList-if29BgfX.js";import"./search-B95gAtiZ.js";import"./Input-B8f6lg4l.js";import"./useControlled-B2MP0s-G.js";import"./Button-CZUmTkhK.js";import"./small-cross-Clug_Kd9.js";import"./ActionButton-Db7nx97v.js";import"./Checkbox-hWqlZ6BH.js";import"./useValueChanged-BPblXw96.js";import"./CollapsiblePanel-DMDnXz2U.js";import"./MultiColumnSortDialog-CU8CNUw8.js";import"./MenuTrigger-DiZ3O7sE.js";import"./CompositeItem-xDL0fAk1.js";import"./ToolbarRootContext-C5CAj_EH.js";import"./getDisabledMountTransitionStyles-DXQCvg3E.js";import"./getPseudoElementBounds-Cjaf3AfS.js";import"./chevron-down-Df3bql-T.js";import"./index-Da4z4C_A.js";import"./error-B-n6_xad.js";import"./BaseCbacBanner-D1FH96H4.js";import"./makeExternalStore-DebjiHh_.js";import"./Tooltip-CjqFaYRm.js";import"./PopoverPopup-P8XecnKG.js";import"./debounce-Kd32bTE8.js";import"./useOsdkClient-B-GUKLiD.js";import"./tick-UIVz0HQr.js";import"./DropdownField-DGHHzxif.js";import"./isEqual-m-6wbeTE.js";import"./withOsdkMetrics-D0FOqMKK.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};
