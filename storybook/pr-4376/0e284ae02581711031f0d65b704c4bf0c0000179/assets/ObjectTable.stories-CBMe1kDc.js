import{j as i}from"./iframe-Chfnu1YD.js";import{O as p}from"./object-table-GXQqgEvs.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C1Rzm1vk.js";import"./preload-helper-8IaaIvc6.js";import"./Table-BYiLzy7V.js";import"./index-vEtNoJy3.js";import"./Dialog-C0NkkaLW.js";import"./cross-DDh1oeg3.js";import"./svgIconContainer-Cemmf0nA.js";import"./useBaseUiId-1GAAVutu.js";import"./InternalBackdrop-DLHFnO4E.js";import"./composite-ptzmGyTW.js";import"./index-DvqaWTEs.js";import"./index-Bbt8955e.js";import"./index-C4q2PejQ.js";import"./useEventCallback-Dz5cwNMH.js";import"./SkeletonBar-ikqiEJT9.js";import"./LoadingCell-CvbYgRpj.js";import"./ColumnConfigDialog-nCGkIgug.js";import"./DraggableList-D5aJDVZs.js";import"./search-BNvr0C3M.js";import"./Input-DWPUbvhX.js";import"./useControlled-G2n_omSR.js";import"./Button-Ciq9JFcz.js";import"./small-cross-CA-g_M_D.js";import"./ActionButton-CBNCZv9P.js";import"./Checkbox-C2BsILr5.js";import"./useValueChanged-NA9qAH4Q.js";import"./CollapsiblePanel-C_TGf3AQ.js";import"./MultiColumnSortDialog-BQDGa9D6.js";import"./MenuTrigger-CH8gjYXg.js";import"./CompositeItem-B84_RNVq.js";import"./ToolbarRootContext-BC9rkGH_.js";import"./getDisabledMountTransitionStyles-BhZDCpH_.js";import"./getPseudoElementBounds-BJU_D_lr.js";import"./chevron-down-lrpzUfD-.js";import"./index-DvPbsGeG.js";import"./error-Dy9PQux-.js";import"./BaseCbacBanner-CmZapzw4.js";import"./makeExternalStore-CYR-IDnU.js";import"./Tooltip-D2XqF5oz.js";import"./isObject-BCq84zEs.js";import"./debounce-D2wam908.js";import"./useOsdkClient-v00nyVWz.js";import"./tick-DN0NnQtg.js";import"./DropdownField-BBRj5dwe.js";import"./isEqual-BQpI83mS.js";import"./_baseIsEqual-CmLtIxcO.js";import"./withOsdkMetrics-DRREQEVj.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
