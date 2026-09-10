import{j as i}from"./iframe-DtoP6UZw.js";import{O as p}from"./object-table-D_3I45zD.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-hppniNW3.js";import"./preload-helper-CFHJtsfx.js";import"./Table-BtMZ3tb4.js";import"./index-By2xjehZ.js";import"./Dialog-DI6oESBL.js";import"./cross-Bz8JPJRT.js";import"./svgIconContainer-DfGYICSx.js";import"./useBaseUiId-C9myCpxn.js";import"./InternalBackdrop-DpFHb2md.js";import"./composite-ZO42S3vI.js";import"./index-CeUVbJds.js";import"./index-D5DGgDMX.js";import"./index-qPBLNpVs.js";import"./useEventCallback-DjN8mM0o.js";import"./SkeletonBar-BvasMIuf.js";import"./LoadingCell-DVmQY3DI.js";import"./ColumnConfigDialog-Bqnkldiu.js";import"./DraggableList-DAiHAfLp.js";import"./search-BGmMu9uk.js";import"./Input-Cj3lDoEk.js";import"./useControlled-CLD2ZIzN.js";import"./Button-MPweKG2u.js";import"./small-cross-CuZnJmiX.js";import"./ActionButton-Q7OU6HgZ.js";import"./Checkbox-CoU6iSAR.js";import"./useValueChanged-DuhnSJjf.js";import"./CollapsiblePanel-Cmkp7L83.js";import"./MultiColumnSortDialog-MmoilBcM.js";import"./MenuTrigger-DRMD-66M.js";import"./CompositeItem-8ApCVdWW.js";import"./ToolbarRootContext-Chftn44K.js";import"./getDisabledMountTransitionStyles-wDP_kl-U.js";import"./getPseudoElementBounds-DVsLrH1i.js";import"./chevron-down-Cp3kMwRT.js";import"./index-D-jbKgqf.js";import"./error-BgO9vMGd.js";import"./BaseCbacBanner-DhhX6HVL.js";import"./makeExternalStore-CFHh14tM.js";import"./Tooltip-D8pj6bCS.js";import"./PopoverPopup-T9050naI.js";import"./debounce-C7WOXlCO.js";import"./useOsdkClient-DBRAdTeM.js";import"./tick-ql6tnj8R.js";import"./DropdownField-nkpjhsB4.js";import"./isEqual-CygTYWpT.js";import"./withOsdkMetrics-BylLLJIu.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
