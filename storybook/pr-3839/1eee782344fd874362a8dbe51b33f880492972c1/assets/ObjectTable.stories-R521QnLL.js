import{j as i}from"./iframe-CaOZVcM8.js";import{O as p}from"./object-table-8ZGrdFEw.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DFwU1e62.js";import"./preload-helper-D0asL9_c.js";import"./Table-BROqB3UG.js";import"./index-Cq1u-AUb.js";import"./Dialog-Et_k2l9v.js";import"./cross-Del0U5pN.js";import"./svgIconContainer-LtpSeem8.js";import"./useBaseUiId-C3rnqgEW.js";import"./InternalBackdrop-D45PVC85.js";import"./composite-UvHTpcfI.js";import"./index-CcwMdyCi.js";import"./index-B6bqOoQj.js";import"./index-Dw2jEAhz.js";import"./useEventCallback-B6Zwe-wE.js";import"./SkeletonBar-Bu3sbZh3.js";import"./LoadingCell-BwEHRORR.js";import"./ColumnConfigDialog-B1PAVXTv.js";import"./DraggableList-Cd4sq2Wi.js";import"./search-Dh7gn4ku.js";import"./Input-C37Wm2cQ.js";import"./useControlled-D0eeOXz6.js";import"./isEqual-QzLyq6rt.js";import"./isObject-Bxuk0Ej2.js";import"./Button-DfAjosPZ.js";import"./ActionButton-BZ8dpD4a.js";import"./Checkbox-CE2DnI7r.js";import"./useValueChanged-DqofQ2rH.js";import"./CollapsiblePanel-D7-TBzeE.js";import"./MultiColumnSortDialog-DvBCFSAX.js";import"./MenuTrigger-CcWrsBQb.js";import"./CompositeItem-wSB1_NEO.js";import"./ToolbarRootContext-DPhLluaF.js";import"./getDisabledMountTransitionStyles-BkVn_us3.js";import"./getPseudoElementBounds-CGbb6tSs.js";import"./chevron-down-Dg4eiZWX.js";import"./index-C8V7bNNg.js";import"./error-bQoKO1DQ.js";import"./BaseCbacBanner-YcCJKmaz.js";import"./makeExternalStore-B3ffe9bA.js";import"./Tooltip-BOZwpeu7.js";import"./PopoverPopup-D6MLvU0e.js";import"./toNumber-hPX3fc-Q.js";import"./useOsdkClient-gsXgeqXO.js";import"./tick-BiliVS_P.js";import"./DropdownField-ssb7GK8d.js";import"./withOsdkMetrics-D3Xg8FtT.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};
