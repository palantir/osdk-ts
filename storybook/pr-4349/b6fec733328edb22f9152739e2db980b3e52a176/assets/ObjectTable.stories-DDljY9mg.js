import{j as i}from"./iframe-6rmEYQ4q.js";import{O as p}from"./object-table-C3g8Rgsf.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-KFYjzkcG.js";import"./preload-helper-CQFwNwom.js";import"./Table-DUEsztjk.js";import"./index-DHYmSSVn.js";import"./Dialog-B4_gKkCj.js";import"./cross-D-Hg8nzG.js";import"./svgIconContainer-BTOejcjp.js";import"./useBaseUiId-DutMLbwr.js";import"./InternalBackdrop-DgOuuiso.js";import"./composite-6RMh68ZK.js";import"./index-DTFmmgtm.js";import"./index--7GUs8pc.js";import"./index-Cushj5su.js";import"./useEventCallback-Byxoa0dh.js";import"./SkeletonBar-DOUZ-mE8.js";import"./LoadingCell-5tJCvwxm.js";import"./ColumnConfigDialog-DmAEs3Ph.js";import"./DraggableList-BazWYHtA.js";import"./search-BHn0KTJN.js";import"./Input-DHCuHilz.js";import"./useControlled-HeurI7_b.js";import"./Button-B5wqsid8.js";import"./small-cross-CHICJ2XI.js";import"./ActionButton-BV9UuRgT.js";import"./Checkbox-DlXCmFqY.js";import"./useValueChanged-DNZRcsJs.js";import"./CollapsiblePanel-CDBbZZyU.js";import"./MultiColumnSortDialog-DvErCYRD.js";import"./MenuTrigger-BIbOF5Wa.js";import"./CompositeItem-DuBtWhAd.js";import"./ToolbarRootContext-4ImLkhxO.js";import"./getDisabledMountTransitionStyles-B3ra-kQw.js";import"./getPseudoElementBounds-DlcOVO-y.js";import"./chevron-down-DJM0Z3o9.js";import"./index-O1VLMwtD.js";import"./error-D2aG_W_b.js";import"./BaseCbacBanner-Cr9-xR0n.js";import"./makeExternalStore-D4L5Wrb5.js";import"./Tooltip-C2F6IU3H.js";import"./isObject-SiaksReL.js";import"./debounce-fovSx1xM.js";import"./useOsdkClient-DmHqy9pL.js";import"./tick-qf7hH7wH.js";import"./DropdownField-BIgaE5lU.js";import"./isEqual-LTMCApQW.js";import"./_baseIsEqual-CvZHeATj.js";import"./withOsdkMetrics-23-xBZ5M.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
