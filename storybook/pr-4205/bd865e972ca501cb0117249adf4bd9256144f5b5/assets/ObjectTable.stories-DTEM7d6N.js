import{j as i}from"./iframe-CLFvQKtr.js";import{O as p}from"./object-table-rX1adUsD.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CNFqmiEo.js";import"./preload-helper-Dsl2rT4D.js";import"./Table-DmTtQgKr.js";import"./index-Bc4ZDDw5.js";import"./Dialog-DvHGs5g5.js";import"./cross-B8sVMx5E.js";import"./svgIconContainer-DDtGdFbP.js";import"./useBaseUiId-DGth5ZlH.js";import"./InternalBackdrop-ZpNJl5wc.js";import"./composite-BY1hAZzj.js";import"./index-BN1TScIw.js";import"./index-BVTx-0qU.js";import"./index-CKBwhOxc.js";import"./useEventCallback-PjLqcvTO.js";import"./SkeletonBar-BAMhpUp3.js";import"./LoadingCell-D5_TbiFy.js";import"./ColumnConfigDialog-DjkZMadG.js";import"./DraggableList-DM-itaQQ.js";import"./search-BBKcx3DL.js";import"./Input-B0zGDDc7.js";import"./useControlled-BsSE4zKc.js";import"./Button-BuhAuEGs.js";import"./small-cross-CaRVi9zJ.js";import"./ActionButton-20ezogam.js";import"./Checkbox-Cquu8Lsm.js";import"./useValueChanged-DKz6T4Hg.js";import"./CollapsiblePanel-CtUCKNQH.js";import"./MultiColumnSortDialog-DPYtA1tx.js";import"./MenuTrigger-DeKJcZnh.js";import"./CompositeItem-BgZVgO8p.js";import"./ToolbarRootContext-DNG77-u2.js";import"./getDisabledMountTransitionStyles-Dr_u9oB2.js";import"./getPseudoElementBounds-CTru0iiL.js";import"./chevron-down-GxDR_faA.js";import"./index-7BdV6mXZ.js";import"./error-EDq0RnuF.js";import"./BaseCbacBanner-DUUr1fXa.js";import"./makeExternalStore-B1fZCef5.js";import"./Tooltip-CDEzkuYI.js";import"./PopoverPopup-BFPb8tfO.js";import"./debounce-Bd3sQolQ.js";import"./useOsdkClient-DmQ_JOA9.js";import"./tick-BRgdE-Dn.js";import"./DropdownField-BAmcAyNN.js";import"./isEqual-QX2FW99V.js";import"./withOsdkMetrics-DUg-sn-W.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
