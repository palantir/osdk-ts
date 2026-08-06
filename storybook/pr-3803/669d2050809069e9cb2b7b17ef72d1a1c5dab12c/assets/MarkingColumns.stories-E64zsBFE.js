import{f as p,j as e}from"./iframe-Brj9Sbid.js";import{O as i}from"./object-table-BZ0MZy9P.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-oLILJVBL.js";import"./Table-BH-RZNCP.js";import"./index-DvGT_2Rb.js";import"./Dialog-COLSia6k.js";import"./cross-DGEDR-iR.js";import"./svgIconContainer-BlZrGf5w.js";import"./useBaseUiId-DtogBb13.js";import"./InternalBackdrop-BlNxxS8w.js";import"./composite-DqYqntwB.js";import"./index-BpZgmo5w.js";import"./index-CwFbsAXM.js";import"./index-Ztr5QER3.js";import"./useEventCallback-COtfvcHe.js";import"./SkeletonBar-BbYnj_B5.js";import"./LoadingCell-CY4ngEPG.js";import"./ColumnConfigDialog-8P-8ZUWB.js";import"./DraggableList-CocCSwkY.js";import"./search-Bft1Biki.js";import"./Input-B_oVxWvi.js";import"./useControlled-DBZzTWcr.js";import"./isEqual-BbyvGaTy.js";import"./isObject-BtnLo4c4.js";import"./Button-S6siwBTp.js";import"./ActionButton-BABk4Pl1.js";import"./Checkbox-DMncT4kw.js";import"./useValueChanged-BLJ42nt0.js";import"./CollapsiblePanel-BbalYaX2.js";import"./MultiColumnSortDialog-TPqwtccN.js";import"./MenuTrigger-CiscVOMj.js";import"./CompositeItem-nP0KtzgK.js";import"./ToolbarRootContext-2sbonX9x.js";import"./getDisabledMountTransitionStyles-CZQAQSKz.js";import"./getPseudoElementBounds-u9mOl45S.js";import"./chevron-down-Bd6yaiTi.js";import"./index-BtFlrDNb.js";import"./error-C5CNb-QP.js";import"./BaseCbacBanner-ClkIB2_j.js";import"./makeExternalStore-JCpwxwwp.js";import"./Tooltip-CszSZdJE.js";import"./PopoverPopup-bU_8XjBZ.js";import"./toNumber-ClpiI6JA.js";import"./useOsdkClient-2oRxYRX2.js";import"./tick-DjhBTBL8.js";import"./DropdownField-Db4z1Gaj.js";import"./withOsdkMetrics-Cz2Nq3As.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
