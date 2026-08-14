import{j as i}from"./iframe-DqI30U40.js";import{O as p}from"./object-table-B1_8GYdb.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B29FNB_t.js";import"./preload-helper-lMu0note.js";import"./Table-BDbaMdbF.js";import"./index-C4ZwlQTR.js";import"./Dialog-D4nBLPeY.js";import"./cross-kpf8tVcy.js";import"./svgIconContainer-C-3DfKaO.js";import"./useBaseUiId-C0PciSz-.js";import"./InternalBackdrop-D93Bx3v4.js";import"./composite-C615e4nX.js";import"./index-tM4--8t5.js";import"./index-CEfGdJuZ.js";import"./index-CGBGp2pr.js";import"./useEventCallback-C1xsdjHG.js";import"./SkeletonBar-DoxEvTvN.js";import"./LoadingCell-SVVQXaab.js";import"./ColumnConfigDialog-BdWgKRTk.js";import"./DraggableList-yUQgxfAN.js";import"./search-DDH0C-qs.js";import"./Input-DI7Qw37x.js";import"./useControlled-BwDcV046.js";import"./Button-Dn7tfqeo.js";import"./small-cross-Cp6l1H5C.js";import"./ActionButton-C5eAcEvp.js";import"./Checkbox-Ce3zhzUG.js";import"./useValueChanged-JZGlsFUC.js";import"./CollapsiblePanel-C6cWpr6n.js";import"./MultiColumnSortDialog-BNoo4NZX.js";import"./MenuTrigger-Bbyybeuq.js";import"./CompositeItem-BGXf_W0J.js";import"./ToolbarRootContext-1u8sCZzb.js";import"./getDisabledMountTransitionStyles-eoteFY6q.js";import"./getPseudoElementBounds-CWQ_40e-.js";import"./chevron-down-BZP6l7fc.js";import"./index-KjlsTGzF.js";import"./error-C07e4O30.js";import"./BaseCbacBanner-DA_zZ8Ib.js";import"./makeExternalStore-BVsnNdhZ.js";import"./Tooltip-CQrR_JUz.js";import"./PopoverPopup-3qjFyVCX.js";import"./debounce-B7eS6c4J.js";import"./useOsdkClient-DzUx0jrK.js";import"./tick-D1qxloEX.js";import"./DropdownField-DEIBuHuo.js";import"./isEqual-Wum-O1de.js";import"./withOsdkMetrics-vCc5CCLF.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
