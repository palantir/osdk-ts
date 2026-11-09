import{j as i}from"./iframe-BwKzjaO_.js";import{O as p}from"./object-table-CtwO0Cb5.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-MGOn5nFx.js";import"./preload-helper-Cw3PuEWm.js";import"./Table-D7NzkWze.js";import"./index-jEwj8y1B.js";import"./Dialog-DrkxivyJ.js";import"./cross-1lQqZabN.js";import"./svgIconContainer-BwQ9ehgu.js";import"./useBaseUiId-BGPb7m92.js";import"./InternalBackdrop-DCVAdZPe.js";import"./composite-Az3dyPdd.js";import"./index-Kp1RIk0o.js";import"./index-DSTqBN-p.js";import"./index-4q7PhTeO.js";import"./useEventCallback-DjZC-G9S.js";import"./SkeletonBar-LISMmzYx.js";import"./LoadingCell-1o51Z1Am.js";import"./ColumnConfigDialog-DX9yNz2p.js";import"./DraggableList-kpSIYOzv.js";import"./search-DdHvONrb.js";import"./Input-4hInwvvu.js";import"./useControlled-DYaNtfGY.js";import"./Button-Cz27x8wi.js";import"./small-cross-BWwYEXIu.js";import"./ActionButton-8eBbMlAk.js";import"./Checkbox-DLcp3PlG.js";import"./useValueChanged-m0H_6TBE.js";import"./CollapsiblePanel-D68KQNQi.js";import"./MultiColumnSortDialog-bs1kxzdX.js";import"./MenuTrigger-DMbbUQ5u.js";import"./CompositeItem-Cp7s4593.js";import"./ToolbarRootContext-BtpiBS9l.js";import"./getDisabledMountTransitionStyles-BdphTWCa.js";import"./getPseudoElementBounds-4gbF3_cn.js";import"./chevron-down-BTGBlQFb.js";import"./index-BV1P-O2s.js";import"./error-Nw58INx5.js";import"./BaseCbacBanner-DNDHOrYw.js";import"./makeExternalStore-GJQDziWf.js";import"./Tooltip-Dr8Setpm.js";import"./isObject-CfracQ9h.js";import"./debounce-F8ygRT2p.js";import"./useOsdkClient-DMp68QLo.js";import"./tick-D4wK5tyJ.js";import"./DropdownField-CfFskAQQ.js";import"./isEqual-qYCEMLNC.js";import"./_baseIsEqual-DP6XDtsT.js";import"./withOsdkMetrics-3WubJygy.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
