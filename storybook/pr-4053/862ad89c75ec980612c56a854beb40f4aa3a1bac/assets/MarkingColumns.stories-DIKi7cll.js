import{f as p,j as e}from"./iframe-CrxwL2-E.js";import{O as i}from"./object-table-CdCKGQ1U.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D8KRM-Lu.js";import"./Table-B42d_fP5.js";import"./index-CnRzHgPn.js";import"./Dialog-D9K-Kurk.js";import"./cross-tJCZU9dn.js";import"./svgIconContainer-BZaQ0M_F.js";import"./useBaseUiId-CHWsF01c.js";import"./InternalBackdrop-DA84w9Xz.js";import"./composite-D_Dq2ROx.js";import"./index-Bk2-PvCo.js";import"./index-C9NLr5O0.js";import"./index-D9YXYt3K.js";import"./useEventCallback-BcRGgLnB.js";import"./SkeletonBar-BLCNwj4V.js";import"./LoadingCell-vFBraOHC.js";import"./ColumnConfigDialog-CiSmf7C5.js";import"./DraggableList-C3pcPIXV.js";import"./search-KIDsIAAK.js";import"./Input-WST8cByM.js";import"./useControlled-CMyIOoxO.js";import"./Button-BPy55ub1.js";import"./small-cross-CMkmo5Aj.js";import"./ActionButton-BQ5ayi6b.js";import"./Checkbox-BB2uWGgx.js";import"./useValueChanged-DuqgSL6S.js";import"./CollapsiblePanel-CEbB2UNo.js";import"./MultiColumnSortDialog-x4LFZ01l.js";import"./MenuTrigger-DA2hCRC6.js";import"./CompositeItem-DXFhogU1.js";import"./ToolbarRootContext-Bp3YN5W7.js";import"./getDisabledMountTransitionStyles-B7vaymp7.js";import"./getPseudoElementBounds-Dd8-3VJH.js";import"./chevron-down-DTO6IXlJ.js";import"./index-BrHupWVl.js";import"./error-CIWz4OVj.js";import"./BaseCbacBanner-BJR98Az1.js";import"./makeExternalStore-BiTIhgiy.js";import"./Tooltip-C8FjudTm.js";import"./PopoverPopup-CXhQbr-D.js";import"./debounce-DK8acQf4.js";import"./useOsdkClient-BA2LnazC.js";import"./tick-D-sBs8EZ.js";import"./DropdownField-BYVn9WPt.js";import"./isEqual-D0Kz1RWM.js";import"./withOsdkMetrics-CQbNyfnl.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
