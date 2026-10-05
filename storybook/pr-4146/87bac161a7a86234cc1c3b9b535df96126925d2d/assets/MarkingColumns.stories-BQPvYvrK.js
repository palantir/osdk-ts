import{f as p,j as e}from"./iframe-D4hrQN2M.js";import{O as i}from"./object-table-eoyHm8rr.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-sZ7GZnTp.js";import"./Table-C8TaCY1N.js";import"./index-TJFGWmSW.js";import"./Dialog-Cum9z4PZ.js";import"./cross-DpkqXaMH.js";import"./svgIconContainer-B2XpTIGD.js";import"./useBaseUiId-Dd8SLm5U.js";import"./InternalBackdrop-DTcgC7in.js";import"./composite-CR-Dz-Ek.js";import"./index-DLnqSt_k.js";import"./index-BRhC0vEw.js";import"./index-DxzPebG2.js";import"./useEventCallback-Bi7T9n7X.js";import"./SkeletonBar-D2ZrCjSS.js";import"./LoadingCell-Dov4RAGc.js";import"./ColumnConfigDialog-DpEbmIIs.js";import"./DraggableList-0U2j1jDu.js";import"./search-D1Xzl9P3.js";import"./Input-CkxkdCMO.js";import"./useControlled-D7NqC10F.js";import"./Button-C5ajAHO-.js";import"./small-cross-DZUN_pWg.js";import"./ActionButton-C2k80xY4.js";import"./Checkbox-DggoX4aS.js";import"./useValueChanged-kuV8QgZ2.js";import"./CollapsiblePanel-DZyDRhH1.js";import"./MultiColumnSortDialog-Q2eGzcIB.js";import"./MenuTrigger-__HBuUTm.js";import"./CompositeItem-D42qWJYi.js";import"./ToolbarRootContext-A7T_D51T.js";import"./getDisabledMountTransitionStyles-BQuC83a6.js";import"./getPseudoElementBounds-DbN1Aq9W.js";import"./chevron-down-CPNs7Pbe.js";import"./index-CFuoKysS.js";import"./error-DLpDeju-.js";import"./BaseCbacBanner-Jj2i97NM.js";import"./makeExternalStore-CT9_9BER.js";import"./Tooltip-BcRZGxaq.js";import"./PopoverPopup-CnVnN1Uy.js";import"./debounce-CAX0ITwT.js";import"./useOsdkClient-CRnyhdA3.js";import"./tick-BHTu8puw.js";import"./DropdownField-BMDSt0eR.js";import"./isEqual-BbQZa-Lk.js";import"./withOsdkMetrics-V-TF07Pc.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
