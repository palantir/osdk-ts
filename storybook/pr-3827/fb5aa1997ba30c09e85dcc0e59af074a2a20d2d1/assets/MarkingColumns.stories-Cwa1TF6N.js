import{f as p,j as e}from"./iframe-DeFJRJj_.js";import{O as i}from"./object-table-FpQH8zDH.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-qD0ucBRi.js";import"./Table-yqvulaG4.js";import"./index-ZhtX4fsv.js";import"./Dialog-CQAmh9mS.js";import"./cross-CrAtm1fx.js";import"./svgIconContainer-CTkWWvQN.js";import"./useBaseUiId-Bq3F6Rv_.js";import"./InternalBackdrop-I_xge_tr.js";import"./composite-zNv1yGvS.js";import"./index-D6kTPWWX.js";import"./index-BL95TNIJ.js";import"./index-PDfAbFc3.js";import"./useEventCallback-DOh_QwCs.js";import"./SkeletonBar-BCypp59V.js";import"./LoadingCell-C8Ob_9Qb.js";import"./ColumnConfigDialog-CYlKSxfl.js";import"./DraggableList-BzyMgYvc.js";import"./search-DY35zBxg.js";import"./Input-CsBuql1A.js";import"./useControlled-Dn21pgdp.js";import"./isEqual-7SFR467m.js";import"./isObject-BUAr3np9.js";import"./Button-CSCQK9mA.js";import"./ActionButton-ZjjCkAyn.js";import"./Checkbox-D454IOsY.js";import"./useValueChanged-Du1T7LSL.js";import"./CollapsiblePanel-DfGBm_UI.js";import"./MultiColumnSortDialog-CLinEGLK.js";import"./MenuTrigger-X1kUqg13.js";import"./CompositeItem-CZp4_PXj.js";import"./ToolbarRootContext-BL-4vvnE.js";import"./getDisabledMountTransitionStyles-3seGgd_O.js";import"./getPseudoElementBounds-YW0J0z3g.js";import"./chevron-down-aqXgsfqW.js";import"./index-CJ3Iicbp.js";import"./error-CZdOWqiH.js";import"./BaseCbacBanner-DdLprQAt.js";import"./makeExternalStore-D6AD-Szb.js";import"./Tooltip-tTWRSFbd.js";import"./PopoverPopup-BiBkyadf.js";import"./toNumber-B-Ufdoco.js";import"./useOsdkClient-CAv7eSZO.js";import"./tick-Kxgypmmn.js";import"./DropdownField-CKIbBTPW.js";import"./withOsdkMetrics-inWDWazQ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
