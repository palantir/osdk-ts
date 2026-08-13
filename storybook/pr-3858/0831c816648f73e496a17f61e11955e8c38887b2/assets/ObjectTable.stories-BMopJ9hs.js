import{j as i}from"./iframe-KsjdEO7I.js";import{O as p}from"./object-table-CGHR2NCM.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DIZD7dWC.js";import"./preload-helper-C0pJc9t5.js";import"./Table-DQtM9mY-.js";import"./index-BZRO3JpH.js";import"./Dialog-D41qlHqs.js";import"./cross-CWhIw0VB.js";import"./svgIconContainer-BGAWhN04.js";import"./useBaseUiId-C5JviLwb.js";import"./InternalBackdrop-CVGwHL6o.js";import"./composite-ByWaRsZl.js";import"./index-DvmmtGln.js";import"./index-C8vmqYWN.js";import"./index-Ba1VmSUV.js";import"./useEventCallback-Qxkrrdjq.js";import"./SkeletonBar-yHuYGeJF.js";import"./LoadingCell-9tKhkWXf.js";import"./ColumnConfigDialog-BexFVn6M.js";import"./DraggableList-BlcM5wlm.js";import"./search-DGehlEKr.js";import"./Input-C9qK0nTt.js";import"./useControlled-gVlU2BHL.js";import"./Button-ilD2Ywfa.js";import"./small-cross-BfS99eaU.js";import"./ActionButton-DeueSjTK.js";import"./Checkbox-C_aOxFYa.js";import"./useValueChanged-DsE0A3ks.js";import"./CollapsiblePanel-d3N9ZnYl.js";import"./MultiColumnSortDialog-BQ4SwnnC.js";import"./MenuTrigger-Bh1wIPnk.js";import"./CompositeItem-CmqFJQHv.js";import"./ToolbarRootContext-Dc9sSpUa.js";import"./getDisabledMountTransitionStyles-DYmcQNg5.js";import"./getPseudoElementBounds-CF4Nu5Z4.js";import"./chevron-down-CUpqK55l.js";import"./index-BhHreNeB.js";import"./error-s9sAxwq2.js";import"./BaseCbacBanner-DpbKijSV.js";import"./makeExternalStore-C8Usq2x_.js";import"./Tooltip-D437-ORi.js";import"./PopoverPopup-COwg5rea.js";import"./toNumber-sTi_usYo.js";import"./useOsdkClient-DI6J8JGK.js";import"./tick-BvcefncJ.js";import"./DropdownField-U-n8RG-x.js";import"./withOsdkMetrics-BAP0ApJK.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,le={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ue=["Default"];export{n as Default,ue as __namedExportsOrder,le as default};
