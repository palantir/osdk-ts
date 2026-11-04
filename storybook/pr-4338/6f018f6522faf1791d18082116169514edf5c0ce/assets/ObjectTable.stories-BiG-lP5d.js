import{j as i}from"./iframe-DiEwqi1M.js";import{O as p}from"./object-table-B_D_jyR9.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-gjtp64rV.js";import"./preload-helper-ClSjrKqp.js";import"./Table-Dt7fi-sz.js";import"./index-C5HZMqqF.js";import"./Dialog-Om0xpTNO.js";import"./cross-CTKZHD3L.js";import"./svgIconContainer-DEpavXsM.js";import"./useBaseUiId-BzjC-o1k.js";import"./InternalBackdrop-DxnLPPQZ.js";import"./composite-DPWnr1eN.js";import"./index-Cz06B6jq.js";import"./index-lRW4o_Vc.js";import"./index-CSzmMYde.js";import"./useEventCallback-B63epV8V.js";import"./SkeletonBar-7gs1ucKw.js";import"./LoadingCell-B9gNVpt4.js";import"./ColumnConfigDialog-K-WD4deq.js";import"./DraggableList-BxLmL8UF.js";import"./search-rt5xI3z4.js";import"./Input-DNKlbqfx.js";import"./useControlled-BF2DtUKW.js";import"./Button-C4dfwxaK.js";import"./small-cross-BDLukEIX.js";import"./ActionButton-CcZqKb4G.js";import"./Checkbox-DBiOsgWD.js";import"./useValueChanged-CNrcq4Bg.js";import"./CollapsiblePanel-6U2IaLzh.js";import"./MultiColumnSortDialog-95Z_ah8k.js";import"./MenuTrigger-DLZZizgQ.js";import"./CompositeItem-DTryuWNv.js";import"./ToolbarRootContext-D-rTQkYB.js";import"./getDisabledMountTransitionStyles-BCI44SNh.js";import"./getPseudoElementBounds-Jk7AP9A0.js";import"./chevron-down-D04sNIFr.js";import"./index-3NYfUjbF.js";import"./error-CTX_J0NI.js";import"./BaseCbacBanner-7ReEBEn7.js";import"./makeExternalStore-QP4ecZbg.js";import"./Tooltip-UrBb9NBS.js";import"./PopoverPopup-ByyKD9PW.js";import"./debounce-7cRIuX0l.js";import"./useOsdkClient-BaTJ5QdO.js";import"./tick-DyH69Fpo.js";import"./DropdownField-AFS21FgE.js";import"./isEqual-2EaPlMu5.js";import"./withOsdkMetrics-CwH_Tict.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
