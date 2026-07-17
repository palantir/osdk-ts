import{f as p,j as e}from"./iframe-DsHB1h2g.js";import{O as i}from"./object-table-DNqFB6Fe.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B40hWS9w.js";import"./Table-C3QbEV2I.js";import"./index-CKUZ_TUT.js";import"./Dialog-Cx6wa-sV.js";import"./cross-Ch8vFynE.js";import"./svgIconContainer-CZqp4OYe.js";import"./useBaseUiId-BwrBLP0c.js";import"./InternalBackdrop-CNQx3jv7.js";import"./composite-CQvlWJoL.js";import"./index-CkiXMDS-.js";import"./index-Bvazx4q2.js";import"./index-D5Xx7t0x.js";import"./useEventCallback-CfxuuB01.js";import"./SkeletonBar-BqRyt7dZ.js";import"./LoadingCell-D_4Qcsup.js";import"./ColumnConfigDialog-Ni2bRBS8.js";import"./DraggableList-DUjTv4xE.js";import"./search-CRb6URYx.js";import"./Input-B7CylvHT.js";import"./useControlled-DMd_OTds.js";import"./Button-5b5Z7Y6u.js";import"./small-cross-H9OumPDg.js";import"./ActionButton-BFMRrL2J.js";import"./Checkbox-CcyDMczC.js";import"./useValueChanged-BIqtcr_n.js";import"./CollapsiblePanel-6aDhxx13.js";import"./MultiColumnSortDialog-CTmoGUgW.js";import"./MenuTrigger-BJnnM1MN.js";import"./CompositeItem-BYcfULo7.js";import"./ToolbarRootContext-BXcgRWRH.js";import"./getDisabledMountTransitionStyles-Gj2f6sHS.js";import"./getPseudoElementBounds-CAGKB__I.js";import"./chevron-down-CHXoWe6z.js";import"./index-TWZ83bVO.js";import"./error-_bcdfIZM.js";import"./BaseCbacBanner-BHMnbFdi.js";import"./makeExternalStore-Cxo-Klo3.js";import"./Tooltip-CPOxLsz5.js";import"./PopoverPopup-Dm77S52A.js";import"./toNumber-GnUwVPja.js";import"./useOsdkClient-Cu4Wd9ay.js";import"./tick-BOEPi4vj.js";import"./DropdownField-BL7O6ziC.js";import"./withOsdkMetrics-B8yLsJJu.js";const tr={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
