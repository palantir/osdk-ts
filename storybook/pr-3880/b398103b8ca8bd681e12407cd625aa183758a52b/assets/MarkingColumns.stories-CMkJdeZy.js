import{f as p,j as e}from"./iframe-iQYe401C.js";import{O as i}from"./object-table-CQAKZvn7.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BJxdJnS2.js";import"./Table-CZW6W3yy.js";import"./index-Cj4wtDol.js";import"./Dialog-CBrFYyiH.js";import"./cross-TYvUZ_zv.js";import"./svgIconContainer-D--fuUS3.js";import"./useBaseUiId-BaHVsYFy.js";import"./InternalBackdrop-S4bmd6Lm.js";import"./composite-XRaaCNpo.js";import"./index-CdUd9ljx.js";import"./index-CRQmWOJF.js";import"./index-BXM3Dfw8.js";import"./useEventCallback-DBxYjDu9.js";import"./SkeletonBar-DvhrPwLx.js";import"./LoadingCell-B7vN1qdl.js";import"./ColumnConfigDialog-4i9wvyxB.js";import"./DraggableList-COk6-1af.js";import"./search-B3fBbeLu.js";import"./Input-BwZPvKdY.js";import"./useControlled-DFWRskTz.js";import"./Button-Cg1RHP_F.js";import"./small-cross-CU5ZGaMO.js";import"./ActionButton-BGE_oPjS.js";import"./Checkbox-Dwil23Ps.js";import"./useValueChanged-Dc317jR-.js";import"./CollapsiblePanel-BZFSURwn.js";import"./MultiColumnSortDialog-CJozMRHX.js";import"./MenuTrigger-DN5oXxmx.js";import"./CompositeItem-CnHJu7Fq.js";import"./ToolbarRootContext-Qv2LHZju.js";import"./getDisabledMountTransitionStyles-BornKuZB.js";import"./getPseudoElementBounds-SeQsgf4Z.js";import"./chevron-down-CJ48f6Cy.js";import"./index-BtxoyDek.js";import"./error-5BtLRQh_.js";import"./BaseCbacBanner-CB5UjwFo.js";import"./makeExternalStore-CHwacdcE.js";import"./Tooltip-sxUSyvW-.js";import"./PopoverPopup-BxUICyhU.js";import"./debounce-BzmjoLzO.js";import"./useOsdkClient-CZTlJRJQ.js";import"./tick-BFnnzHdi.js";import"./DropdownField-BLF6TyfM.js";import"./isEqual-DiXstpw3.js";import"./withOsdkMetrics-BYb2lN1I.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
