import{j as i}from"./iframe-D3x4g0gw.js";import{O as p}from"./object-table-BJWR7mZ5.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CIpzs5u0.js";import"./preload-helper-DpKiFXQE.js";import"./Table-gtzT0OA8.js";import"./index-DmJVhxkC.js";import"./Dialog-BL0eiG9o.js";import"./cross-noZD8yCQ.js";import"./svgIconContainer-Ch07AZiN.js";import"./useBaseUiId-Cza7NB65.js";import"./InternalBackdrop-DRfabTHE.js";import"./composite-CbVzOtkL.js";import"./index-BFwtMTR7.js";import"./index-CHX_y3YQ.js";import"./index-BM_v9pt3.js";import"./useEventCallback-DKxR4GSB.js";import"./SkeletonBar-BBCGvtlx.js";import"./LoadingCell-BkcsG2ev.js";import"./ColumnConfigDialog-CIdTSppo.js";import"./DraggableList-B2z6Jhre.js";import"./search-Vpq8vYa6.js";import"./Input-D7XVlSnc.js";import"./useControlled-u8Kd9MbQ.js";import"./Button-waIQuOK_.js";import"./small-cross-DojPJSHV.js";import"./ActionButton-D4pNdjo7.js";import"./Checkbox-SAzgd6A3.js";import"./useValueChanged-Cm3ghXGz.js";import"./CollapsiblePanel-MtWIBxII.js";import"./MultiColumnSortDialog-CX94El7z.js";import"./MenuTrigger-D4FrUD7q.js";import"./CompositeItem-C81j0gfv.js";import"./ToolbarRootContext-D-JTlGY6.js";import"./getDisabledMountTransitionStyles-BDg7WwLA.js";import"./getPseudoElementBounds-m4kZMHaS.js";import"./chevron-down-F1u7ETIP.js";import"./index-CdtIJVqT.js";import"./error-EOjqK743.js";import"./BaseCbacBanner-CAxpfmC5.js";import"./makeExternalStore-B-EBN1-5.js";import"./Tooltip-Cny1QPUK.js";import"./PopoverPopup-BJayu4w5.js";import"./debounce-Dgw7wFze.js";import"./useOsdkClient-CcBCF4jU.js";import"./tick-E3YA_PC9.js";import"./DropdownField-BTbdugIo.js";import"./isEqual-DdD0roBe.js";import"./withOsdkMetrics-q2ysVhnq.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
