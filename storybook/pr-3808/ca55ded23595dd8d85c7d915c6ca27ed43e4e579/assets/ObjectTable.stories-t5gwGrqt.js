import{j as i}from"./iframe-B4TxBOgD.js";import{O as p}from"./object-table-BXUU4i3s.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CdbdnC1m.js";import"./preload-helper-BImTr8XW.js";import"./Table-Cl9fVu8V.js";import"./index-CewbiS0-.js";import"./Dialog-BqbO7wc8.js";import"./cross-hsr1UFQF.js";import"./svgIconContainer-BdVqbaHA.js";import"./useBaseUiId-DGDWvpff.js";import"./InternalBackdrop-Cb9YWrJj.js";import"./composite-CdnlLAO5.js";import"./index-Da0oW1Pt.js";import"./index-BQOT9bMM.js";import"./index-yw2IcMRc.js";import"./useEventCallback-C8aiku-x.js";import"./SkeletonBar-DG8Xm3s9.js";import"./LoadingCell-B4nls2yn.js";import"./ColumnConfigDialog-D_K60j1r.js";import"./DraggableList-BPsTmD45.js";import"./search-B3z6PcWR.js";import"./Input-BegfCSSS.js";import"./useControlled-C5WozG_u.js";import"./isEqual-DHGC0vVF.js";import"./isObject-CFmOY1gj.js";import"./Button-C3hoplQB.js";import"./ActionButton-CU3iPuAb.js";import"./Checkbox-Cfg5IKtW.js";import"./useValueChanged-DU2ktiK8.js";import"./CollapsiblePanel-lVLOzwx5.js";import"./MultiColumnSortDialog-D9upH0BI.js";import"./MenuTrigger-C65x4IPJ.js";import"./CompositeItem-D_uU8YUN.js";import"./ToolbarRootContext-SUr-GoJT.js";import"./getDisabledMountTransitionStyles-B_1CmVQ9.js";import"./getPseudoElementBounds-Cqn9HlA0.js";import"./chevron-down-9K24iL1H.js";import"./index-DL0nRe0P.js";import"./error-BpJdqfq0.js";import"./BaseCbacBanner-BxYpzwz6.js";import"./makeExternalStore-7PAAW5FV.js";import"./Tooltip-W37lKcMg.js";import"./PopoverPopup-wxIHZwOO.js";import"./toNumber-CWrjRpqY.js";import"./useOsdkClient-qMlSffSE.js";import"./tick-Cy11cge5.js";import"./DropdownField-Bzz5Z8gc.js";import"./withOsdkMetrics-D8u8gP3a.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
