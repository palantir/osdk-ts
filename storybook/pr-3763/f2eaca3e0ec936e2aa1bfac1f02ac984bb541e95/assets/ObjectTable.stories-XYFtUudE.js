import{j as i}from"./iframe-B7MJ_I4S.js";import{O as p}from"./object-table-DEsqGytw.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DWqipNj2.js";import"./preload-helper-Cov2K-k_.js";import"./Table-PbcymcR5.js";import"./index-C9xfkj2b.js";import"./Dialog-C8e3T8Vj.js";import"./cross-BTDYOKg8.js";import"./svgIconContainer-DK_hyPcz.js";import"./useBaseUiId-DV-TM7_o.js";import"./InternalBackdrop-RHfoBc4O.js";import"./composite-KA45R7op.js";import"./index-CZX5DcZe.js";import"./index-XczBWBXZ.js";import"./index-BQpFGUDq.js";import"./useEventCallback-MU_qS0LW.js";import"./SkeletonBar-AHFXhlYX.js";import"./LoadingCell-FHMd-CkD.js";import"./ColumnConfigDialog-CJs2XIZN.js";import"./DraggableList-BhwhcR2z.js";import"./search-Cf_AT2nS.js";import"./Input-DOi3h0W_.js";import"./useControlled-CXNm2xWR.js";import"./Button-BFw5rIiu.js";import"./small-cross-B-ffW1dD.js";import"./ActionButton-CyF4LZse.js";import"./Checkbox-BTtDSBH6.js";import"./useValueChanged-LN6HBF8u.js";import"./CollapsiblePanel-QOVGqbFt.js";import"./MultiColumnSortDialog-C6rKg7tu.js";import"./MenuTrigger-5xPBbdgO.js";import"./CompositeItem-4qcJnRqN.js";import"./ToolbarRootContext-BhG2wJHB.js";import"./getDisabledMountTransitionStyles-BIpfSkRt.js";import"./getPseudoElementBounds-i52E9W4X.js";import"./chevron-down-CsWhq03e.js";import"./index-DJVv4RIW.js";import"./error-BDRA02ra.js";import"./BaseCbacBanner-CtfAUEFc.js";import"./makeExternalStore-D-74d3Y_.js";import"./Tooltip-Dopd5vwg.js";import"./PopoverPopup-CE7yq2WN.js";import"./debounce-Clf5E167.js";import"./useOsdkClient-BqlAWOQt.js";import"./tick-DmPLJZVn.js";import"./DropdownField-C_4-TvJW.js";import"./isEqual-NQ_TKohX.js";import"./withOsdkMetrics-hrRyl2Up.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
