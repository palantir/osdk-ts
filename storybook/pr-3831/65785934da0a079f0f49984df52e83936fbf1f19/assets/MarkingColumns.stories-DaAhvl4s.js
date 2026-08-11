import{f as p,j as e}from"./iframe-B3d6ZwH7.js";import{O as i}from"./object-table-DHY1G7-K.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BSBI65hL.js";import"./Table-EMbp9qdH.js";import"./index-Bij8j6CR.js";import"./Dialog-CMth_41-.js";import"./cross-BWneTCDr.js";import"./svgIconContainer-NJcm7Mm7.js";import"./useBaseUiId-C-tRhBps.js";import"./InternalBackdrop-MtcmWp1u.js";import"./composite-CtQhbIeo.js";import"./index-DtG__1M4.js";import"./index-Cq5tqX8Z.js";import"./index-BaAo3EAk.js";import"./useEventCallback-DHJr8SHC.js";import"./SkeletonBar-D-rn6Dfi.js";import"./LoadingCell-CW5g-UDB.js";import"./ColumnConfigDialog-BFQj8l3k.js";import"./DraggableList-DruqWd_M.js";import"./search-CAgN4ZC5.js";import"./Input-CsaNiGJD.js";import"./useControlled-D1Bg559p.js";import"./isEqual-BqptH2-7.js";import"./isObject-DLydvX67.js";import"./Button-B3hR3y0_.js";import"./ActionButton-Hr2tOkzN.js";import"./Checkbox-FgktjBXT.js";import"./useValueChanged-CVjEmZG9.js";import"./CollapsiblePanel-anJ0WyFl.js";import"./MultiColumnSortDialog-BTt4c4kR.js";import"./MenuTrigger-CMa-1yOV.js";import"./CompositeItem-DK8C0Auv.js";import"./ToolbarRootContext-DBcC0PM-.js";import"./getDisabledMountTransitionStyles-69HVwoW5.js";import"./getPseudoElementBounds-UhFrpM66.js";import"./chevron-down-B6cvH9xf.js";import"./index-C0kc6WcW.js";import"./error-C54s5z2j.js";import"./BaseCbacBanner-DuflPtV7.js";import"./makeExternalStore-BZfNFRrb.js";import"./Tooltip-YNGtfezR.js";import"./PopoverPopup-b_nrQR6B.js";import"./toNumber-DDtkQcvh.js";import"./useOsdkClient-DF-jB69e.js";import"./tick-uNBS6qe_.js";import"./DropdownField-Bll0nSYs.js";import"./withOsdkMetrics-__TOn-89.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
