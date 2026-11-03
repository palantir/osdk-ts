import{f as p,j as e}from"./iframe-C_eR_-FB.js";import{O as i}from"./object-table-RihnLn09.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D-iMj1JN.js";import"./Table-C8AAoGWT.js";import"./index-B5oDC2JQ.js";import"./Dialog-DSHxwALU.js";import"./cross-6THvcyRY.js";import"./svgIconContainer-CBJV4Tnn.js";import"./useBaseUiId-DHfbjF6K.js";import"./InternalBackdrop-CtVeclCs.js";import"./composite-CRpQuKDa.js";import"./index-JDCvzA9U.js";import"./index-C5Q3HutH.js";import"./index-C-Ct-Q1O.js";import"./useEventCallback-BSdQRjPY.js";import"./SkeletonBar-Dfyf_j8b.js";import"./LoadingCell-Dzl-OGae.js";import"./ColumnConfigDialog-UAE2sEv4.js";import"./DraggableList-VCR2ruyb.js";import"./search-BSm0Tn1z.js";import"./Input-DTI33c7U.js";import"./useControlled-BEI1fcJ3.js";import"./Button-D3eF3jJ4.js";import"./small-cross-CwIjWKJl.js";import"./ActionButton-C4NITY81.js";import"./Checkbox-DEDdXE32.js";import"./useValueChanged-D_PYMBeT.js";import"./CollapsiblePanel-5toXnu5d.js";import"./MultiColumnSortDialog-DRtR-Qs7.js";import"./MenuTrigger-kVlqUuN-.js";import"./CompositeItem-DORzwzYw.js";import"./ToolbarRootContext-MiWSvMtv.js";import"./getDisabledMountTransitionStyles-DyVQfBpM.js";import"./getPseudoElementBounds-DFY51yDa.js";import"./chevron-down-CYhIscH3.js";import"./index-DsvrxdPz.js";import"./error-BIKnaXwT.js";import"./BaseCbacBanner-PTKqEeHs.js";import"./makeExternalStore-DsUjsZj2.js";import"./Tooltip-BO3iXvgP.js";import"./PopoverPopup-BaCYp8dE.js";import"./debounce-BNBceRVR.js";import"./useOsdkClient-UY9KdTa_.js";import"./tick-C_kX7tnK.js";import"./DropdownField-BuvpvRO7.js";import"./isEqual-CGCncotN.js";import"./withOsdkMetrics-D4cys7NY.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
