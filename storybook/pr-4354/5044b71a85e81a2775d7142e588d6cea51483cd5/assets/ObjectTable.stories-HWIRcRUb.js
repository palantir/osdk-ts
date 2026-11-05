import{j as i}from"./iframe-CAg-JriM.js";import{O as p}from"./object-table-C-ApABTH.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BM9SRYSz.js";import"./preload-helper-BUvKDxEU.js";import"./Table-i_e6H7xl.js";import"./index-c30BwpEp.js";import"./Dialog-BdVph2yq.js";import"./cross-f26_pld4.js";import"./svgIconContainer-DADUTguq.js";import"./useBaseUiId-BRS8U626.js";import"./InternalBackdrop-dVZjC2Aj.js";import"./composite-CQrdmEmC.js";import"./index-ZJoCPfq8.js";import"./index-BKL1ls47.js";import"./index-oQ8-uGIT.js";import"./useEventCallback-BWy4tScF.js";import"./SkeletonBar-BxCdHceQ.js";import"./LoadingCell-C-LbupCq.js";import"./ColumnConfigDialog-BkpF_5fM.js";import"./DraggableList-DPp-whoe.js";import"./search-iyFeBtu2.js";import"./Input-DRHJ-rvA.js";import"./useControlled-Ceb76xwT.js";import"./Button-Cl3foSbn.js";import"./small-cross-BOoOGXKD.js";import"./ActionButton-Bzha9uO_.js";import"./Checkbox-V5AP2cHu.js";import"./useValueChanged-3kHQoBsE.js";import"./CollapsiblePanel-COo9-GCD.js";import"./MultiColumnSortDialog-CHNEVY8-.js";import"./MenuTrigger-Bu5HVYuz.js";import"./CompositeItem-D7GSS8Td.js";import"./ToolbarRootContext-CdDSSu6d.js";import"./getDisabledMountTransitionStyles-CZGWVUEY.js";import"./getPseudoElementBounds-D5B51_gi.js";import"./chevron-down-CsfLCkc3.js";import"./index-B-69obD4.js";import"./error-1JJ1PBi7.js";import"./BaseCbacBanner-MWnGpk0a.js";import"./makeExternalStore-sIngp_if.js";import"./Tooltip-BaUV5B5y.js";import"./isObject-Cga3o-qK.js";import"./debounce-8AUJtK1E.js";import"./useOsdkClient-DA4RLwcd.js";import"./tick-BF0KiDZu.js";import"./DropdownField-azDKl2Hy.js";import"./isEqual-DEFCBL8A.js";import"./_baseIsEqual-vKOwFDyn.js";import"./withOsdkMetrics-CHGqLnXT.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
