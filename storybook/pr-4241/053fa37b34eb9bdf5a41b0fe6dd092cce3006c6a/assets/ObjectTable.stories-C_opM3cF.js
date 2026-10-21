import{j as i}from"./iframe-AXAl_lkK.js";import{O as p}from"./object-table-DaeXsc4W.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C48tE7BB.js";import"./preload-helper-CmOyIjss.js";import"./Table-D6yteXfE.js";import"./index-WwDO5TYI.js";import"./Dialog-hRq7aSV9.js";import"./cross-CQtMlVpl.js";import"./svgIconContainer-C41-1JgD.js";import"./useBaseUiId-Z03BErLK.js";import"./InternalBackdrop-hFYkRxh1.js";import"./composite-DhTcvoOi.js";import"./index-waMJrP0w.js";import"./index-BfO3FL2b.js";import"./index--PmXZ_gO.js";import"./useEventCallback-Djw-n0Ln.js";import"./SkeletonBar-B1COelSe.js";import"./LoadingCell-BQTu8WdY.js";import"./ColumnConfigDialog-DJKuo9pD.js";import"./DraggableList-DmbkwluN.js";import"./search-DSOJHa0m.js";import"./Input-rah5Oh7j.js";import"./useControlled-CwZsDCym.js";import"./Button-PnLOiyuX.js";import"./small-cross-Dbzif9Zo.js";import"./ActionButton-BVOTHsC2.js";import"./Checkbox-W6po3mzH.js";import"./useValueChanged-DttVAdvH.js";import"./CollapsiblePanel-DVYu9T5b.js";import"./MultiColumnSortDialog-BTDBrS5R.js";import"./MenuTrigger-BNvawPed.js";import"./CompositeItem-3bSE7nfu.js";import"./ToolbarRootContext-Bjje7bvz.js";import"./getDisabledMountTransitionStyles-Cg9BxDUe.js";import"./getPseudoElementBounds-CBJSNv6r.js";import"./chevron-down-Bzpri4FT.js";import"./index-DyLMV4YC.js";import"./error-DelAmSaO.js";import"./BaseCbacBanner-BX9rKr8l.js";import"./makeExternalStore-xudMkMrV.js";import"./Tooltip-OQ9Lr3E8.js";import"./PopoverPopup-P-aEfD8I.js";import"./debounce-DoYq5Fyf.js";import"./useOsdkClient-UMx75Wu3.js";import"./tick-BKo5ivYX.js";import"./DropdownField-zE-ANVSd.js";import"./isEqual-BvwLvsdD.js";import"./withOsdkMetrics-CZL_7UfS.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
