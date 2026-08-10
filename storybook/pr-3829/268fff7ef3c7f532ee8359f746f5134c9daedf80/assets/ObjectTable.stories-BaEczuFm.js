import{j as i}from"./iframe-DRvkx6EA.js";import{O as p}from"./object-table-DBzD_XBm.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DOQCljtZ.js";import"./preload-helper-BhyZ3nJx.js";import"./Table-BJVVduwt.js";import"./index-L1UV-AGh.js";import"./Dialog-D5KZ70gI.js";import"./cross-3oIIwt46.js";import"./svgIconContainer-CJyvIw8C.js";import"./useBaseUiId-BUt3PNYZ.js";import"./InternalBackdrop-BGysF7SW.js";import"./composite-C22uJ7fn.js";import"./index-B_NabjnV.js";import"./index-B-a3URan.js";import"./index-DDpThYmQ.js";import"./useEventCallback-BL9HNNgV.js";import"./SkeletonBar-10kcximA.js";import"./LoadingCell-BiNuQWiA.js";import"./ColumnConfigDialog-cT-S5m8y.js";import"./DraggableList-DT1V9Nl5.js";import"./search-N-0jef5s.js";import"./Input-BYnQBqlk.js";import"./useControlled-CGkNej65.js";import"./isEqual-D_kar9of.js";import"./isObject-CXFfOXwZ.js";import"./Button-CQpi19yq.js";import"./ActionButton-D8KHjoz1.js";import"./Checkbox-C9Aygl69.js";import"./useValueChanged-CiS0FQ1d.js";import"./CollapsiblePanel-Cigm9Q9z.js";import"./MultiColumnSortDialog-BhQMtyJX.js";import"./MenuTrigger-CeJr3_rM.js";import"./CompositeItem-dZ8Gs4gk.js";import"./ToolbarRootContext-BNhBTPnD.js";import"./getDisabledMountTransitionStyles-BzS1BqnD.js";import"./getPseudoElementBounds-B-RFj-UH.js";import"./chevron-down-CVLOcSCE.js";import"./index-CJP3bEHO.js";import"./error-DPz_nmti.js";import"./BaseCbacBanner-B4fMA4Z9.js";import"./makeExternalStore-CHxLaRQK.js";import"./Tooltip-avIVaAD_.js";import"./PopoverPopup-DIktmPWA.js";import"./toNumber-CKb77F0n.js";import"./useOsdkClient-D1Ep5ZCP.js";import"./tick-_tjAc4OO.js";import"./DropdownField-D5R8WxXW.js";import"./withOsdkMetrics-GVKSYvIi.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
