import{f as p,j as e}from"./iframe-CwoOGB90.js";import{O as i}from"./object-table-BW9qhxFt.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-zjr9DTNv.js";import"./Table-CFVqUtVr.js";import"./index-CZrnOEge.js";import"./Dialog-rGFuYy_L.js";import"./cross-84LZ_c3o.js";import"./svgIconContainer-vpSdtZHg.js";import"./useBaseUiId-CG_HMXOZ.js";import"./InternalBackdrop-2kZ8nvu1.js";import"./composite-CQ1lSzH1.js";import"./index-BP83VGlc.js";import"./index-CtieK9tm.js";import"./index-CIs6h9pu.js";import"./useEventCallback-ByWQ63Gl.js";import"./SkeletonBar-B3HWXV5p.js";import"./LoadingCell-8n9ERDDX.js";import"./ColumnConfigDialog-CnguxUiQ.js";import"./DraggableList-Bso7ySjF.js";import"./search-B4Rhn5WX.js";import"./Input-Bfvllh0J.js";import"./useControlled-CyV_xO7n.js";import"./Button-CzS_tZvQ.js";import"./small-cross-CdfSHMjX.js";import"./ActionButton-BdjYmFRu.js";import"./Checkbox-CBh8ZgCe.js";import"./useValueChanged-d4U5lg5Y.js";import"./CollapsiblePanel-CzzEpLdL.js";import"./MultiColumnSortDialog-7OU1GsVB.js";import"./MenuTrigger-Ct25vTMs.js";import"./CompositeItem-uLTqCAuJ.js";import"./ToolbarRootContext-BHlqCq8I.js";import"./getDisabledMountTransitionStyles-CDwQ_97u.js";import"./getPseudoElementBounds-CxBwOVu1.js";import"./chevron-down-CzfXAkFG.js";import"./index-DRO4fLjt.js";import"./error-D1I108xZ.js";import"./BaseCbacBanner-sNaPb3A4.js";import"./makeExternalStore-BAl3wc3x.js";import"./Tooltip-DoSGgxMu.js";import"./isObject-DBuDBkaL.js";import"./debounce-DjU0zQzn.js";import"./useOsdkClient-CX_eol9_.js";import"./tick-B9GD-hKF.js";import"./DropdownField-DvlmGHHn.js";import"./isEqual-l3DFcAg6.js";import"./_baseIsEqual-By1SU2HG.js";import"./withOsdkMetrics-IkpPb6vj.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};
