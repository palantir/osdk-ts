import{f as p,j as e}from"./iframe-k4h-5zzl.js";import{O as i}from"./object-table-C2yKQEWd.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CtKZFjaH.js";import"./Table-BEzBRGaA.js";import"./index-BqMGnRYo.js";import"./Dialog-JSocsRSD.js";import"./cross-_-Hiavhb.js";import"./svgIconContainer-COv1P89T.js";import"./useBaseUiId-jXgPCs5e.js";import"./InternalBackdrop-E50mckX1.js";import"./composite-C8LN18L7.js";import"./index-CqUB9DPW.js";import"./index-CeeqzFnD.js";import"./index-BLgIIQqj.js";import"./useEventCallback-C3AU7ikd.js";import"./SkeletonBar-B8X7Dg-I.js";import"./LoadingCell-CVCKnx3u.js";import"./ColumnConfigDialog-DWERtKzT.js";import"./DraggableList-disF6sN5.js";import"./search-BfpwWXDM.js";import"./Input-BdF0e0te.js";import"./useControlled-lQPc9a7B.js";import"./isEqual-DmCchOke.js";import"./isObject-DNpkteE9.js";import"./Button-jv54QSri.js";import"./ActionButton-DEKn2Fl9.js";import"./Checkbox-D7U9KJV5.js";import"./useValueChanged-DYU7rwFM.js";import"./CollapsiblePanel-fBgkiNgc.js";import"./MultiColumnSortDialog-DMNX2-TD.js";import"./MenuTrigger-CTPTlFBs.js";import"./CompositeItem--mieVhVv.js";import"./ToolbarRootContext-DfExoWCc.js";import"./getDisabledMountTransitionStyles-B8ZfNRE7.js";import"./getPseudoElementBounds-BUffwn3y.js";import"./chevron-down-ChMPz-sA.js";import"./index-LVBzDTR0.js";import"./error-CSB6JE83.js";import"./BaseCbacBanner-CsOVPx00.js";import"./makeExternalStore-CzTCHZeg.js";import"./Tooltip-mS1EPd01.js";import"./PopoverPopup-CD-8joZi.js";import"./toNumber-MNRZo_Bl.js";import"./useOsdkClient-Bxt3gioy.js";import"./tick-CUi7ejXl.js";import"./DropdownField-ngKjr3WT.js";import"./withOsdkMetrics-DOza_dhj.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
