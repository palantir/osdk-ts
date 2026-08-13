import{j as i}from"./iframe-CQFnHxTO.js";import{O as p}from"./object-table-ChqEHKh4.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D5PXk-51.js";import"./preload-helper-rK1dY1Ui.js";import"./Table-BeFq-Dil.js";import"./index-D-SWpkps.js";import"./Dialog-BnfVV6cj.js";import"./cross-BwcQfy8o.js";import"./svgIconContainer-DGlcHToS.js";import"./useBaseUiId-DhEYJ7Lv.js";import"./InternalBackdrop-Wme1Pd-g.js";import"./composite-DDTIjh9a.js";import"./index-BwQs_oNu.js";import"./index-B7EcVcO3.js";import"./index-CmG1YU-z.js";import"./useEventCallback-BM2PZBH6.js";import"./SkeletonBar-BDQSdXSb.js";import"./LoadingCell-Bq6YrahC.js";import"./ColumnConfigDialog-CiuXcpeZ.js";import"./DraggableList-k44Faf2B.js";import"./search-DLWP4Sau.js";import"./Input-DVjUYO6G.js";import"./useControlled-DQq657mZ.js";import"./isEqual-pZu_mXsq.js";import"./isObject-D9rv0iqM.js";import"./Button-Vd6i0l0Q.js";import"./ActionButton-CiKP957w.js";import"./Checkbox-LzD7Gmps.js";import"./useValueChanged-BOD5Ipb1.js";import"./CollapsiblePanel-ByD8C8BM.js";import"./MultiColumnSortDialog-BMBXPIgU.js";import"./MenuTrigger-C_MB1mN0.js";import"./CompositeItem-B9-jPotu.js";import"./ToolbarRootContext-DJ0l6Br3.js";import"./getDisabledMountTransitionStyles-BeozZc0x.js";import"./getPseudoElementBounds-CcNhJNm5.js";import"./chevron-down-CXwEWINw.js";import"./index-BTqp2ZX9.js";import"./error-qjyqUuKF.js";import"./BaseCbacBanner-Cfyu_NmC.js";import"./makeExternalStore-DkFvLNvv.js";import"./Tooltip-B4JCaEcf.js";import"./PopoverPopup-Bxfhqbd6.js";import"./toNumber-jxE6Z19Y.js";import"./useOsdkClient-Byc0C7aB.js";import"./chevron-right-CjQseNaT.js";import"./tick-C-hv7xxG.js";import"./DropdownField-BmQfSDBK.js";import"./withOsdkMetrics-BzKJ-zlS.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
