import{j as i}from"./iframe-B7BuLFiB.js";import{O as p}from"./object-table-BdJFYC6r.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DwFmadhL.js";import"./preload-helper-QLvxqcYm.js";import"./Table-CG9FECAd.js";import"./index-DX9kLxYV.js";import"./Dialog-D0VMHAuM.js";import"./cross-MuA-PJqQ.js";import"./svgIconContainer-CeTYDBJc.js";import"./useBaseUiId-DGtSh3tx.js";import"./InternalBackdrop-S6ToeWiE.js";import"./composite-BgM6qzfH.js";import"./index-C-D0HXuy.js";import"./index-yPQ50wIw.js";import"./index-Bl6JFfFg.js";import"./useEventCallback-DqHq7xQA.js";import"./SkeletonBar-DCOs-m_E.js";import"./LoadingCell-BFPiOHIX.js";import"./ColumnConfigDialog--fuh7-Zw.js";import"./DraggableList-Z2iXNaNk.js";import"./search-DkIDRVCE.js";import"./Input-BWeaR93e.js";import"./useControlled-o41jjuGU.js";import"./isEqual-Bfeyaww4.js";import"./isObject-gYLe_8iC.js";import"./Button-Bi6KGg8Q.js";import"./ActionButton-DbdfUvrp.js";import"./Checkbox-CCQs_fPo.js";import"./useValueChanged-SYgJfDFB.js";import"./CollapsiblePanel-DfVBUEh5.js";import"./MultiColumnSortDialog-BEohunJJ.js";import"./MenuTrigger-CATqDpCy.js";import"./CompositeItem-Dbzwk1gQ.js";import"./ToolbarRootContext-B_UViE6P.js";import"./getDisabledMountTransitionStyles-CN_eJQFG.js";import"./getPseudoElementBounds-q-JNZLO4.js";import"./chevron-down--mwsi3L9.js";import"./index-6UAs54zO.js";import"./error-PJbSWXrD.js";import"./BaseCbacBanner-CJIqzZ3F.js";import"./makeExternalStore-Cn4EfxAL.js";import"./Tooltip-CR3iIqg2.js";import"./PopoverPopup-Cmh7-q5k.js";import"./toNumber-SXtvtwgI.js";import"./useOsdkClient-u-hSR58p.js";import"./tick-Cpg-N9k1.js";import"./DropdownField-oTCVHpkW.js";import"./withOsdkMetrics-Clj4ukky.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
