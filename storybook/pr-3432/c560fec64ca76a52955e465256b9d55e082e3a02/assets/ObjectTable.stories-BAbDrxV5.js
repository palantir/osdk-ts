import{j as i}from"./iframe-BeLDoJDJ.js";import{O as p}from"./object-table-YkR3Rqo_.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Bqple41f.js";import"./preload-helper-BZlWemWx.js";import"./Table-BnJgnqxW.js";import"./index-CNOIOIrb.js";import"./Dialog-B1fIEJSW.js";import"./cross-DCG5TLV4.js";import"./svgIconContainer-BBtkfVDC.js";import"./useBaseUiId-LQ15WLyH.js";import"./InternalBackdrop-D5OQJWch.js";import"./composite-S97I0_tU.js";import"./index-Bt3oe8vo.js";import"./index-CfZxJNPe.js";import"./index-Ba61XdA0.js";import"./useEventCallback-D7hN4HKY.js";import"./SkeletonBar-VQWTr6u2.js";import"./LoadingCell-DGT9m269.js";import"./ColumnConfigDialog-jjVi1DBr.js";import"./DraggableList-CoTYdFdv.js";import"./search-BmHzBiZs.js";import"./Input-BJCADyvA.js";import"./useControlled-CwF9sQpL.js";import"./isEqual-DmFmNOmM.js";import"./isObject-7L6_sqP4.js";import"./Button-EnitxwgO.js";import"./ActionButton-C-98rI7n.js";import"./Checkbox-o7bol--P.js";import"./useValueChanged-DLEao6WC.js";import"./CollapsiblePanel-Dga8dkvV.js";import"./MultiColumnSortDialog-DOVUPWDG.js";import"./MenuTrigger-DCuqeVgG.js";import"./CompositeItem-CA7jBmHf.js";import"./ToolbarRootContext-CGUoqwzM.js";import"./getDisabledMountTransitionStyles-hl96xJYO.js";import"./getPseudoElementBounds-BqkXtj4-.js";import"./chevron-down-nLhl25OO.js";import"./index-Cqa5ciEF.js";import"./error-67kJMO00.js";import"./BaseCbacBanner-Bsfn304B.js";import"./makeExternalStore-DDJLENiS.js";import"./Tooltip-DDC50giw.js";import"./PopoverPopup-Rg2nIlJ0.js";import"./toNumber-CKRaMeAN.js";import"./useOsdkClient-C1wOhXH9.js";import"./tick-CZx6MvJR.js";import"./DropdownField-BzqwYiq4.js";import"./withOsdkMetrics-DtwNEj0a.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
