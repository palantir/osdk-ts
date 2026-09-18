import{f as p,j as e}from"./iframe-CHAjmeRW.js";import{O as i}from"./object-table-Cf6gXv4p.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bnd8YX8b.js";import"./Table-DEcUcosK.js";import"./index-uehY9gxK.js";import"./Dialog-CheU-fP7.js";import"./cross-21maCkVo.js";import"./svgIconContainer-C6bTix-V.js";import"./useBaseUiId-CrKq0iow.js";import"./InternalBackdrop-DDjeD9sW.js";import"./composite-DrWVaKH_.js";import"./index-0JEFRERF.js";import"./index-DItNlf6T.js";import"./index-DZ1xMNy0.js";import"./useEventCallback-BmA5_VIX.js";import"./SkeletonBar-BvPOXO85.js";import"./LoadingCell-BqyTx1me.js";import"./ColumnConfigDialog-D3wICKLg.js";import"./DraggableList-Dg9hBCfJ.js";import"./search-C-PuNkbt.js";import"./Input-CEDKmeIa.js";import"./useControlled-DIGLnSxk.js";import"./Button-BrV62231.js";import"./small-cross-COGTOage.js";import"./ActionButton-DV8Kf2gb.js";import"./Checkbox-CBbtoVJB.js";import"./useValueChanged-BEK9ykM9.js";import"./CollapsiblePanel-CQ1IUkVg.js";import"./MultiColumnSortDialog-DzjtgTnk.js";import"./MenuTrigger-BJIK7pGi.js";import"./CompositeItem-C3TCOkoR.js";import"./ToolbarRootContext-DT7PezqV.js";import"./getDisabledMountTransitionStyles-DPAhfDy1.js";import"./getPseudoElementBounds-Dc0AZ8zh.js";import"./chevron-down-BhaNHOdV.js";import"./index-BX5VsLRX.js";import"./error-D546O215.js";import"./BaseCbacBanner-DN1PfXxB.js";import"./makeExternalStore-DZYGiDNi.js";import"./Tooltip-gPwLingQ.js";import"./PopoverPopup-Bik_j545.js";import"./debounce-C6gik47c.js";import"./useOsdkClient-BcmsLoqQ.js";import"./tick-DLKt3574.js";import"./DropdownField-BPlhMtVD.js";import"./isEqual-tS70SJFu.js";import"./withOsdkMetrics-BAwWDEWh.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
