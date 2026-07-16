import{f as p,j as e}from"./iframe-6ZbAZg8X.js";import{O as i}from"./object-table-BrhTfX12.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B9k1kqSD.js";import"./Table-C5UZ5Ruz.js";import"./index-BPjhFk1G.js";import"./Dialog-CvuCbmN0.js";import"./cross-yCNc4byY.js";import"./svgIconContainer-DUoRnlmE.js";import"./useBaseUiId-1RjQbkk7.js";import"./InternalBackdrop-4X0WJbge.js";import"./composite-Cm8gTBce.js";import"./index-CBKFAKiV.js";import"./index-VjGHSA68.js";import"./index-CZo_w4Cy.js";import"./useEventCallback-DKzPqmgh.js";import"./SkeletonBar-DxMmHHpo.js";import"./LoadingCell-BWExOBFa.js";import"./ColumnConfigDialog-NxOggU_R.js";import"./DraggableList-Qhreci7Z.js";import"./search-CqSUGpEg.js";import"./Input-z0TYPoN8.js";import"./useControlled-DR6JEyhp.js";import"./Button-BYZ8cIp_.js";import"./small-cross-Cut-J8Rn.js";import"./ActionButton-Br7uhBbF.js";import"./Checkbox-BoUskKrF.js";import"./useValueChanged-C6Y8Fdht.js";import"./CollapsiblePanel-GCKg9fHu.js";import"./MultiColumnSortDialog-DztsCfGl.js";import"./MenuTrigger-DesrCeJQ.js";import"./CompositeItem-0t0UZZXC.js";import"./ToolbarRootContext-vJ4xK0Ae.js";import"./getDisabledMountTransitionStyles-CKqD2xEi.js";import"./getPseudoElementBounds-C8Xs6bEB.js";import"./chevron-down-8OHfQsqq.js";import"./index-Cnsri6qn.js";import"./error-DBNizHSO.js";import"./BaseCbacBanner-R3LHbU7K.js";import"./makeExternalStore-BpnrcJse.js";import"./Tooltip-DMNEXqKo.js";import"./PopoverPopup-D7aae8o6.js";import"./toNumber-DE_k4xLl.js";import"./useOsdkClient-B6l6ZKhk.js";import"./tick-BNlgCR0p.js";import"./DropdownField-CbBVFpnn.js";import"./withOsdkMetrics-BBbdfsKr.js";const tr={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const or=["MarkingColumns"];export{r as MarkingColumns,or as __namedExportsOrder,tr as default};
