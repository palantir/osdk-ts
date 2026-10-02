import{j as i}from"./iframe-Bhu5go17.js";import{O as p}from"./object-table-B6ipDZZ-.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-VGCsgU3z.js";import"./preload-helper-BSWPIZ9o.js";import"./Table-CnU7SaDg.js";import"./index-BczdwF9K.js";import"./Dialog-xxjOdycT.js";import"./cross-CkWL52XL.js";import"./svgIconContainer-Bcnn9wIP.js";import"./useBaseUiId-DjMEAOTb.js";import"./InternalBackdrop-CxE63-bR.js";import"./composite-uZlHnppD.js";import"./index-CuqdVt9a.js";import"./index-BWunv9eA.js";import"./index-C1X1ILrQ.js";import"./useEventCallback-B5a6fAJF.js";import"./SkeletonBar-DfPaevzv.js";import"./LoadingCell-C4LprGg5.js";import"./ColumnConfigDialog-BQxOQBdC.js";import"./DraggableList-W9skLj02.js";import"./search-x6Mg2DJR.js";import"./Input-BJnqdqBy.js";import"./useControlled-BGnzZuWo.js";import"./Button-DVcXfrSy.js";import"./small-cross-tIwGRVh9.js";import"./ActionButton-B4l5Ynsa.js";import"./Checkbox-BGu_Qera.js";import"./useValueChanged-DCvj2vHv.js";import"./CollapsiblePanel-CAZpLduE.js";import"./MultiColumnSortDialog-B7CnK4FE.js";import"./MenuTrigger-DkYHudyz.js";import"./CompositeItem-Jhmf5Smc.js";import"./ToolbarRootContext-B9BOuPbm.js";import"./getDisabledMountTransitionStyles-CwjdI3sa.js";import"./getPseudoElementBounds-MRfF10fy.js";import"./chevron-down-CB9qX917.js";import"./index-CT7iTPId.js";import"./error-DUAUa5ZT.js";import"./BaseCbacBanner-Ck0I-xcK.js";import"./makeExternalStore-BTwq4qvu.js";import"./Tooltip-DljM22fJ.js";import"./PopoverPopup-N9jR4N_b.js";import"./debounce-5wYFOWPv.js";import"./useOsdkClient-CqOWvh60.js";import"./tick-ByjNKKea.js";import"./DropdownField-S5eVipBF.js";import"./isEqual-CQVZ_loO.js";import"./withOsdkMetrics-pTv3z3ht.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
